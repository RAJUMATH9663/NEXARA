import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Our Services | Web, Mobile, AI & Cloud Solutions",
  description: "Explore Nexara's full range of technology services: web development, mobile apps, AI solutions, cloud services, UI/UX design, and more.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-hero py-24 text-center">
        <h1 style={{ fontFamily: "Outfit, sans-serif" }} className="text-5xl font-black text-white mb-4">
          Our <span className="gradient-text">Services</span>
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          End-to-end technology services that drive business growth, from concept to deployment and beyond.
        </p>
      </div>
      <ServicesSection />
      <WhyChooseUs />
      <PricingSection />
      <ContactSection />
    </div>
  );
}
