"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          id="scroll-to-top"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
            className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-gradient-to-r from-nexara-blue to-blue-600 text-white shadow-nexara-blue hover:shadow-glow transition-all duration-300 hover:scale-110"
        >
          <ArrowUp size={18} className="sm:hidden" />
          <ArrowUp size={20} className="hidden sm:block" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
