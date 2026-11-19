import Link from "next/link";
import { packages } from "@/lib/site";

export function PackageList() {
  return (
    <div className="grid items-stretch gap-4 lg:grid-cols-3">
      {packages.map((item) => {
        const featured = item.featured;
        return (
          <article
            key={item.code}
            className={`soft-card flex flex-col p-6 sm:p-7 ${featured ? "panel-featured" : "panel"}`}
          >
            <div className="flex items-center justify-between gap-3">
              <p className={`text-xs tracking-[0.12em] ${featured ? "text-[#d5dcff]" : "text-muted"}`}>{item.code}</p>
              {featured ? <span className="kicker">먼저 제안</span> : null}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
            <p className="mt-3 text-[2rem] font-semibold tracking-[-0.04em]">{item.price}</p>
            <p className="mt-2 text-sm text-muted">
              <span className="sr-only">작업 기간과 페이지. </span>
              {item.days} · {item.pages}
            </p>
            <p className="mt-5 text-sm leading-7 text-[#c5d0df]">{item.summary}</p>
            <dl className="mt-5 border-t border-white/10">
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
                <div key={label} className="spec">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <Link href="/contact" className={`btn mt-6 ${featured ? "btn-light" : "btn-line"}`}>
              이 범위로 문의
            </Link>
          </article>
        );
      })}
    </div>
  );
}
