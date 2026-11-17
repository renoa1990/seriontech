import nodemailer from "nodemailer";
import { site } from "@/lib/site";

export function mailConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

export async function sendInquiryMail(input: { subject: string; text: string; replyTo: string }) {
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;
  const user = process.env.SMTP_USER ?? "";
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || user,
    to: site.email,
    replyTo: input.replyTo,
    subject: input.subject,
    text: input.text,
  });
}
