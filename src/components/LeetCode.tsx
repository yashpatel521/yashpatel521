"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink, Trophy } from "lucide-react";

export default function LeetCode() {
  return (
    <div className="w-full mb-32 relative">
      <div className="text-center md:text-left mb-16 px-6 md:px-0">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Problem Solving
        </h2>
        <p className="text-zinc-400 max-w-xl md:mx-auto md:text-center text-left">
          Sharpening algorithmic thinking and data structure expertise through consistent LeetCode practice.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl overflow-hidden hover:bg-white/[0.04] transition-all duration-500 hover:border-yellow-500/30 hover:shadow-[0_0_50px_rgba(234,179,8,0.1)]"
        >
          {/* Background Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-yellow-500/20 transition-all duration-700" />
          
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between relative z-10">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500">
                  <Trophy size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white leading-tight">LeetCode Mastery</h3>
                  <p className="text-zinc-500 text-sm">@yash521</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-zinc-300">
                  <div className="h-2 w-2 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,1)]" />
                  <span>Consistency in Data Structures & Algorithms</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <div className="h-2 w-2 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,1)]" />
                  <span>Active Repository for Solution Tracking</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a 
                  href="https://leetcode.com/u/yash521/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-all hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(234,179,8,0.2)]"
                >
                  View Profile <ExternalLink size={16} />
                </a>
                <a 
                  href="https://github.com/yashpatel521/leetcode" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] border border-white/[0.1] text-white font-bold hover:bg-white/[0.1] transition-all hover:scale-105 active:scale-95"
                >
                  Solution Repo <Code2 size={16} />
                </a>
              </div>
            </div>

            <div className="w-full md:w-auto flex justify-center">
              <div className="relative p-2 rounded-2xl bg-black/40 border border-white/[0.1] backdrop-blur-md group-hover:border-yellow-500/50 transition-all duration-500">
                 {/* This card uses the working jacoblin API found during research */}
                <img 
                  src="https://leetcard.jacoblin.cool/yash521?theme=dark" 
                  alt="LeetCode Stats"
                  className="rounded-lg shadow-2xl max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
