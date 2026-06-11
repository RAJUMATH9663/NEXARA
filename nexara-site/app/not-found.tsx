"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div
          style={{ fontFamily: "Outfit, sans-serif" }}
          className="text-[10rem] font-black gradient-text leading-none mb-4"
        >
          404
        </div>
        <h1
          style={{ fontFamily: "Outfit, sans-serif" }}
          className="text-3xl font-bold text-white mb-4"
        >
          Page Not Found
        </h1>
        <p className="text-slate-400 text-lg mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={18} /> Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
