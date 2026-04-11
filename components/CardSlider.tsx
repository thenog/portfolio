"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import type { SliderCard } from "@/data/projects";
import GlassButton from "./GlassButton";

interface CardSliderProps {
  title: string;
  cards: SliderCard[];
  compact?: boolean;
}

export default function CardSlider({
  title,
  cards,
  compact = false,
}: CardSliderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <h2
        className="font-display font-bold text-2xl md:text-4xl tracking-tight px-8"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        {title}
      </h2>
      <div
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollPaddingInlineStart: "32px" }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className={`flex-shrink-0 snap-start flex flex-col gap-4 w-[310px] md:w-[450px] ${
              i === 0 ? "ml-8" : ""
            } ${i === cards.length - 1 ? "mr-8" : ""}`}
          >
            <div
              className={`relative w-full rounded-2xl overflow-hidden ${
                compact ? "h-[320px] md:h-[500px]" : "h-[320px] md:h-[500px]"
              }`}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 310px, 450px"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h3
                  className="font-display font-bold text-2xl tracking-tight"
                  style={{ fontVariationSettings: "'opsz' 14" }}
                >
                  {card.title}
                </h3>
                {(card.href ? card.description : (!compact && card.description)) && (
                  <p className="font-body text-base leading-relaxed text-white/80">
                    {card.description}
                  </p>
                )}
              </div>
              {card.href && (
                <div className="self-start">
                  <GlassButton href={card.href}>View project</GlassButton>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
