import Image from "next/image";

export function Photo({
  src,
  alt,
  priority = false,
  sizes,
  position = "center",
  fit = "cover",
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes: string;
  position?: string;
  fit?: "cover" | "contain";
  className?: string;
}) {
  return (
    <div className={`photo relative overflow-hidden ${fit === "contain" ? "bg-[#071833]" : "bg-[#e7e2d8]"} ${className}`}>
      <div className="photo-zoom h-full w-full">
        <div className="photo-in relative h-full w-full">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={fit === "contain" ? "object-contain" : "object-cover"}
            style={{ objectPosition: position }}
          />
        </div>
      </div>
    </div>
  );
}
