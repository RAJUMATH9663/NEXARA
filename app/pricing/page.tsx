import type { Metadata } from "next";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Pricing | Affordable Web & App Development Plans",
  description: "Transparent pricing for web development, mobile apps, and enterprise software. Starter from ₹9,999. No hidden fees.",
};

export default function PricingPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-hero py-24 text-center">
        <h1 style={{ fontFamily: "Outfit, sans-serif" }} className="text-5xl font-black text-white mb-4">
          Simple, Transparent <span className="gradient-text">Pricing</span>
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          No hidden fees. Choose a plan that fits your needs. All plans include post-launch support.
        </p>
      </div>
      <PricingSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
