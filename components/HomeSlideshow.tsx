"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ProjectSlide from "./ProjectSlide";
import type { Project } from "@/data/projects";

interface HomeSlideshowProps {
  projects: Project[];
}

export default function HomeSlideshow({ projects }: HomeSlideshowProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  return (
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
  );
}
