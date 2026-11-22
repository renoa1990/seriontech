import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { path: "", priority: 1, lastModified: "2026-11-17" },
    { path: "/about", priority: 0.7, lastModified: "2026-11-17" },
    { path: "/services", priority: 0.7, lastModified: "2026-11-17" },
    { path: "/contact", priority: 0.7, lastModified: "2026-11-17" },
    { path: "/privacy", priority: 0.3, lastModified: "2026-11-17" },
    { path: "/portfolio/judosector", priority: 0.6, lastModified: "2026-11-22" },
  ].map(({ path, priority, lastModified }) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
