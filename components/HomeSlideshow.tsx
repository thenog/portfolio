"use client";

import ProjectSlide from "./ProjectSlide";
import type { Project } from "@/data/projects";

interface HomeSlideshowProps {
  projects: Project[];
}

export default function HomeSlideshow({ projects }: HomeSlideshowProps) {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hide">
      {projects.map((project) => (
        <div key={project.id} className="h-screen snap-start snap-always">
          <ProjectSlide project={project} />
        </div>
      ))}
    </div>
  );
}
