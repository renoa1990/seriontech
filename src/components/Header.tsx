"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Container } from "./Container";
import { Logo } from "./Logo";

const menu = [
  { href: "/about", label: "소개", emoji: "🏢" },
  { href: "/services", label: "서비스", emoji: "✨" },
  { href: "/#process", label: "진행", emoji: "🧭" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpenPath(null);

  return (
    <>
      <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black text-white">
        <Container className="flex h-16 items-center justify-between">
          <Logo />
          <div className="flex items-center gap-1 sm:gap-2">
            <nav aria-label="주요" className="mr-3 hidden items-center lg:flex">
              {menu.map((item) => {
                const current = item.href === pathname;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`nav-link px-3 py-2 text-[15px] ${current ? "is-current" : ""}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              href="/contact"
              onClick={close}
              className="inline-flex items-center bg-white px-4 py-2 text-sm font-medium text-[#080E1B]"
            >
              문의
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpenPath(open ? null : pathname)}
            >
              <span className="sr-only">{open ? "메뉴 닫기" : "메뉴 열기"}</span>
              <span className={`ham ${open ? "is-open" : ""}`} aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </Container>
      </header>
      <div
        id="site-menu"
        className={`menu-panel fixed inset-0 z-40 bg-paper text-white lg:hidden ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        inert={!open}
      >
          <Container className="flex h-full flex-col pt-24 pb-8">
            <nav aria-label="메뉴" className="flex flex-col">
              {menu.map((item, index) => {
                const current = item.href === pathname;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    tabIndex={open ? 0 : -1}
                    aria-current={current ? "page" : undefined}
                    className="menu-link w-fit py-2 text-[1.75rem] font-semibold leading-9 tracking-[-0.03em]"
                    style={{ animationDelay: `${80 + index * 30}ms` }}
                  >
                    <span className="mr-3" aria-hidden="true">
                      {item.emoji}
                    </span>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <a
              className="menu-link mt-10 w-fit text-base underline underline-offset-4"
              href={`mailto:${site.email}`}
              tabIndex={open ? 0 : -1}
              style={{ animationDelay: "200ms" }}
            >
              {site.email}
            </a>
            <div className="mt-auto flex flex-col items-start gap-4 text-sm text-muted">
              <Link
                href="/privacy"
                onClick={close}
                tabIndex={open ? 0 : -1}
                className="menu-link underline underline-offset-4"
                style={{ animationDelay: "260ms" }}
              >
                개인정보 처리 안내
              </Link>
              <p className="menu-link underline underline-offset-4" style={{ animationDelay: "290ms" }}>
                {site.address}
              </p>
            </div>
          </Container>
      </div>
    </>
  );
}
