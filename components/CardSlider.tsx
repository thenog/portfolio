import Image from "next/image";
import type { SliderCard } from "@/data/projects";

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
  return (
    <div className="flex flex-col gap-4">
      <h2
        className="font-display font-bold text-2xl md:text-4xl tracking-tight px-8"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        {title}
      </h2>
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex-shrink-0 snap-start flex flex-col gap-4 w-[310px] md:w-[450px]"
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
            <div className="flex flex-col gap-1">
              <h3
                className="font-display font-bold text-2xl tracking-tight"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                {card.title}
              </h3>
              {!compact && card.description && (
                <p className="font-body text-base leading-relaxed text-white/80">
                  {card.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
