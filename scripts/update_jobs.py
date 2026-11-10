"""Daily updater: adds new 고령자-preferred listings from 고용24's public job search to assets/data.js.

Runs on GitHub Actions (no API key needed). Reads the same search page people use on work24.go.kr,
filtered to 우대조건 = 고령자, opens each new posting to check it is live, and adds it.
Usage:  python scripts/update_jobs.py [--dry-run] [--days N]
"""
import datetime, html, json, os, re, sys, time, urllib.parse, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "assets", "data.js")
PREFIX = "window.SP_DATA="
SEARCH = "https://www.work24.go.kr/wk/a/b/1200/retriveDtlEmpSrchList.do"
URL = "https://www.work24.go.kr/wk/a/b/1500/empDetailAuthView.do?wantedAuthNo={}&infoTypeCd={}&infoTypeGroup=tb_workinfoworknet"
DRY = "--dry-run" in sys.argv
DAYS = int(sys.argv[sys.argv.index("--days") + 1]) if "--days" in sys.argv else 7
UA = {"User-Agent": "Mozilla/5.0 (compatible; SilverPath job updater; +https://silverpath.kr)"}


def get(url, data=None):
    for attempt in range(3):
        try:
            body = urllib.parse.urlencode(data).encode() if data else None
            with urllib.request.urlopen(urllib.request.Request(url, data=body, headers=UA), timeout=40) as r:
                return r.read().decode("utf-8", "replace")
        except Exception as e:
            print(f"  request failed ({e}), retry {attempt + 1}/3")
            time.sleep(5)
    return ""


def lines_of(h):
    h = re.sub(r"<script.*?</script>|<style.*?</style>|<!--.*?-->", "", h, flags=re.S)
    t = html.unescape(re.sub(r"<[^>]+>", "\n", h))
    return [re.sub(r"\s+", " ", x).strip() for x in t.split("\n") if x.strip()]


def after(L, label, start=0, n=1):
    for i in range(start, len(L)):
        if L[i] == label:
            v = L[i + 1:i + 1 + n]
            return " ".join(v).strip() if v else ""
    return ""


def idx(L, label, start=0):
    for i in range(start, len(L)):
        if L[i] == label:
            return i
    return -1


def hhmm(s):
    """'(근무시간) (오전) 9시 00분 ~ (오후) 6시 00분' -> '09:00~18:00' (keeps text it can't convert)"""
    def conv(m):
        ap, h, mi = m[1], int(m[2]), int(m[3] or 0)
        if ap == "오후" and h < 12: h += 12
        if ap == "오전" and h == 12: h = 0
        return f"{h:02d}:{mi:02d}"
    s = s.replace("(근무시간)", "").replace("(정오)", "(오후)").replace("(자정)", "(오전)").strip().lstrip("-· ").strip()
    s = re.sub(r"\((오전|오후)\)\s*(\d{1,2})시\s*(?:(\d{1,2})분)?", conv, s)
    s = re.sub(r"\s*~\s*", "~", s)
    return re.sub(r"\s+", " ", s).strip()


def deadline(s):
    m = re.search(r"(\d{4})[.-](\d{1,2})[.-](\d{1,2})", s or "")
    if not m:
        return ""
    import datetime
    d = datetime.date(int(m[1]), int(m[2]), int(m[3]))
    return d.strftime("%b ") + str(d.day) + d.strftime(", %Y") + " 11:59 pm"


RULES = [
    (r"간호|물리치료|작업치료|임상|방사선|약사|의사|치위생|영양사", "의료"),
    (r"요양보호|미화|청소|경비|보안|주차|조리|주방|급식|식당|판매|캐셔|세탁|룸메이드|하우스키핑|홀서빙|서빙", "서비스"),
    (r"운전|배송|배달|택배|운송|지게차|셔틀|택시|버스|화물|기사\b|운반", "운전·운송·배송"),
    (r"경리|회계|세무|재무", "회계·세무·재무"),
    (r"사무|행정|총무|안내|접수", "경영·사무·금융·보험"),
    (r"전기|기계|설비|시설관리|시설 관리|정비|보일러|기전|영선|공무|냉난방|소방|승강기", "설치·정비·전기·전자"),
    (r"강사|교사|보육|교육|방과후", "교육·보육"),
    (r"건설|건축|토목|목수|철근|도장|타일|인테리어", "건설·건축"),
    (r"생산|제조|포장|조립|가공|용접|공장|검사|선별|재단|봉제|사출|도금", "생산"),
    (r"사회복지|복지사|생활지도|활동지원", "공공·복지"),
    (r"상담원|콜센터|고객상담", "고객상담"),
    (r"영업", "영업"),
]


def category(text):
    for pat, cat in RULES:
        if re.search(pat, text):
            return cat
    return "서비스"


def parse(no, typ, h, list_close=""):
    if "마감된 채용정보입니다" in h or "모집요강" not in h:
        return None
    L = lines_of(h)
    i = idx(L, "조회수")
    title = L[i - 1] if i > 0 else ""
    company = after(L, "기업명") or (L[i - 2] if i > 1 else "")
    s = idx(L, "지원자격")
    career = after(L, "경력", s) or "무관"
    edu = after(L, "학력", s) or "무관"
    sal = after(L, "임금 조건").replace("  ", " ")
    sal = re.sub(r"\s*이하$", "", sal)
    addr = after(L, "근무 예정지") or after(L, "지역")
    j = idx(L, "직무내용")
    desc = []
    if j >= 0:
        for x in L[j + 1:]:
            if x in ("더보기", "접기") or x.endswith("제공하는 표"):
                break
            desc.append(x)
    desc = "\n".join(desc)[:700]
    k = idx(L, "우대사항", idx(L, "모집요강"))
    pref = after(L, "우대조건", k if k >= 0 else 0)
    occ = after(L, "모집 직종")
    days = after(L, "근무 형태")
    detail_hours = hhmm(after(L, "상세 근무시간"))
    days = days.replace("주 ", "주").replace("일 근무", "일")
    hours = detail_hours if days and detail_hours.startswith(days) else ", ".join(x for x in [days, detail_hours] if x and x != "-")
    emp = after(L, "고용 형태")
    c0 = idx(L, "채용 담당자 정보 열람 시 주의사항")
    c1 = idx(L, "채용 담당자에게 질문하기", c0 if c0 >= 0 else 0)
    contact = []
    if c0 >= 0 and c1 > c0:
        seg = L[c0:c1]
        for lab in ("담당자", "전화번호", "팩스"):
            v = after(seg, lab)
            if v and v not in ("로그인", "-") and re.search(r"\d|[가-힣]{2}", v):
                contact.append(f"{lab} {v}" if lab != "담당자" else v)
    close_txt = after(L, "접수 마감일")
    dl = deadline(close_txt) or deadline(list_close)
    benefits = ", ".join(x for x in [after(L, "사회보험"), after(L, "퇴직급여")] if x and x != "-")
    return {"no": no, "cat": category(occ + " " + title), "title": title, "co": company, "addr": addr, "sal": sal,
            "dl": dl, "exp": "무관" if career in ("관계없음", "경력무관") else career,
            "edu": "무관" if edu in ("학력무관", "무관") else edu, "pref": pref, "hours": hours,
            "type": ("" if "정함이 없는" in emp and "시간" not in emp else ("계약직" if "정함이 있는" in emp else "정규직") + ("(시간제)" if "시간" in emp else "") if emp else ""), "desc": desc, "ben": benefits,
            "contact": " / ".join(contact), "url": URL.format(no, typ), "occ": occ}



def search_pages():
    """newest-first listings registered in the last DAYS days"""
    cutoff = (datetime.date.today() - datetime.timedelta(days=DAYS)).isoformat()
    out, page = [], 1
    while page <= 40:
        h = get(SEARCH, {"pfMatterPreferential": "B", "resultCnt": 50, "empTpGbcd": 1, "sortField": "DATE",
                         "sortOrderBy": "DESC", "currentPageNo": page})
        rows = re.findall(r'<tr id="list\d+">(.*?)</tr>', h, re.S)
        if not rows:
            if page == 1:
                sys.exit("Stopping: 고용24 search page returned no listings (the page layout may have changed).")
            break
        old = False
        for r in rows:
            m = re.search(r"wantedAuthNo=([A-Za-z0-9]+)&infoTypeCd=(\w+)", r)
            reg = re.search(r"등록일 : ([\d-]+)", r)
            close = re.search(r"마감일 : ([^<\n]+)", r)
            if not m:
                continue
            if reg and reg[1] < cutoff:
                old = True
                continue
            out.append({"no": m[1], "type": m[2], "reg": reg[1] if reg else "", "close": close[1].strip() if close else ""})
        print(f"  page {page}: {len(out)} recent listings so far")
        if old:
            break
        page += 1
        time.sleep(1)
    return out


def main():
    raw = open(DATA, encoding="utf-8").read().strip()
    data = json.loads(raw[len(PREFIX):].rstrip(";"))
    jobs = data["jobs"]
    seen = {m[1] for r in jobs for m in [re.search(r"wantedAuthNo=([A-Za-z0-9]+)", r[15] or "")] if m}
    next_order = max(r[0] for r in jobs) + 1
    found = [x for x in search_pages() if x["no"] not in seen]
    found.reverse()  # oldest first, so the newest listing gets the highest number
    added = []
    for x in found:
        if x["no"] in seen:
            continue
        seen.add(x["no"])
        p = parse(x["no"], x["type"], get(URL.format(x["no"], x["type"])), x["close"])
        time.sleep(1)
        if not p or not p["title"] or "고령자" not in (p["pref"] or ""):
            continue  # closed, unreadable, or not actually 고령자-preferred
        rec = [next_order, p["cat"], p["title"], p["co"], p["addr"], p["sal"], p["dl"], p["exp"], p["edu"], p["pref"],
               p["hours"], p["type"], p["desc"], p["ben"], p["contact"], p["url"]]
        jobs.append(rec); added.append(rec); next_order += 1
    print(f"{len(added)} new listings" + (" (dry run, nothing written)" if DRY else ""))
    for r in added[-10:]:
        print(f"  #{r[0]} [{r[1]}] {r[2]} — {r[3]} — {r[6] or '채용 시 마감'}")
    if added and not DRY:
        jobs.sort(key=lambda r: -r[0])
        s = json.dumps(data, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/")
        open(DATA, "w", encoding="utf-8").write(PREFIX + s + ";")


if __name__ == "__main__":
    main()
