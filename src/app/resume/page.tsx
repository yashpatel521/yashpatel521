"use client";

import { useLanguage } from "@/libs/LanguageContext";
import { IMG_PATH } from "@/libs/constants";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ResumePage() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen text-white bg-[#121212] py-12 px-6 md:px-12 lg:px-24 font-sans relative overflow-hidden flex flex-col items-center">
      {/* Background glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-5xl z-20 flex flex-col gap-6 h-full">
        {/* Navigation / Header */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors duration-300 font-medium"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-300 group-hover:-translate-x-1">
              <ArrowLeft size={16} />
            </span>
            {lang === "fr" ? "Retour au Portfolio" : "Back to Portfolio"}
          </Link>

          <a
            href={`${IMG_PATH}/Full-stack_resume_yash.pdf`}
            download
            className="flex items-center gap-2 h-12 px-6 rounded-full bg-cyan-500 text-black font-semibold transition-all hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:scale-105 active:scale-95 text-sm self-start sm:self-auto"
          >
            <Download size={16} />
            {lang === "fr" ? "Télécharger le PDF" : "Download PDF"}
          </a>
        </header>

        {/* PDF Viewer Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full grow bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative"
          style={{ height: "calc(100vh - 180px)" }}
        >
          <iframe
            src={`${IMG_PATH}/Full-stack_resume_yash.pdf`}
            className="w-full h-full border-none"
            title="Yash Patel Resume"
          />
        </motion.div>
      </div>
    </main>
  );
}
