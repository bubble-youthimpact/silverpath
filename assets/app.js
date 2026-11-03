/* =========================================================
   IMAGES — replace these with your own files/URLs later.
   Leave "" to show the placeholder.
   ========================================================= */
const IMAGES = {
  heroIllustration: (window.SP_BASE||'')+"/images/hero.avif",     // 홈 히어로 일러스트 (세 명의 시니어)
  storyIllustration: (window.SP_BASE||'')+"/images/our-story.avif",    // 삶의 지혜 '우리의 이야기' 일러스트
  ceoPhoto: (window.SP_BASE||'')+"/images/ceo-woojin.avif",             // 소개 페이지 대표 사진
  partners: [               // 함께하는 파트너 로고
    {name:"용인시 기흥·보정 노인복지관", img:(window.SP_BASE||'')+"/images/partner-yongin.avif"},
    {name:"예미원피부과", img:(window.SP_BASE||'')+"/images/partner-yemiwon.avif"},
    {name:"MOLAX", img:(window.SP_BASE||'')+"/images/partner-molax.avif", h:46},
    {name:"한가족복지센터", img:(window.SP_BASE||'')+"/images/partner-hangajok.avif"},
    {name:"영천교회", img:(window.SP_BASE||'')+"/images/partner-yeongcheon.avif", h:28}
  ],
  library: {                // 영화 명대사 썸네일 (카테고리 이름 = 키)
    "The Intern 명대사":(window.SP_BASE||'')+"/images/movies/the-intern.webp", "Gran Torino 명대사":(window.SP_BASE||'')+"/images/movies/gran-torino.webp", "Up 명대사":(window.SP_BASE||'')+"/images/movies/up.webp",
    "Secondhand Lions 명대사":(window.SP_BASE||'')+"/images/movies/secondhand-lions.webp", "Driving Miss Daisy 명대사":(window.SP_BASE||'')+"/images/movies/driving-miss-daisy.webp"
  }
};

const DATA = window.SP_DATA || JSON.parse(document.getElementById('data').textContent);

/* ---------- icons (lucide-style) ---------- */
const P = {"briefcase": "<rect x=\"32\" y=\"128\" width=\"448\" height=\"320\" rx=\"48\" ry=\"48\" fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path d=\"M144 128V96a32 32 0 0132-32h160a32 32 0 0132 32v32M480 240H32M320 240v24a8 8 0 01-8 8H200a8 8 0 01-8-8v-24\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/>", "menu": "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"32\" d=\"M80 160h352M80 256h352M80 352h352\"/>", "close": "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M368 368L144 144M368 144L144 368\"/>", "chev": "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"48\" d=\"M184 112l144 144-144 144\"/>", "arrowL": "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"48\" d=\"M244 400L100 256l144-144M120 256h292\"/>", "search": "<path d=\"M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z\" fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"32\" d=\"M338.29 338.29L448 448\"/>", "pin": "<path d=\"M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><circle cx=\"256\" cy=\"192\" r=\"48\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/>", "dollar": "<path d=\"M240 480v-36.42C160.53 439 112.25 398.06 112 336h72c1.77 26.34 23.86 46.45 56 50v-98l-26.77-7c-61-14.18-93.64-49.39-93.64-102.08C119.59 116.81 164.08 76.08 240 70V32h32v38c77.39 6.3 119 47.74 120 106h-72c-.76-24.06-15.83-43.39-48-46v92l30.82 7.28C367.61 243.46 400 277 400 332c0 64.34-43.74 105.88-128 111.32V480zm0-264v-86c-27.59 1.52-47.27 18.47-47.27 42.53 0 22.3 16.39 36.88 47.27 43.47zm32 78v92c38.15-1.54 56.38-18.92 56.38-45.77 0-24.58-18.23-41.13-56.38-46.23z\"/>", "cal": "<rect fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"32\" x=\"48\" y=\"80\" width=\"416\" height=\"384\" rx=\"48\"/><circle cx=\"296\" cy=\"232\" r=\"24\"/><circle cx=\"376\" cy=\"232\" r=\"24\"/><circle cx=\"296\" cy=\"312\" r=\"24\"/><circle cx=\"376\" cy=\"312\" r=\"24\"/><circle cx=\"136\" cy=\"312\" r=\"24\"/><circle cx=\"216\" cy=\"312\" r=\"24\"/><circle cx=\"136\" cy=\"392\" r=\"24\"/><circle cx=\"216\" cy=\"392\" r=\"24\"/><circle cx=\"296\" cy=\"392\" r=\"24\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"32\" stroke-linecap=\"round\" d=\"M128 48v32M384 48v32\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M464 160H48\"/>", "share": "<circle cx=\"128\" cy=\"256\" r=\"48\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><circle cx=\"384\" cy=\"112\" r=\"48\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><circle cx=\"384\" cy=\"400\" r=\"48\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94\"/>", "wrench": "<path d=\"M436.67 184.11a27.17 27.17 0 01-38.3 0l-22.48-22.49a27.15 27.15 0 010-38.29l50.89-50.89a.85.85 0 00-.26-1.38C393.68 57 351.09 64.15 324.05 91c-25.88 25.69-27.35 64.27-17.87 98a27 27 0 01-7.67 27.14l-173 160.76a40.76 40.76 0 1057.57 57.54l162.15-173.3a27 27 0 0126.77-7.7c33.46 8.94 71.49 7.26 97.07-17.94 27.49-27.08 33.42-74.94 20.1-102.33a.85.85 0 00-1.36-.22z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"32\"/><path d=\"M224 284c-17.48-17-25.49-24.91-31-30.29a18.24 18.24 0 01-3.33-21.35 20.76 20.76 0 013.5-4.62l15.68-15.29a18.66 18.66 0 015.63-3.87 18.11 18.11 0 0120 3.62c5.45 5.29 15.43 15 33.41 32.52M317.07 291.3c40.95 38.1 90.62 83.27 110 99.41a13.46 13.46 0 01.94 19.92L394.63 444a14 14 0 01-20.29-.76c-16.53-19.18-61.09-67.11-99.27-107\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path d=\"M17.34 193.5l29.41-28.74a4.71 4.71 0 013.41-1.35 4.85 4.85 0 013.41 1.35h0a9.86 9.86 0 008.19 2.77c3.83-.42 7.92-1.6 10.57-4.12 6-5.8-.94-17.23 4.34-24.54a207 207 0 0119.78-22.6c6-5.88 29.84-28.32 69.9-44.45A107.31 107.31 0 01206.67 64c22.59 0 40 10 46.26 15.67a89.54 89.54 0 0110.28 11.64 78.92 78.92 0 00-9.21-2.77 68.82 68.82 0 00-20-1.26c-13.33 1.09-29.41 7.26-38 14-13.9 11-19.87 25.72-20.81 44.71-.68 14.12 2.72 22.1 36.1 55.49a6.6 6.6 0 01-.34 9.16l-18.22 18a6.88 6.88 0 01-9.54.09c-21.94-21.94-36.65-33.09-45-38.16s-15.07-6.5-18.3-6.85a30.85 30.85 0 00-18.27 3.87 11.39 11.39 0 00-2.64 2 14.14 14.14 0 00.42 20.08l1.71 1.6a4.63 4.63 0 010 6.64L71.73 246.6a4.71 4.71 0 01-3.41 1.4 4.86 4.86 0 01-3.41-1.35l-47.57-46.43a4.88 4.88 0 010-6.72z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/>", "user": "<path d=\"M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z\"/><path d=\"M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z\"/>", "refresh": "<path d=\"M320 146s24.36-12-64-12a160 160 0 10160 160\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"32\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M256 58l80 80-80 80\"/>", "heart": "<path d=\"M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/>", "bookmark": "<path d=\"M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/>", "chat": "<path d=\"M87.48 380c1.2-4.38-1.43-10.47-3.94-14.86a42.63 42.63 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.64 139.09 140.72 48 255.82 48 356.2 48 440 117.54 459.57 209.85a199 199 0 014.43 41.64c0 112.41-89.49 204.93-204.59 204.93-18.31 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.14 31.14 0 00-11.13-2.07 30.7 30.7 0 00-12.08 2.43L81.5 462.78a15.92 15.92 0 01-4.66 1.22 9.61 9.61 0 01-9.58-9.74 15.85 15.85 0 01.6-3.29z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"32\"/><circle cx=\"160\" cy=\"256\" r=\"32\"/><circle cx=\"256\" cy=\"256\" r=\"32\"/><circle cx=\"352\" cy=\"256\" r=\"32\"/>", "calc": "<rect x=\"112\" y=\"48\" width=\"288\" height=\"416\" rx=\"32\" ry=\"32\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M160.01 112H352v64H160.01z\"/><circle cx=\"168\" cy=\"248\" r=\"24\"/><circle cx=\"256\" cy=\"248\" r=\"24\"/><circle cx=\"344\" cy=\"248\" r=\"24\"/><circle cx=\"168\" cy=\"328\" r=\"24\"/><circle cx=\"256\" cy=\"328\" r=\"24\"/><circle cx=\"168\" cy=\"408\" r=\"24\"/><circle cx=\"256\" cy=\"408\" r=\"24\"/><rect x=\"320\" y=\"304\" width=\"48\" height=\"128\" rx=\"24\" ry=\"24\"/>", "cap": "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M32 192L256 64l224 128-224 128L32 192z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M112 240v128l144 80 144-80V240M480 368V192M256 320v128\"/>", "pen": "<path d=\"M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path d=\"M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z\"/>", "case2": "<rect x=\"32\" y=\"128\" width=\"448\" height=\"320\" rx=\"48\" ry=\"48\" fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path d=\"M144 128V96a32 32 0 0132-32h160a32 32 0 0132 32v32M480 240H32M320 240v24a8 8 0 01-8 8H200a8 8 0 01-8-8v-24\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/>", "home": "<path d=\"M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path d=\"M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/>", "users": "<path d=\"M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path d=\"M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z\" fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\"/><path d=\"M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path d=\"M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"32\"/>", "headset": "<path d=\"M83 384c-13-33-35-93.37-35-128C48 141.12 149.33 48 256 48s208 93.12 208 208c0 34.63-23 97-35 128\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path d=\"M108.39 270.13l-13.69 8h0c-30.23 17.7-31.7 72.41-3.38 122.2s75.87 75.81 106.1 58.12h0l13.69-8a16.16 16.16 0 005.78-21.87L130 276a15.74 15.74 0 00-21.61-5.87zM403.61 270.13l13.69 8h0c30.23 17.69 31.74 72.4 3.38 122.19s-75.87 75.81-106.1 58.12h0l-13.69-8a16.16 16.16 0 01-5.78-21.87L382 276a15.74 15.74 0 0121.61-5.87z\" fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\"/>", "award": "<circle cx=\"256\" cy=\"160\" r=\"128\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path d=\"M143.65 227.82L48 400l86.86-.42a16 16 0 0113.82 7.8L192 480l88.33-194.32\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path d=\"M366.54 224L464 400l-86.86-.42a16 16 0 00-13.82 7.8L320 480l-64-140.8\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><circle cx=\"256\" cy=\"160\" r=\"64\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/>", "handshake": "<g transform=\"scale(21.333)\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m11 17 2 2a1 1 0 1 0 3-3\"/><path d=\"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4\"/><path d=\"m21 3 1 11h-2\"/><path d=\"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3\"/><path d=\"M3 4h8\"/></g>", "mail": "<rect x=\"48\" y=\"96\" width=\"416\" height=\"320\" rx=\"40\" ry=\"40\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M112 160l144 112 144-112\"/>", "insta": "<path d=\"M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z\"/><path d=\"M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z\"/>", "file": "<path d=\"M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z\" fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path d=\"M256 56v120a32 32 0 0032 32h120M176 288h160M176 368h160\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/>", "xcircle": "<path d=\"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z\" fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M320 320L192 192M192 320l128-128\"/>", "check": "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M416 128L192 384l-96-96\"/>", "image": "<rect x=\"48\" y=\"80\" width=\"416\" height=\"352\" rx=\"48\" ry=\"48\" fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"32\"/><circle cx=\"336\" cy=\"176\" r=\"32\" fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\"/><path d=\"M304 335.79l-90.66-90.49a32 32 0 00-43.87-1.3L48 352M224 432l123.34-123.34a32 32 0 0143.11-2L464 368\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/>", "ext": "<path d=\"M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/>", "clock": "<path d=\"M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z\" fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M256 128v144h96\"/>", "info": "<path d=\"M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z\" fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M220 220h32v116\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"32\" d=\"M208 340h88\"/><path d=\"M248 130a26 26 0 1026 26 26 26 0 00-26-26z\"/>", "personSilhouette": "<path d=\"M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z\"/>", "clipboard": "<path d=\"M336 64h32a48 48 0 0148 48v320a48 48 0 01-48 48H144a48 48 0 01-48-48V112a48 48 0 0148-48h32\" fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"32\"/><rect x=\"176\" y=\"32\" width=\"160\" height=\"64\" rx=\"26.13\" ry=\"26.13\" fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"32\"/>", "arrowR": "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"48\" d=\"M268 112l144 144-144 144M392 256H100\"/>"};
const ico=(n,cls='')=>`<svg class="ion ${cls}" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">${P[n]||''}</svg>`;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function hydrateIcons(root=document){root.querySelectorAll('[data-ico]').forEach(el=>{el.innerHTML=ico(el.dataset.ico);el.removeAttribute('data-ico')})}

/* image with placeholder fallback */
function imgOr(src,alt,phHTML){
  const ph=phHTML??`<div class="ph">${ico('image')}<span>${esc(alt)}</span></div>`;
  if(!src) return ph;
  if(src.startsWith('images/'))src=(window.SP_BASE||'')+(window.SP_CLEAN_URLS?'/':'')+src;
  return `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" onerror="this.outerHTML=this.dataset.ph" data-ph="${esc(ph)}">`;
}

/* ---------- nav ---------- */
const NAV=[['about','소개 | About'],['jobs','채용 공고 | Jobs'],['wise-words','삶의 지혜 | Wise Words'],['silver-guide','정보마당 | Silver Guide'],['job-guide','취업길잡이 | Job Guide']];
document.getElementById('nav').innerHTML=NAV.map(([h,t])=>`<a href="#${h}" data-r="${h}">${t}</a>`).join('');
document.getElementById('mnavPanel').innerHTML=NAV.map(([h,t])=>`<a class="ml" href="#${h}" data-r="${h}">${t}${ico('chev')}</a>`).join('')+`<a href="#contact" class="btn">문의</a>`;
document.getElementById('fnav').innerHTML=[['about','소개'],...NAV.slice(1),['contact','문의']].map(([h,t])=>`<li><a href="#${h}">${t}</a></li>`).join('');
hydrateIcons();

const burger=document.getElementById('burger'),mnav=document.getElementById('mnav');
function setMenu(open){mnav.classList.toggle('open',open);burger.setAttribute('aria-expanded',open);burger.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');burger.innerHTML=ico(open?'close':'menu');document.body.classList.toggle('menu-open',open)}
burger.onclick=()=>setMenu(!mnav.classList.contains('open'));
mnav.addEventListener('click',e=>{if(e.target===mnav||e.target.closest('a'))setMenu(false)});
addEventListener('keydown',e=>{if(e.key==='Escape'){setMenu(false);closeLB()}});
/* header: collapse into the menu button whenever the full nav does not fit */
const hdrIn=document.querySelector('.hdr-in'),root=document.documentElement;
function fitNav(){
  root.classList.remove('navc');
  const tooTight=hdrIn.scrollWidth>hdrIn.clientWidth+1||innerWidth<760;
  root.classList.toggle('navc',tooTight);
  if(!tooTight)setMenu(false);
}
addEventListener('resize',fitNav);
document.fonts&&document.fonts.ready.then(fitNav);
/* larger text toggle, remembered on this device */
const fsBtn=document.getElementById('fsbtn');
function setFS(on){
  if(on)root.dataset.fs='lg';else delete root.dataset.fs;
  fsBtn.setAttribute('aria-pressed',on);
  fsBtn.querySelector('.fsl').textContent=on?'글자 작게':'글자 크게';
  try{localStorage.setItem('sp-fs',on?'lg':'')}catch(e){}
  fitNav();
}
fsBtn.onclick=()=>setFS(root.dataset.fs!=='lg');
let fsSaved='';try{fsSaved=localStorage.getItem('sp-fs')||''}catch(e){}
setFS(fsSaved==='lg');

/* ---------- jobs helpers ---------- */
const J=DATA.jobs.map(r=>({order:r[0],cat:r[1],title:r[2],co:r[3],addr:r[4],pay:r[5],dl:r[6],career:r[7],edu:r[8],pref:r[9],hours:r[10],type:r[11],desc:r[12],ben:r[13],contact:r[14],url:r[15]}));
const NOW=new Date();
function parseDL(s){if(!s)return null;const d=new Date(s.replace(/(\d)(am|pm)$/i,'$1 $2'));return isNaN(d)?null:d}
const TODAY=new Date(NOW.getFullYear(),NOW.getMonth(),NOW.getDate()).getTime();
/* a listing counts as closed from its deadline day onward */
J.forEach(j=>{j.dld=parseDL(j.dl);j.closed=!!(j.dld&&new Date(j.dld.getFullYear(),j.dld.getMonth(),j.dld.getDate()).getTime()<=TODAY);j.cats=j.cat.split('/').map(s=>s.trim()).filter(s=>s&&s!=='-');j.hay=(j.title+' '+j.co+' '+j.addr+' '+j.cat+' '+j.desc).toLowerCase()});
const fmtDate=d=>`${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}`;
let FEATURED=null;
function featuredJobs(){
  if(FEATURED)return FEATURED;
  const open=J.filter(j=>!j.closed&&j.addr&&j.title.length<70);
  const pool=open.length>=4?open:J;
  const picks=[];const used=new Set();
  while(picks.length<4&&used.size<pool.length){const i=Math.floor(Math.random()*pool.length);if(!used.has(i)){used.add(i);picks.push(pool[i])}}
  return FEATURED=picks;
}
const FILTER_MAP={'서비스':['서비스'],'생산':['생산'],'운전·운송·배송':['운전·운송·배송','물류'],'공공·복지':['공공·복지','사회복지','복지'],'설치·정비·전기·전자':['설치·정비·전기·전자','기술'],'경영·사무·금융·보험':['경영·사무·금융·보험'],'의료':['의료'],'교육·보육':['교육'],'건설·건축':['건설'],'IT·개발':['IT·개발','개발관리'],'회계·세무·재무':['회계·세무·재무'],'고객상담':['고객상담'],'상품기획·MD':['상품기획·MD'],'영업':['영업'],'문화':['문화']};
const FILTERS=Object.keys(FILTER_MAP);
const matchF=(j,f)=>j.cats.some(c=>FILTER_MAP[f].some(k=>c.includes(k)));
const jobState={q:'',f:'',shown:20,scroll:0};
function filteredJobs(){
  const q=jobState.q.trim().toLowerCase();
  const r=J.filter(j=>(!jobState.f||matchF(j,jobState.f))&&(!q||j.hay.includes(q)));
  return r.filter(j=>!j.closed).concat(r.filter(j=>j.closed));
}
function tagHTML(j){return `<div class="tags">${j.closed?'<span class="tag closed">마감</span>':''}${j.cats.slice(0,2).map(c=>`<span class="tag">${esc(c)}</span>`).join('')}</div>`}

/* ---------- pages ---------- */
const V={};
const hero=(eb,title,sub)=>`<section class="wrap page-hero"><p class="eyebrow">${eb}</p><h1>${title}</h1>${sub?`<p class="sub">${sub}</p>`:''}</section>`;

V.home=()=>{
  const cats=[['생산','heart'],['건설·건축','calc'],['서비스','cap'],['운전·운송·배송','pen'],['의료','case2'],['공공·복지','home'],['회계·세무·재무','users'],['고객상담','headset']];
  return `<section class="wrap home-hero">
    <div>
      <span class="pill">시니어들이 선택한 일자리 플랫폼</span>
      <h1>당신의 경험은 가장<br>큰 <em>자산입니다</em></h1>
      <p class="intro">60세 이상 전문가를 위한 새로운 기회. 유연한 근무 환경, 연령에 구애받지 않는 기업, 그리고 당신의 전문성과 경력을 진정으로 필요로 하는 일자리를 연결합니다.</p>
      <form class="hsearch" id="hsearch" role="search"><label class="sr" for="hq">직업, 키워드 검색</label><input id="hq" placeholder="직업, 키워드 검색"><button class="btn">${ico('search')}검색</button></form>
    </div>
    <div class="hero-art">${imgOr(IMAGES.heroIllustration,'함께 걷는 시니어 일러스트',`<div class="ph" style="background:var(--cream)">${ico('image')}<span>히어로 일러스트</span></div>`)}</div>
  </section>
  <section class="partners-sec" aria-label="함께하는 파트너">
    <div class="wrap"><p class="plbl">${ico('handshake')}함께하는 파트너</p>
    <div class="marquee"><div class="mtrack">${[0,1].map(k=>`<div class="mgroup"${k?' aria-hidden="true"':''}>${[...IMAGES.partners,...IMAGES.partners].map(p=>`<div class="plogo" style="--lh:${p.h||36}px">${imgOr(p.img,p.name,`<span>${esc(p.name)}</span>`)}</div>`).join('')}</div>`).join('')}</div></div></div>
  </section>
  <section class="wrap cats-sec">
    <p class="eyebrow" style="margin:0">카테고리</p>
    <h2>나에게 딱 맞는 일자리를 찾아보세요</h2>
    <p class="sub">경험을 존중하는 다양한 산업의 기회를 한눈에 살펴보세요.<br>분야와 역할별로 정리된 카테고리에서, 나에게 맞는 일자리를 쉽게 찾을 수 있습니다.</p>
    <div class="cats">${cats.map(([c,i])=>`<a class="cat" href="#jobs" data-cat="${c}"><span class="ic">${ico(i)}</span><b>${c}</b><small>일자리 보기 →</small></a>`).join('')}</div>
  </section>
  <section class="band"><div class="wrap sec">
    <p class="sec-label">채용 정보</p><h2>주목 받고 있는 공고</h2>
    <div class="fjobs">${featuredJobs().map(j=>`<article class="fjob">
      <div class="tags">${j.cats.slice(0,1).map(c=>`<span class="tag">${esc(c)}</span>`).join('')}</div>
      <p class="co">${esc(j.co)}</p>
      <h3><a href="#job-${j.order}">${esc(j.title)}</a></h3>
      <div class="fmeta">${j.addr?`<span>${ico('pin')}${esc(j.addr)}</span>`:''}<span>${ico('dollar')}${esc(j.pay||'면접 후 결정')}</span></div>
      <a class="btn" href="#job-${j.order}">자세히 보기</a></article>`).join('')}</div>
  </div></section>
  <section class="wrap sec why">
    <div>
      <p class="sec-label">시니어들이 SilverPath를 찾는 이유?</p>
      <h2>시니어들을 위한 플랫폼</h2>
      <p class="why-tx">60세 이후의 일자리 찾기는 이전과는 다른 접근이 필요하다는 것을 잘 알고 있습니다. 그래서 SilverPath의 모든 기능은 시니어를 중심으로 설계되었습니다.</p>
      <a class="btn" href="#about">SilverPath 소개</a>
    </div>
    <div class="why-list">
      ${[['clock','시니어를 위한 유연한 일자리','근무 시간과 형태에 제한 없이, 당신의 삶과 경험에 맞는 일자리를 제공합니다.'],['info','누구나 쉽게 사용할 수 있는 설계','복잡한 절차 없이 누구나 바로 사용할 수 있도록 간단하고 직관적인 사용자 경험을 설계했습니다.'],['search','필요한 것만 남긴 맞춤 검색','분야·역할·근무 형태별 필터를 통해 당신에게 맞는 일자리를 빠르게 찾을 수 있습니다.']].map(([i,t,d])=>`<div class="val"><span class="ic">${ico(i)}</span><div><b>${t}</b><p>${d}</p></div></div>`).join('')}
    </div>
  </section>`;
};
V.homeInit=()=>{
  document.getElementById('hsearch').onsubmit=e=>{e.preventDefault();jobState.q=document.getElementById('hq').value;jobState.f='';jobState.shown=20;jobState.scroll=0;go('jobs')};
  document.querySelectorAll('[data-cat]').forEach(a=>a.onclick=()=>{jobState.f=a.dataset.cat;jobState.q='';jobState.shown=20;jobState.scroll=0});
};

V.about=()=>`${hero('소개','시니어의 지속 가능한 커리어를 위해','SilverPath는 60세 이후에도 계속 일하고 싶은 사람들을 위한 일자리 플랫폼입니다. 나이가 아니라 경험과 전문성이 존중받는 채용 환경을 만들고자 시작했습니다.')}
  <section class="wrap sec">
    <p class="label-up">OUR STORY</p>
    <h2 style="margin-top:12px">SilverPath의 시작</h2>
    <div class="story">
      <div class="ceo"><div class="avatar">${imgOr(IMAGES.ceoPhoto,'Woojin Han',ico('personSilhouette'))}</div><b>Woojin Han</b><span>Founder &amp; CEO</span></div>
      <div class="story-text">
        <p>안녕하세요. 실버패스 대표 한우진입니다.</p>
        <p>저는 서로의 이야기에 귀 기울이고 이해하는 과정이 사회 변화를 만드는 가장 중요한 출발점이라고 믿습니다. 누군가를 앞서 이끄는 것보다, 곁에서 함께 걸으며 길을 찾는 데 더 큰 힘이 있다고 생각합니다.</p>
        <p>실버패스는 어르신들이 일자리를 통해 자신의 경험과 역량을 나누실 수 있도록 돕고, 소통과 공감으로 서로를 존중하며 함께 성장하는 사회를 만들어가고자 합니다.</p>
        <p>이 공간에서 누군가는 새로운 도전을 향한 용기를 얻고, 또 누군가는 사회와 다시 이어지는 기쁨을 느끼실 수 있기를 바랍니다.</p>
        <p>저의 작은 시도가 더욱 따뜻하고 건강한 사회를 만드는 데 보탬이 되기를 바라며, 여러분의 이야기를 들으며 함께 걸어가겠습니다.</p>
        <p>감사합니다.</p>
      </div>
    </div>
  </section>
  <section class="wrap sec" style="text-align:center">
    <p class="label-up">OUR VALUES</p>
    <h2 style="margin-top:12px">SilverPath가 추구하는 가치</h2>
    <div class="values" style="text-align:left">
      ${[['heart','존중과 존엄','SilverPath는 모든 시니어가 나이와 상관없이 존중받고, 존엄하게 일할 수 있어야 한다고 믿습니다.'],['users','커뮤니티','저희는 단순한 일자리 연결을 넘어, 경험과 이야기가 이어지는 시니어 중심의 커뮤니티를 만들어갑니다.'],['award','경험의 가치','경험은 시간이 쌓여 만들어진 가장 강력한 자산입니다. 저희는 경험이 제대로 평가받고 활용되는 일자리를 연결합니다.'],['users','목적이 있는 일','일은 단순한 소득 수단이 아니라 의미 있는 선택이어야 합니다. SilverPath는 가치와 방향이 분명한 일자리를 지향합니다.']].map(([i,t,d])=>`<div class="val"><span class="ic">${ico(i)}</span><div><b>${t}</b><p>${d}</p></div></div>`).join('')}
    </div>
  </section>`;

V.jobs=()=>`${hero('채용 정보','채용 공고 | Jobs','고령자 우대 일자리를 찾아보세요')}
  <div class="wrap" style="margin-top:-40px">
    <form class="jsearch" id="jform" role="search"><label class="sr" for="jq">직업, 키워드 검색</label><input id="jq" placeholder="직업, 키워드 검색"><button class="icobtn" aria-label="검색">${ico('search')}</button></form>
    <div class="filters" style="margin-top:28px"><b>직무 필터:</b>${FILTERS.map(f=>`<button class="chip" data-f="${f}">${f}</button>`).join('')}</div>
    <div class="count-row"><span><b id="jcount">0</b>건</span><button class="reset" id="jreset">${ico('refresh')}초기화</button></div>
    <div class="jlist" id="jlist"></div>
    <div class="more-wrap"><button class="btn" id="jmore" hidden>더 보기</button></div>
  </div>`;
V.jobsInit=()=>{
  const q=document.getElementById('jq'),list=document.getElementById('jlist'),more=document.getElementById('jmore');
  q.value=jobState.q;
  function draw(){
    const all=filteredJobs();
    document.getElementById('jcount').textContent=all.length.toLocaleString();
    document.querySelectorAll('.chip').forEach(c=>{c.classList.toggle('on',c.dataset.f===jobState.f);c.setAttribute('aria-pressed',c.dataset.f===jobState.f)});
    list.innerHTML=all.length?all.slice(0,jobState.shown).map((j,ix)=>`<article class="job${j.closed?' expired':''}"><div class="job-main">
      <div class="num">#${all.length-ix}</div>${tagHTML(j)}
      <div class="co">${esc(j.co)}</div>
      <h3><a href="#job-${j.order}">${esc(j.title)}</a></h3>
      <div class="meta">${j.addr?`<span>${ico('pin')}${esc(j.addr)}</span>`:''}<span>${ico('dollar')}${esc(j.pay||'면접 후 결정')}</span></div>
      </div><a class="btn" href="#job-${j.order}">자세히 보기</a></article>`).join(''):`<div class="empty">조건에 맞는 공고가 없습니다. 다른 키워드로 검색하거나 필터를 초기화해 보세요.</div>`;
    more.hidden=all.length<=jobState.shown;
    linkify(list);
  }
  document.getElementById('jform').onsubmit=e=>{e.preventDefault();jobState.q=q.value;jobState.shown=20;draw()};
  q.oninput=()=>{jobState.q=q.value;jobState.shown=20;draw()};
  document.querySelectorAll('.chip').forEach(c=>c.onclick=()=>{jobState.f=jobState.f===c.dataset.f?'':c.dataset.f;jobState.shown=20;draw()});
  document.getElementById('jreset').onclick=()=>{jobState.q='';jobState.f='';jobState.shown=20;q.value='';draw()};
  more.onclick=()=>{jobState.shown+=20;draw()};
  list.addEventListener('click',e=>{if(e.target.closest('a'))jobState.scroll=scrollY});
  draw();
  if(jobState.scroll){const s=jobState.scroll;requestAnimationFrame(()=>scrollTo(0,s))}
};

V.job=(id)=>{
  const j=J.find(x=>String(x.order)===id);
  if(!j) return `<div class="wrap"><a class="back" href="#jobs">${ico('arrowL')}뒤로가기</a><div class="empty">공고를 찾을 수 없습니다.</div></div>`;
  const dl=j.closed?'채용 마감':j.dld?`${fmtDate(j.dld)} 마감`:'채용 시 마감';
  const cond=[j.type,j.hours,j.desc].filter(Boolean);
  return `<div class="wrap">
    <a class="back" href="#jobs">${ico('arrowL')}뒤로가기</a>
    <section class="dcard">
      <div class="dtop">${tagHTML(j)}<button class="share" id="share" aria-label="링크 복사">${ico('share')}</button></div>
      <h1>${esc(j.title)}</h1>
      <p class="co">${esc(j.co)}</p>
      <div class="dinfo"><div>${ico('cal')}<span>${dl}</span></div>${j.addr?`<div>${ico('pin')}<span>${esc(j.addr)}</span></div>`:''}<div>${ico('dollar')}<span>${esc(j.pay||'면접 후 결정')}</span></div></div>
    </section>
    <section class="dcard"><div class="dh"><span class="ic">${ico('case2')}</span>근무조건</div><div class="dbody">${cond.map(c=>`<p>${esc(c)}</p>`).join('')||'<p>면접 후 결정</p>'}</div></section>
    <section class="dcard"><div class="dh"><span class="ic">${ico('wrench')}</span>경력조건</div><div class="dbody">
      <p><b>학력:</b> ${esc(j.edu||'무관')}</p><p><b>경력:</b> ${esc(j.career||'무관')}</p>${j.pref?`<p><b>우대사항:</b> ${esc(j.pref)}</p>`:''}</div></section>
    ${j.ben?`<section class="dcard"><div class="dh"><span class="ic">${ico('heart')}</span>복지/혜택</div><div class="dbody"><p>${esc(j.ben)}</p></div></section>`:''}
    <section class="dcard"><div class="dh" style="margin-bottom:16px">지원하기</div>
      ${j.contact?`<div class="dinfo" style="margin:0 0 18px"><div>${ico('user')}<span>${esc(j.contact)}</span></div></div>`:''}
      ${j.url?`<a class="btn full" style="width:100%;border-radius:20px;padding:12px;font-size:16px" href="${esc(j.url)}" target="_blank" rel="noopener">지원하기</a>`:''}
    </section>
  </div>`;
};
V.jobInit=()=>{
  const b=document.getElementById('share');if(!b)return;
  b.onclick=()=>copyLink(location.href);
};

function fallbackCopy(text){
  const ta=document.createElement('textarea');ta.value=text;ta.setAttribute('readonly','');ta.style.cssText='position:fixed;top:0;left:0;opacity:0;';
  document.body.appendChild(ta);ta.select();ta.setSelectionRange(0,text.length);
  let ok=false;try{ok=document.execCommand('copy')}catch(e){}ta.remove();return ok;
}
function copyLink(url){
  const done=ok=>showSnack(ok?'링크가 복사되었습니다':'복사에 실패했습니다. 주소창의 링크를 복사해 주세요.');
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(url).then(()=>done(true),()=>done(fallbackCopy(url)));
  }else done(fallbackCopy(url));
}
let snackT;
function showSnack(msg){
  let s=document.getElementById('snack');
  if(!s){s=document.createElement('div');s.id='snack';s.className='snack';s.setAttribute('role','status');document.body.appendChild(s)}
  s.textContent=msg;s.classList.add('show');clearTimeout(snackT);snackT=setTimeout(()=>s.classList.remove('show'),2200);
}
/* ---------- wise words ---------- */
const LIB_LIFE=[['50가지 인생 교훈','50가지 인생 교훈','heart'],['50가지 명언','시니어들을 위한 51가지 명언','bookmark'],['지혜로운 조언','지혜로운 조언','chat']];
const LIB_MOVIE=['The Intern 명대사','Gran Torino 명대사','Up 명대사','Secondhand Lions 명대사','Driving Miss Daisy 명대사'];
const libKeys=[...LIB_LIFE.map(x=>x[0]),...LIB_MOVIE];
const LIB_SLUGS=['life-lessons','quotes-for-seniors','wise-advice','the-intern','gran-torino','up','secondhand-lions','driving-miss-daisy'];
const LIB_BY_SLUG=Object.fromEntries(LIB_SLUGS.map((s,i)=>[s,libKeys[i]]));
const libHref=k=>'#library-'+LIB_SLUGS[libKeys.indexOf(k)];
const libName=k=>(LIB_LIFE.find(x=>x[0]===k)||[,k])[1];
let voicesShown=8;
V['wise-words']=()=>`${hero('세대를 넘어 전해지는 삶의 지혜','삶의 지혜 | Wise Words','빠르게 변하는 세상 속에서도 변하지 않는 가치와 태도가 있습니다.<br>Wise Words는 시니어들의 경험 속에서 발견한 조언을 기록하고, 다음 세대와 나누는 SilverPath의 지혜 아카이브입니다.')}
  <section class="wrap sec"><div class="ww-story">
    <div class="story-art">${imgOr(IMAGES.storyIllustration,'우리의 이야기 일러스트',`<div class="ph" style="background:#f0b8b9;color:#7a3a3c">${ico('image')}<span>우리의 이야기 일러스트</span></div>`)}</div>
    <div><p class="sec-label">Our Story</p><h2>우리의 이야기</h2><div class="tx">
      <p>우리는 종종 정답을 찾기 위해 앞만 바라봅니다.</p>
      <p>하지만 그 길을 먼저 걸어온 사람들의 경험 속에는 교과서보다 깊은 답이 담겨 있습니다.</p>
      <p><b>Wise Words</b>는 어르신들의 인생속 경험과 조언을 기록하고 나누는 공간입니다.</p>
      <p><b>SilverPath</b>는 어르신들의 이야기를 단순한 추억이 아니라, 젊은 세대에게 전하는 삶의 지혜와 방향성으로 바라봅니다.</p>
    </div></div>
  </div></section>
  <section class="wrap sec"><p class="sec-label">Voices</p><h2>인터뷰 속 조언</h2><p class="lead">현장에서 만난 어르신들이 전해주신 가장 솔직한 삶의 조언</p>
    <div class="voices" id="voices"></div>
    <div class="more-wrap"><button class="btn" id="vmore">더 보기</button></div>
  </section>
  <section class="wrap sec"><p class="sec-label">Wisdom Library</p><h2>글로 읽는 지혜</h2><p class="lead">인생교훈이 담긴 글과 명언, 영화대사 속 지혜</p>
    <h3 class="lib-h">Life Lessons</h3>
    <div class="lib">${LIB_LIFE.map(([k,n,i])=>`<a class="lrow" href="${libHref(k)}"><span class="ic">${ico(i)}</span><b>${n}</b>${ico('chev','chev')}</a>`).join('')}</div>
    <h3 class="lib-h">Movie Quotes</h3>
    <div class="lib">${LIB_MOVIE.map(k=>`<a class="lrow" href="${libHref(k)}"><span class="ic round">${imgOr(IMAGES.library[k],k,ico('image'))}</span><b>${k}</b>${ico('chev','chev')}</a>`).join('')}</div>
  </section>
  <section class="wrap sec"><p class="sec-label">Videos</p><h2>영상으로 보는 지혜</h2><p class="lead">말보다 깊게 다가오는 영상 속 지혜</p>
    <div class="vids">${DATA.vids.map(v=>`<a class="vid" href="${esc(v.u)}" target="_blank" rel="noopener"><span>${esc(v.t)}</span>${ico('chev','chev')}</a>`).join('')}</div>
  </section>
  <section class="wrap sec"><p class="sec-label">Recommended Channels</p><h2>유튜브 채널</h2><p class="lead">삶의 경험과 세대 간 이야기를 담은 채널</p>
    <div class="chans">${DATA.ch.map(c=>`<a class="chan" href="${esc(c.u)}" target="_blank" rel="noopener"><div class="av">${imgOr(c.img,c.n,`<span>${esc(c.n.replace('@','').charAt(0).toUpperCase())}</span>`)}</div><b>${esc(c.n)}</b></a>`).join('')}</div>
  </section>
  <section class="wrap"><div class="bigquote">
    <div class="qm">“</div>
    <div><p class="en">Every life carries wisdom.<br>SilverPath listens, records, and shares it.</p><p class="kr">모든 삶에는 지혜가 있습니다.<br>SilverPath는 그 이야기를 듣고, 기록하고, 다음 세대와 나눕니다.</p></div>
    <div class="qm r">”</div>
  </div></section>`;
V['wise-wordsInit']=()=>{
  const box=document.getElementById('voices'),b=document.getElementById('vmore');
  const draw=()=>{box.innerHTML=DATA.inter.slice(0,voicesShown).map(v=>`<div class="voice"><b>${esc(v.a)}</b><p>"${esc(v.t)}"</p></div>`).join('');b.hidden=voicesShown>=DATA.inter.length};
  b.onclick=()=>{voicesShown+=8;draw()};draw();
};
V.library=(i)=>{
  const k=LIB_BY_SLUG[i];const qs=DATA.quotes[k];
  if(!qs) return `<div class="wrap"><a class="back" href="#wise-words">${ico('arrowL')}뒤로가기</a><div class="empty">내용을 찾을 수 없습니다.</div></div>`;
  return `<div class="wrap"><a class="back" href="#wise-words">${ico('arrowL')}삶의 지혜로 돌아가기</a></div>
  ${hero('Wisdom Library',esc(libName(k)),`${qs.length}개의 문장`)}
  <div class="wrap" style="margin-top:-28px"><div class="qlist">${qs.map((q,n)=>`<article class="q"><p class="n">${String(n+1).padStart(2,'0')}</p>${q.en?`<p class="en">${esc(q.en)}</p>`:''}${q.kr?`<p class="kr">${esc(q.kr)}</p>`:''}${q.src?`<p class="src">— ${esc(q.src)}</p>`:''}</article>`).join('')}</div></div>`;
};

/* ---------- guides ---------- */
const expanded={};
function resCard(r,idx){
  return `<article class="rcard"><button class="rimg" data-res="${idx}" aria-label="${esc(r.t)} 크게 보기">${imgOr(r.img,r.t)}</button><p class="rt">${esc(r.t)}</p><div class="ra"><button class="btn" data-res="${idx}">자세히 보기</button></div></article>`;
}
function guideSection(key,label,title,type,alwaysAll){
  const items=DATA.res.map((r,i)=>[r,i]).filter(([r])=>r.type===type);
  const show=expanded[key]||alwaysAll?items:items.slice(0,3);
  const btn=items.length>3&&!alwaysAll?`<button class="btn" data-exp="${key}">${expanded[key]?'접기':'더 보기'}</button>`:'';
  return `<section class="wrap gsec"><p class="sec-label">${label}</p><div class="sec-head"><h2>${title}</h2>${btn}</div><div class="rgrid">${show.map(([r,i])=>resCard(r,i)).join('')}</div></section>`;
}
V['silver-guide']=()=>`${hero('시니어를 위한 생활 지혜와 실용 정보','정보마당 | Silver Guide','나이 듦은 인생에서의 멈춤이 아니라, 방식의 전환입니다.<br>SilverPath가 더욱 보다 편리하고 안정적인 시니어 생활로 안내해드립니다.')}
  ${guideSection('health','Health &amp; Wellness','건강한 생활','health')}
  ${guideSection('smart','Smart Living','현명한 생활','smart')}
  ${guideSection('finance','Finance &amp; Welfare','경제·복지 생활','finance')}`;
V['job-guide']=()=>`${hero('시니어를 위한 실질적인 도움','취업길잡이 | Job Guide','이력서 작성, 면접 준비, 자격증 정보, 재취업 팁까지 —<br>시니어의 취업 준비에 실질적으로 도움이 되는 정보들을 알려드립니다.')}
  ${guideSection('resume','Resume Preparation','이력서 준비','resume')}
  ${guideSection('interview','Job Search &amp; Interview Preparation','구직 및 면접 준비','interview')}
  ${guideSection('training','Training &amp; Certifications','교육 및 자격증','training')}`;
function guideInit(){
  document.querySelectorAll('[data-exp]').forEach(b=>b.onclick=()=>{expanded[b.dataset.exp]=!expanded[b.dataset.exp];const y=scrollY;render(true);scrollTo(0,y)});
  document.querySelectorAll('[data-res]').forEach(b=>b.onclick=()=>openLB(DATA.res[+b.dataset.res]));
}
V['silver-guideInit']=guideInit;V['job-guideInit']=guideInit;

const lb=document.getElementById('lb');let lbReturn=null;
function openLB(r){
  lbReturn=document.activeElement;
  lb.innerHTML=`<div class="lb-box"><div class="lb-top"><b>${esc(r.t)}</b>${r.url?`<a class="btn sm" href="${esc(r.url)}" target="_blank" rel="noopener">원본 열기</a>`:''}<button class="lb-x" id="lbx" aria-label="닫기">${ico('close')}</button></div><div class="lb-body">${r.d?`<p>${esc(r.d)}</p>`:''}${imgOr(r.img,r.t)}</div></div>`;
  lb.hidden=false;document.body.style.overflow='hidden';
  document.getElementById('lbx').onclick=closeLB;document.getElementById('lbx').focus();
}
function closeLB(){if(lb.hidden)return;lb.hidden=true;lb.innerHTML='';document.body.style.overflow='';lbReturn?.focus?.()}
lb.addEventListener('click',e=>{if(e.target===lb)closeLB()});

/* ---------- contact ---------- */
V.contact=()=>`${hero('문의','무엇을 도와드릴까요?','협업이나 제휴, 궁금한 점이 있다면 언제든 편하게 말씀해 주세요.<br>소중한 의견을 기다리고 있습니다.')}
  <div class="wrap contact-wrap"><form class="form" id="cform" novalidate>
    <div class="field"><label for="c-name">성함<span class="req">*</span></label><input class="inp" id="c-name" required autocomplete="name"></div>
    <div class="field"><label for="c-email">이메일<span class="req">*</span></label><input class="inp" id="c-email" type="email" required autocomplete="email"></div>
    <div class="field"><label for="c-phone">전화번호</label><input class="inp" id="c-phone" type="tel" autocomplete="tel"></div>
    <div class="field"><label for="c-msg">메세지<span class="req">*</span></label><textarea class="inp" id="c-msg" required></textarea></div>
    <p id="c-err" class="req" hidden style="font-size:14.5px"></p>
    <button class="btn full" id="c-submit">문의하기</button>
  </form></div>`;
const FS_ENDPOINT='https://formsubmit.co/ajax/bb280b58d2ffca3210d3e1d1b940b6df';
V.contactInit=()=>{
  const f=document.getElementById('cform');
  f.onsubmit=e=>{e.preventDefault();
    const bad=[...f.querySelectorAll('[required]')].find(i=>!i.value.trim()||(i.type==='email'&&!/^\S+@\S+\.\S+$/.test(i.value)));
    const err=document.getElementById('c-err');
    if(bad){err.hidden=false;err.textContent=bad.type==='email'&&bad.value?'이메일 주소 형식을 확인해 주세요.':'필수 항목(*)을 모두 입력해 주세요.';bad.focus();return}
    err.hidden=true;
    const btn=document.getElementById('c-submit');btn.disabled=true;btn.textContent='보내는 중…';
    const v=id=>document.getElementById(id).value.trim();
    fetch(FS_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},
      body:JSON.stringify({'성함':v('c-name'),'이메일':v('c-email'),'전화번호':v('c-phone')||'-','메세지':v('c-msg'),_subject:'[SilverPath] 새 문의: '+v('c-name'),_replyto:v('c-email'),_template:'table',_captcha:'false'})})
    .then(r=>r.json().catch(()=>({})).then(j=>{if(!r.ok||j.success===false||j.success==='false')throw 0}))
    .then(()=>{f.outerHTML=`<div class="okmsg"><div class="ic">${ico('check')}</div><b>문의가 접수되었습니다</b><p>남겨주신 이메일로 빠르게 답변드리겠습니다.</p></div>`})
    .catch(()=>{btn.disabled=false;btn.textContent='문의하기';err.hidden=false;err.textContent='전송에 실패했습니다. 잠시 후 다시 시도해 주세요.'});
  };
};

/* ---------- survey ---------- */
const S=[
 {t:'기본 정보',q:[
  {id:'name',type:'text',label:'1. 성함'},
  {id:'contact',type:'text',label:'2. 연락처 (전화번호 또는 이메일)'},
  {id:'age',type:'select',label:'3. 연령대',req:1,opts:['50대','60–64세','65–69세','70–74세','75–79세','80세 이상']}]},
 {t:'현재의 삶과 경험에 대한 질문',q:[
  {id:'hard',type:'radio',label:'1. 현재 가장 힘들다고 느끼는 점은 무엇인가요? (1개 선택)',req:1,opts:['건강문제','경제적 어려움','외로움 / 소외감'],etc:1},
  {id:'msg',type:'textarea',label:'2. 살아오시면서 느끼신 점이나, 젊은 세대에게 전하고 싶은 말씀이 있다면 자유롭게 적어주세요.'}]},
 {t:'일자리 및 실버패스 이용 관련 질문',q:[
  {id:'want',type:'radio',label:'1. 짧은 시간, 무리 없이 할 수 있는 일자리가 있다면 일을 해보고 싶으신가요?',req:1,opts:['예','아니오']},
  {id:'worry',type:'check',label:'2. 일자리를 구할 때 가장 걱정되는 점은 무엇인가요? (복수 선택 가능)',req:1,opts:['업무를 잘 수행할 수 있을지에 대한 걱정 (능숙도, 적응)','다른 세대와의 관계 및 소통에 대한 어려움','꾸준히 계속 일할 수 있을지에 대한 부담','컨디션이 좋지 않을 날 근무가 어려울까 봐 걱정됨'],etc:1},
  {id:'channel',type:'check',label:'3. 일자리 정보를 받는다면 어떤 방법이 가장 편하신가요? (복수 선택 가능)',req:1,opts:['기관(복지관 등)을 통해 안내받기','문자 메시지','전화','카카오톡','이메일']},
  {id:'app',type:'radio',label:'4. 시니어 일자리 정보를 모아 알려주는 휴대폰 앱이 있다면 사용할 의향이 있으신가요?',req:1,opts:['예','아니오']},
  {id:'help',type:'textarea',label:'5. 일자리를 찾는 과정에서 어떤 도움을 받고싶으신지 자유롭게 적어주세요.'}]},
 {t:'회원가입용 질문',sub:'(일자리 정보가 필요하신 분들만 답변 해 주세요.)',q:[
  {id:'hours',type:'radio',label:'1. 하루 근무시간은 어느 정도가 좋으신가요?',req:1,opts:['2시간 이하','3~4시간','5~6시간','상관없음']},
  {id:'days',type:'days',label:'2. 주당 근무요일은 어느 정도가 좋으신가요?',req:1},
  {id:'prevjob',type:'text',label:'3. 예전에 직업이 있으셨다면 적어주세요'},
  {id:'kind',type:'check',label:'4. 시니어로서 어떤 종류의 일을 원하시나요? (복수 선택 가능)',req:1,opts:['간단한 정리/관리','안내/상담','아이 돌봄/교육 보조','사무 보조','운전/배송','기술/전문직','상관없음'],etc:1},
  {id:'priority',type:'radio',label:'5. 일할 때 가장 중요한 것은 무엇인가요? (1개 선택)',req:1,opts:['근무 시간','집과의 거리','일의 쉬움 (난이도)','급여','사람들과의 관계']},
  {id:'weekday',type:'check',label:'6. 근무 가능 요일 (복수 선택 가능)',req:1,opts:['평일 (월~금)','주말','요일 상관없음']},
  {id:'timeslot',type:'check',label:'7. 근무 가능 시간대 (복수 선택 가능)',req:1,opts:['오전','오후','저녁','시간 상관없음']}]}
];
const sv={step:0,a:{},done:false};
function qHTML(q){
  const a=sv.a,r=q.req?'<span class="req">*</span>':'';
  const name=`s-${q.id}`;
  if(q.type==='text')return `<div class="sq"><label class="qt" for="${name}">${q.label}${r}</label><input class="inp" id="${name}" data-k="${q.id}" value="${esc(a[q.id]||'')}"></div>`;
  if(q.type==='textarea')return `<div class="sq"><label class="qt" for="${name}">${q.label}${r}</label><textarea class="inp" id="${name}" data-k="${q.id}" style="min-height:70px">${esc(a[q.id]||'')}</textarea></div>`;
  if(q.type==='select')return `<div class="sq"><label class="qt" for="${name}">${q.label}${r}</label><select class="inp" id="${name}" data-k="${q.id}"><option value=""></option>${q.opts.map(o=>`<option ${a[q.id]===o?'selected':''}>${o}</option>`).join('')}</select></div>`;
  if(q.type==='days'){const v=a[q.id]||'';return `<fieldset class="sq" style="border:0;padding:0;margin:0 0 20px"><legend class="qt">${q.label}${r}</legend>
    <label class="opt"><input type="radio" name="${name}" value="n" ${v&&v!=='상관없음'?'checked':''} data-days="n">주 <input class="inp inline num" type="number" min="1" max="7" id="${name}-n" value="${v&&v!=='상관없음'?esc(v):''}" aria-label="주당 근무 횟수"> 회</label>
    <label class="opt"><input type="radio" name="${name}" value="상관없음" ${v==='상관없음'?'checked':''} data-days="any">상관없음</label></fieldset>`}
  const multi=q.type==='check',cur=a[q.id]||(multi?[]:'');
  const isOn=o=>multi?cur.includes(o):cur===o;
  return `<fieldset class="sq" style="border:0;padding:0;margin:0 0 20px"><legend class="qt">${q.label}${r}</legend>
    ${q.opts.map((o,i)=>`<label class="opt"><input type="${multi?'checkbox':'radio'}" name="${name}" id="${name}-${i}" value="${esc(o)}" ${isOn(o)?'checked':''} data-q="${q.id}">${esc(o)}</label>`).join('')}
    ${q.etc?`<label class="opt"><input type="${multi?'checkbox':'radio'}" name="${name}" id="${name}-etc" value="__etc" ${isOn('__etc')?'checked':''} data-q="${q.id}">기타: <input class="inp inline" id="${name}-etctx" data-etc="${q.id}" value="${esc(a[q.id+'_etc']||'')}" aria-label="기타 내용"></label>`:''}
  </fieldset>`;
}
function stepValid(){
  return S[sv.step].q.every(q=>{
    if(!q.req)return true;const v=sv.a[q.id];
    if(q.type==='days')return v==='상관없음'||(+v>=1&&+v<=7);
    if(Array.isArray(v))return v.length>0;return !!v;
  });
}
function surveyPayload(){
  const out={_subject:'[SilverPath] 새 설문 응답'+(sv.a.name?': '+sv.a.name:''),_template:'table',_captcha:'false'};
  S.forEach(st=>st.q.forEach(q=>{
    let v=sv.a[q.id];
    if(Array.isArray(v))v=v.map(x=>x==='__etc'?'기타: '+(sv.a[q.id+'_etc']||''):x).join(', ');
    else if(v==='__etc')v='기타: '+(sv.a[q.id+'_etc']||'');
    else if(q.type==='days'&&v&&v!=='상관없음')v='주 '+v+'회';
    out[`[${st.t}] ${q.label}`]=v||'-';
  }));
  return out;
}
V.survey=()=>`${hero('참여하기','설문 조사','어르신께 더 나은 일자리 정보를 제공하기 위한 간단한 설문입니다. 모든 답변은 서비스 개선을 위해서만 사용되며, 소중한 의견은 더 좋은 서비스를 만드는 데 큰 도움이 됩니다.')}
  <div class="wrap contact-wrap"><div class="survey" id="survey"></div></div>`;
V.surveyInit=()=>{
  const box=document.getElementById('survey');
  function draw(){
    if(sv.done){box.innerHTML=`<div class="okmsg" style="margin:0;padding:12px 0"><div class="ic">${ico('check')}</div><b>설문에 참여해 주셔서 감사합니다</b><p>보내주신 의견은 더 좋은 서비스를 만드는 데 소중히 사용하겠습니다.</p><p style="margin-top:20px"><a class="btn" href="#jobs">일자리 보러 가기</a></p></div>`;return}
    const st=S[sv.step],last=sv.step===S.length-1;
    box.innerHTML=`<div class="dots" aria-label="${sv.step+1} / ${S.length} 단계">${S.map((_,i)=>`${i?'<s></s>':''}<i class="${i<=sv.step?'on':''}"></i>`).join('')}</div>
      <h2>${st.t} ${st.sub?`<small>${st.sub}</small>`:''}</h2>
      ${st.q.map(qHTML).join('')}
      <div class="snav">${sv.step?'<button class="btn ghost" id="sprev">이전</button>':''}<button class="btn" id="snext">${last?'제출':'다음'}</button></div>
      <p class="req" id="serr" role="alert" hidden style="text-align:center;font-size:14.5px;margin-top:14px">전송에 실패했습니다. 잠시 후 다시 시도해 주세요.</p>`;
    linkify(box);
    const next=document.getElementById('snext');
    const upd=()=>{next.disabled=!stepValid()};
    box.querySelectorAll('[data-k]').forEach(el=>el.oninput=el.onchange=()=>{sv.a[el.dataset.k]=el.value;upd()});
    box.querySelectorAll('[data-q]').forEach(el=>el.onchange=()=>{
      const k=el.dataset.q;
      if(el.type==='checkbox')sv.a[k]=[...box.querySelectorAll(`[data-q="${k}"]:checked`)].map(x=>x.value);else sv.a[k]=el.value;upd()});
    box.querySelectorAll('[data-etc]').forEach(el=>el.oninput=()=>{const k=el.dataset.etc;sv.a[k+'_etc']=el.value;
      const box2=document.getElementById(`s-${k}-etc`);if(el.value&&!box2.checked){box2.checked=true;box2.onchange()}});
    box.querySelectorAll('[data-days]').forEach(el=>el.onchange=()=>{const n=document.getElementById(el.name+'-n');sv.a.days=el.dataset.days==='any'?'상관없음':n.value;upd()});
    const dn=document.getElementById('s-days-n');if(dn)dn.oninput=()=>{const r=box.querySelector('[data-days="n"]');r.checked=true;sv.a.days=dn.value;upd()};
    upd();
    next.onclick=()=>{
      if(!stepValid())return;
      if(!last){sv.step++;draw();scrollTo({top:0,behavior:'smooth'});return}
      next.disabled=true;next.textContent='보내는 중…';
      const err=document.getElementById('serr');err.hidden=true;
      fetch(FS_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(surveyPayload())})
      .then(r=>r.json().catch(()=>({})).then(j=>{if(!r.ok||j.success===false||j.success==='false')throw 0}))
      .then(()=>{sv.done=true;draw();scrollTo({top:0,behavior:'smooth'})})
      .catch(()=>{next.disabled=false;next.textContent='제출';err.hidden=false});
    };
    const p=document.getElementById('sprev');if(p)p.onclick=()=>{sv.step--;draw();scrollTo({top:0,behavior:'smooth'})};
  }
  draw();
};

/* ---------- router ---------- */
const app=document.getElementById('app'),toast=document.getElementById('toast');
let toastClosed=false;
document.getElementById('toastX').onclick=document.getElementById('toastLater').onclick=()=>{toastClosed=true;toast.hidden=true};
document.querySelector('#toast .btn').addEventListener('click',()=>{toastClosed=true});
/* ---------- routing: hash (#jobs) in preview, clean paths (/jobs) on the live site ---------- */
const CLEAN=!!window.SP_CLEAN_URLS, BASE=(window.SP_BASE||'').replace(/\/$/,'');
function keyToPath(k){
  let m;
  if(!k||k==='home')return BASE+'/';
  if(m=k.match(/^job-(\d+)$/))return `${BASE}/jobs/${m[1]}`;
  if(m=k.match(/^library-(.+)$/))return `${BASE}/wise-words/${m[1]}`;
  return `${BASE}/${k}`;
}
function currentKey(){
  if(!CLEAN)return decodeURIComponent(location.hash.replace(/^#\/?/,''));
  let p=decodeURIComponent(location.pathname);
  if(BASE&&p.startsWith(BASE))p=p.slice(BASE.length);
  p=p.replace(/\/index\.html$/,'').replace(/^\/+|\/+$/g,'');
  let m;
  if(!p)return'';
  if(m=p.match(/^jobs\/(\d+)$/))return'job-'+m[1];
  if(m=p.match(/^wise-words\/([a-z0-9-]+)$/))return'library-'+m[1];
  return p;
}
function route(){
  const h=currentKey();let m;
  if(!h||h==='home')return['home'];
  if(m=h.match(/^job-(\d+)$/))return['job',m[1]];
  if(m=h.match(/^library-([a-z0-9-]+)$/))return['library',m[1]];
  if(V[h]&&!/Init$/.test(h)&&h!=='notfound')return[h];
  return['notfound'];
}
V.notfound=()=>`${hero('404','페이지를 찾을 수 없습니다','주소가 바뀌었거나 삭제된 페이지입니다.')}<div class="wrap" style="display:flex;justify-content:center;gap:10px;margin-top:-20px"><a class="btn" href="#">홈으로</a><a class="btn ghost" href="#jobs">채용 공고 보기</a></div>`;
function linkify(root){
  if(!CLEAN)return;
  root.querySelectorAll('a[href^="#"]').forEach(a=>{const k=a.getAttribute('href').slice(1);a.dataset.k=k;a.setAttribute('href',keyToPath(k))});
}
let lastKey='';
function render(keepScroll){
  const [name,arg]=route();
  app.innerHTML=V[name](arg);
  app.className=name+'-page';
  hydrateIcons(app);linkify(app);
  (V[name+'Init']||(()=>{}))(arg);
  const navKey=name==='job'?'jobs':name==='library'?'wise-words':name;
  document.querySelectorAll('[data-r]').forEach(a=>{const on=a.dataset.r===navKey;a.classList.toggle('on',on);on?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current')});
  toast.hidden=toastClosed||name!=='home';
  const key=name+(arg||'');
  if(!keepScroll&&key!==lastKey&&!(name==='jobs'&&jobState.scroll))scrollTo(0,0);
  lastKey=key;
  let t={about:'소개',jobs:'채용 공고','wise-words':'삶의 지혜','silver-guide':'정보마당','job-guide':'취업길잡이',contact:'문의',survey:'설문 조사',notfound:'페이지를 찾을 수 없습니다'}[name];
  if(name==='job'){const j=J.find(x=>String(x.order)===arg);t=j?j.title:'채용 공고'}
  if(name==='library'){const k=LIB_BY_SLUG[arg];t=k?libName(k):'삶의 지혜'}
  document.title=t?`${t} | SilverPath`:'SilverPath | 시니어 일자리 플랫폼';
}
function go(k){
  k=(k||'').replace(/^#\/?/,'');
  try{
    if(CLEAN)history.pushState(null,'',keyToPath(k));
    else history.pushState(null,'',k?'#'+k:location.pathname+location.search);
  }catch(e){try{location.hash=k}catch(_){}}
  closeLB();setMenu(false);render();
}
document.addEventListener('click',e=>{
  const a=e.target.closest('a[data-k],a[href^="#"]');
  if(!a||e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||e.button)return;
  e.preventDefault();go(a.dataset.k??a.getAttribute('href').slice(1));
});
addEventListener('hashchange',()=>{if(!CLEAN){closeLB();render()}});
addEventListener('popstate',()=>{closeLB();render()});
linkify(document);
render();
