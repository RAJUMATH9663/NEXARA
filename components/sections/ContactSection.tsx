"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import toast from "react-hot-toast";

const services = [
  "Website Development",
  "Mobile App Development",
  "UI/UX Design",
  "AI & Machine Learning",
  "Cloud Solutions",
  "E-commerce Development",
  "Custom Software",
  "SEO & Digital Marketing",
  "Other",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    // Simulate API call — replace with EmailJS or backend API
    await new Promise((r) => setTimeout(r, 1500));
    toast.success("🎉 Message sent! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" });
    setLoading(false);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-[var(--border-color)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-nexara-blue focus:ring-1 focus:ring-nexara-blue/30 transition-all duration-200 text-sm";

  return (
    <section id="contact" className="section-padding bg-[var(--bg-secondary)]">
      <div className="container-custom">
        <SectionHeader
          badge="Contact Us"
          title="Let's Build Something "
          highlight="Amazing"
          description="Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours."
        />

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              { icon: Mail, title: "Email Us", info: "hello@nexara.in", sub: "We reply within 2-4 hours", href: "mailto:hello@nexara.in", color: "text-nexara-blue", bg: "bg-nexara-blue/10" },
              { icon: Phone, title: "Call Us", info: "+91 96633 19527", sub: "Mon-Sat, 9AM - 8PM IST", href: "tel:+919663319527", color: "text-nexara-orange", bg: "bg-nexara-orange/10" },
              { icon: MapPin, title: "Office", info: "Bengaluru, Karnataka", sub: "India - 560001", href: "#", color: "text-green-500", bg: "bg-green-500/10" },
            ].map(({ icon: Icon, title, info, sub, href, color, bg }) => (
              <a
                key={title}
                href={href}
                className="flex items-start gap-4 p-5 card hover:border-nexara-blue/30 transition-colors group"
              >
                <div className={`p-3 rounded-xl ${bg} ${color} shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon size={20} />
                </div>
                <div>
                  <div className="font-semibold text-[var(--text-primary)] text-sm mb-0.5">{title}</div>
                  <div className={`font-medium text-sm ${color}`}>{info}</div>
                  <div className="text-xs text-[var(--text-secondary)] mt-0.5">{sub}</div>
                </div>
              </a>
            ))}

            {/* Map Embed Placeholder */}
            <div className="rounded-xl overflow-hidden border border-[var(--border-color)] h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.9974564%!2d77.35072699999999!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nexara Office Location"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 card p-8"
          >
            <h3 style={{ fontFamily: "Outfit, sans-serif" }} className="text-2xl font-bold text-[var(--text-primary)] mb-6">
              Send Us a Message
            </h3>
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-xs font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="service" className="block text-xs font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select a service...</option>
                {services.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-xs font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project, goals, and timeline..."
                required
                rows={5}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center text-base py-4"
            >
              {loading ? (
                <><Loader2 size={18} className="animate-spin" /> Sending...</>
              ) : (
                <><Send size={18} /> Send Message</>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
