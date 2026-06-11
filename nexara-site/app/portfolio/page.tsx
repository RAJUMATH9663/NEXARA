import type { Metadata } from "next";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Portfolio | Nexara's Work & Case Studies",
  description: "Explore Nexara's portfolio of web apps, mobile apps, AI solutions, and e-commerce projects delivered for clients worldwide.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-hero py-24 text-center">
        <h1 style={{ fontFamily: "Outfit, sans-serif" }} className="text-5xl font-black text-white mb-4">
          Our <span className="gradient-text">Portfolio</span>
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          200+ successful projects delivered across industries. Here's a selection of our finest work.
        </p>
      </div>
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}
