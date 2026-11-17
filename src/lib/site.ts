export const site = {
  name: "세리온테크",
  englishName: "SerionTech",
  url: "https://seriontech.co.kr",
  email: "seriontech@seriontech.co.kr",
  contactName: "김지민",
  representative: "김지민",
  businessNumber: "834-12-03043",
  address: "경기도 용인시 기흥구 구성로279번길 23",
  businessType: "정보통신업",
  businessItems: ["응용 소프트웨어 개발 및 공급업", "컴퓨터 프로그래밍 서비스업"],
  year: 2026,
  description:
    "기업 홈페이지와 반응형 웹사이트를 제작하고, 관리자 페이지와 웹 애플리케이션, 업무 자동화를 개발합니다. 작업 범위와 비용은 시작 전에 정합니다.",
} as const;

export const images = {
  desk: "/images/studio-quiet.jpg",
  notes: "/images/notes-still.jpg",
  side: "/images/side-desk.jpg",
} as const;

export const nav = [
  { href: "/#about", label: "소개" },
  { href: "/#services", label: "서비스" },
  { href: "/#work", label: "작업" },
  { href: "/#process", label: "진행" },
] as const;

export const mobileNav = [
  { href: "/", label: "홈", emoji: "🏠" },
  { href: "/#about", label: "소개", emoji: "🏢" },
  { href: "/#services", label: "서비스", emoji: "💻" },
  { href: "/#work", label: "작업", emoji: "🗂️" },
  { href: "/contact", label: "문의하기", emoji: "✉️" },
] as const;

export const homeServices = [
  {
    index: "01",
    emoji: "🌐",
    title: "기업 홈페이지",
    line: "반응형 웹사이트 제작",
    text: "회사와 매장, 서비스와 제품을 설명하고 문의로 이어지는 사이트를 만듭니다.",
    href: "/services#packages",
  },
  {
    index: "02",
    emoji: "🗂️",
    title: "관리자 시스템",
    line: "업무용 웹 시스템 개발",
    text: "신청, 예약, 고객, 진행 상황을 화면에서 처리하는 관리 기능을 만듭니다.",
    href: "/services#systems",
  },
  {
    index: "03",
    emoji: "⚡",
    title: "업무 자동화",
    line: "반복되는 일의 자동화",
    text: "반복 입력, 알림, 자료 정리처럼 손으로 하던 일을 줄이는 흐름을 만듭니다.",
    href: "/services#systems",
  },
  {
    index: "04",
    emoji: "🔧",
    title: "유지보수",
    line: "기존 서비스 개선",
    text: "이미 있는 사이트의 오류와 화면, 속도를 손보고 운영을 이어 갑니다.",
    href: "/services#maintenance",
  },
] as const;

export const portfolio = [
  {
    title: "세리온테크 공식 사이트",
    text: "기업 소개와 문의로 이어지도록 직접 만든 웹사이트입니다.",
    kind: "자체 제작",
    tags: ["기업 홈페이지", "반응형"],
    image: images.notes,
  },
  {
    title: "업무 화면",
    text: "운영에 쓰는 화면의 예시입니다. 고객 납품 사례가 아닙니다.",
    kind: "화면 예시",
    tags: ["업무 시스템", "샘플"],
    image: images.side,
  },
] as const;

export const homeProcess = [
  { emoji: "✉️", title: "프로젝트 문의", text: "만들고 싶은 목적, 참고할 사이트, 희망 일정을 받습니다." },
  { emoji: "💬", title: "요구사항 검토 및 상담", text: "필요한 화면과 지금 쓰는 방식을 함께 확인합니다." },
  { emoji: "📝", title: "견적 및 계약", text: "작업 범위, 기간, 금액, 수정 횟수를 정하고 계약합니다." },
  { emoji: "💻", title: "디자인 및 개발", text: "정한 화면과 범위 안에서 디자인하고 개발합니다." },
  { emoji: "✅", title: "테스트 및 납품", text: "화면을 함께 확인한 뒤, 필요한 수정을 반영하고 배포합니다." },
  { emoji: "🔧", title: "유지보수 및 운영 지원", text: "원하시면 계약한 범위 안에서 점검과 수정을 이어 갑니다." },
] as const;

export const packages = [
  {
    code: "STANDARD",
    name: "기본형",
    price: "390,000원",
    days: "5일",
    pages: "1페이지",
    summary: "서비스 하나를 설명하는 랜딩형 홈페이지",
    featured: false,
    responsive: "PC, 태블릿, 모바일에 맞춰 제작합니다",
    inquiry: "한 페이지 안에 문의 폼을 넣습니다",
    admin: "포함하지 않습니다. 필요하면 따로 견적합니다",
    revisions: "수정 횟수는 계약 전에 정합니다. 그 횟수를 넘기면 1회 30,000원입니다",
    features: "회사와 서비스 소개, 반응형 화면, 문의 폼을 넣습니다",
    extras: "페이지 추가는 80,000원, 간단한 기능은 100,000원입니다. 로그인, 회원, 결제, 관리자, 외부 API는 별도 견적입니다",
    items: [
      { emoji: "🏢", text: "기업·서비스 기본 소개" },
      { emoji: "📱", text: "반응형 화면" },
      { emoji: "✉️", text: "문의로 이어지는 단일 페이지" },
    ],
  },
  {
    code: "DELUXE",
    name: "표준형",
    price: "790,000원",
    days: "10일",
    pages: "최대 5페이지",
    summary: "회사 소개와 서비스 안내가 나뉜 기업 홈페이지",
    featured: true,
    responsive: "PC, 태블릿, 모바일에 맞춰 제작합니다",
    inquiry: "문의 페이지를 포함합니다",
    admin: "포함하지 않습니다. 필요하면 따로 견적합니다",
    revisions: "수정 횟수는 계약 전에 정합니다. 그 횟수를 넘기면 1회 30,000원입니다",
    features: "회사 소개, 서비스 안내, 문의 페이지, 반응형 화면을 넣습니다",
    extras: "페이지 추가는 80,000원, 간단한 기능은 100,000원입니다. 로그인, 회원, 결제, 관리자, 외부 API는 별도 견적입니다",
    items: [
      { emoji: "🧩", text: "맞춤 페이지 구성" },
      { emoji: "🏢", text: "회사 소개와 서비스 안내" },
      { emoji: "✉️", text: "문의 페이지" },
      { emoji: "📱", text: "반응형 화면" },
    ],
  },
  {
    code: "PREMIUM",
    name: "고급형",
    price: "1,490,000원",
    days: "15일",
    pages: "최대 8페이지",
    summary: "페이지와 콘텐츠가 더 많은 맞춤 홈페이지",
    featured: false,
    responsive: "PC, 태블릿, 모바일에 맞춰 제작합니다",
    inquiry: "문의 페이지를 포함합니다",
    admin: "포함하지 않습니다. 필요하면 따로 견적합니다",
    revisions: "수정 횟수는 계약 전에 정합니다. 그 횟수를 넘기면 1회 30,000원입니다",
    features: "맞춤 디자인과 콘텐츠 페이지, 반응형 화면을 넣고 구성은 협의합니다",
    extras: "페이지 추가는 80,000원, 간단한 기능은 100,000원입니다. 로그인, 회원, 결제, 관리자, 외부 API는 별도 견적입니다",
    items: [
      { emoji: "✨", text: "고급 맞춤 디자인" },
      { emoji: "📚", text: "다양한 콘텐츠 페이지" },
      { emoji: "📱", text: "반응형 화면" },
      { emoji: "🗣️", text: "페이지별 구성 협의" },
    ],
  },
] as const;

export const addons = [
  { emoji: "✏️", name: "추가 수정", price: "30,000원", unit: "1회" },
  { emoji: "📄", name: "페이지 추가", price: "80,000원", unit: "1페이지" },
  { emoji: "➕", name: "간단한 기능 추가", price: "100,000원", unit: "1개" },
] as const;

export const separateQuote = [
  { emoji: "🔐", text: "로그인과 회원 관리" },
  { emoji: "🗂️", text: "관리자 시스템" },
  { emoji: "💳", text: "결제" },
  { emoji: "🗄️", text: "데이터베이스 설계가 필요한 기능" },
  { emoji: "🔌", text: "외부 API 연동" },
] as const;

export const homepageIncludes = [
  { emoji: "📱", text: "PC, 태블릿, 모바일 반응형 화면" },
  { emoji: "🔍", text: "페이지 제목과 설명 등 기본 검색 정보" },
  { emoji: "🌐", text: "도메인 연결 및 배포 지원" },
  { emoji: "✏️", text: "계약 전에 정한 횟수 안의 수정" },
] as const;

export const maintenancePlans = [
  {
    name: "Basic",
    price: "월 30,000원",
    meta: "점검 월 1회 · 텍스트 2건 · 이미지 2건",
    summary: "소규모 홈페이지를 위한 기본 관리 서비스",
    points: [
      ["정기 점검", "월 1회 기본 점검"],
      ["텍스트 수정", "월 2건"],
      ["이미지 교체", "월 2건"],
      ["오류 수정", "간단한 오류 확인 및 수정"],
      ["기술 지원", "이메일"],
      ["1차 응답", "영업일 기준 3일 이내"],
    ],
  },
  {
    name: "Standard",
    price: "월 50,000원",
    meta: "점검 월 1회 · 텍스트 5건 · 이미지 5건",
    summary: "정기적인 콘텐츠 변경이 필요한 기업을 위한 서비스",
    points: [
      ["정기 점검", "월 1회 기본 점검"],
      ["텍스트 수정", "월 5건"],
      ["이미지 교체", "월 5건"],
      ["레이아웃", "간단한 레이아웃 수정"],
      ["오류 수정", "기존 기능의 오류 확인 및 수정"],
      ["동작 확인", "문의 폼과 링크"],
      ["기술 지원", "이메일 및 메신저"],
      ["1차 응답", "영업일 기준 2일 이내"],
    ],
  },
  {
    name: "Premium",
    price: "월 100,000원",
    meta: "점검 월 2회 · 텍스트 10건 · 이미지 10건",
    summary: "보다 세밀한 홈페이지 관리가 필요한 기업을 위한 서비스",
    points: [
      ["정기 점검", "월 2회 기본 점검"],
      ["텍스트 수정", "월 10건"],
      ["이미지 교체", "월 10건"],
      ["레이아웃", "간단한 레이아웃 수정"],
      ["오류 수정", "기존 기능의 오류 확인 및 수정"],
      ["정기 테스트", "주요 기능과 문의 폼"],
      ["검색 정보", "페이지 제목과 설명 등 기본 상태 점검"],
      ["기술 지원", "이메일 및 메신저"],
      ["1차 응답", "영업일 기준 1일 이내"],
    ],
  },
] as const;

export const maintenanceNotes = [
  "수정 건수는 매월 제공되며, 쓰지 않은 건수는 다음 달로 넘어가지 않습니다.",
  "수정은 이미 제작된 홈페이지의 콘텐츠와 기능을 기준으로 합니다.",
  "신규 페이지 제작, 신규 기능 개발, 디자인 전면 변경, 데이터베이스 구조 변경, 외부 서비스 연동은 별도 견적입니다.",
  "서버, 도메인, 외부 유료 서비스 이용료는 별도입니다.",
  "응답 시간은 요청을 접수한 뒤의 1차 회신 기준이며, 작업이 끝나는 시간과는 다를 수 있습니다.",
  "서비스 범위와 세부 작업은 계약할 때 확정합니다.",
] as const;

export const systems = [
  { emoji: "📥", name: "간단한 신청·접수", price: "요구사항 확인 후 견적" },
  { emoji: "📅", name: "예약 관리", price: "약 690,000원부터" },
  { emoji: "👥", name: "고객·회원 관리", price: "기능에 따라 별도 견적" },
  { emoji: "⚡", name: "업무 자동화", price: "요구사항 확인 후 견적" },
  { emoji: "🧑‍💼", name: "관리자 시스템", price: "약 1,500,000원부터" },
  { emoji: "🧩", name: "복잡한 업무 시스템", price: "요구사항 분석 후 개별 견적" },
] as const;

export const systemExamples = [
  { emoji: "🏪", text: "매장과 팀의 고객 관리" },
  { emoji: "🎨", text: "공방, 학원의 예약 관리" },
  { emoji: "💬", text: "상담과 문의 접수" },
  { emoji: "📋", text: "직원과 업무 진행 관리" },
  { emoji: "📊", text: "엑셀로 하던 업무의 웹 전환" },
  { emoji: "⚡", text: "반복 입력, 알림, 자료 정리의 자동화" },
] as const;

export const offers = [
  {
    index: "01",
    emoji: "🖥️",
    title: "기업 홈페이지",
    text: "회사, 브랜드, 서비스, 제품을 설명하고 문의로 연결합니다. 없는 사이트를 새로 만들거나, 있는 사이트를 다시 구성합니다.",
    href: "/services#packages",
  },
  {
    index: "02",
    emoji: "📊",
    title: "웹 업무 시스템",
    text: "신청, 예약, 고객 관리, 반복 업무 자동화, 관리자 화면처럼 운영에 쓰는 기능을 만듭니다. 화면과 데이터에 따라 따로 견적합니다.",
    href: "/services#systems",
  },
  {
    index: "03",
    emoji: "🔧",
    title: "개선과 유지보수",
    text: "오류, 화면, 속도, 작은 기능을 고칩니다. 납품 뒤에는 월 단위 유지보수로 이어갈 수 있습니다.",
    href: "/services#maintenance",
  },
] as const;

export const steps = homeProcess;

export const fits = [
  { emoji: "🏪", text: "회사나 매장을 설명할 사이트가 필요할 때" },
  { emoji: "📨", text: "메신저와 엑셀로 받던 신청을 웹으로 옮길 때" },
  { emoji: "⚡", text: "반복해서 하던 업무를 자동으로 처리하고 싶을 때" },
  { emoji: "🔧", text: "있는 사이트의 오류와 화면을 고칠 때" },
  { emoji: "🗂️", text: "관리자 화면이 있는 업무 시스템이 필요할 때" },
] as const;

export const principles = [
  {
    emoji: "🎯",
    title: "필요한 구조만 둡니다",
    text: "모든 프로젝트에 서버와 데이터베이스를 넣지 않습니다. 소개 사이트는 소개로 끝내고, 데이터를 다뤄야 할 때만 시스템을 추가합니다.",
  },
  {
    emoji: "📄",
    title: "시작 전에 범위를 적습니다",
    text: "페이지, 기능, 디자인 방향, 일정, 비용, 수정 횟수를 문서로 정한 뒤 개발합니다.",
  },
  {
    emoji: "⚖️",
    title: "추가 개발과 오류 수정을 나눕니다",
    text: "계약 범위 안의 오류는 하자로 보완합니다. 새 페이지, 새 기능, 디자인 전면 변경은 별도 작업입니다.",
  },
  {
    emoji: "🏷️",
    title: "예시와 납품을 구분합니다",
    text: "고객 납품 사례는 공개 동의를 받은 것만 올립니다. 직접 만든 화면은 예시라고 표시합니다.",
  },
] as const;

export const stack = [
  { emoji: "🖥️", label: "화면", value: "Next.js, React, TypeScript" },
  { emoji: "⚙️", label: "서버", value: "Node.js, Next.js. 필요할 때는 NestJS" },
  { emoji: "🗄️", label: "데이터", value: "PostgreSQL, MySQL, Prisma. 필요할 때는 Redis" },
  { emoji: "☁️", label: "배포", value: "Vercel, Cloudflare. 규모가 커지면 AWS" },
] as const;

export const inquiryKinds = [
  { emoji: "💻", label: "기업 홈페이지 제작" },
  { emoji: "📄", label: "랜딩페이지 제작" },
  { emoji: "🗂️", label: "관리자 시스템 개발" },
  { emoji: "🧩", label: "웹 애플리케이션 개발" },
  { emoji: "⚡", label: "업무 자동화 및 API 연동" },
  { emoji: "🔧", label: "유지보수 및 기능 개선" },
  { emoji: "✉️", label: "기타 문의" },
] as const;

export const strengths = [
  {
    title: "필요한 기능부터",
    text: "넣을 기능은 고객의 업무에서 정합니다. 쓰지 않는 화면과 서버는 넣지 않습니다.",
  },
  {
    title: "범위와 비용은 먼저",
    text: "페이지, 기능, 일정, 금액, 수정 횟수를 개발 전에 문서로 정합니다.",
  },
  {
    title: "반응형 웹",
    text: "PC와 모바일에서 보는 반응형 웹사이트를 Next.js, React, TypeScript로 만듭니다.",
  },
  {
    title: "이후 수정과 확장",
    text: "나중에 고치고 덧붙일 수 있게 구성합니다. 새 기능은 범위를 다시 정한 뒤 진행합니다.",
  },
  {
    title: "일하는 방식에 맞춘 화면",
    text: "소개 페이지, 관리 화면, 반복 업무 정리를 실제 업무 흐름에 맞춰 제안합니다.",
  },
] as const;

export const workDemos = [
  {
    title: "기업용 관리자 대시보드",
    text: "통계, 사용자, 검색, 상세 정보를 한 화면에서 보는 관리 화면의 예시입니다.",
    points: ["대시보드 통계", "사용자 관리", "데이터 테이블", "검색·필터", "상세 정보"],
  },
  {
    title: "예약 및 고객 관리",
    text: "예약을 받고, 고객 정보와 진행 상태를 관리하는 화면의 예시입니다.",
    points: ["예약 등록", "예약 현황", "고객 정보", "상태 변경", "관리 화면"],
  },
  {
    title: "업무 자동화",
    text: "반복 작업을 정리하고, 실행 이력과 결과를 확인하는 화면의 예시입니다.",
    points: ["작업 관리", "데이터 수집", "실행 이력", "처리 결과"],
  },
] as const;

export const contactPrompts = [
  { emoji: "🎯", text: "만들고 싶은 것의 목적" },
  { emoji: "🔗", text: "참고하고 싶은 사이트" },
  { emoji: "🧩", text: "필요한 페이지나 기능" },
  { emoji: "🌐", text: "현재 홈페이지 주소" },
  { emoji: "📅", text: "희망 일정" },
] as const;

export const quoteNotice =
  "안내 금액은 확인된 요구사항을 기준으로 한 것입니다. 개발을 시작하기 전에 작업 범위와 기능을 정하고, 그 뒤에 바뀌거나 추가되는 내용은 일정과 금액을 다시 협의한 뒤 진행합니다.";
