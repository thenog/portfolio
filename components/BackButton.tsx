"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="fixed top-10 left-8 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 backdrop-blur-md transition-all hover:bg-black/60 active:scale-95"
      aria-label="Go back"
    >
      <ChevronLeft size={24} />
    </button>
  );
}
