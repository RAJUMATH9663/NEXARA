import type { Metadata } from "next";
import BlogSection from "@/components/sections/BlogSection";

export const metadata: Metadata = {
  title: "Blog | Technology Insights by Nexara",
  description: "Read the latest articles on web development, AI, mobile apps, cloud computing, and digital transformation from Nexara's expert team.",
};

export default function BlogPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-hero py-24 text-center">
        <h1 style={{ fontFamily: "Outfit, sans-serif" }} className="text-5xl font-black text-white mb-4">
          Our <span className="gradient-text">Blog</span>
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Expert insights, tutorials, and industry news from the Nexara technology team.
        </p>
      </div>
      <BlogSection />
    </div>
  );
}
