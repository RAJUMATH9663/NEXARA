"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("nexara-cookie-consent");
    if (!consent) setTimeout(() => setVisible(true), 2000);
  }, []);

  const accept = () => {
    localStorage.setItem("nexara-cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("nexara-cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="card p-5 shadow-card">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-nexara-orange/10 text-nexara-orange shrink-0">
                <Cookie size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-[var(--text-primary)] text-sm mb-1">We use cookies 🍪</h4>
                <p className="text-xs text-[var(--text-secondary)] mb-4 leading-relaxed">
                  We use cookies to enhance your experience. By continuing, you agree to our{" "}
                  <Link href="/privacy" className="text-nexara-blue hover:underline">Privacy Policy</Link>.
                </p>
                <div className="flex gap-2">
                  <button onClick={accept} className="btn-primary !text-xs !px-4 !py-2">
                    Accept All
                  </button>
                  <button onClick={decline} className="btn-secondary !text-xs !px-4 !py-2">
                    Decline
                  </button>
                </div>
              </div>
              <button onClick={decline} aria-label="Close" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
