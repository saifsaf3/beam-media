import type { MetadataRoute } from "next";

const baseUrl = "https://beammedia.agency";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-08-03"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-08-03"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-08-05"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/what-birmingham-businesses-should-post-on-tiktok`,
      lastModified: new Date("2026-08-05"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-many-videos-from-one-content-shoot`,
      lastModified: new Date("2026-08-05"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
