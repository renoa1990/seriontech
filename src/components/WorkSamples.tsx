import { workDemos } from "@/lib/site";

export function WorkSamples() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {workDemos.map((item) => (
        <article key={item.title} className="soft-card flex flex-col border border-white/15 bg-night p-6">
          <p className="text-sm text-[#8adfff]">예시</p>
          <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
          <ul className="mt-4 space-y-1 text-sm leading-6">
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
