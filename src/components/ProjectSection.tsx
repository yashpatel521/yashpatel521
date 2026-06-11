"use client";

import Image from "next/image";
import { Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/translations/projects";
import { useLanguage } from "@/libs/LanguageContext";

export default function ProjectSection() {
  const { t, lang } = useLanguage();

  const projectItems = projects.items.map((item) => ({
    id: item.id,
    title: typeof item.title === "string" ? item.title : t(item.title),
    category: t(item.category),
    description: t(item.description),
    image: item.image,
    tech: item.tech,
    link: item.link,
    githubLinks: item.githubLinks,
  }));

  return (
    <div className="relative z-20 w-full mb-32 px-6 md:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t(projects.title)}
          </h2>
          <p className="text-zinc-400 max-w-xl md:mx-auto md:text-center text-left">
            {t(projects.subtitle)}
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {projectItems.map((project, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`w-full relative group flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${isLeft ? "" : "md:flex-row-reverse"}`}
              >
                {/* Horizontal line connecting image and text on desktop */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-12 lg:w-20 h-[1px] bg-gradient-to-r from-cyan-500/20 via-cyan-400 to-cyan-500/20 z-10 transition-all duration-500 group-hover:h-[2px] group-hover:shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                {/* Image Section */}
                <div className="w-full md:w-1/2 relative group">
                  <div className="absolute inset-0 bg-linear-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl transition-all duration-700 group-hover:blur-2xl group-hover:from-cyan-400/30 group-hover:to-blue-500/30 opacity-50" />
                  <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-[#1a1a1a]">
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
                  <div className="p-6 rounded-xl bg-white/0.02 border border-white/5 backdrop-blur-md mb-6 shadow-[inset_0_1px_rgba(255,255,255,0.05)] w-full text-left">
                    {(() => {
                      const points =
                        project.description.split(/(?=\d+\)|\d+\.\s|🔹)/g);
                      if (points.length > 1) {
                        return (
                          <div className="flex flex-col gap-2">
                            {/* If there is a lead-in text before the first numbered item/bullet */}
                            {points[0].trim() &&
                              !/^\d+\)|^\d+\.\s|^🔹/.test(points[0].trim()) && (
                                <p className="text-zinc-300 font-light leading-relaxed mb-2">
                                  {points[0].trim()}
                                </p>
                              )}
                            <ul className="list-none flex flex-col gap-2 text-zinc-300 font-light leading-relaxed text-sm">
                              {points.map((pt, idx) => {
                                const trimmed = pt.trim();
                                if (!trimmed) return null;
                                if (
                                  idx === 0 &&
                                  !/^\d+\)|^\d+\.\s|^🔹/.test(trimmed)
                                )
                                  return null;
                                const match =
                                  trimmed.match(/^(\d+\)|🔹)\s*(.*)/s);
                                const marker = match ? match[1] : "•";
                                const text = match ? match[2] : trimmed;
                                return (
                                  <li
                                    key={idx}
                                    className="flex gap-3 items-start"
                                  >
                                    <span className="text-cyan-400 font-semibold shrink-0 min-w-5">
                                      {marker}
                                    </span>
                                    <span>{text}</span>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      }
                      return (
                        <p className="text-zinc-300 font-light leading-relaxed">
                          {project.description}
                        </p>
                      );
                    })()}
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

                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 h-12 px-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-medium transition-all hover:bg-cyan-500 hover:text-[#050814] hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                      >
                        {project.link.includes("github.com") ? (
                          <>
                            {t(projects.viewCode)} <Github size={16} />
                          </>
                        ) : (
                          <>
                            {lang === "fr"
                              ? "Visiter le Site"
                              : "Visit Website"}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-external-link"
                            >
                              <path d="M15 3h6v6" />
                              <path d="M10 14 21 3" />
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            </svg>
                          </>
                        )}
                      </a>
                    )}

                    {project.githubLinks?.frontend && (
                      <a
                        href={project.githubLinks.frontend}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 h-12 px-6 rounded-full bg-white/5 border border-white/10 text-white font-medium transition-all hover:bg-white/10 hover:border-white/20"
                      >
                        Frontend <Github size={16} />
                      </a>
                    )}

                    {project.githubLinks?.backend && (
                      <a
                        href={project.githubLinks.backend}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 h-12 px-6 rounded-full bg-white/5 border border-white/10 text-white font-medium transition-all hover:bg-white/10 hover:border-white/20"
                      >
                        Backend <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
