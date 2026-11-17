import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { pageShare, site } from "@/lib/site";

const description =
  "세리온테크 문의의 수집 항목, 메일 전달, 1년 보관, 열람과 삭제 요청 방법을 안내합니다. 문의는 데이터베이스에 저장하지 않습니다.";

export const metadata: Metadata = {
  title: "개인정보 처리 안내",
  description,
  ...pageShare("/privacy", "개인정보 처리 안내 | 세리온테크", description),
};

const sections = [
  {
    title: "처리 목적",
    body: "홈페이지 문의를 접수하고, 상담과 회신, 요구사항 확인, 견적 안내, 계약과 서비스 제공에 필요한 연락을 하기 위해서입니다. 마케팅 메일은 보내지 않습니다.",
  },
  {
    title: "수집 항목",
    body: "문의 항목은 모두 필수입니다. 선택 항목은 없습니다. 문의 유형, 회사명 또는 상호, 담당자명, 연락처, 이메일, 프로젝트 제목, 예상 예산, 희망 완료 일정, 프로젝트 상세 내용입니다. 예산이나 일정이 없으면 미정이라고 적습니다. 개인정보 수집 및 이용에 동의하지 않으면 문의는 접수되지 않습니다.",
  },
  {
    title: "수집 및 처리 방식",
    body: "문의 보내기를 누르면 입력 내용이 이 사이트 서버로 전달되고, 서버가 대표 메일로 보냅니다. 방문자의 메일 앱을 여는 방식은 아닙니다. 문의 내용은 홈페이지 데이터베이스에 저장하지 않습니다. 같은 문의를 반복해서 보내는 것을 막기 위해 이메일과 제목, 접속 정보는 서버 메모리에 잠시만 두며, 이 기록도 데이터베이스에 남기지 않습니다.",
  },
  {
    title: "보유 및 이용 기간",
    body: "일반 문의 개인정보는 문의 처리가 끝난 뒤 1년간 대표 메일함에 보관합니다. 메일함도 이 기간에 맞춰 운영하고, 사이트에 자동 삭제 기능은 없습니다. 계약과 거래 관련 자료는 관계 법령이 정한 기간 동안 보관합니다. 보유 기간이 지나거나 처리 목적이 달성되면 지체 없이 삭제합니다.",
  },
  {
    title: "제3자 제공",
    body: "해당 없음. 법령에 따라 제공이 요구되는 경우는 예외입니다.",
  },
  {
    title: "처리 위탁",
    body: "Vercel에는 홈페이지 운영, 문의 접수 뒤의 메일 발송, 방문 수와 페이지 조회수 집계를 맡깁니다. 하이웍스에는 대표 메일 수신과 보관을 맡깁니다.",
  },
  {
    title: "국외 이전",
    body: "문의 처리 함수는 서울 리전에서 실행됩니다. 문의 내용은 데이터베이스에 저장되지 않고 국내 메일 서비스인 하이웍스로 전달됩니다. 그 요청이 Vercel의 다른 국가 시스템으로 전달되는지는 이 계정의 설정과 공개 자료로 확인되지 않았습니다. 방문 수 집계 정보가 보관되는 국가도 확인되지 않았습니다. 확인되지 않은 이전 국가, 이전 항목, 보유 기간은 적지 않습니다.",
  },
  {
    title: "파기",
    body: "전자 파일 형태의 개인정보는 복구하기 어렵도록 삭제합니다. 이메일에 있는 개인정보는 보유 기간이 지나거나 삭제할 사유가 생기면 메일함에서 삭제합니다. 법령에 따라 남겨야 하는 정보는 그 기간 동안 따로 보관합니다.",
  },
  {
    title: "정보주체의 권리",
    body: `정보주체는 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지를 요구할 수 있습니다. 모든 요청은 공식 이메일 ${site.email} 로 하면 됩니다. 요청을 확인한 뒤 처리합니다.`,
  },
  {
    title: "자동으로 처리되는 정보",
    body: "방문 수와 페이지 조회수는 Vercel Web Analytics로 집계합니다. 페이지 주소, 유입 주소, 기기와 브라우저 종류, 접속 지역이 포함될 수 있습니다. 쿠키는 쓰지 않고, 방문 구분용 해시는 24시간 뒤 버려집니다. 문의 내용은 집계하지 않습니다. 이 계정은 Hobby 플랜이라 집계 통계는 1개월 동안 조회가 보장되고, Vercel이 그보다 오래 보관할 수 있습니다. 이 사이트가 정한 삭제 기간은 없습니다. 반복 제출을 막기 위해 접속 정보와 이메일, 제목을 서버 메모리에 최대 10분 두며, 데이터베이스에는 남기지 않습니다. 광고 스크립트는 없습니다.",
  },
  {
    title: "안전성 확보",
    body: "홈페이지 접속은 HTTPS로 암호화됩니다. 문의 내용은 홈페이지 데이터베이스와 관리 화면에 두지 않습니다. 대표 메일함은 메일 계정으로만 엽니다. 메일 발송 비밀번호는 소스 코드에 두지 않고 배포 환경의 비밀 값으로만 둡니다. 문의는 이 사이트에서 보낸 요청만 받고, 짧은 시간 안의 반복 제출을 막습니다. 메일은 보안 연결로 보냅니다.",
  },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <header className="border-b border-white/10 bg-paper text-white">
        <Container className="py-12 lg:py-16">
          <p className="text-sm text-[#8adfff]">개인정보</p>
          <h1 className="mt-3 max-w-[12em] text-[2.1rem] font-semibold leading-[1.22] tracking-[-0.04em] sm:text-[2.7rem]">
            개인정보 처리 안내
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#c5d0df] sm:text-base">
            {`${site.name}는 문의 접수와 방문 수 집계에서 다루는 정보를 아래와 같이 처리합니다. 이 안내는 2026년 11월 17일부터 적용합니다.`}
          </p>
        </Container>
      </header>
      <section className="bg-paper">
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl">
          <dl className="grid gap-4">
            {sections.map((section) => (
              <div key={section.title} className="border-t border-line py-5">
                <dt className="text-base font-semibold">{section.title}</dt>
                <dd className="mt-2 text-sm leading-7 text-muted">{section.body}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 border border-white/15 bg-night px-6 py-5 text-sm leading-7">
            <p>개인정보 보호책임자: {site.representative}</p>
            <p className="mt-1">
              개인정보 관련 문의:{" "}
              <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p className="mt-1 text-muted">{site.address}</p>
          </div>
          <Link href="/contact" className="mt-8 inline-flex bg-white px-5 py-3 text-sm font-medium text-[#080E1B]">
            문의하기
          </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
