"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const mockPosts = [
  {
    slug: "future-of-ai-in-web-development",
    title: "The Future of AI in Web Development: What's Coming in 2025",
    excerpt: "Discover how artificial intelligence is revolutionizing web development workflows, from AI-powered code generation to intelligent UX optimization.",
    category: "AI & Technology",
    date: "June 5, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    author: "Kavya Nair",
    authorAvatar: "https://ui-avatars.com/api/?name=Kavya+Nair&background=059669&color=fff&size=40",
  },
  {
    slug: "react-native-vs-flutter",
    title: "React Native vs Flutter in 2025: Which Should You Choose?",
    excerpt: "A comprehensive comparison of the two leading cross-platform frameworks to help you make the right decision for your next mobile app project.",
    category: "Mobile Dev",
    date: "May 28, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    author: "Rohit Desai",
    authorAvatar: "https://ui-avatars.com/api/?name=Rohit+Desai&background=7c3aed&color=fff&size=40",
  },
  {
    slug: "nextjs-14-app-router-guide",
    title: "Next.js 14 App Router: Complete Guide for Production Apps",
    excerpt: "Master Next.js 14's App Router with Server Components, Server Actions, and the new caching mechanisms to build blazing-fast production apps.",
    category: "Web Dev",
    date: "May 15, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&q=80",
    author: "Siddharth Rao",
    authorAvatar: "https://ui-avatars.com/api/?name=Siddharth+Rao&background=dc2626&color=fff&size=40",
  },
];

const categoryColors: Record<string, string> = {
  "AI & Technology": "bg-orange-500/10 text-orange-500",
  "Mobile Dev": "bg-purple-500/10 text-purple-500",
  "Web Dev": "bg-nexara-blue/10 text-nexara-blue",
};

export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState(mockPosts);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
        const res = await fetch(`${baseUrl}/api/blog/`);
        if (res.ok) {
          const data = await res.json();
          const items = Array.isArray(data) ? data : (data.results || []);
          if (items.length > 0) {
            const formatted = items.map((item: any) => {
              let categoryName = "Web Dev";
              if (item.category === "ai") categoryName = "AI & Technology";
              else if (item.category === "mobile") categoryName = "Mobile Dev";
              else if (item.category === "design") categoryName = "UI/UX Design";
              
              return {
                slug: item.slug,
                title: item.title,
                excerpt: item.excerpt,
                category: categoryName,
                date: new Date(item.created_at).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }),
                readTime: `${item.read_time} min read`,
                image: item.image_url || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80",
                author: item.author,
                authorAvatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(item.author)}&background=059669&color=fff&size=40`,
              };
            });
            setBlogPosts(formatted);
          }
        }
      } catch (err) {
        console.log("Could not load blogs from backend API, using local mock data.");
      }
    };
    fetchBlogs();
  }, []);
  return (
    <section id="blog" className="section-padding bg-[var(--bg-primary)]">
      <div className="container-custom">
        <SectionHeader
          badge="Blog"
          title="Latest "
          highlight="Insights"
          description="Stay ahead with expert articles on web development, AI, mobile apps, and digital transformation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card overflow-hidden group flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span
                  className={`absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                    categoryColors[post.category] || "bg-nexara-blue/10 text-nexara-blue"
                  }`}
                >
                  <Tag size={10} />
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-[var(--text-secondary)] mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>

                <h3
                  style={{ fontFamily: "Outfit, sans-serif" }}
                  className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-nexara-blue transition-colors leading-snug flex-1"
                >
                  {post.title}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.authorAvatar}
                      alt={post.author}
                      className="w-7 h-7 rounded-full"
                    />
                    <span className="text-xs text-[var(--text-secondary)]">{post.author}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-nexara-blue hover:gap-2 transition-all duration-200"
                  >
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog" className="btn-secondary">
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
