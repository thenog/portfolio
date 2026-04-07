"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, LayoutGroup } from "framer-motion";
import { Home, FolderOpen, FileText, Mail } from "lucide-react";

const MotionLink = motion(Link);

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
        <div className="flex items-center gap-4 px-9 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] will-change-transform">
          <LayoutGroup id="mobile-nav">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <MotionLink
                  key={item.label}
                  href={item.href}
                  whileTap={{ scale: 0.85 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="relative flex flex-col items-center justify-center min-w-[50px]"
                  style={{ touchAction: "manipulation" }}
                >
                  {active && (
                    <motion.div
                      layoutId="mobile-indicator"
                      className="absolute inset-y-0 -inset-x-3 rounded-full bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className={`relative z-10 transition-opacity ${active ? "opacity-100" : "opacity-25"}`}
                  />
                  <span
                    className={`relative z-10 text-xs font-bold font-body transition-opacity ${active ? "opacity-100" : "opacity-25"}`}
                  >
                    {item.label}
                  </span>
                </MotionLink>
              );
            })}
          </LayoutGroup>
        </div>
      </nav>

      {/* Desktop Top Nav */}
      <nav className="fixed top-[43px] left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="flex items-center justify-between px-9 py-2 rounded-full bg-black/40 backdrop-blur-md min-w-[644px] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] will-change-transform">
          <Link
            href="/"
            className="font-display font-bold text-2xl tracking-tight whitespace-nowrap"
          >
            Andrew Pawlik
          </Link>
          <div className="flex items-center gap-4">
            <LayoutGroup id="desktop-nav">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <MotionLink
                    key={item.label}
                    href={item.href}
                    whileTap={{ scale: 0.88 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="relative min-w-[50px] text-center text-xs font-bold font-body px-3.5 py-1"
                    style={{ touchAction: "manipulation" }}
                  >
                    {active && (
                      <motion.div
                        layoutId="desktop-indicator"
                        className="absolute inset-y-0 -inset-x-3 rounded-full bg-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span
                      className={`relative z-10 transition-opacity ${active ? "opacity-100" : "opacity-25"}`}
                    >
                      {item.label}
                    </span>
                  </MotionLink>
                );
              })}
            </LayoutGroup>
          </div>
        </div>
      </nav>
    </>
  );
}
