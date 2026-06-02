"use client";

import { Github } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { withBasePath } from "@/lib/site";

interface ProjectCopy {
  title: string;
  category: string;
  description: string;
}

const projectAssets = [
  {
    imagePath: "/projects/smartops.png",
    tech: ["Next.js", "Node.js", "Redis", "PostgreSQL", "OpenAI"],
  },
  {
    imagePath: "/projects/1.png",
    tech: ["Node.js", "Hasura", "AWS", "GraphQL"],
  },
  {
    imagePath: "/projects/sixywin.png",
    tech: ["React.js", "Supabase", "Tailwind CSS", "Vercel"],
  },
  {
    imagePath: "/projects/aitranslation.png",
    tech: ["Express.js", "TypeORM", "TypeScript", "SQLite"],
    link: "https://github.com/yashpatel521/translation-app",
  },
  {
    imagePath: "/projects/2.png",
    tech: ["Next.js", "Prisma ORM"],
    link: "https://github.com/yashpatel521/nextjs-blog",
  },
  {
    imagePath: "/projects/3.png",
    tech: ["Node.js", "Next.js", "ElectronJS", "MySQL"],
  },
] as const;

export default function ProjectSection() {
  const t = useTranslations("projects");
  const tCommon = useTranslations("common");
  const projectCopy = t.raw("items") as ProjectCopy[];

  const projects = projectCopy.map((copy, index) => ({
    id: index + 1,
    ...copy,
    ...projectAssets[index],
  }));

  return (
    <section className="relative z-20 bg-gradient-to-b from-transparent via-[#0a0f1c]/80 to-[#050814]/90 py-32 px-6 md:px-12 lg:px-24 border-t border-cyan-500/[0.1]">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col text-center md:text-left mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            {t("title")}
          </h2>
          <p className="text-zinc-400 max-w-2xl text-lg font-light md:mx-0 mx-auto">
            {t("subtitle")}
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
                className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${isLeft ? "" : "md:flex-row-reverse"}`}
              >
                <div className="w-full md:w-1/2 relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl transition-all duration-700 group-hover:blur-2xl group-hover:from-cyan-400/30 group-hover:to-blue-500/30 opacity-50" />
                  <div className="relative rounded-2xl overflow-hidden border border-white/[0.05] shadow-2xl bg-[#1a1a1a]">
                    <div className="w-full relative aspect-video bg-black/50">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={withBasePath(project.imagePath)}
                        alt={project.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

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
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-cyan-100 bg-cyan-900/30 rounded-full border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {"link" in project && project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 h-12 px-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-medium transition-all hover:bg-cyan-500 hover:text-[#050814] hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                      >
                        {tCommon("viewCode")} <Github size={16} />
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
