"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CEO, TechStart India",
    avatar: "https://ui-avatars.com/api/?name=Rahul+Sharma&background=2563eb&color=fff&size=80",
    rating: 5,
    comment:
      "Nexara transformed our business with a stunning e-commerce platform. Their team was professional, delivered ahead of schedule, and the result exceeded our expectations. Highly recommend!",
  },
  {
    name: "Priya Patel",
    role: "Founder, StyleBoutique",
    avatar: "https://ui-avatars.com/api/?name=Priya+Patel&background=f97316&color=fff&size=80",
    rating: 5,
    comment:
      "The mobile app Nexara built for us has been downloaded 50,000+ times! Their UI/UX expertise is unmatched and the post-launch support has been exceptional.",
  },
  {
    name: "Amit Verma",
    role: "CTO, FinanceFlow",
    avatar: "https://ui-avatars.com/api/?name=Amit+Verma&background=7c3aed&color=fff&size=80",
    rating: 5,
    comment:
      "We needed a complex AI dashboard with real-time analytics. Nexara's team not only understood our requirements perfectly but delivered a solution that scaled from day one.",
  },
  {
    name: "Sneha Reddy",
    role: "Marketing Director, GrowthCo",
    avatar: "https://ui-avatars.com/api/?name=Sneha+Reddy&background=059669&color=fff&size=80",
    rating: 5,
    comment:
      "Our website traffic increased by 300% after Nexara's SEO and digital marketing overhaul. They truly understand what businesses need to grow online.",
  },
  {
    name: "Vikram Nair",
    role: "Product Manager, CloudBase",
    avatar: "https://ui-avatars.com/api/?name=Vikram+Nair&background=dc2626&color=fff&size=80",
    rating: 5,
    comment:
      "The cloud migration project was seamless. Zero downtime, great cost optimization, and the team was available around the clock during the transition. Outstanding service!",
  },
  {
    name: "Ananya Singh",
    role: "Entrepreneur, EduTech Startup",
    avatar: "https://ui-avatars.com/api/?name=Ananya+Singh&background=d97706&color=fff&size=80",
    rating: 5,
    comment:
      "Nexara built our entire learning management system from scratch. The platform now serves 10,000+ students. Their attention to detail and code quality is impressive.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section className="section-padding bg-[var(--bg-primary)] overflow-hidden">
      <div className="container-custom">
        <SectionHeader
          badge="Testimonials"
          title="What Our "
          highlight="Clients Say"
          description="Don't just take our word for it — here's what our clients have to say about working with Nexara."
        />

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-8">
            {visible.map((t, i) => (
              <motion.div
                key={t.name + i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card p-5 sm:p-6 relative"
              >
                <Quote size={30} className="text-nexara-blue/15 absolute top-4 right-4" />
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="rounded-full"
                    unoptimized
                  />
                  <div>
                    <div className="font-semibold text-[var(--text-primary)] text-sm sm:text-base">{t.name}</div>
                    <div className="text-xs text-[var(--text-secondary)]">{t.role}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={13} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">&ldquo;{t.comment}&rdquo;</p>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-2.5 sm:p-3 rounded-full border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-nexara-blue hover:text-nexara-blue transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-nexara-blue" : "w-2 bg-[var(--border-color)]"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="p-2.5 sm:p-3 rounded-full border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-nexara-blue hover:text-nexara-blue transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
