"use client";

import { useState } from "react";
import Image from "next/image";
import {
  motion,
  useTransform,
  useMotionTemplate,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";
import GlassButton from "./GlassButton";
import type { Project } from "@/data/projects";

interface ProjectSlideProps {
  project: Project;
  index: number;
  totalSlides: number;
  containerScrollProgress: MotionValue<number>;
}

export default function ProjectSlide({
  project,
  index,
  totalSlides,
  containerScrollProgress,
}: ProjectSlideProps) {
  const [isActive, setIsActive] = useState(index === 0);
  const [hasBeenActive, setHasBeenActive] = useState(index === 0);

  // Each slide's snap point in the 0–1 scroll range
  // scrollYProgress = scrollTop / (scrollHeight - clientHeight)
  // With n slides of 100vh each, max scroll = (n-1) * vh
  // Slide i snaps at scrollTop = i * vh → scrollYProgress = i / (n - 1)
  const lastSlide = totalSlides - 1;
  const snapPoint = lastSlide > 0 ? index / lastSlide : 0;
  const halfSlide = lastSlide > 0 ? 0.5 / lastSlide : 0.5;

  // Blur: 0 when snapped, ramps to max when halfway to neighbor
  const blurAmount = useTransform(
    containerScrollProgress,
    [snapPoint - halfSlide, snapPoint, snapPoint + halfSlide],
    [8, 0, 8]
  );
  const blurFilter = useMotionTemplate`blur(${blurAmount}px)`;

  // Parallax: image shifts slower, content shifts faster
  const imageYPercent = useTransform(
    containerScrollProgress,
    [snapPoint - halfSlide, snapPoint, snapPoint + halfSlide],
    [15, 0, -15]
  );
  const imageTransform = useMotionTemplate`translateY(${imageYPercent}%) translateZ(0)`;

  const contentYPercent = useTransform(
    containerScrollProgress,
    [snapPoint - halfSlide, snapPoint, snapPoint + halfSlide],
    [40, 0, -40]
  );
  const contentTransform = useMotionTemplate`translate(-50%, ${contentYPercent}%) translateZ(0)`;

  // Track active state from the same scroll value (no separate IntersectionObserver)
  useMotionValueEvent(containerScrollProgress, "change", (latest) => {
    const distance = Math.abs(latest - snapPoint);
    const threshold = halfSlide * 0.5;
    const nowActive = distance < threshold;
    if (nowActive && !hasBeenActive) setHasBeenActive(true);
    if (nowActive !== isActive) setIsActive(nowActive);
  });

  const staggerChildren = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <div className="h-screen snap-start snap-always relative w-full overflow-hidden">
      {/* Background image with parallax + blur */}
      <motion.div
        className="absolute inset-0"
        style={{
          transform: imageTransform,
          filter: blurFilter,
          willChange: "transform, filter",
        }}
      >
        <Image
          src={project.backgroundImage}
          alt={project.title}
          fill
          className="object-cover scale-110"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

      {/* Content */}
      {(isActive || hasBeenActive) && (
        <motion.div
          className="absolute bottom-32 md:bottom-40 left-1/2 w-[314px] md:w-[610px] flex flex-col gap-4"
          style={{
            transform: contentTransform,
            willChange: "transform",
          }}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={staggerChildren}
        >
          <motion.h1
            variants={fadeUp}
            className="font-display font-bold text-4xl md:text-[96px] tracking-tighter leading-none"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            {project.title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="font-body text-base md:text-2xl leading-[1.2] text-white"
          >
            {project.description}
          </motion.p>
          <motion.div variants={fadeUp}>
            <GlassButton href={`/project/${project.slug}`}>
              See project
            </GlassButton>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
