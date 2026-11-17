import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "./Container";

const links = [
  { href: "/", label: "홈" },
  { href: "/about", label: "회사 소개" },
  { href: "/services", label: "서비스" },
  { href: "/contact", label: "문의" },
];

export function Footer() {
  return (
    <footer className="site-footer border-t border-white/10 bg-black text-white">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <a className="text-base underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-base">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-sm leading-7 text-muted">
            <p>{site.address}</p>
            <dl className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              <div>
                <dt className="sr-only">상호</dt>
                <dd>상호 {site.name}</dd>
              </div>
              <div>
                <dt className="sr-only">대표</dt>
                <dd>대표 {site.representative}</dd>
              </div>
              <div>
                <dt className="sr-only">사업자등록번호</dt>
                <dd>사업자등록번호 {site.businessNumber}</dd>
              </div>
              <div>
                <dt className="sr-only">업태</dt>
                <dd>업태 {site.businessType}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="sr-only">종목</dt>
                <dd>{site.businessItems.join(" · ")}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 text-sm text-muted lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {site.year} {site.name}
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/privacy" className="underline underline-offset-4">
              개인정보 처리 안내
            </Link>
            <span>이 사이트는 Next.js로 제작했습니다.</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
