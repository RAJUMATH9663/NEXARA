"use client";
import { motion } from "framer-motion";
import {
  Users,
  DollarSign,
  Zap,
  HeadphonesIcon,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Star,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const features = [
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our developers, designers, and strategists bring years of industry expertise to every project.",
    color: "text-nexara-blue",
    bg: "bg-nexara-blue/10",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Premium quality at competitive prices — we believe great technology should be accessible to all.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We follow agile methodology to deliver projects on time without compromising on quality.",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock technical support ensures your business never faces downtime.",
    color: "text-nexara-orange",
    bg: "bg-nexara-orange/10",
  },
  {
    icon: ShieldCheck,
    title: "Secure Solutions",
    description: "Enterprise-grade security built into every layer — HTTPS, CSRF protection, and beyond.",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    icon: TrendingUp,
    title: "Scalable Products",
    description: "Architecture designed to grow with your business — from startup to enterprise scale.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Cpu,
    title: "Latest Technologies",
    description: "We stay ahead of the curve, leveraging the newest frameworks and AI tools for your advantage.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Star,
    title: "Client Satisfaction",
    description: "99% client satisfaction rate with a portfolio of 200+ successful projects across industries.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)]">
      <div className="container-custom">
        <SectionHeader
          badge="Why Nexara"
          title="Why Choose "
          highlight="Us?"
          description="We combine technical excellence with business understanding to deliver solutions that create real impact."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="card p-6 text-center group"
            >
              <div className={`inline-flex p-4 rounded-2xl ${f.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <f.icon size={24} className={f.color} />
              </div>
              <h3
                style={{ fontFamily: "Outfit, sans-serif" }}
                className="font-bold text-[var(--text-primary)] mb-2 text-lg"
              >
                {f.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
