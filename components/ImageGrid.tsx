import Image from "next/image";

interface ImageGridProps {
  images: string[];
}

export default function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 px-6 md:px-8">
      {images.map((src, i) => (
        <div
          key={i}
          className="relative aspect-square rounded-2xl overflow-hidden"
        >
          <Image
            src={src}
            alt={`Grid image ${i + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
      ))}
    </div>
  );
}
