"use client";

import { useLanguage } from "@/libs/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      aria-label={lang === "en" ? "Switch to French" : "Passer en anglais"}
      className="
        fixed top-5 right-5 z-9999
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
      <span className={lang === "en" ? "text-cyan-400" : "text-zinc-500"}>
        EN
      </span>
      <span className="text-zinc-600">/</span>
      <span className={lang === "fr" ? "text-cyan-400" : "text-zinc-500"}>
        FR
      </span>
    </button>
  );
}
