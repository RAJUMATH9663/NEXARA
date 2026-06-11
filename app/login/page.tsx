"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, LogIn, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    toast.success("Welcome back to Nexara!");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="card p-8">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Nexara" width={40} height={40} className="object-contain" />
              <span style={{ fontFamily: "Outfit, sans-serif" }} className="text-2xl font-bold gradient-text">Nexara</span>
            </Link>
            <h1 style={{ fontFamily: "Outfit, sans-serif" }} className="text-2xl font-bold text-[var(--text-primary)]">Welcome Back</h1>
            <p className="text-sm text-[var(--text-secondary)] mt-1">Sign in to your Nexara account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 rounded-xl bg-[var(--border-color)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-nexara-blue transition-all text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-xs font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">Password</label>
              <div className="relative">
                <input
                  id="password"
                  type={show ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 pr-12 rounded-xl bg-[var(--border-color)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-nexara-blue transition-all text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  aria-label={show ? "Hide password" : "Show password"}
                >
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-[var(--text-secondary)] cursor-pointer">
                <input type="checkbox" className="rounded" /> Remember me
              </label>
              <Link href="#" className="text-nexara-blue hover:underline">Forgot password?</Link>
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3">
              {loading ? <><Loader2 size={18} className="animate-spin" /> Signing in...</> : <><LogIn size={18} /> Sign In</>}
            </button>
          </form>

          <p className="text-center text-sm text-[var(--text-secondary)] mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-nexara-blue hover:underline font-medium">Create one</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
