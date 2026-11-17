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
              {item.code} · {item.name}
              {featured ? " · 먼저 제안" : ""}
            </p>
            <p className="mt-5 text-[2rem] font-semibold tracking-[-0.03em]">{item.price}</p>
            <p className="mt-2 text-sm text-muted">
              <span className="sr-only">작업 기간과 페이지. </span>
              {item.days} · {item.pages}
            </p>
            <p className="mt-5 text-sm leading-7 text-[#c5d0df]">{item.summary}</p>
            <dl className="mt-5 space-y-3 border-t border-white/15 pt-5 text-sm leading-6">
              {[
                ["페이지", `${item.pages}로 구성합니다`],
                ["납품 기간", `자료가 준비된 뒤 ${item.days}입니다`],
                ["반응형", item.responsive],
                ["기본 기능", item.features],
                ["문의 폼", item.inquiry],
                ["관리자 기능", item.admin],
                ["수정", item.revisions],
                ["추가 비용", item.extras],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-[#8adfff]">{label}</dt>
                  <dd className="mt-1">{value}</dd>
                </div>
              ))}
            </dl>
          </article>
        );
      })}
    </div>
  );
}
