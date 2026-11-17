import type { ReactNode } from "react";

export function SectionHeading({
  index,
  title,
  children,
  as = "h2",
}: {
  index: string;
  title: string;
  children?: ReactNode;
  tone?: "light" | "dark";
  as?: "h1" | "h2";
}) {
  const Title = as;

  return (
    <div className="max-w-2xl">
      <p className="text-sm text-muted">{index}</p>
      <Title className="mt-3 text-[1.75rem] font-semibold leading-snug tracking-[-0.03em] sm:text-4xl">
        {title}
      </Title>
      {children ? <div className="mt-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">{children}</div> : null}
    </div>
  );
}
