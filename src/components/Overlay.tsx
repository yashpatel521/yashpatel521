"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: "My Name. Creative Developer." (Center) - visible 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  // Section 2: "I build digital experiences." (Left aligned) - 30% scroll
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

  // Section 3: "Bridging design and engineering." (Right aligned) - 60% scroll
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.85], [100, -100]);

  // Section 4: Professional Summary (Center) - 85% to end
  const opacity4 = useTransform(scrollYProgress, [0.8, 0.85, 1.0], [0, 1, 1]);
  const y4 = useTransform(scrollYProgress, [0.8, 1.0], [50, 0]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 h-[500vh] w-full pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex items-center p-8 lg:p-24 overflow-hidden">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-lg mb-2">
            Yash Patel.
          </h1>
          <p className="mt-2 text-xl md:text-3xl font-light text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] uppercase tracking-widest">
            Full-Stack Engineer
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center text-left pl-8 md:pl-24 w-full md:w-2/3"
        >
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-tight drop-shadow-xl">
            Architecting <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">scalable cloud platforms.</span>
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center text-right pr-8 md:pr-24 ml-auto w-full md:w-2/3"
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-snug drop-shadow-xl">
            Pioneering <span className="font-light italic text-cyan-300">AI-driven</span> <br/>
            <span className="font-bold underline decoration-cyan-500/50 underline-offset-8">enterprise automation.</span>
          </h2>
        </motion.div>

        {/* Section 4 */}
        <motion.div 
          style={{ opacity: opacity4, y: y4 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-24"
        >
          <div className="max-w-4xl p-8 md:p-12 rounded-3xl bg-black/40 border border-white/[0.05] backdrop-blur-xl shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              Building the Future of <br className="hidden md:block"/> Enterprise Software.
            </h3>
            <p className="text-lg md:text-xl font-light text-zinc-300 leading-relaxed shadow-black drop-shadow-md">
              I am a professional full-stack engineer building scalable architectures with <span className="text-cyan-400 font-medium tracking-wide">Next.js, Node.js, TypeScript, and AWS</span>. 
              With a strong focus on high-performance infrastructure, I develop enterprise SaaS platforms, AI-driven automation systems, 
              and robust APIs across diverse domains, driven to deliver secure and reliable solutions.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
