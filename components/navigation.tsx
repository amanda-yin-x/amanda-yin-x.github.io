"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X, ArrowUpRight, Home, Briefcase, Sparkles, Contact, Layers } from "lucide-react";
import { Button } from "./ui/button";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/skills", label: "Skills", icon: Layers },
  { href: "/entrepreneurship", label: "Entrepreneurship", icon: Sparkles },
  { href: "/contact", label: "Contact", icon: Contact }
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-soft border-b border-white/50 bg-white/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8" key={pathname}>
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

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="secondary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              <Link href="/CV_Amanda_Yin_25.pdf" target="_blank" rel="noreferrer">
                <Download className="h-4 w-4" />
                Download CV
              </Link>
            </Button>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/80 text-ink shadow-soft transition hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              <AnimatePresence initial={false} mode="wait">
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {open ? (
          <div className="fixed inset-0 z-40 bg-black/10 backdrop-blur-soft" onClick={() => setOpen(false)}>
            <motion.div
              className="absolute right-4 top-20 w-[min(320px,90vw)] rounded-2xl border border-border bg-white/85 p-4 shadow-soft"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-2">
                {links.map((link) => {
                  const active = pathname === link.href;
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group flex items-center gap-3 rounded-xl px-3 py-2 text-base font-semibold text-ink transition hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-primary shadow-soft">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="relative">
                        {link.label}
                        {active ? (
                          <motion.span
                            layoutId="nav-underline"
                            className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-primary to-accent"
                          />
                        ) : null}
                      </span>
                      <ArrowUpRight className="ml-auto h-4 w-4 text-muted transition group-hover:translate-x-0.5" />
                    </Link>
                  );
                })}
                <Button asChild variant="secondary" className="mt-1 w-full justify-center">
                  <Link href="/CV_Amanda_Yin_25.pdf" target="_blank" rel="noreferrer">
                    <Download className="h-4 w-4" />
                    Download CV
                  </Link>
                </Button>
              </nav>
            </motion.div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
