import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://beammedia.agency/sitemap.xml",
    host: "https://beammedia.agency",
  };
}
