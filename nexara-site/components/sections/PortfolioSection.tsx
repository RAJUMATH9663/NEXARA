"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ExternalLink, Tag } from "lucide-react";
import { Github } from "@/components/SocialIcons";
import SectionHeader from "@/components/SectionHeader";

const categories = ["All", "Web", "Mobile", "AI", "E-commerce", "SaaS"];

const mockProjects = [
  {
    title: "MediConnect Platform",
    category: "Web",
    description: "A comprehensive telemedicine platform connecting patients with doctors for virtual consultations.",
    tech: ["Next.js", "Django", "PostgreSQL", "WebRTC"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80",
    demo: "#",
    github: "#",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "ShopEase Mobile App",
    category: "Mobile",
    description: "Feature-rich e-commerce mobile app with AR try-on, AI recommendations, and seamless checkout.",
    tech: ["React Native", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    demo: "#",
    github: "#",
    color: "from-orange-500 to-pink-500",
  },
  {
    title: "DataSense AI Dashboard",
    category: "AI",
    description: "Real-time business intelligence dashboard with ML-powered predictive analytics and insights.",
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    demo: "#",
    github: "#",
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "LuxeStore E-commerce",
    category: "E-commerce",
    description: "Premium fashion e-commerce store with virtual styling AI and personalized recommendations.",
    tech: ["Next.js", "Shopify", "Tailwind", "Prisma"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    demo: "#",
    github: "#",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "TaskFlow SaaS",
    category: "SaaS",
    description: "Team project management SaaS with AI task prioritization, time tracking, and collaboration tools.",
    tech: ["Vue.js", "Laravel", "Redis", "WebSockets"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80",
    demo: "#",
    github: "#",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "EduLearn Mobile",
    category: "Mobile",
    description: "Interactive e-learning app for K-12 students with gamification, video lessons, and progress tracking.",
    tech: ["Flutter", "Firebase", "Node.js", "OpenAI"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    demo: "#",
    github: "#",
    color: "from-yellow-500 to-orange-500",
  },
];

export default function PortfolioSection() {
  const [active, setActive] = useState("All");
  const [projectsList, setProjectsList] = useState(mockProjects);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
        const res = await fetch(`${baseUrl}/api/portfolio/`);
        if (res.ok) {
          const data = await res.json();
          const items = Array.isArray(data) ? data : (data.results || []);
          if (items.length > 0) {
            const formatted = items.map((item: any) => {
              let categoryName = "Web";
              if (item.category === "web") categoryName = "Web";
              else if (item.category === "mobile") categoryName = "Mobile";
              else if (item.category === "ai") categoryName = "AI";
              else if (item.category === "ecommerce") categoryName = "E-commerce";
              else if (item.category === "saas") categoryName = "SaaS";
              
              return {
                title: item.title,
                category: categoryName,
                description: item.description,
                tech: item.tech || item.tech_stack.split(",").map((t: string) => t.trim()),
                image: item.image_url || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80",
                demo: item.demo || "#",
                github: item.github || "#",
                color: item.color || "from-blue-500 to-cyan-500"
              };
            });
            setProjectsList(formatted);
          }
        }
      } catch (err) {
        console.log("Could not load projects from backend API, using local mock data.");
      }
    };
    fetchProjects();
  }, []);

  const filtered =
    active === "All" ? projectsList : projectsList.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-padding bg-[var(--bg-secondary)]">
      <div className="container-custom">
        <SectionHeader
          badge="Portfolio"
          title="Our Recent "
          highlight="Work"
          description="Explore some of our recent projects that showcase our expertise across different domains."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-nexara-blue text-white shadow-nexara-blue"
                  : "bg-[var(--border-color)] text-[var(--text-secondary)] hover:bg-nexara-blue/20 hover:text-nexara-blue"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="card overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                      aria-label={`Live demo of ${p.title}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                      aria-label={`GitHub repo for ${p.title}`}
                    >
                      <Github size={18} />
                    </a>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/50 backdrop-blur-sm text-white">
                      {p.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    style={{ fontFamily: "Outfit, sans-serif" }}
                    className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-nexara-blue transition-colors"
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-nexara-blue/10 text-nexara-blue"
                      >
                        <Tag size={10} />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
