import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "./Container";

const pages = [
  { href: "/about", label: "회사 소개" },
  { href: "/services", label: "서비스와 비용" },
  { href: "/contact", label: "상담 신청" },
  { href: "/privacy", label: "개인정보 처리 안내" },
];

const anchors = [
  { href: "/services#packages", label: "기업 홈페이지" },
  { href: "/services#systems", label: "맞춤 웹 시스템" },
  { href: "/services#maintenance", label: "유지보수" },
];

export function Footer() {
  return (
    <footer className="site-footer border-t border-white/10 bg-[#05070e] text-white">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.8fr]">
          <div>
            <p className="text-lg font-semibold tracking-[-0.03em]">{site.englishName}</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-muted">{site.description}</p>
            <a className="mt-5 inline-flex text-sm text-[#c9d4ff] underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <div>
            <p className="text-xs tracking-[0.14em] text-muted">페이지</p>
            <ul className="mt-4 space-y-2 text-sm">
              {pages.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/85 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.14em] text-muted">작업 범위</p>
            <ul className="mt-4 space-y-2 text-sm">
              {anchors.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/85 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 space-y-1 border-t border-white/10 pt-6 text-sm leading-7 text-muted">
          <p>{site.address}</p>
          <p>
            상호 {site.name} · 대표 {site.representative} · 사업자등록번호 {site.businessNumber}
          </p>
          <p>
            {site.businessType} · {site.businessItems.join(" · ")}
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.year} {site.name}
          </p>
          <p>이 사이트는 Next.js로 제작했습니다.</p>
        </div>
      </Container>
    </footer>
  );
}
