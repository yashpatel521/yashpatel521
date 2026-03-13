"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

interface TimelineProps {
  children: React.ReactNode;
}

export default function Timeline({ children }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  // Rotate the arrow slightly as it moves for dynamic effect, or just keep it pointing down
  const arrowOpacity = useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative w-full py-24 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative min-h-screen">
        
        {/* The Central Line Background (Track) */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.05] -translate-x-1/2" />

        {/* The Animated Fill Line (Neon Blue) */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-8 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-blue-500 -translate-x-1/2 origin-top shadow-[0_0_15px_rgba(34,211,238,0.8)]"
        />

        {/* The Arrow Head following the line (Neon Desktop) */}
        <motion.div
          style={{ top: lineHeight, opacity: arrowOpacity }}
          className="absolute left-8 md:left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[#121212] border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8),inset_0_0_10px_rgba(34,211,238,0.5)]"
        >
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
            className="text-cyan-400 translate-y-[1px]"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </motion.div>

        {/* Similar Arrow for Mobile (Left aligned, Neon) */}
        <motion.div
          style={{ top: lineHeight, opacity: arrowOpacity }}
          className="absolute left-8 -translate-x-1/2 -translate-y-1/2 z-10 md:hidden flex items-center justify-center w-6 h-6 rounded-full bg-[#121212] border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8),inset_0_0_8px_rgba(34,211,238,0.5)]"
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
            className="text-cyan-400 translate-y-[1px]"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </motion.div>

        {/* The Content Sections */}
        <div className="relative z-20 pt-20">
          {children}
        </div>
      </div>
    </section>
  );
}
