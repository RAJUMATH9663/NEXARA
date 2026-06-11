import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at Nexara | Join Our Team",
  description: "Explore exciting career opportunities at Nexara. Join our team of passionate technologists and help build the future.",
};

const jobs = [
  { title: "Senior Full Stack Developer", dept: "Engineering", type: "Full-time", location: "Bengaluru (Hybrid)", posted: "2 days ago" },
  { title: "UI/UX Designer", dept: "Design", type: "Full-time", location: "Remote", posted: "1 week ago" },
  { title: "ML Engineer", dept: "AI/ML", type: "Full-time", location: "Bengaluru (On-site)", posted: "3 days ago" },
  { title: "React Native Developer", dept: "Mobile", type: "Full-time", location: "Remote", posted: "5 days ago" },
  { title: "DevOps Engineer", dept: "Infrastructure", type: "Full-time", location: "Bengaluru (Hybrid)", posted: "1 week ago" },
  { title: "Digital Marketing Specialist", dept: "Marketing", type: "Full-time", location: "Remote", posted: "2 weeks ago" },
];

const perks = [
  { emoji: "💰", title: "Competitive Salary", desc: "Market-leading compensation packages" },
  { emoji: "🏠", title: "Remote Friendly", desc: "Work from anywhere, anytime" },
  { emoji: "📚", title: "Learning Budget", desc: "₹50,000/year for courses & conferences" },
  { emoji: "🌿", title: "Health Insurance", desc: "Comprehensive family health cover" },
  { emoji: "⚽", title: "Team Outings", desc: "Quarterly team trips and events" },
  { emoji: "🚀", title: "Fast Growth", desc: "Clear promotion paths and mentoring" },
];

export default function CareersPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-gradient-hero py-24 text-center">
        <h1 style={{ fontFamily: "Outfit, sans-serif" }} className="text-5xl font-black text-white mb-4">
          Join <span className="gradient-text">Nexara</span>
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Build your career with a team that's passionate about technology, innovation, and making a difference.
        </p>
      </div>

      <section className="section-padding bg-[var(--bg-primary)]">
        <div className="container-custom">
          <h2 style={{ fontFamily: "Outfit, sans-serif" }} className="text-3xl font-bold text-[var(--text-primary)] text-center mb-12">
            Why Work at <span className="gradient-text">Nexara?</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
            {perks.map((p) => (
              <div key={p.title} className="card p-6 text-center">
                <div className="text-4xl mb-3">{p.emoji}</div>
                <h3 style={{ fontFamily: "Outfit, sans-serif" }} className="font-bold text-[var(--text-primary)] mb-1">{p.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{p.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: "Outfit, sans-serif" }} className="text-3xl font-bold text-[var(--text-primary)] text-center mb-12">
            Open <span className="gradient-text">Positions</span>
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {jobs.map((job) => (
              <div key={job.title} className="card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 style={{ fontFamily: "Outfit, sans-serif" }} className="text-xl font-bold text-[var(--text-primary)] mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1 text-xs text-[var(--text-secondary)]">
                      <Briefcase size={12} /> {job.dept}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-[var(--text-secondary)]">
                      <Clock size={12} /> {job.type}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-[var(--text-secondary)]">
                      <MapPin size={12} /> {job.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-[var(--text-secondary)]">{job.posted}</span>
                  <Link href="/contact" className="btn-primary !text-sm !px-5 !py-2.5 whitespace-nowrap">
                    Apply Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
