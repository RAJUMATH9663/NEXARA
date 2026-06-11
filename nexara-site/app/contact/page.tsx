import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Nexara | Get a Free Project Quote",
  description: "Ready to start your project? Contact Nexara for a free consultation and quote. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-hero py-24 text-center">
        <h1 style={{ fontFamily: "Outfit, sans-serif" }} className="text-5xl font-black text-white mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Ready to build something amazing? Tell us about your project and we'll get back to you within 24 hours.
        </p>
      </div>
      <ContactSection />
    </div>
  );
}
