import { inquiryKinds } from "@/lib/site";

const kindLabels: readonly string[] = inquiryKinds.map((item) => item.label);

export type InquiryInput = {
  kind: string;
  company: string;
  name: string;
  phone: string;
  email: string;
  title: string;
  budget: string;
  schedule: string;
  message: string;
  consent: boolean;
  website: string;
};

export type InquiryErrors = Partial<Record<Exclude<keyof InquiryInput, "website" | "consent"> | "consent", string>>;

const limits = {
  company: 80,
  name: 40,
  phone: 20,
  email: 120,
  title: 120,
  budget: 60,
  schedule: 60,
  message: 4000,
} as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isPhone(value: string) {
  const compact = value.trim().replace(/[\s().]/g, "");
  if (!/^\+?[0-9-]+$/.test(compact)) return false;
  const digits = compact.replace(/\D/g, "");
  if (compact.startsWith("+")) return digits.length >= 10 && digits.length <= 15;
  if (!compact.startsWith("0")) return false;
  return digits.length >= 9 && digits.length <= 11;
}

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max + 1) : "";
}

export function validateInquiry(input: InquiryInput) {
  const errors: InquiryErrors = {};
  if (!kindLabels.includes(input.kind)) errors.kind = "문의 유형을 선택해 주세요.";
  if (!input.company) errors.company = "회사명 또는 상호를 입력해 주세요.";
  else if (input.company.length > limits.company) errors.company = "회사명은 80자 안으로 입력해 주세요.";
  if (!input.name) errors.name = "담당자명을 입력해 주세요.";
  else if (input.name.length > limits.name) errors.name = "담당자명은 40자 안으로 입력해 주세요.";
  if (!input.phone) errors.phone = "연락처를 입력해 주세요.";
  else if (!isPhone(input.phone)) errors.phone = "연락처 형식을 확인해 주세요. 예: 010-1234-5678";
  if (!input.email) errors.email = "이메일을 입력해 주세요.";
  else if (input.email.length > limits.email || !emailPattern.test(input.email)) errors.email = "이메일 형식을 확인해 주세요.";
  if (!input.title) errors.title = "프로젝트 제목을 입력해 주세요.";
  else if (input.title.length > limits.title) errors.title = "제목은 120자 안으로 입력해 주세요.";
  if (!input.budget) errors.budget = "예상 예산을 입력해 주세요. 미정이면 미정이라고 적어 주세요.";
  else if (input.budget.length > limits.budget) errors.budget = "예산은 60자 안으로 입력해 주세요.";
  if (!input.schedule) errors.schedule = "희망 완료 일정을 입력해 주세요. 미정이면 미정이라고 적어 주세요.";
  else if (input.schedule.length > limits.schedule) errors.schedule = "일정은 60자 안으로 입력해 주세요.";
  if (!input.message) errors.message = "프로젝트 내용을 입력해 주세요.";
  else if (input.message.length > limits.message) errors.message = "내용은 4000자 안으로 입력해 주세요.";
  if (!input.consent) errors.consent = "개인정보 수집 및 이용에 동의해 주세요.";
  return errors;
}

export function readInquiry(body: unknown): InquiryInput | null {
  if (!body || typeof body !== "object") return null;
  const value = body as Record<string, unknown>;
  return {
    kind: text(value.kind, 40),
    company: text(value.company, limits.company),
    name: text(value.name, limits.name),
    phone: text(value.phone, limits.phone),
    email: text(value.email, limits.email),
    title: text(value.title, limits.title),
    budget: text(value.budget, limits.budget),
    schedule: text(value.schedule, limits.schedule),
    message: text(value.message, limits.message),
    consent: value.consent === true,
    website: text(value.website, 200),
  };
}

export function inquiryMessage(input: InquiryInput) {
  return [
    `문의 유형: ${input.kind}`,
    `회사명·상호: ${input.company}`,
    `담당자명: ${input.name}`,
    `연락처: ${input.phone}`,
    `이메일: ${input.email}`,
    `프로젝트 제목: ${input.title}`,
    `예상 예산: ${input.budget}`,
    `희망 완료 일정: ${input.schedule}`,
    "",
    input.message,
  ].join("\n");
}
