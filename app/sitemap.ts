import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexara-tech.vercel.app";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/careers`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/future-of-ai-in-web-development`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/react-native-vs-flutter`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/nextjs-14-app-router-guide`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
