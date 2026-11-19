import { workDemos } from "@/lib/site";

const visuals = [
  <div key="dash" className="grid grid-cols-3 gap-2" aria-hidden>
    {[
      ["문의", "24"],
      ["진행", "8"],
      ["완료", "16"],
    ].map(([label, value]) => (
      <div key={label} className="rounded-xl bg-black/30 px-3 py-3">
        <p className="text-[11px] text-muted">{label}</p>
        <p className="mt-1 text-lg font-semibold">{value}</p>
      </div>
    ))}
  </div>,
  <ul key="book" className="space-y-2" aria-hidden>
    {[
      ["14:00", "상담", "확정"],
      ["16:30", "예약", "대기"],
      ["내일", "방문", "접수"],
    ].map(([time, name, state]) => (
      <li key={time} className="flex items-center justify-between rounded-xl bg-black/30 px-3 py-2 text-xs">
        <span className="text-muted">{time}</span>
        <span>{name}</span>
        <span className="rounded-full bg-[#3ad7ff]/15 px-2 py-0.5 text-[#9eecff]">{state}</span>
      </li>
    ))}
  </ul>,
  <ol key="auto" className="space-y-2" aria-hidden>
    {["자료 수집", "정리", "알림 발송"].map((step, index) => (
      <li key={step} className="flex items-center gap-3 rounded-xl bg-black/30 px-3 py-2 text-xs">
        <span className="flex size-5 items-center justify-center rounded-full bg-[#635bff] text-[10px]">{index + 1}</span>
        <span className="flex-1">{step}</span>
        <span className="text-[#9eecff]">완료</span>
      </li>
    ))}
  </ol>,
];

export function WorkSamples() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {workDemos.map((item, index) => (
        <article key={item.title} className="soft-card panel flex flex-col overflow-hidden">
          <div className="flex min-h-[8.5rem] flex-col justify-center border-b border-white/10 bg-[#0c1424] p-4">{visuals[index]}</div>
          <div className="flex flex-1 flex-col p-6">
            <p className="text-xs tracking-[0.12em] text-[#9eb6ff]">화면 예시</p>
            <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
            <ul className="mt-4 space-y-1.5 text-sm leading-6">
              {item.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-[#635bff]" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
