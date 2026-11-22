import Image from "next/image";
import { judoImages } from "@/lib/judosector";

function MonitorFrame({
  src,
  alt,
  label,
  wide = false,
  onDark = false,
}: {
  src: string;
  alt: string;
  label: string;
  wide?: boolean;
  onDark?: boolean;
}) {
  return (
    <figure className={wide ? "w-full" : "w-full max-w-[680px]"}>
      <div
        className={`rounded-[1.15rem] bg-[#1b2230] p-2.5 ${onDark ? "shadow-[0_24px_50px_rgba(0,0,0,0.45)] ring-1 ring-white/12" : "shadow-[0_24px_60px_rgba(15,23,42,0.18)]"}`}
      >
        <div className="mb-2 flex items-center gap-1.5 px-1.5" aria-hidden>
          <span className="size-2 rounded-full bg-white/25" />
          <span className="size-2 rounded-full bg-white/25" />
          <span className="size-2 rounded-full bg-white/25" />
        </div>
        <div className={`relative aspect-[16/10] overflow-hidden rounded-lg ${onDark ? "bg-[#070b14]" : "bg-white"}`}>
          <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 860px, 92vw" className="object-cover object-top" />
        </div>
      </div>
      <div className={`mx-auto h-4 w-16 ${onDark ? "bg-[#2c3548]" : "bg-[#d5dce8]"}`} aria-hidden />
      <div className={`mx-auto h-2.5 w-32 rounded-b-xl ${onDark ? "bg-[#3d4b63]" : "bg-[#c5cfde]"}`} aria-hidden />
      <figcaption className={`mt-3 text-center text-xs font-medium ${onDark ? "text-muted" : "text-[#5c6b82]"}`}>{label}</figcaption>
    </figure>
  );
}

export function DevicePair({
  title,
  monitor,
  phone,
  compact = false,
}: {
  title: string;
  monitor: { src: string; alt: string };
  phone: { src: string; alt: string };
  compact?: boolean;
}) {
  return (
    <div className={compact ? "px-3 py-8 sm:px-5 sm:py-10" : "rounded-[1.75rem] bg-[#eef3f8] px-4 py-8 sm:px-8 sm:py-10"}>
      <p className={`text-center text-sm font-medium ${compact ? "text-[#c9d4ff]" : "text-[#3d4d66]"}`}>{title}</p>
      <div className={compact ? "mt-6 flex flex-col items-center" : "mt-7 flex flex-col items-center gap-8 lg:flex-row lg:items-end lg:justify-center"}>
        <div className={compact ? "w-full" : undefined}>
          <MonitorFrame src={monitor.src} alt={monitor.alt} label="PC 웹" wide={compact} onDark={compact} />
        </div>
        <div className={compact ? "z-10 -mt-6 self-end pr-2 sm:-mt-10" : undefined}>
          <PhoneFrame
            src={phone.src}
            alt={phone.alt}
            label="모바일 웹"
            wide={compact}
            onDark={compact}
            frameClass={compact ? "w-[118px] sm:w-[136px]" : undefined}
          />
        </div>
      </div>
    </div>
  );
}

export function PhoneFrame({
  src,
  alt,
  label,
  wide = false,
  onDark = false,
  aspect = "9/19.5",
  frameClass,
}: {
  src: string;
  alt: string;
  label: string;
  wide?: boolean;
  onDark?: boolean;
  aspect?: "9/19.5" | "9/16";
  frameClass?: string;
}) {
  return (
    <figure className={`${frameClass ?? (wide ? "w-[172px] sm:w-[200px]" : "w-[132px] sm:w-[150px]")} shrink-0`}>
      <div
        className={`rounded-[1.55rem] bg-[#1b2230] p-1.5 ${onDark ? "shadow-[0_18px_40px_rgba(0,0,0,0.5)] ring-1 ring-white/12" : "shadow-[0_18px_40px_rgba(15,23,42,0.16)]"}`}
      >
        <div className={`relative overflow-hidden rounded-[1.25rem] ${aspect === "9/16" ? "aspect-[9/16]" : "aspect-[9/19.5]"} ${onDark ? "bg-[#070b14]" : "bg-white"}`}>
          <Image src={src} alt={alt} fill sizes="200px" className="object-cover object-top" />
        </div>
      </div>
      <figcaption className={`mt-3 text-center text-xs font-medium ${onDark ? "text-muted" : "text-[#5c6b82]"}`}>{label}</figcaption>
    </figure>
  );
}

export function ServiceStage({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "px-3 py-8 sm:px-4 sm:py-10" : "py-2"}>
      <p className="text-center text-sm font-medium text-[#c9d4ff]">PC 웹 · 모바일 웹 · Android 앱</p>
      <div className={compact ? "mt-6 flex flex-col items-center" : "mt-6 flex flex-col items-center lg:flex-row lg:items-end lg:justify-center"}>
        <div className={compact ? "w-full" : "w-full lg:min-w-0 lg:flex-1"}>
          <MonitorFrame src={judoImages.webHome} alt="주도섹터 PC 웹 홈" label="PC 웹" wide onDark />
        </div>
        <div
          className={
            compact
              ? "z-10 -mt-4 flex items-end justify-center gap-3 self-end pr-2 sm:-mt-8 sm:gap-4"
              : "z-10 mt-6 flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-4 lg:-ml-6 lg:mb-8 lg:mt-0"
          }
        >
          <PhoneFrame
            src={judoImages.webMobile}
            alt="주도섹터 모바일 웹 홈"
            label="모바일 웹"
            onDark
            frameClass={compact ? "w-[108px] sm:w-[124px]" : "w-[168px] sm:w-[176px]"}
          />
          <PhoneFrame
            src={judoImages.androidHome}
            alt="주도섹터 Android 앱 홈"
            label="Android 앱"
            onDark
            aspect="9/16"
            frameClass={compact ? "w-[108px] sm:w-[128px]" : "w-[168px] sm:w-[188px]"}
          />
        </div>
      </div>
    </div>
  );
}

export function WebShot({
  src,
  alt,
  label,
  className = "w-full",
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="rounded-xl bg-[#1b2230] p-2 shadow-[0_16px_40px_rgba(0,0,0,0.35)] ring-1 ring-white/12">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[#070b14]">
          <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 480px, 92vw" className="object-cover object-top" />
        </div>
      </div>
      <figcaption className="mt-2 text-center text-xs font-medium text-muted">{label}</figcaption>
    </figure>
  );
}

export function ScreenPair({
  web,
  phone,
  webAlt,
  phoneAlt,
  phoneLabel = "Android 앱",
  phoneAspect = "9/16",
}: {
  web?: string;
  phone?: string;
  webAlt?: string;
  phoneAlt?: string;
  phoneLabel?: string;
  phoneAspect?: "9/19.5" | "9/16";
}) {
  if (!web && !phone) return null;
  return (
    <div className={`flex flex-col items-center gap-5 ${web && phone ? "lg:flex-row lg:items-end" : ""}`}>
      {web ? (
        <WebShot
          src={web}
          alt={webAlt ?? ""}
          label="PC 웹"
          className={phone ? "w-full flex-1" : "mx-auto w-full max-w-[920px]"}
        />
      ) : null}
      {phone ? (
        <PhoneFrame src={phone} alt={phoneAlt ?? ""} label={phoneLabel} aspect={phoneAspect} onDark frameClass="w-[150px] sm:w-[168px]" />
      ) : null}
    </div>
  );
}
