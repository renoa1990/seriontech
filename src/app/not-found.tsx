import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100svh-4rem)] items-center bg-paper text-white">
      <Container className="py-20">
        <p className="text-sm text-[#8adfff]">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">페이지를 찾을 수 없습니다</h1>
        <p className="mt-4 max-w-md text-sm leading-7 text-[#c5d0df]">주소가 바뀌었거나 없는 페이지입니다.</p>
        <Link href="/" className="mt-8 inline-flex bg-white px-5 py-3 text-sm font-medium text-[#080E1B]">
          홈으로
        </Link>
      </Container>
    </div>
  );
}
