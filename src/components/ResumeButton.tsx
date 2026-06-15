"use client";

import { useLanguage } from "@/libs/LanguageContext";
import { IMG_PATH } from "@/libs/constants";

export default function ResumeButton() {
  const { lang } = useLanguage();

  return (
    <a
      href={`${IMG_PATH}/Full-stack_resume_yash.pdf`}
      download
      aria-label={lang === "en" ? "Download Resume" : "Télécharger le CV"}
      className="
        fixed top-5 left-5 z-9999
        flex items-center gap-1.5
        px-3 py-1.5 rounded-full
        bg-zinc-900/90 border border-white/10
        text-xs font-semibold tracking-widest uppercase
        text-zinc-300 backdrop-blur-md
        transition-all duration-300
        hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-300
        hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]
        active:scale-95
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-download shrink-0"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
      </svg>
      <span>{lang === "fr" ? "Mon CV" : "Resume"}</span>
    </a>
  );
}
