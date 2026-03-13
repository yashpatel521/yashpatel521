"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Freelance Full Stack Engineer",
    company: "Self-Employed",
    date: "Oct 2024 - Present (Montreal, QC)",
    description: "Specialized in advanced web analysis, backend automation, and AI-driven system development. Architected AI-powered automation platforms using GraphQL, AWS Lambda, and serverless frameworks to optimize enterprise workflows.",
    skills: ["Node.js", "TypeScript", "AWS Lambda", "GraphQL", "AI/LLMs"],
  },
  {
    id: 2,
    role: "Manager",
    company: "Subway",
    date: "Jan 2024 - Present (Montreal, QC)",
    description: "Managing daily operations and staffing in a fast-paced environment.",
    skills: ["Management", "Operations"],
  },
  {
    id: 3,
    role: "Node.js Developer",
    company: "JKSOL INFOTECH",
    date: "Jul 2021 - Jul 2022 (India)",
    description: "Engineered and optimized 12 backend APIs using Node.js, Express.js, and PostgreSQL, reducing server response times by 30% while supporting 50,000+ concurrent users.",
    skills: ["Node.js", "PostgreSQL", "TypeORM", "WebSocket", "AWS EC2"],
  },
  {
    id: 4,
    role: "PHP Developer (Internship)",
    company: "Differenz System",
    date: "Dec 2020 - May 2021 (India)",
    description: "Facilitated development and deployment of 8+ WordPress and PHP web applications, managing live production releases, and reducing downtime by 20%.",
    skills: ["PHP", "WordPress", "JavaScript", "SQL"],
  },
];

export default function Experience() {
  const leftExps = experiences.filter((_, i) => i % 2 === 0);
  const rightExps = experiences.filter((_, i) => i % 2 !== 0);

  return (
    <div className="w-full mb-32 relative">
      <div className="text-center md:text-left mb-16 px-6 md:px-0">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Experience
        </h2>
        <p className="text-zinc-400 max-w-xl md:mx-auto md:text-center text-left">
          A track record of building scalable web and cloud-based applications.
        </p>
      </div>

      {/* Desktop Weaved Layout */}
      <div className="hidden md:flex w-full relative">
        <div className="w-1/2 pr-12 lg:pr-16 flex flex-col gap-12">
          {leftExps.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full relative group p-6 xl:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-md transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.1] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] text-left"
            >
              <div className="absolute top-1/2 -translate-y-1/2 -right-12 lg:-right-16 translate-x-[50%] w-4 h-4 rounded-full bg-zinc-500 border-4 border-[#121212] z-10 transition-all duration-500 group-hover:bg-cyan-400 group-hover:border-cyan-400/20 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
              <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full w-12 lg:w-16 h-[2px] bg-gradient-to-r from-transparent to-white/[0.1] group-hover:to-cyan-500/50 z-0 transition-colors duration-500" />
              
              <p className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wide">
                {exp.date}
              </p>
              <h3 className="text-2xl font-semibold text-zinc-100 mb-1 leading-tight">
                {exp.role}
              </h3>
              <h4 className="text-lg text-zinc-300 font-light italic mb-4">
                {exp.company}
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed mb-6 text-sm">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 text-xs font-medium text-zinc-300 bg-white/[0.05] rounded-full border border-white/[0.1]">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="w-1/2 pl-12 lg:pl-16 flex flex-col gap-12 pt-24 lg:pt-32">
          {rightExps.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="w-full relative group p-6 xl:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-md transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.1] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] text-left"
            >
              <div className="absolute top-1/2 -translate-y-1/2 -left-12 lg:-left-16 -translate-x-[50%] w-4 h-4 rounded-full bg-zinc-500 border-4 border-[#121212] z-10 transition-all duration-500 group-hover:bg-cyan-400 group-hover:border-cyan-400/20 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
              <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-full w-12 lg:w-16 h-[2px] bg-gradient-to-l from-transparent to-white/[0.1] group-hover:to-cyan-500/50 z-0 transition-colors duration-500" />
              
              <p className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wide">
                {exp.date}
              </p>
              <h3 className="text-2xl font-semibold text-zinc-100 mb-1 leading-tight">
                {exp.role}
              </h3>
              <h4 className="text-lg text-zinc-300 font-light italic mb-4">
                {exp.company}
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed mb-6 text-sm">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 text-xs font-medium text-zinc-300 bg-white/[0.05] rounded-full border border-white/[0.1]">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Stack Layout */}
      <div className="md:hidden flex flex-col gap-8 pl-12 pr-4 relative">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full relative group p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-md text-left"
          >
            <p className="text-xs font-medium text-zinc-400 mb-1 uppercase tracking-wide">
              {exp.date}
            </p>
            <h3 className="text-xl font-semibold text-zinc-100 mb-1 leading-tight">
              {exp.role}
            </h3>
            <h4 className="text-sm text-zinc-300 font-light italic mb-3">
              {exp.company}
            </h4>
            <p className="text-zinc-400 font-light leading-relaxed mb-4 text-sm">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map(skill => (
                <span key={skill} className="px-2 py-1 text-[10px] font-medium text-zinc-300 bg-white/[0.05] rounded-full border border-white/[0.1]">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
