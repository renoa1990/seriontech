import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center">
      <Image
        src="/brand/logo-lockup.png"
        alt="세리온테크"
        width={1024}
        height={194}
        priority
        unoptimized
        className="h-11 w-auto"
      />
    </Link>
  );
}
