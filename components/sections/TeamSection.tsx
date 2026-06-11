"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Github, Twitter } from "@/components/SocialIcons";
import SectionHeader from "@/components/SectionHeader";

const team = [
  {
    name: "Arjun Mehta",
    role: "CEO & Co-Founder",
    bio: "10+ years in tech leadership. Previously at Google and Infosys.",
    avatar: "https://ui-avatars.com/api/?name=Arjun+Mehta&background=2563eb&color=fff&size=200",
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
  {
    name: "Meera Krishnan",
    role: "CTO & Co-Founder",
    bio: "Full-stack architect specializing in AI and distributed systems.",
    avatar: "https://ui-avatars.com/api/?name=Meera+Krishnan&background=f97316&color=fff&size=200",
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
  {
    name: "Rohit Desai",
    role: "Lead Designer",
    bio: "Award-winning UI/UX designer with a passion for pixel perfection.",
    avatar: "https://ui-avatars.com/api/?name=Rohit+Desai&background=7c3aed&color=fff&size=200",
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
  {
    name: "Kavya Nair",
    role: "Head of AI/ML",
    bio: "PhD in Machine Learning. Published researcher and AI solutions architect.",
    avatar: "https://ui-avatars.com/api/?name=Kavya+Nair&background=059669&color=fff&size=200",
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
  {
    name: "Siddharth Rao",
    role: "Lead Backend Engineer",
    bio: "Cloud-native developer. AWS certified, 8+ years backend experience.",
    avatar: "https://ui-avatars.com/api/?name=Siddharth+Rao&background=dc2626&color=fff&size=200",
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
  {
    name: "Pooja Iyer",
    role: "Marketing Director",
    bio: "Digital marketing strategist who has grown brands from 0 to 1M users.",
    avatar: "https://ui-avatars.com/api/?name=Pooja+Iyer&background=d97706&color=fff&size=200",
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="section-padding bg-[var(--bg-secondary)]">
      <div className="container-custom">
        <SectionHeader
          badge="Our Team"
          title="Meet The "
          highlight="Experts"
          description="A talented team of technology enthusiasts committed to building exceptional digital experiences."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-6 text-center group"
            >
              <div className="relative inline-block mb-4">
                <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto border-2 border-[var(--border-color)] group-hover:border-nexara-blue transition-colors duration-300">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-[var(--card-bg)]" />
              </div>
              <h3
                style={{ fontFamily: "Outfit, sans-serif" }}
                className="font-bold text-[var(--text-primary)] text-lg mb-1"
              >
                {member.name}
              </h3>
              <p className="text-sm text-nexara-blue font-medium mb-3">{member.role}</p>
              <p className="text-sm text-[var(--text-secondary)] mb-5 leading-relaxed">{member.bio}</p>
              <div className="flex justify-center gap-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} LinkedIn`}
                  className="p-2 rounded-lg bg-[var(--border-color)] text-[var(--text-secondary)] hover:bg-nexara-blue hover:text-white transition-all duration-200"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} GitHub`}
                  className="p-2 rounded-lg bg-[var(--border-color)] text-[var(--text-secondary)] hover:bg-gray-700 hover:text-white transition-all duration-200"
                >
                  <Github size={16} />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} Twitter`}
                  className="p-2 rounded-lg bg-[var(--border-color)] text-[var(--text-secondary)] hover:bg-sky-500 hover:text-white transition-all duration-200"
                >
                  <Twitter size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
