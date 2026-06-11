"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Palette,
  Brain,
  Cloud,
  ShoppingCart,
  Code2,
  Plug,
  Search,
  Wrench,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Custom, responsive, and high-performance websites built with the latest technologies for any business size.",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-500/10",
    href: "/services#web",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-500/10",
    href: "/services#mobile",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive designs crafted with user psychology in mind. From wireframes to pixel-perfect interfaces.",
    color: "from-purple-500 to-violet-600",
    bg: "bg-purple-500/10",
    href: "/services#uiux",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions powered by cutting-edge AI and ML to automate processes and unlock business insights.",
    color: "from-orange-500 to-orange-600",
    bg: "bg-orange-500/10",
    href: "/services#ai",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable, secure cloud infrastructure on AWS, GCP, and Azure — from migration to management.",
    color: "from-cyan-500 to-cyan-600",
    bg: "bg-cyan-500/10",
    href: "/services#cloud",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description:
      "Powerful online stores with seamless payment integration, inventory management, and conversion optimization.",
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-500/10",
    href: "/services#ecommerce",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Bespoke software solutions engineered to solve your unique business challenges and scale with your growth.",
    color: "from-indigo-500 to-indigo-600",
    bg: "bg-indigo-500/10",
    href: "/services#custom",
  },
  {
    icon: Plug,
    title: "API Development",
    description:
      "Robust, well-documented REST and GraphQL APIs that connect your systems and power third-party integrations.",
    color: "from-teal-500 to-teal-600",
    bg: "bg-teal-500/10",
    href: "/services#api",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    description:
      "Data-driven SEO strategies and digital marketing campaigns that drive qualified traffic and boost conversions.",
    color: "from-yellow-500 to-amber-600",
    bg: "bg-yellow-500/10",
    href: "/services#seo",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Proactive maintenance, security updates, performance monitoring, and 24/7 technical support for your products.",
    color: "from-red-500 to-red-600",
    bg: "bg-red-500/10",
    href: "/services#support",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-[var(--bg-primary)] animated-bg">
      <div className="container-custom">
        <SectionHeader
          badge="What We Do"
          title="Our "
          highlight="Services"
          description="From web development to AI solutions — we deliver end-to-end technology services that drive business growth."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="gradient-border group cursor-pointer"
            >
              <div className="card p-5 sm:p-6 h-full flex flex-col">
                <div className={`inline-flex p-3 rounded-xl ${service.bg} mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon
                    size={24}
                    className={`bg-gradient-to-br ${service.color} bg-clip-text`}
                    style={{ color: `var(--icon-color)` }}
                  />
                </div>
                <h3
                  style={{ fontFamily: "Outfit, sans-serif" }}
                  className="text-lg font-bold text-[var(--text-primary)] mb-3 group-hover:text-nexara-blue transition-colors"
                >
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-nexara-blue hover:gap-3 transition-all duration-200"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
