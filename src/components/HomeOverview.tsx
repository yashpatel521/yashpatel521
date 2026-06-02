"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HomeOverview() {
  const t = useTranslations("home");

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t("overviewTitle")}
          </h3>
          <p className="text-zinc-400 max-w-xl">{t("overviewDescription")}</p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/yash-patel-521p/"
            target="_blank"
            rel="noreferrer"
            className="h-12 w-12 rounded-full bg-white/[0.05] border border-white/[0.05] flex items-center justify-center text-zinc-300 transition-all hover:bg-[#0077b5] hover:text-white hover:border-transparent hover:scale-105 active:scale-95"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:yash1451999@gmail.com"
            className="h-12 w-12 rounded-full bg-white/[0.05] border border-white/[0.05] flex items-center justify-center text-zinc-300 transition-all hover:bg-red-500 hover:text-white hover:border-transparent hover:scale-105 active:scale-95"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/yashpatel521"
            target="_blank"
            rel="noreferrer"
            className="h-12 w-12 rounded-full bg-white/[0.05] border border-white/[0.05] flex items-center justify-center text-zinc-300 transition-all hover:bg-white hover:text-black hover:border-transparent hover:scale-105 active:scale-95"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
