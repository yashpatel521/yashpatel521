"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";

interface EducationItem {
  degree: string;
  institution: string;
  date: string;
  result?: string;
}

export default function Education() {
  const t = useTranslations("education");
  const education = t.raw("items") as EducationItem[];

  const leftEdu = education.filter((_, i) => i % 2 === 0);
  const rightEdu = education.filter((_, i) => i % 2 !== 0);

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
          {leftEdu.map((edu, index) => (
            <EducationCard key={index} edu={edu} side="left" />
          ))}
        </div>

        <div className="w-1/2 pl-12 lg:pl-16 flex flex-col gap-12 pt-16 lg:pt-24">
          {rightEdu.map((edu, index) => (
            <EducationCard key={index} edu={edu} side="right" delay={0.2} />
          ))}
        </div>
      </div>

      <div className="md:hidden flex flex-col gap-6 pl-12 pr-4 relative">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full relative group p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-md text-left"
          >
            <EducationCardContent edu={edu} compact />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function EducationCard({
  edu,
  side,
  delay = 0,
}: {
  edu: EducationItem;
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
          <div className="absolute top-1/2 -translate-y-1/2 -right-12 lg:-right-16 translate-x-[50%] w-3 h-3 rounded-full bg-zinc-500 border-2 border-[#121212] z-10 transition-all duration-500 group-hover:bg-cyan-400 group-hover:border-cyan-400/20 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
          <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full w-12 lg:w-16 h-[2px] bg-gradient-to-r from-transparent to-white/[0.1] group-hover:to-cyan-500/50 z-0 transition-colors duration-500" />
        </>
      ) : (
        <>
          <div className="absolute top-1/2 -translate-y-1/2 -left-12 lg:-left-16 -translate-x-[50%] w-3 h-3 rounded-full bg-zinc-500 border-2 border-[#121212] z-10 transition-all duration-500 group-hover:bg-cyan-400 group-hover:border-cyan-400/20 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-full w-12 lg:w-16 h-[2px] bg-gradient-to-l from-transparent to-white/[0.1] group-hover:to-cyan-500/50 z-0 transition-colors duration-500" />
        </>
      )}
      <EducationCardContent edu={edu} />
    </motion.div>
  );
}

function EducationCardContent({
  edu,
  compact = false,
}: {
  edu: EducationItem;
  compact?: boolean;
}) {
  return (
    <>
      <div className={`flex items-center gap-3 ${compact ? "mb-3" : "mb-4"}`}>
        <div
          className={`flex items-center justify-center rounded-full bg-white/[0.05] border border-white/[0.1] ${
            compact ? "h-8 w-8" : "h-10 w-10"
          }`}
        >
          <GraduationCap className={compact ? "h-4 w-4" : "h-5 w-5 text-zinc-300"} />
        </div>
        <div>
          <h4
            className={`font-semibold text-zinc-100 leading-tight ${
              compact ? "text-sm" : "text-lg"
            }`}
          >
            {edu.institution}
          </h4>
          <p
            className={`font-medium text-zinc-400 mt-1 uppercase tracking-wide ${
              compact ? "text-[10px]" : "text-xs"
            }`}
          >
            {edu.date}
          </p>
        </div>
      </div>
      <h3 className={`text-zinc-300 font-light ${compact ? "text-sm" : "text-base"}`}>
        {edu.degree}
      </h3>
      {edu.result && (
        <p
          className={`text-cyan-400/80 font-medium mt-2 ${
            compact ? "text-xs" : "text-sm"
          }`}
        >
          {edu.result}
        </p>
      )}
    </>
  );
}
