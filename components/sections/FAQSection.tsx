"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const faqs = [
  {
    q: "How long does development take?",
    a: "Project timelines vary based on complexity. A basic website takes 1-2 weeks, a dynamic web app 4-8 weeks, and a complex enterprise application 3-6 months. We provide a detailed timeline after understanding your requirements.",
  },
  {
    q: "What technologies do you use?",
    a: "We use modern, battle-tested technologies: Next.js, React, Vue.js for frontend; Django, Node.js, FastAPI for backend; MongoDB, PostgreSQL for databases; AWS, GCP, Azure for cloud; and React Native / Flutter for mobile apps.",
  },
  {
    q: "Do you provide maintenance after launch?",
    a: "Yes! All plans include free post-launch support (1-3 months depending on plan). We also offer monthly maintenance packages for ongoing updates, security patches, performance monitoring, and feature additions.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely! We specialize in website redesigns and digital transformations. We'll audit your current site, identify improvement areas, and deliver a modern, fast, and conversion-optimized redesign.",
  },
  {
    q: "How can I contact Nexara?",
    a: "You can reach us via email at hello@nexara.in, call us at +91 96633 19527, use the contact form on our website, or chat with us on WhatsApp. We typically respond within 2-4 business hours.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes! We work with clients globally. Our team is available across multiple time zones, and we use modern project management tools to ensure seamless collaboration regardless of geography.",
  },
  {
    q: "What is your payment process?",
    a: "We typically work with a 50% advance to start the project and 50% on delivery. For larger projects, we can arrange milestone-based payments. We accept bank transfers, UPI, PayPal, and major credit cards.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, we're happy to sign Non-Disclosure Agreements (NDAs) to protect your business ideas and confidential information. Client confidentiality is something we take very seriously.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-[var(--bg-primary)]">
      <div className="container-custom">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked "
          highlight="Questions"
          description="Find answers to common questions about working with Nexara."
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left group"
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span
                  style={{ fontFamily: "Outfit, sans-serif" }}
                  className={`font-semibold text-base transition-colors ${
                    open === i ? "text-nexara-blue" : "text-[var(--text-primary)] group-hover:text-nexara-blue"
                  }`}
                >
                  {faq.q}
                </span>
                <div
                  className={`p-1.5 rounded-lg shrink-0 ml-4 transition-all duration-300 ${
                    open === i ? "bg-nexara-blue text-white" : "bg-[var(--border-color)] text-[var(--text-secondary)]"
                  }`}
                >
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6 text-sm text-[var(--text-secondary)] leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
