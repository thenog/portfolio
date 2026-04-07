"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackButton() {
  const router = useRouter();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = 0;
    const handleScroll = () => {
      const currentY = window.scrollY;
      // Show when near top or scrolling up, hide when scrolling down past hero
      if (currentY < 300) {
        setVisible(true);
      } else if (currentY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => router.push("/")}
          className="fixed top-10 left-8 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 backdrop-blur-md transition-all hover:bg-black/60 active:scale-95"
          aria-label="Go back"
        >
          <ChevronLeft size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
