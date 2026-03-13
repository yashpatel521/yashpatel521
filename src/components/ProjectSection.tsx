"use client";

import Image from "next/image";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  link?: string;
}

const basePath = "/yashpatel521";

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "SmartOps – AI Automation SaaS Platform",
    category: "Oct 2024 – Nov 2025",
    description: "AI-powered SaaS platform automating business workflows, ticket routing, and operational forecasting. Integrated OpenAI API for AI-driven automation, reducing operational overhead by 45% via an event-driven architecture.",
    image: `${basePath}/projects/smartops.png`,
    tech: ["Next.js", "Node.js", "Redis", "PostgreSQL", "OpenAI"],
  },
  {
    id: 2,
    title: "Enterprise AI & Real-Time Data Platform",
    category: "Oct 2024 – Nov 2025",
    description: "A scalable microservices-based platform enabling real-time data analytics, multi-tenant workflows, and AI-driven decision making. Optimized for performance and secure data handling.",
    image: `${basePath}/projects/1.png`,
    tech: ["Node.js", "Hasura", "AWS", "GraphQL"],
  },
  {
    id: 3,
    title: "Sixywin",
    category: "May 2025 – Sep 2025",
    description: "A web-based lottery-style game where users pick 6 numbers and spin daily to win virtual coins. Features daily spins, leaderboards, and rewarded ads.",
    image: `${basePath}/projects/sixywin.png`,
    tech: ["React.js", "Supabase", "Tailwind CSS", "Vercel"],
  },
  {
    id: 4,
    title: "Ai Translation App",
    category: "Mar 2024 – Jul 2024 (Tav College)",
    description: "A translation application comparing multiple AI models (ChatGPT, Gemini, DeepL) integrating image processing features to extract and translate text from images.",
    image: `${basePath}/projects/aitranslation.png`,
    tech: ["Express.js", "TypeORM", "TypeScript", "SQLite"],
    link: "https://github.com/yashpatel521/translation-app",
  },
  {
    id: 5,
    title: "Blog App",
    category: "Jan 2024 – Jul 2024 (Tav College)",
    description: "Developed a full-stack blog application for managing notes, demonstrating integration between frontend and backend. Designed a user-friendly interface with seamless data handling for an optimal user experience.",
    image: `${basePath}/projects/2.png`,
    tech: ["Next.js", "Prisma ORM"],
    link: "https://github.com/yashpatel521/nextjs-blog",
  },
  {
    id: 6,
    title: "Project Management System",
    category: "Feb 2024 – Jul 2024 (Tav College)",
    description: "Developed both backend and frontend architecture for a cross-platform desktop software (Windows, Mac, Linux) utilizing ElectronJS and Node.js.",
    image: `${basePath}/projects/3.png`,
    tech: ["Node.js", "Next.js", "ElectronJS", "MySQL"],
  }
];

export default function ProjectSection() {
  return (
    <section className="relative z-20 bg-gradient-to-b from-[#121212] via-[#0a0f1c] to-[#050814] py-32 px-6 md:px-12 lg:px-24 border-t border-cyan-500/[0.1]">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col text-center md:text-left mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            Featured Projects
          </h2>
          <p className="text-zinc-400 max-w-2xl text-lg font-light md:mx-0 mx-auto">
            A selection of highly-performant web applications, AI-driven platforms, and enterprise solutions.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${isLeft ? '' : 'md:flex-row-reverse'}`}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl transition-all duration-700 group-hover:blur-2xl group-hover:from-cyan-400/30 group-hover:to-blue-500/30 opacity-50" />
                  <div className="relative rounded-2xl overflow-hidden border border-white/[0.05] shadow-2xl bg-[#1a1a1a]">
                    <div className="w-full relative aspect-video bg-black/50">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left">
                  <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-3">
                    {project.category}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {project.title}
                  </h3>
                  <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md mb-6 shadow-[inset_0_1px_rgba(255,255,255,0.05)] w-full text-left">
                    <p className="text-zinc-300 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs font-medium text-cyan-100 bg-cyan-900/30 rounded-full border border-cyan-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 h-12 px-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-medium transition-all hover:bg-cyan-500 hover:text-[#050814] hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                        View Code <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
