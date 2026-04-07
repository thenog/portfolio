"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, FolderOpen, FileText, Mail } from "lucide-react";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Portfolio", href: "/portfolio", icon: FolderOpen },
  { label: "Blog", href: "/blog", icon: FileText },
  { label: "Contact", href: "/contact", icon: Mail },
];

export default function NavBar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <div className="flex items-center gap-4 px-9 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex flex-col items-center justify-center min-w-[50px] transition-opacity ${
                  active ? "opacity-100" : "opacity-25"
                }`}
              >
                <Icon size={24} strokeWidth={1.5} />
                <span className="text-xs font-bold font-body">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Desktop Top Nav */}
      <nav className="fixed top-[43px] left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="flex items-center justify-between px-9 py-2 rounded-full bg-black/40 backdrop-blur-md min-w-[644px] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <Link
            href="/"
            className="font-display font-bold text-2xl tracking-tight whitespace-nowrap"
          >
            Andrew Pawlik
          </Link>
          <div className="flex items-center gap-4">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`min-w-[50px] text-center text-xs font-bold font-body transition-opacity ${
                    active ? "opacity-100" : "opacity-25"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
