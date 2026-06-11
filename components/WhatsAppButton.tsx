"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919663319527";
  const message = encodeURIComponent("Hi Nexara! I'm interested in your services.");
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <motion.a
      id="whatsapp-btn"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-3.5 sm:p-4 rounded-full bg-green-500 text-white shadow-lg whatsapp-pulse cursor-pointer"
    >
      <MessageCircle size={20} className="sm:hidden" fill="white" />
      <MessageCircle size={24} className="hidden sm:block" fill="white" />
    </motion.a>
  );
}
