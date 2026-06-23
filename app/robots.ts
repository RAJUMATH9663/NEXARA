import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/login", "/register"],
      },
    ],
    sitemap: "https://nexara-tech.vercel.app/sitemap.xml",
    host: "https://nexara-tech.vercel.app",
  };
}
