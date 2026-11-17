"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { type InquiryErrors, type InquiryInput, validateInquiry } from "@/lib/inquiry";
import { inquiryKinds, site } from "@/lib/site";

const fieldClass =
  "mt-2 w-full border border-white/25 bg-paper px-4 py-3 text-base text-white placeholder:text-muted/70 focus:border-[#00C8F0]";

const empty: InquiryInput = {
  kind: "",
  company: "",
  name: "",
  phone: "",
  email: "",
  title: "",
  budget: "",
  schedule: "",
  message: "",
  consent: false,
  website: "",
};

export function ContactForm() {
  const [values, setValues] = useState<InquiryInput>(empty);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [notice, setNotice] = useState("");
  const lock = useRef(false);

  function setField<K extends keyof InquiryInput>(key: K, value: InquiryInput[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (lock.current || status === "success") return;
    const nextErrors = validateInquiry(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setNotice("입력 내용을 확인해 주세요.");
      return;
    }

    lock.current = true;
    setStatus("sending");
    setNotice("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { ok?: boolean; message?: string; errors?: InquiryErrors };
      if (data.errors) setErrors(data.errors);
      if (!response.ok || !data.ok) {
        setStatus("error");
        setNotice(data.message || "문의를 보내지 못했습니다.");
        lock.current = false;
        return;
      }
      setStatus("success");
      setNotice(data.message || "문의가 접수되었습니다.");
    } catch {
      setStatus("error");
      setNotice("문의를 보내지 못했습니다. 잠시 후 다시 시도해 주세요.");
      lock.current = false;
    }
  }

  return (
    <form onSubmit={onSubmit} className="border border-white/15 bg-night p-6 sm:p-8" noValidate>
      <label className="block text-sm font-medium">
        문의 유형
        <select
          name="kind"
          required
          value={values.kind}
          onChange={(event) => setField("kind", event.target.value)}
          aria-invalid={Boolean(errors.kind)}
          className={fieldClass}
        >
          <option value="" disabled>
            선택
          </option>
          {inquiryKinds.map((kind) => (
            <option key={kind.label} value={kind.label}>
              {kind.label}
            </option>
          ))}
        </select>
        {errors.kind ? <span className="mt-1 block text-sm text-[#8adfff]">{errors.kind}</span> : null}
      </label>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          회사명 또는 상호
          <input
            name="company"
            required
            autoComplete="organization"
            value={values.company}
            onChange={(event) => setField("company", event.target.value)}
            aria-invalid={Boolean(errors.company)}
            className={fieldClass}
          />
          {errors.company ? <span className="mt-1 block text-sm text-[#8adfff]">{errors.company}</span> : null}
        </label>
        <label className="block text-sm font-medium">
          담당자명
          <input
            name="name"
            required
            autoComplete="name"
            value={values.name}
            onChange={(event) => setField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            className={fieldClass}
          />
          {errors.name ? <span className="mt-1 block text-sm text-[#8adfff]">{errors.name}</span> : null}
        </label>
        <label className="block text-sm font-medium">
          연락처
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="010-1234-5678"
            value={values.phone}
            onChange={(event) => setField("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            className={fieldClass}
          />
          {errors.phone ? <span className="mt-1 block text-sm text-[#8adfff]">{errors.phone}</span> : null}
        </label>
        <label className="block text-sm font-medium">
          이메일
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={(event) => setField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            className={fieldClass}
          />
          {errors.email ? <span className="mt-1 block text-sm text-[#8adfff]">{errors.email}</span> : null}
        </label>
      </div>
      <label className="mt-5 block text-sm font-medium">
        프로젝트 제목
        <input
          name="title"
          required
          value={values.title}
          onChange={(event) => setField("title", event.target.value)}
          aria-invalid={Boolean(errors.title)}
          className={fieldClass}
        />
        {errors.title ? <span className="mt-1 block text-sm text-[#8adfff]">{errors.title}</span> : null}
      </label>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          예상 예산
          <input
            name="budget"
            required
            placeholder="미정이면 미정"
            value={values.budget}
            onChange={(event) => setField("budget", event.target.value)}
            aria-invalid={Boolean(errors.budget)}
            className={fieldClass}
          />
          {errors.budget ? <span className="mt-1 block text-sm text-[#8adfff]">{errors.budget}</span> : null}
        </label>
        <label className="block text-sm font-medium">
          희망 완료 일정
          <input
            name="schedule"
            required
            placeholder="미정이면 미정"
            value={values.schedule}
            onChange={(event) => setField("schedule", event.target.value)}
            aria-invalid={Boolean(errors.schedule)}
            className={fieldClass}
          />
          {errors.schedule ? <span className="mt-1 block text-sm text-[#8adfff]">{errors.schedule}</span> : null}
        </label>
      </div>
      <label className="mt-5 block text-sm font-medium">
        프로젝트 상세 내용
        <textarea
          name="message"
          required
          rows={7}
          placeholder="목적, 필요한 페이지나 기능, 참고 사이트를 적어 주세요."
          value={values.message}
          onChange={(event) => setField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          className={fieldClass}
        />
        {errors.message ? <span className="mt-1 block text-sm text-[#8adfff]">{errors.message}</span> : null}
      </label>
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={values.website}
        onChange={(event) => setField("website", event.target.value)}
        className="hidden"
      />
      <label className="mt-5 flex items-start gap-3 text-sm leading-6">
        <input
          name="consent"
          type="checkbox"
          required
          checked={values.consent}
          onChange={(event) => setField("consent", event.target.checked)}
          className="mt-1"
        />
        <span>
          개인정보 수집 및 이용에 동의합니다. 문의 접수와 회신에만 사용하며, 내용은 데이터베이스에 저장하지 않고 대표
          메일로 전달합니다.{" "}
          <Link href="/privacy" className="underline underline-offset-4">
            개인정보 처리 안내
          </Link>
        </span>
      </label>
      {errors.consent ? <p className="mt-1 text-sm text-[#8adfff]">{errors.consent}</p> : null}
      <button
        type="submit"
        disabled={status === "sending" || status === "success"}
        className="mt-6 inline-flex bg-white px-5 py-3 text-sm font-medium text-[#080E1B] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "보내는 중" : status === "success" ? "접수됨" : "문의 보내기"}
      </button>
      <p className="mt-4 text-sm leading-6 text-muted">
        접수한 내용은 {site.email}로만 전달되고, 서버에는 저장하지 않습니다.
      </p>
      {notice ? (
        <p className="mt-3 text-sm font-medium" role="status">
          {notice}
        </p>
      ) : null}
    </form>
  );
}
