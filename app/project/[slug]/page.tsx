"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getProjectBySlug, getOtherProjects } from "@/data/projects";
import BackButton from "@/components/BackButton";
import CardSlider from "@/components/CardSlider";
import ImageCarousel from "@/components/ImageCarousel";
import ImageGrid from "@/components/ImageGrid";

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const otherProjects = getOtherProjects(project.slug);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-black pb-24"
    >
      <BackButton />

      {/* Hero Image */}
      <div className="relative w-full h-[336px] md:h-[500px]">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Title + Description */}
      <div className="px-8 mt-8 flex flex-col gap-4 max-w-[700px]">
        <h1
          className="font-display font-bold text-4xl md:text-5xl tracking-tighter"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          {project.title}
        </h1>
        <p className="font-body text-base leading-[1.2] text-white/90">
          {project.description}
        </p>
      </div>

      {/* Slider Sections */}
      <div className="mt-12 flex flex-col gap-12">
        {project.sliderSections.map((section, i) => (
          <CardSlider key={i} title={section.title} cards={section.cards} />
        ))}
      </div>

      {/* Long Description */}
      <div className="px-8 mt-12 max-w-[700px]">
        <p className="font-body text-base leading-relaxed text-white/90">
          {project.longDescription}
        </p>
      </div>

      {/* Image Carousel */}
      <div className="mt-12">
        <ImageCarousel images={project.imageCarousel} />
      </div>

      {/* Block Quote */}
      <div className="px-8 mt-16 mb-16 max-w-[500px] mx-auto text-center">
        <p
          className="font-display font-bold text-2xl leading-relaxed tracking-tight"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          {project.blockQuote}
        </p>
      </div>

      {/* Image Grid */}
      <ImageGrid images={project.imageGrid} />

      {/* More Projects */}
      <div className="mt-16">
        <CardSlider
          title="More projects"
          cards={otherProjects.map((p) => ({
            image: p.backgroundImage,
            title: p.title,
            description: "",
          }))}
          compact
        />
        {/* Make "more projects" cards linkable */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-8 mt-4">
          {otherProjects.map((p) => (
            <Link
              key={p.id}
              href={`/project/${p.slug}`}
              className="flex-shrink-0 snap-start text-xs font-bold font-body text-white/50 hover:text-white transition-colors w-[310px] md:w-[450px]"
            >
              View project &rarr;
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
