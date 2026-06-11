"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Zap, Star, Building2 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const plans = [
  {
    icon: Zap,
    name: "Starter",
    price: "₹2,999",
    period: "/project",
    description: "Perfect for small businesses and personal projects.",
    features: [
      "Basic Website (Up to 5 pages)",
      "Responsive Design",
      "Contact Form",
    ],
    notIncluded: ["Admin Panel", "API Integration", "Cloud Deployment"],
    cta: "Get Started",
    href: "/contact?plan=starter",
    popular: false,
    color: "border-[var(--border-color)]",
    badgeColor: "",
  },
  {
    icon: Star,
    name: "Professional",
    price: "₹5,999",
    period: "/project",
    description: "Ideal for growing businesses needing advanced features.",
    features: [
      "Dynamic Website (Up to 15 pages)",
      "Admin Panel / Dashboard",
      "SEO Optimization",
      "Hosting & Deployment Support",
      "Contact Form + Email Notifications",
      "Performance Optimization",
      "3 Months Free Support",
      "Analytics Integration",
    ],
    notIncluded: ["Custom API Integration"],
    cta: "Choose Professional",
    href: "/contact?plan=professional",
    popular: true,
    color: "border-nexara-blue",
    badgeColor: "bg-nexara-blue",
  },
  {
    icon: Building2,
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large-scale applications requiring dedicated resources.",
    features: [
      "Large-Scale Applications",
      "Custom API Integration",
      "Cloud Deployment (AWS/GCP/Azure)",
      "Dedicated Support Team",
      "Advanced Security Features",
      "Performance Monitoring",
      "Custom SLA Agreement",
      "Priority Response",
    ],
    notIncluded: [],
    cta: "Contact Us",
    href: "/contact?plan=enterprise",
    popular: false,
    color: "border-nexara-orange",
    badgeColor: "bg-nexara-orange",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-[var(--bg-primary)] animated-bg">
      <div className="container-custom">
        <SectionHeader
          badge="Pricing"
          title="Transparent "
          highlight="Pricing"
          description="No hidden fees. Choose a plan that fits your budget and scale as you grow."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative card border-2 p-6 sm:p-8 ${plan.color} ${
                plan.popular ? "lg:scale-105 shadow-nexara-blue" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-6 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-nexara-blue text-white shadow-nexara-blue">
                    ⭐ Most Popular
                  </span>
                </div>
              )}
              {plan.name === "Enterprise" && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-6 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-nexara-orange text-white">
                    🚀 Enterprise
                  </span>
                </div>
              )}

              <div className="flex items-start gap-3 mb-5 sm:mb-6">
                <div
                  className={`p-3 rounded-xl ${
                    plan.popular
                      ? "bg-nexara-blue/20 text-nexara-blue"
                      : plan.name === "Enterprise"
                      ? "bg-nexara-orange/20 text-nexara-orange"
                      : "bg-[var(--border-color)] text-[var(--text-secondary)]"
                  }`}
                >
                  <plan.icon size={22} />
                </div>
                <div>
                  <h3
                    style={{ fontFamily: "Outfit, sans-serif" }}
                    className="text-lg sm:text-xl font-bold text-[var(--text-primary)]"
                  >
                    {plan.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{plan.description}</p>
                </div>
              </div>

              <div className="mb-6 sm:mb-8">
                <span
                  style={{ fontFamily: "Outfit, sans-serif" }}
                  className={`text-4xl sm:text-5xl font-black ${
                    plan.popular ? "text-nexara-blue" : plan.name === "Enterprise" ? "text-nexara-orange" : "text-[var(--text-primary)]"
                  }`}
                >
                  {plan.price}
                </span>
                <span className="text-sm text-[var(--text-secondary)] ml-2">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-6 sm:mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-green-500" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`w-full text-center justify-center ${
                  plan.popular
                    ? "btn-primary"
                    : plan.name === "Enterprise"
                    ? "btn-orange"
                    : "btn-secondary"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-[var(--text-secondary)] mt-12"
        >
          All prices are in INR (Indian Rupees). GST extra as applicable.{" "}
          <Link href="/contact" className="text-nexara-blue hover:underline">
            Contact us
          </Link>{" "}
          for custom quotes.
        </motion.p>
      </div>
    </section>
  );
}
