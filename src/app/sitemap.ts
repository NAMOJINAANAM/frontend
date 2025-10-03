import { MetadataRoute } from "next";
async function getDynamicRoutes() {
  // Replace with DB or API fetch
  return [
    { slug: "hello-world", lastModified: "2025-09-30" },
    { slug: "seo-tips", lastModified: "2025-09-28" },
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  // Static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic pages
  const dynamicPages = await getDynamicRoutes();

  const dynamicRoutes: MetadataRoute.Sitemap = dynamicPages.map((page) => ({
    url: `${baseUrl}/blog/${page.slug}`,
    lastModified: new Date(page.lastModified),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
