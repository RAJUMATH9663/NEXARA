import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog Post | Nexara",
  description: "Read our latest technology insights and tutorials.",
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-gradient-hero py-24">
        <div className="container-custom max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-nexara-blue/20 text-nexara-blue border border-nexara-blue/30">
              <Tag size={10} /> Technology
            </span>
            <span className="flex items-center gap-1 text-sm text-slate-400">
              <Calendar size={12} /> June 2025
            </span>
            <span className="flex items-center gap-1 text-sm text-slate-400">
              <Clock size={12} /> 5 min read
            </span>
          </div>
          <h1 style={{ fontFamily: "Outfit, sans-serif" }} className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            {params.slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
          </h1>
          <p className="text-slate-300 text-lg">By the Nexara Team</p>
        </div>
      </div>

      <div className="container-custom max-w-4xl py-16">
        <div className="card p-8 prose prose-lg max-w-none">
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            This is a blog post about{" "}
            <strong className="text-[var(--text-primary)]">
              {params.slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
            </strong>.
            Connect the blog to your Django CMS backend to serve real content here.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            The blog CMS backend is scaffolded in the <code>/backend</code> directory with a full Django REST API ready to power this page with dynamic content from MongoDB.
          </p>
          <div className="mt-8 p-6 rounded-xl bg-nexara-blue/5 border border-nexara-blue/20">
            <h3 className="text-[var(--text-primary)] font-bold mb-2">🔗 CMS Integration</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              To enable dynamic blog content, set <code>NEXT_PUBLIC_API_BASE_URL</code> in your <code>.env.local</code> and connect to the Django blog API at <code>/api/blog/{params.slug}/</code>.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/blog" className="btn-secondary">
            <ArrowLeft size={16} /> Back to All Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
