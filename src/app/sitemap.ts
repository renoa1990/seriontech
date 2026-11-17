import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.7 },
    { path: "/services", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    { path: "/privacy", priority: 0.3 },
  ].map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified: "2026-11-17",
    changeFrequency: "monthly" as const,
    priority,
  }));
}
