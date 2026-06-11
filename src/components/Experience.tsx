"use client";

import { motion } from "framer-motion";
import { experience } from "@/translations/experience";
import { useLanguage } from "@/libs/LanguageContext";

export default function Experience() {
  const { t, lang } = useLanguage();

  const experiences = experience.items.map((item) => ({
    id: item.id,
    role: t(item.role),
    company: t(item.company),
    date: t(item.date),
    description: t(item.description),
    skills: item.skills,
    link: item.link,
  }));

  const leftExps = experiences.filter((_, i) => i % 2 === 0);
  const rightExps = experiences.filter((_, i) => i % 2 !== 0);

  return (
    <div className="w-full mb-32 relative">
      <div className="text-center md:text-left mb-16 px-6 md:px-0">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          {t(experience.title)}
        </h2>
        <p className="text-zinc-400 max-w-xl md:mx-auto md:text-center text-left">
          {t(experience.subtitle)}
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
              className="w-full relative group p-6 xl:p-8 rounded-2xl bg-white/3 border border-white/5 backdrop-blur-md transition-all duration-500 hover:bg-white/5 hover:border-white/10 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] text-left"
            >
              <div className="absolute top-1/2 -translate-y-1/2 -right-12 lg:-right-16 translate-x-[50%] w-4 h-4 rounded-full bg-zinc-500 border-4 border-[#121212] z-10 transition-all duration-500 group-hover:bg-cyan-400 group-hover:border-cyan-400/20 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
              <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full w-12 lg:w-16 h-0.5 bg-linear-to-r from-transparent to-white/10 group-hover:to-cyan-500/50 z-0 transition-colors duration-500" />

              <p className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wide">
                {exp.date}
              </p>
              <h3 className="text-2xl font-semibold text-zinc-100 mb-1 leading-tight">
                {exp.role}
              </h3>
              <h4 className="text-lg text-zinc-300 font-light italic mb-4">
                {exp.link ? (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    {exp.company}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                  </a>
                ) : (
                  exp.company
                )}
              </h4>
              <div className="text-zinc-400 font-light leading-relaxed mb-6 text-sm flex flex-col gap-2">
                {exp.description.split("\n").map((line, idx) => (
                  <p key={idx} className="flex gap-2 items-start">
                    <span className="text-cyan-400 shrink-0 select-none">•</span>
                    <span>{line.replace(/^[–-]\s*/, "")}</span>
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium text-zinc-300 bg-white/5 rounded-full border border-white/10"
                  >
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
              className="w-full relative group p-6 xl:p-8 rounded-2xl bg-white/3 border border-white/5 backdrop-blur-md transition-all duration-500 hover:bg-white/5 hover:border-white/10 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] text-left"
            >
              <div className="absolute top-1/2 -translate-y-1/2 -left-12 lg:-left-16 -translate-x-[50%] w-4 h-4 rounded-full bg-zinc-500 border-4 border-[#121212] z-10 transition-all duration-500 group-hover:bg-cyan-400 group-hover:border-cyan-400/20 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
              <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-full w-12 lg:w-16 h-0.5 bg-linear-to-l from-transparent to-white/10 group-hover:to-cyan-500/50 z-0 transition-colors duration-500" />

              <p className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wide">
                {exp.date}
              </p>
              <h3 className="text-2xl font-semibold text-zinc-100 mb-1 leading-tight">
                {exp.role}
              </h3>
              <h4 className="text-lg text-zinc-300 font-light italic mb-4">
                {exp.link ? (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    {exp.company}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                  </a>
                ) : (
                  exp.company
                )}
              </h4>
              <div className="text-zinc-400 font-light leading-relaxed mb-6 text-sm flex flex-col gap-2">
                {exp.description.split("\n").map((line, idx) => (
                  <p key={idx} className="flex gap-2 items-start">
                    <span className="text-cyan-400 shrink-0 select-none">•</span>
                    <span>{line.replace(/^[–-]\s*/, "")}</span>
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium text-zinc-300 bg-white/5 rounded-full border border-white/10"
                  >
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
            className="w-full relative group p-5 rounded-2xl bg-white/3 border border-white/5 backdrop-blur-md text-left"
          >
            <p className="text-xs font-medium text-zinc-400 mb-1 uppercase tracking-wide">
              {exp.date}
            </p>
            <h3 className="text-xl font-semibold text-zinc-100 mb-1 leading-tight">
              {exp.role}
            </h3>
            <h4 className="text-sm text-zinc-300 font-light italic mb-3">
              {exp.link ? (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  {exp.company}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
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
                </a>
              ) : (
                exp.company
              )}
            </h4>
            <div className="text-zinc-400 font-light leading-relaxed mb-4 text-sm flex flex-col gap-1.5">
              {exp.description.split("\n").map((line, idx) => (
                <p key={idx} className="flex gap-2 items-start">
                  <span className="text-cyan-400 shrink-0 select-none">•</span>
                  <span>{line.replace(/^[–-]\s*/, "")}</span>
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 text-[10px] font-medium text-zinc-300 bg-white/5 rounded-full border border-white/10"
                >
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
