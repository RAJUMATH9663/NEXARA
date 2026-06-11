"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  centered = true,
}: SectionHeaderProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 bg-nexara-blue/10 text-nexara-blue border border-nexara-blue/20">
          {badge}
        </span>
      )}
      <h2
        style={{ fontFamily: "Outfit, sans-serif" }}
        className="section-title text-[var(--text-primary)] mb-4"
      >
        {highlight ? (
          <>
            {parts[0]}
            <span className="gradient-text">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p className={`section-subtitle text-[var(--text-secondary)] ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
