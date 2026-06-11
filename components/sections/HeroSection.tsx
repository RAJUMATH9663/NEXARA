"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Sparkles, Code2, Cpu, Globe } from "lucide-react";
import { useEffect, useRef } from "react";

const floatingCards = [
  { icon: Code2, label: "Web Development", color: "from-blue-500 to-blue-600", delay: 0 },
  { icon: Cpu, label: "AI Solutions", color: "from-orange-500 to-orange-600", delay: 0.3 },
  { icon: Globe, label: "Cloud Services", color: "from-purple-500 to-purple-600", delay: 0.6 },
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{ x: number; y: number; vx: number; vy: number; r: number; a: number }> = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 0.5,
        a: Math.random() * 0.5 + 0.2,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${p.a})`;
        ctx.fill();
      });
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-hero grid-pattern">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 hidden md:block pointer-events-none opacity-50" />

      {/* Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 hidden md:block w-96 h-96 bg-nexara-blue/18 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 hidden md:block w-80 h-80 bg-nexara-orange/12 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 right-1/3 hidden lg:block w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 py-24 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-nexara-blue/10 border border-nexara-blue/20 text-nexara-blue text-xs sm:text-sm font-medium mb-6 sm:mb-8"
            >
              <Sparkles size={14} />
              Innovating the Future, One Solution at a Time
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: "Outfit, sans-serif" }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] sm:leading-tight mb-5 sm:mb-6"
            >
              Building Digital
              <span className="gradient-text block">Solutions That</span>
              Transform Businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Nexara delivers web development, mobile applications, AI solutions, cloud services, UI/UX design, and digital transformation for startups and enterprises.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Link href="/contact" className="btn-primary text-base px-6 sm:px-8 py-3.5 sm:py-4 justify-center">
                Get Started <ArrowRight size={18} />
              </Link>
              <Link href="/portfolio" className="btn-secondary text-base px-6 sm:px-8 py-3.5 sm:py-4 justify-center">
                <Play size={16} fill="currentColor" /> View Portfolio
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-10 pt-8 sm:pt-10 border-t border-white/10"
            >
              <div className="text-center">
                <div style={{ fontFamily: "Outfit, sans-serif" }} className="text-3xl font-bold text-white">200+</div>
                <div className="text-xs text-slate-400">Projects Done</div>
              </div>
              <div className="text-center">
                <div style={{ fontFamily: "Outfit, sans-serif" }} className="text-3xl font-bold text-white">150+</div>
                <div className="text-xs text-slate-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div style={{ fontFamily: "Outfit, sans-serif" }} className="text-3xl font-bold text-white">5+</div>
                <div className="text-xs text-slate-400">Years Exp.</div>
              </div>
              <div className="text-center">
                <div style={{ fontFamily: "Outfit, sans-serif" }} className="text-3xl font-bold text-white">99%</div>
                <div className="text-xs text-slate-400">Satisfaction</div>
              </div>
            </motion.div>
          </div>

          {/* Right — Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-6 items-end"
          >
            {floatingCards.map(({ icon: Icon, label, color, delay }, i) => (
              <motion.div
                key={label}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: delay + i * 0.5 }}
                className="glass-dark rounded-2xl p-6 w-72 flex items-center gap-4"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${color} shadow-lg`}>
                  <Icon size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">{label}</div>
                  <div className="text-slate-400 text-sm">Premium Service</div>
                </div>
              </motion.div>
            ))}

            {/* Code snippet card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="glass-dark rounded-2xl p-6 w-72"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <pre className="text-xs text-green-400 font-mono">
{`const nexara = {
  innovation: true,
  quality: 100,
  support: "24/7"
};`}
              </pre>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-nexara-blue to-transparent" />
      </motion.div>
    </section>
  );
}
