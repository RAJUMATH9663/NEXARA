"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, UserPlus, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirm) { toast.error("Passwords do not match."); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    toast.success("🎉 Account created! Welcome to Nexara.");
    setLoading(false);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-[var(--border-color)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-nexara-blue transition-all text-sm";

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
            <h1 style={{ fontFamily: "Outfit, sans-serif" }} className="text-2xl font-bold text-[var(--text-primary)]">Create Account</h1>
            <p className="text-sm text-[var(--text-secondary)] mt-1">Join the Nexara platform today</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="reg-name" className="block text-xs font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">Full Name</label>
              <input id="reg-name" type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} placeholder="John Doe" required className={inputClass} />
            </div>
            <div>
              <label htmlFor="reg-email" className="block text-xs font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">Email</label>
              <input id="reg-email" type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="you@example.com" required className={inputClass} />
            </div>
            <div>
              <label htmlFor="reg-pass" className="block text-xs font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">Password</label>
              <div className="relative">
                <input id="reg-pass" type={show ? "text" : "password"} value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} placeholder="Min. 8 characters" required className={`${inputClass} pr-12`} />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" aria-label={show ? "Hide password" : "Show password"}>
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="reg-confirm" className="block text-xs font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">Confirm Password</label>
              <input id="reg-confirm" type="password" value={form.confirm} onChange={(e) => setForm({...form, confirm: e.target.value})} placeholder="Repeat password" required className={inputClass} />
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3 mt-2">
              {loading ? <><Loader2 size={18} className="animate-spin" /> Creating account...</> : <><UserPlus size={18} /> Create Account</>}
            </button>
          </form>
          <p className="text-center text-sm text-[var(--text-secondary)] mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-nexara-blue hover:underline font-medium">Sign in</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
