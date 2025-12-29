"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "./ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/entrepreneurship", label: "Entrepreneurship" },
  { href: "/contact", label: "Contact" }
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-soft border-b border-white/50 bg-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <Link
            href="/"
            className="group flex items-center gap-3 font-semibold tracking-tight text-ink"
            aria-label="Amanda Yin home"
          >
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white shadow-glow">
              AY
            </span>
            <span className="text-lg">Amanda Yin</span>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-border bg-white/70 px-2 py-1 shadow-soft md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative rounded-full px-3 py-2 text-sm font-semibold text-muted transition"
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/80 to-accent/70 shadow-glow"
                    />
                  ) : null}
                  <span
                    className={`relative z-10 ${active ? "text-white" : "text-ink"}`}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden md:inline-flex"
            >
              <Link href="/CV_Amanda_Yin_25.pdf" target="_blank">
                <Download className="h-4 w-4" />
                Download CV
              </Link>
            </Button>
          </div>
        </div>

        <nav className="md:hidden">
          <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-6 pb-4">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-gradient-to-r from-primary to-accent text-white shadow-glow"
                      : "bg-white/70 text-ink border border-border"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/CV_Amanda_Yin_25.pdf"
              target="_blank"
              className="whitespace-nowrap rounded-full border border-border bg-white/80 px-3 py-2 text-sm font-semibold text-ink"
            >
              Download CV
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
