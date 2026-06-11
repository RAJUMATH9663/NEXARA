"use client";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { Users, Briefcase, Award, Clock } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 200, suffix: "+", label: "Projects Completed", color: "text-nexara-blue" },
  { icon: Users, value: 150, suffix: "+", label: "Happy Clients", color: "text-nexara-orange" },
  { icon: Award, value: 5, suffix: "+", label: "Years Experience", color: "text-purple-500" },
  { icon: Clock, value: 99, suffix: "%", label: "Client Satisfaction", color: "text-green-500" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = Math.floor(latest) + suffix;
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-14 sm:py-16 bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map(({ icon: Icon, value, suffix, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] p-4 sm:p-6"
            >
              <div className={`inline-flex p-3 sm:p-4 rounded-2xl bg-[var(--border-color)] mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={22} className={color} />
              </div>
              <div
                style={{ fontFamily: "Outfit, sans-serif" }}
                className={`text-3xl sm:text-4xl font-black mb-2 ${color}`}
              >
                <AnimatedCounter value={value} suffix={suffix} />
              </div>
              <div className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium leading-snug">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
