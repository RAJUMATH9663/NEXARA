"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import {
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  Youtube,
} from "@/components/SocialIcons";
import toast from "react-hot-toast";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Web Development", href: "/services#web" },
  { label: "Mobile Apps", href: "/services#mobile" },
  { label: "AI & ML Solutions", href: "/services#ai" },
  { label: "Cloud Solutions", href: "/services#cloud" },
  { label: "UI/UX Design", href: "/services#uiux" },
  { label: "E-commerce", href: "/services#ecommerce" },
  { label: "SEO & Marketing", href: "/services#seo" },
  { label: "API Development", href: "/services#api" },
];

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/nexara", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/nexara", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/nexara", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com/nexara", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/nexara", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com/@nexara", label: "YouTube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("🎉 You've subscribed to Nexara's newsletter!");
    setEmail("");
    setLoading(false);
  };

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-nexara-blue/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-nexara-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14 sm:py-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="Nexara" width={40} height={40} className="object-contain" />
              <span style={{ fontFamily: "Outfit, sans-serif" }} className="text-2xl font-bold gradient-text">
                Nexara
              </span>
            </Link>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
              Innovating the Future, One Solution at a Time. We deliver world-class technology solutions for startups and enterprises.
            </p>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg bg-[var(--border-color)] text-[var(--text-secondary)] hover:bg-nexara-blue hover:text-white transition-all duration-200 hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-6 text-sm uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-nexara-blue transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-nexara-orange transition-all duration-200 rounded" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-6 text-sm uppercase tracking-widest">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-nexara-blue transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-nexara-orange transition-all duration-200 rounded" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-6 text-sm uppercase tracking-widest">
              Get In Touch
            </h3>
            <div className="space-y-4 mb-8">
              <a
                href="mailto:hello@nexara.in"
                className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-nexara-blue transition-colors"
              >
                <div className="p-2 rounded-lg bg-nexara-blue/10 text-nexara-blue">
                  <Mail size={14} />
                </div>
                hello@nexara.in
              </a>
              <a
                href="tel:+919663319527"
                className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-nexara-blue transition-colors"
              >
                <div className="p-2 rounded-lg bg-nexara-orange/10 text-nexara-orange">
                  <Phone size={14} />
                </div>
                +91 96633 19527
              </a>
              <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                <div className="p-2 rounded-lg bg-nexara-blue/10 text-nexara-blue shrink-0">
                  <MapPin size={14} />
                </div>
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>

            <h4 className="font-semibold text-[var(--text-primary)] mb-3 text-sm">Newsletter</h4>
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-3 py-3 rounded-xl bg-[var(--border-color)]/40 border border-[var(--border-color)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-nexara-blue transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-primary !px-4 !py-3 justify-center"
                aria-label="Subscribe"
              >
                {loading ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Send size={16} />}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--border-color)] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-secondary)] text-center sm:text-left">
            © {new Date().getFullYear()} Nexara Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="text-xs text-[var(--text-secondary)] hover:text-nexara-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-[var(--text-secondary)] hover:text-nexara-blue transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="text-xs text-[var(--text-secondary)] hover:text-nexara-blue transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
