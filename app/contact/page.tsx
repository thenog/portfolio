"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="h-screen bg-black flex items-center justify-center px-8">
      <motion.div
        className="flex flex-col gap-4 max-w-[700px]"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h1
          className="font-display font-bold text-[clamp(3rem,10vw,7rem)] tracking-tighter leading-none"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          Contact
        </h1>
        <p className="font-body text-base md:text-2xl leading-[1.2] text-white/40">
          Coming soon.
        </p>
      </motion.div>
    </div>
  );
}
