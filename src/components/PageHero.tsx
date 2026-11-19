import type { ReactNode } from "react";
import { Photo } from "./Photo";

export function PageHero({
  eyebrow,
  title,
  children,
  aside,
  image,
  imageAlt,
  imagePosition = "center",
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  aside?: ReactNode;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
}) {
  const split = Boolean(image || aside);

  return (
    <header className="relative overflow-hidden border-b border-white/10 text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_280px_at_80%_0%,rgba(99,91,255,0.22),transparent_60%)]"
        aria-hidden
      />
      <div
        className={`relative mx-auto w-full max-w-[1180px] ${split ? "lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.72fr)] lg:items-end" : ""}`}
      >
        <div className="px-5 py-14 sm:px-8 lg:py-20 lg:pr-12">
          <p className="kicker">{eyebrow}</p>
          <h1 className="mt-5 max-w-[13em] text-[2.15rem] font-semibold leading-[1.18] tracking-[-0.045em] sm:text-[2.85rem]">
            {title}
          </h1>
          {children ? <div className="mt-5 max-w-xl text-sm leading-7 text-[#c5d0df] sm:text-base">{children}</div> : null}
        </div>
        {aside ? <div className="px-5 pb-14 sm:px-8 lg:py-20 lg:pr-8 lg:pl-0">{aside}</div> : null}
        {image ? (
          <div className="relative min-h-[56vw] sm:min-h-[380px] lg:min-h-full">
            <Photo
              src={image}
              alt={imageAlt ?? ""}
              position={imagePosition}
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        ) : null}
      </div>
    </header>
  );
}
