"use client";

import { useLanguage } from "@/libs/LanguageContext";
import { projectDetails } from "@/translations/projectDetails";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Terminal,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectDetailClientProps {
  id: string;
}

export default function ProjectDetailClient({ id }: ProjectDetailClientProps) {
  const { t, lang } = useLanguage();
  const projectId = parseInt(id, 10);
  const projectIndex = projectDetails.findIndex((p) => p.id === projectId);
  const project = projectDetails[projectIndex];

  if (!project) {
    return (
      <main className="min-h-screen text-white flex flex-col items-center justify-center p-6 bg-[#121212]">
        <div className="text-center max-w-md">
          <AlertTriangle className="h-16 w-16 text-cyan-400 mx-auto mb-6 animate-pulse" />
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-zinc-400 mb-8">
            The project you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </div>
      </main>
    );
  }

  // Get the next project to suggest at the bottom
  const nextProject =
    projectDetails[(projectIndex + 1) % projectDetails.length];

  return (
    <main className="min-h-screen text-white bg-[#121212] py-24 px-6 md:px-12 lg:px-24 font-sans relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Back Button */}
        <div className="mb-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors duration-300 font-medium"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-300 group-hover:-translate-x-1">
              <ArrowLeft size={16} />
            </span>
            {lang === "fr" ? "Retour à l'accueil" : "Back to Home"}
          </Link>
        </div>

        {/* Hero Header */}
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-3">
              {t(project.subtitle)}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-lg">
              {typeof project.title === "string"
                ? project.title
                : t(project.title)}
            </h1>

            {/* Primary Info & Links Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-white/5 pb-8">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-semibold text-cyan-200 bg-cyan-900/30 rounded-full border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 h-12 px-6 rounded-full bg-cyan-500 text-[#050814] font-semibold transition-all hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:scale-105 active:scale-95 text-sm"
                  >
                    {project.link.includes("github.com") ? (
                      <>
                        {lang === "fr" ? "Voir le Code" : "View Code"}{" "}
                        <Github size={16} />
                      </>
                    ) : (
                      <>
                        {lang === "fr" ? "Visiter le Site" : "Visit Website"}
                        <ExternalLink size={16} />
                      </>
                    )}
                  </a>
                )}

                {project.githubLinks?.frontend && (
                  <a
                    href={project.githubLinks.frontend}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 h-12 px-6 rounded-full bg-white/5 border border-white/10 text-white font-medium transition-all hover:bg-white/10 hover:border-white/20 text-sm"
                  >
                    Frontend <Github size={16} />
                  </a>
                )}

                {project.githubLinks?.backend && (
                  <a
                    href={project.githubLinks.backend}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 h-12 px-6 rounded-full bg-white/5 border border-white/10 text-white font-medium transition-all hover:bg-white/10 hover:border-white/20 text-sm"
                  >
                    Backend <Github size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </header>

        {/* Main Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-stretch">
          {/* Left Side: Visuals (Image) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-white/1 h-full min-h-75"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/10 to-blue-600/10 z-10 pointer-events-none" />
              <Image
                src={project.image}
                alt={
                  typeof project.title === "string"
                    ? project.title
                    : t(project.title)
                }
                fill
                priority
                className="object-cover opacity-90"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </motion.div>
          </div>

          {/* Right Side: Overview */}
          <div className="lg:col-span-5 flex">
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 rounded-3xl bg-white/1 border border-white/3 backdrop-blur-lg shadow-2xl relative overflow-hidden h-full flex flex-col justify-center w-full"
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                {lang === "fr" ? "Aperçu du Projet" : "Project Overview"}
              </h2>
              <p className="text-zinc-300 font-light leading-relaxed text-base">
                {t(project.overview)}
              </p>
            </motion.section>
          </div>
        </div>

        {/* Metrics Section (Full Width) */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/5 pb-4">
                <TrendingUp className="text-cyan-400 h-6 w-6" />
                {lang === "fr" ? "Impact & Résultats" : "Impact & Metrics"}
              </h2>
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${project.metrics.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
              >
                {project.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-8 rounded-2xl bg-white/1 border border-white/3 backdrop-blur-md shadow-[inset_0_1px_rgba(255,255,255,0.03)] hover:border-cyan-500/20 transition-all duration-300"
                  >
                    <p className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400 mb-3">
                      {metric.value}
                    </p>
                    <p className="text-sm text-zinc-400 font-medium tracking-wide">
                      {t(metric.label)}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>
        )}

        {/* Engineering Challenges & Solutions Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/5 pb-4">
              {lang === "fr"
                ? "Défis Techniques & Solutions"
                : "Technical Challenges & Solutions"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.challenges.map((challenge, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white/1 border border-white/3 backdrop-blur-md relative overflow-hidden group shadow-[inset_0_1px_rgba(255,255,255,0.03)] hover:border-cyan-500/20 transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors" />
                  <h3 className="text-xl font-bold text-white mb-4 pl-2">
                    {t(challenge.title)}
                  </h3>
                  <p className="text-zinc-300 font-light text-sm md:text-base leading-relaxed pl-2">
                    {t(challenge.description)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Tech Stack Explanation Grid */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/5 pb-4 flex items-center gap-2">
              <Cpu className="text-cyan-400 h-6 w-6" />
              {lang === "fr"
                ? "Architecture Technique"
                : "Technical Architecture"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.techExplanation.map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/1 border border-white/3 backdrop-blur-md relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-4">
                      <Terminal size={18} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.tech}
                    </h3>
                    <p className="text-zinc-400 font-light text-sm leading-relaxed">
                      {t(item.explanation)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Personal Contributions */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-3xl bg-linear-to-tr from-zinc-900/50 to-white/1 border border-white/5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-cyan-500/2 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              {lang === "fr"
                ? "Mes Contributions Clés"
                : "My Key Contributions"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.contributions.map((contribution, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 font-bold text-xs mt-1">
                    {idx + 1}
                  </span>
                  <p className="text-zinc-300 font-light text-sm md:text-base leading-relaxed">
                    {t(contribution)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Core Features Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/5 pb-4 flex items-center gap-2">
              <CheckCircle2 className="text-cyan-400 h-6 w-6" />
              {lang === "fr" ? "Fonctionnalités Clés" : "Core Features"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/1 border border-white/3 backdrop-blur-md hover:bg-white/4 transition-all duration-300 shadow-[inset_0_1px_rgba(255,255,255,0.03)] flex gap-4 items-start"
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  <p className="text-zinc-300 font-light text-sm md:text-base leading-relaxed">
                    {t(feature)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Footer Navigation */}
        <footer className="border-t border-white/5 pt-12 mt-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              <ArrowLeft size={16} />
              {lang === "fr" ? "Retour au Portfolio" : "Back to Portfolio"}
            </Link>

            <Link
              href={`/projects/${nextProject.id}`}
              className="group flex flex-col items-end text-right p-6 rounded-2xl bg-white/1 border border-white/3 hover:border-cyan-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.05)] w-full md:w-auto md:min-w-[320px]"
            >
              <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-1">
                {lang === "fr" ? "Étude de Cas Suivante" : "Next Case Study"}
              </span>
              <span className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                {typeof nextProject.title === "string"
                  ? nextProject.title
                  : t(nextProject.title)}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
