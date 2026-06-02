"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
}

export default function Experience() {
  const t = useTranslations("experience");
  const experiences = t.raw("items") as ExperienceItem[];

  const leftExps = experiences.filter((_, i) => i % 2 === 0);
  const rightExps = experiences.filter((_, i) => i % 2 !== 0);

  return (
    <div className="w-full mb-32 relative">
      <div className="text-center md:text-left mb-16 px-6 md:px-0">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          {t("title")}
        </h2>
        <p className="text-zinc-400 max-w-xl md:mx-auto md:text-center text-left">
          {t("subtitle")}
        </p>
      </div>

      <div className="hidden md:flex w-full relative">
        <div className="w-1/2 pr-12 lg:pr-16 flex flex-col gap-12">
          {leftExps.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} side="left" />
          ))}
        </div>

        <div className="w-1/2 pl-12 lg:pl-16 flex flex-col gap-12 pt-24 lg:pt-32">
          {rightExps.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} side="right" delay={0.2} />
          ))}
        </div>
      </div>

      <div className="md:hidden flex flex-col gap-8 pl-12 pr-4 relative">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full relative group p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-md text-left"
          >
            <ExperienceCardContent exp={exp} compact />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({
  exp,
  side,
  delay = 0,
}: {
  exp: ExperienceItem;
  side: "left" | "right";
  delay?: number;
}) {
  const isLeft = side === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className="w-full relative group p-6 xl:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-md transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.1] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] text-left"
    >
      {isLeft ? (
        <>
          <div className="absolute top-1/2 -translate-y-1/2 -right-12 lg:-right-16 translate-x-[50%] w-4 h-4 rounded-full bg-zinc-500 border-4 border-[#121212] z-10 transition-all duration-500 group-hover:bg-cyan-400 group-hover:border-cyan-400/20 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
          <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full w-12 lg:w-16 h-[2px] bg-gradient-to-r from-transparent to-white/[0.1] group-hover:to-cyan-500/50 z-0 transition-colors duration-500" />
        </>
      ) : (
        <>
          <div className="absolute top-1/2 -translate-y-1/2 -left-12 lg:-left-16 -translate-x-[50%] w-4 h-4 rounded-full bg-zinc-500 border-4 border-[#121212] z-10 transition-all duration-500 group-hover:bg-cyan-400 group-hover:border-cyan-400/20 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-full w-12 lg:w-16 h-[2px] bg-gradient-to-l from-transparent to-white/[0.1] group-hover:to-cyan-500/50 z-0 transition-colors duration-500" />
        </>
      )}
      <ExperienceCardContent exp={exp} />
    </motion.div>
  );
}

function ExperienceCardContent({
  exp,
  compact = false,
}: {
  exp: ExperienceItem;
  compact?: boolean;
}) {
  return (
    <>
      <p
        className={`font-medium text-zinc-400 mb-2 uppercase tracking-wide ${
          compact ? "text-xs mb-1" : "text-xs"
        }`}
      >
        {exp.date}
      </p>
      <h3
        className={`font-semibold text-zinc-100 mb-1 leading-tight ${
          compact ? "text-xl" : "text-2xl"
        }`}
      >
        {exp.role}
      </h3>
      <h4
        className={`text-zinc-300 font-light italic mb-4 ${
          compact ? "text-sm mb-3" : "text-lg"
        }`}
      >
        {exp.company}
      </h4>
      <p
        className={`text-zinc-400 font-light leading-relaxed mb-6 text-sm ${
          compact ? "mb-4" : ""
        }`}
      >
        {exp.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {exp.skills.map((skill) => (
          <span
            key={skill}
            className={`font-medium text-zinc-300 bg-white/[0.05] rounded-full border border-white/[0.1] ${
              compact ? "px-2 py-1 text-[10px]" : "px-3 py-1 text-xs"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </>
  );
}
