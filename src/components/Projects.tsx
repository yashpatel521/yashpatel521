"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useTranslations } from "next-intl";

interface SkillCategory {
  title: string;
  skills: string[];
}

export default function Skills() {
  const t = useTranslations("skills");
  const skillCategories = t.raw("categories") as SkillCategory[];

  const leftSkills = skillCategories.filter((_, i) => i % 2 === 0);
  const rightSkills = skillCategories.filter((_, i) => i % 2 !== 0);

  return (
    <div className="w-full mb-32 relative">
      <div className="text-center md:text-left mb-24 px-6 md:px-0">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          {t("title")}
        </h2>
        <p className="text-zinc-400 max-w-xl md:mx-auto md:text-center text-left">
          {t("subtitle")}
        </p>
      </div>

      <div className="hidden md:flex w-full relative">
        <div className="w-1/2 pr-12 lg:pr-24 flex flex-col gap-16">
          {leftSkills.map((category, index) => (
            <SkillCard key={index} category={category} side="left" />
          ))}
        </div>

        <div className="w-1/2 pl-12 lg:pl-24 flex flex-col gap-16 pt-32">
          {rightSkills.map((category, index) => (
            <SkillCard key={index} category={category} side="right" delay={0.2} />
          ))}
        </div>
      </div>

      <div className="md:hidden flex flex-col gap-10 pl-12 pr-4 relative">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full relative group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md transition-all duration-500 text-left"
          >
            <div className="absolute top-8 -left-12 -translate-x-[50%] w-3 h-3 rounded-full bg-[#121212] border-2 border-cyan-500 z-10" />
            <div className="absolute top-8 -left-12 w-12 h-[1px] bg-gradient-to-l from-cyan-500/20 to-cyan-500 z-0" />
            <div className="absolute top-8 left-0 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-500 z-10" />

            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Terminal className="h-3 w-3" />
              </div>
              <h3 className="text-lg font-bold text-zinc-100">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1.5 text-xs font-medium text-zinc-300 bg-white/[0.03] rounded-md border border-white/[0.1]"
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

function SkillCard({
  category,
  side,
  delay = 0,
}: {
  category: SkillCategory;
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
      className={`w-full relative group p-6 xl:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md transition-all duration-500 hover:bg-white/[0.05] hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] ${
        isLeft ? "text-right" : "text-left"
      }`}
    >
      {isLeft ? (
        <>
          <div className="absolute top-1/2 -translate-y-1/2 -right-12 lg:-right-24 translate-x-[50%] w-4 h-4 rounded-full bg-[#121212] border-2 border-cyan-500 z-10 transition-all duration-500 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
          <div className="absolute top-1/2 -translate-y-1/2 -right-12 lg:-right-24 w-12 lg:w-24 h-[1px] bg-gradient-to-r from-cyan-500/20 to-cyan-500 group-hover:h-[2px] z-0 transition-all duration-500" />
        </>
      ) : (
        <>
          <div className="absolute top-1/2 -translate-y-1/2 -left-12 lg:-left-24 -translate-x-[50%] w-4 h-4 rounded-full bg-[#121212] border-2 border-cyan-500 z-10 transition-all duration-500 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
          <div className="absolute top-1/2 -translate-y-1/2 -left-12 lg:-left-24 w-12 lg:w-24 h-[1px] bg-gradient-to-l from-cyan-500/20 to-cyan-500 group-hover:h-[2px] z-0 transition-all duration-500" />
        </>
      )}

      <div
        className={`flex items-center gap-3 mb-6 ${
          isLeft ? "justify-end" : "justify-start"
        }`}
      >
        {isLeft ? (
          <>
            <h3 className="text-xl font-bold text-zinc-100">{category.title}</h3>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Terminal className="h-4 w-4" />
            </div>
          </>
        ) : (
          <>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Terminal className="h-4 w-4" />
            </div>
            <h3 className="text-xl font-bold text-zinc-100">{category.title}</h3>
          </>
        )}
      </div>

      <div className={`flex flex-wrap gap-2 ${isLeft ? "justify-end" : "justify-start"}`}>
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-sm font-medium text-zinc-300 bg-white/[0.03] rounded-md border border-white/[0.1] hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
