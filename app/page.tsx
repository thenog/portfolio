"use client";

import { motion } from "framer-motion";
import GlassButton from "@/components/GlassButton";

export default function HomePage() {
  return (
    <div className="h-screen bg-black flex items-center justify-center px-8">
      <motion.div
        className="flex flex-col gap-6 max-w-[700px]"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
        }}
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
            },
          }}
          className="font-display font-bold text-[clamp(3rem,10vw,7rem)] tracking-tighter leading-none"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          Andrew Pawlik
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
            },
          }}
          className="font-body text-base md:text-2xl leading-[1.2] text-white/70"
        >
          Designer & creative director crafting brands, digital experiences, and
          the space between them.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
            },
          }}
        >
          <GlassButton href="/portfolio">View work</GlassButton>
        </motion.div>
      </motion.div>
    </div>
  );
}
