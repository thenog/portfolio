"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { getProjectBySlug, getOtherProjects } from "@/data/projects";
import BackButton from "@/components/BackButton";
import CardSlider from "@/components/CardSlider";
import ImageCarousel from "@/components/ImageCarousel";
import ImageGrid from "@/components/ImageGrid";
import ScrollReveal from "@/components/ScrollReveal";

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
    <div className="min-h-screen bg-black pb-24">
      <BackButton />

      {/* Hero Image */}
      <motion.div
        initial={{ scale: 1.03, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full h-[336px] md:h-[500px] overflow-hidden"
      >
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Title + Description */}
      <div className="px-8 mt-8 flex flex-col gap-4 max-w-[700px]">
        <ScrollReveal delay={0.15}>
          <h1
            className="font-display font-bold text-4xl md:text-5xl tracking-tighter"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            {project.title}
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <p className="font-body text-base leading-[1.2] text-white/90">
            {project.description}
          </p>
        </ScrollReveal>
      </div>

      {/* Slider Sections */}
      <div className="mt-12 flex flex-col gap-12">
        {project.sliderSections.map((section, i) => (
          <CardSlider key={i} title={section.title} cards={section.cards} />
        ))}
      </div>

      {/* Long Description */}
      <ScrollReveal className="px-8 mt-12 max-w-[700px]">
        <p className="font-body text-base leading-relaxed text-white/90">
          {project.longDescription}
        </p>
      </ScrollReveal>

      {/* Image Carousel */}
      <ScrollReveal className="mt-12">
        <ImageCarousel images={project.imageCarousel} />
      </ScrollReveal>

      {/* Block Quote */}
      <ScrollReveal className="px-8 mt-16 mb-16 max-w-[500px] mx-auto text-center">
        <p
          className="font-display font-bold text-2xl leading-relaxed tracking-tight"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          {project.blockQuote}
        </p>
      </ScrollReveal>

      {/* Image Grid */}
      <ScrollReveal>
        <ImageGrid images={project.imageGrid} />
      </ScrollReveal>

      {/* More Projects */}
      <div className="mt-16">
        <CardSlider
          title="More projects"
          cards={otherProjects.map((p) => ({
            image: p.backgroundImage,
            title: p.title,
            description: p.description,
            href: `/project/${p.slug}`,
          }))}
        />
      </div>
    </div>
  );
}
