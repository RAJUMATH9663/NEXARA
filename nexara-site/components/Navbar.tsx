"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Web Development", href: "/services#web" },
      { label: "Mobile Apps", href: "/services#mobile" },
      { label: "AI & ML", href: "/services#ai" },
      { label: "Cloud Solutions", href: "/services#cloud" },
      { label: "UI/UX Design", href: "/services#uiux" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--navbar-bg)] backdrop-blur-xl shadow-lg border-b border-[var(--border-color)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Nexara Logo"
                width={40}
                height={40}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span
              style={{ fontFamily: "Outfit, sans-serif" }}
              className="text-xl sm:text-2xl font-bold gradient-text"
            >
              Nexara
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  link.dropdown && setActiveDropdown(link.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)] transition-all duration-200"
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
                {link.dropdown && activeDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-52 glass-dark rounded-xl shadow-xl border border-[var(--border-color)] overflow-hidden"
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-[var(--text-secondary)] hover:text-white hover:bg-nexara-blue/20 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)] transition-all duration-200"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              href="/contact"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--border-color)] transition-colors"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--border-color)] transition-colors"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[var(--navbar-bg)] backdrop-blur-xl border-t border-[var(--border-color)] shadow-xl"
          >
            <div className="container-custom py-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)] transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-xs text-[var(--text-secondary)] hover:text-nexara-blue transition-colors"
                        >
                          → {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-3 border-t border-[var(--border-color)]">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-center text-[var(--text-secondary)] hover:bg-[var(--border-color)] rounded-lg transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-sm text-center justify-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
