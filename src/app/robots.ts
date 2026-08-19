import type { MetadataRoute } from "next";
import { siteConfig } from "@/shared/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/me", "/posts/new", "/posts/*/edit", "/teams/new", "/teams/*/edit"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
