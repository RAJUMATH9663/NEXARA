"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const values = [
  { icon: "💡", label: "Innovation", desc: "Pushing boundaries with cutting-edge solutions." },
  { icon: "⭐", label: "Quality", desc: "Excellence in every line of code we write." },
  { icon: "🤝", label: "Transparency", desc: "Open communication and honest partnerships." },
  { icon: "🚀", label: "Customer Success", desc: "Your success is our ultimate measure." },
  { icon: "🔒", label: "Security", desc: "Enterprise-grade protection for your data." },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-[var(--bg-secondary)]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-nexara-blue via-blue-700 to-nexara-orange p-1 rounded-2xl">
                <div className="bg-[var(--bg-secondary)] rounded-xl p-8">
                  {/* Mission Card */}
                  <div className="mb-6 p-6 rounded-xl bg-nexara-blue/10 border border-nexara-blue/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-nexara-blue/20 text-nexara-blue">
                        <Target size={20} />
                      </div>
                      <span style={{ fontFamily: "Outfit, sans-serif" }} className="font-bold text-[var(--text-primary)]">Our Mission</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      To deliver reliable, innovative, and affordable digital solutions that empower businesses to thrive in the digital age.
                    </p>
                  </div>

                  {/* Vision Card */}
                  <div className="mb-6 p-6 rounded-xl bg-nexara-orange/10 border border-nexara-orange/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-nexara-orange/20 text-nexara-orange">
                        <Eye size={20} />
                      </div>
                      <span style={{ fontFamily: "Outfit, sans-serif" }} className="font-bold text-[var(--text-primary)]">Our Vision</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      To become a globally trusted technology partner that accelerates growth for 1000+ businesses worldwide by 2030.
                    </p>
                  </div>

                  {/* Values */}
                  <div className="p-6 rounded-xl bg-[var(--border-color)]/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-purple-500/20 text-purple-500">
                        <Heart size={20} />
                      </div>
                      <span style={{ fontFamily: "Outfit, sans-serif" }} className="font-bold text-[var(--text-primary)]">Our Values</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {values.map((v) => (
                        <span
                          key={v.label}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-secondary)]"
                        >
                          {v.icon} {v.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 glass-dark rounded-2xl p-4 shadow-card"
            >
              <div className="text-2xl mb-1">🏆</div>
              <div style={{ fontFamily: "Outfit, sans-serif" }} className="font-bold text-white text-sm">Top Rated</div>
              <div className="text-xs text-slate-400">Agency 2024</div>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 bg-nexara-blue/10 text-nexara-blue border border-nexara-blue/20">
              About Nexara
            </span>
            <h2
              style={{ fontFamily: "Outfit, sans-serif" }}
              className="text-4xl lg:text-5xl font-black text-[var(--text-primary)] mb-6 leading-tight"
            >
              We Help Businesses Grow Through{" "}
              <span className="gradient-text">Innovative Technology</span>
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Founded with a passion for technology and a vision for the future, Nexara is a leading software development company that helps startups and enterprises build world-class digital products.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
              Our team of experienced developers, designers, and strategists work collaboratively to deliver solutions that are not just technically sound, but strategically aligned with your business goals.
            </p>

            {/* Value pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {values.map((v) => (
                <div key={v.label} className="flex items-start gap-3 p-4 rounded-xl bg-[var(--border-color)]/30 border border-[var(--border-color)]">
                  <span className="text-2xl">{v.icon}</span>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)] text-sm">{v.label}</div>
                    <div className="text-xs text-[var(--text-secondary)]">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
