import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import StatsSection from "@/components/sections/StatsSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export const metadata: Metadata = {
  title: "About Nexara | Our Mission, Vision & Team",
  description: "Learn about Nexara's mission to deliver innovative technology solutions, our experienced team, and our commitment to client success.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-hero py-24 text-center">
        <h1 style={{ fontFamily: "Outfit, sans-serif" }} className="text-5xl font-black text-white mb-4">
          About <span className="gradient-text">Nexara</span>
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          We are a team of passionate technologists dedicated to transforming businesses through innovative digital solutions.
        </p>
      </div>
      <AboutSection />
      <StatsSection />
      <TeamSection />
      <WhyChooseUs />
    </div>
  );
}
