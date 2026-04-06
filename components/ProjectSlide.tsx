import Image from "next/image";
import GlassButton from "./GlassButton";
import type { Project } from "@/data/projects";

interface ProjectSlideProps {
  project: Project;
}

export default function ProjectSlide({ project }: ProjectSlideProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={project.backgroundImage}
        alt={project.title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Content — bottom-aligned */}
      <div className="absolute bottom-32 md:bottom-40 left-1/2 -translate-x-1/2 w-[314px] md:w-[610px] flex flex-col gap-4">
        <h1
          className="font-display font-bold text-4xl md:text-[96px] tracking-tighter leading-none"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          {project.title}
        </h1>
        <p className="font-body text-base md:text-2xl leading-[1.2] text-white">
          {project.description}
        </p>
        <div>
          <GlassButton href={`/project/${project.slug}`}>
            See project
          </GlassButton>
        </div>
      </div>
    </div>
  );
}
