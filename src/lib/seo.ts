// src/components/Seo.tsx
"use client";

import { useEffect } from "react";

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  url?: string;
}

export default function Seo({
  title = "My Website",
  description = "This is my awesome website built with Next.js",
  keywords = "Next.js, SEO, React, Web Development",
  canonical,
  ogImage = "/og-image.png",
  url,
}: SeoProps) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;

  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (name: string, content: string) => {
      let tag =
        document.querySelector<HTMLMetaElement>(
          `meta[name="${name}"]`
        ) || document.createElement("meta");
      tag.setAttribute("name", name);
      tag.setAttribute("content", content);
      document.head.appendChild(tag);
    };

    setMeta("description", description);
    setMeta("keywords", keywords);

    const link =
      document.querySelector<HTMLLinkElement>(
        `link[rel="canonical"]`
      ) || document.createElement("link");
    link.setAttribute("rel", "canonical");
    link.setAttribute("href", canonical ? canonical : fullUrl);
    document.head.appendChild(link);

    // Open Graph
    const setOG = (property: string, content: string) => {
      let tag =
        document.querySelector<HTMLMetaElement>(
          `meta[property="${property}"]`
        ) || document.createElement("meta");
      tag.setAttribute("property", property);
      tag.setAttribute("content", content);
      document.head.appendChild(tag);
    };

    setOG("og:title", title);
    setOG("og:description", description);
    setOG("og:type", "website");
    setOG("og:url", fullUrl);
    setOG("og:image", ogImage);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);
  }, [title, description, keywords, canonical, ogImage, url]);

  return null;
}
