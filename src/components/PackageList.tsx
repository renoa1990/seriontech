import { packages } from "@/lib/site";

export function PackageList() {
  return (
    <div className="grid items-stretch gap-4 lg:grid-cols-3">
      {packages.map((item) => {
        const featured = item.featured;
        return (
          <article
            key={item.code}
            className={`soft-card flex flex-col border p-6 sm:p-7 ${
              featured ? "is-featured border-[#00C8F0]/50 bg-[#126BFF]/15" : "border-white/10 bg-night"
            }`}
          >
            <p className={`text-sm ${featured ? "text-[#8adfff]" : "text-muted"}`}>
              {item.code}
              {featured ? " · 먼저 제안" : ""}
            </p>
            <p className="mt-5 text-[2rem] font-semibold tracking-[-0.03em]">{item.price}</p>
            <p className="mt-2 text-sm text-muted">
              <span className="sr-only">작업 기간과 페이지. </span>
              {item.days} · {item.pages}
            </p>
            <p className="mt-5 text-sm leading-7 text-[#c5d0df]">{item.summary}</p>
            <ul className="mt-auto space-y-2 border-t border-white/15 pt-5 text-sm leading-6">
              {item.items.map((point) => (
                <li key={point.text}>{point.text}</li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
}
