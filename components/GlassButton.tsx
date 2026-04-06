import Link from "next/link";

interface GlassButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function GlassButton({ href, children }: GlassButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold font-body text-white transition-all hover:bg-white/20 active:scale-95"
    >
      {children}
    </Link>
  );
}
