const stats = [
  { label: "오늘 문의", value: "12" },
  { label: "진행 중", value: "7" },
  { label: "확인 대기", value: "4" },
];

const bars = [42, 68, 51, 84, 60, 92, 73];

const rows = [
  ["기업 소개 사이트", "표준형", "디자인"],
  ["예약 관리 화면", "시스템", "개발"],
  ["문구·이미지 수정", "유지보수", "대기"],
];

export function DashboardPreview() {
  return (
    <div className="panel relative overflow-hidden shadow-[0_40px_90px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 min-w-0 truncate text-xs text-muted">관리 화면 예시 · 샘플 수치</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[5.5rem_1fr]">
        <aside className="hidden border-r border-white/10 bg-black/20 p-3 sm:block">
          <div className="mb-4 h-7 w-7 rounded-lg bg-gradient-to-br from-[#635bff] to-[#3ad7ff]" />
          {["개요", "문의", "예약", "작업"].map((item, index) => (
            <div
              key={item}
              className={`mb-1 rounded-lg px-2 py-2 text-[11px] ${index === 0 ? "bg-white/10 text-white" : "text-muted"}`}
            >
              {item}
            </div>
          ))}
        </aside>
        <div className="p-4 sm:p-5">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-black/25 px-2.5 py-3 sm:px-3">
                <p className="text-[11px] text-muted">{item.label}</p>
                <p className="mt-1 text-xl font-semibold tracking-[-0.04em] sm:text-2xl">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3">
            <div className="flex items-end gap-2 h-24">
              {bars.map((height) => (
                <span
                  key={height}
                  className="flex-1 rounded-md bg-gradient-to-t from-[#126bff] to-[#8d86ff]"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          <ul className="mt-3 divide-y divide-white/10 rounded-xl border border-white/10">
            {rows.map(([name, kind, state]) => (
              <li key={name} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 py-2.5 text-xs sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:gap-3">
                <span className="min-w-0">{name}</span>
                <span className="hidden text-muted sm:inline">{kind}</span>
                <span className="rounded-full bg-[#635bff]/20 px-2 py-0.5 text-[#d5dcff]">{state}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
