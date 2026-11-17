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
    <header
      className={`border-b border-white/10 bg-paper text-white ${split ? "lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.72fr)] lg:items-end" : ""}`}
    >
      <div className="px-5 py-12 sm:px-8 lg:py-16 lg:pr-12 lg:pl-[max(2rem,calc((100vw-1180px)/2+2rem))]">
        <p className="text-sm text-[#8adfff]">{eyebrow}</p>
        <h1 className="mt-3 max-w-[13em] text-[2.1rem] font-semibold leading-[1.22] tracking-[-0.04em] sm:text-[2.7rem]">
          {title}
        </h1>
        {children ? <div className="mt-5 max-w-xl text-sm leading-7 text-[#c5d0df] sm:text-base">{children}</div> : null}
      </div>
      {aside ? (
        <div className="px-5 pb-12 sm:px-8 lg:py-16 lg:pr-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:pl-0">{aside}</div>
      ) : null}
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
    </header>
  );
}
