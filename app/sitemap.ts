import type { MetadataRoute } from "next";

import { business } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about-us", "/services", "/pricing", "/gallery", "/team", "/new-clients", "/contact"].map((path) => ({
    url: `${business.siteUrl}${path}`,
    lastModified: new Date("2026-06-09"),
  }));
}
