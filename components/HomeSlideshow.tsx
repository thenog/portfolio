"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import ProjectSlide from "./ProjectSlide";
import type { Project } from "@/data/projects";

interface HomeSlideshowProps {
  projects: Project[];
}

export default function HomeSlideshow({ projects }: HomeSlideshowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  // Detect active slide from scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (projects.length <= 1) return;
    const snapped = Math.round(latest * (projects.length - 1));
    setActiveSlide(snapped);
  });

  // Auto-advance every 6 seconds, reset whenever active slide changes
  useEffect(() => {
    if (projects.length <= 1) return;
    const timer = setTimeout(() => {
      const next = (activeSlide + 1) % projects.length;
      containerRef.current?.scrollTo({
        top: next * (containerRef.current.clientHeight),
        behavior: "smooth",
      });
    }, 6000);
    return () => clearTimeout(timer);
  }, [activeSlide, projects.length]);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hide"
      >
        {projects.map((project, index) => (
          <ProjectSlide
            key={project.id}
            project={project}
            index={index}
            totalSlides={projects.length}
            containerScrollProgress={scrollYProgress}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="fixed bottom-0 left-0 w-full h-[2px] z-40 bg-white/10">
        <motion.div
          key={activeSlide}
          className="h-full bg-white/50 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 6, ease: "linear" }}
        />
      </div>
    </div>
  );
}
