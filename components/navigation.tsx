"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/entrepreneurship", label: "Ventures" },
  { href: "/contact", label: "Contact" }
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <motion.div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-parchment/95 backdrop-blur-sm border-b border-border shadow-paper"
            : "bg-transparent"
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 lg:px-8">
          <Link
            href="/"
            className="group"
            aria-label="Amanda Yin home"
          >
            <span className="font-hand text-2xl text-ink transition-colors group-hover:text-tiffany">
              Amanda Yin
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    active ? "text-tiffany" : "text-inkFaded hover:text-ink"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-1 -bottom-0.5 h-px bg-tiffany"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/CV_Amanda_Yin_25.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-sm border border-borderDark bg-paper px-4 py-2 text-sm font-medium text-ink transition-all hover:border-tiffany hover:text-tiffany sm:inline-flex"
            >
              <Download className="h-4 w-4" />
              CV
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-paper text-ink transition-all hover:border-tiffany focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tiffany/40 md:hidden"
            >
              <AnimatePresence initial={false} mode="wait">
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 bg-ink/10 backdrop-blur-sm md:hidden"
                onClick={() => setOpen(false)}
              />
              <motion.div
                className="absolute right-4 top-full z-50 mt-2 w-[calc(100vw-2rem)] max-w-xs rounded-sm border border-border bg-paper p-2 shadow-paperLifted md:hidden"
                initial={{ opacity: 0, y: -8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                <nav className="flex flex-col">
                  {links.map((link, index) => {
                    const active = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className={`flex items-center justify-between rounded-sm px-3 py-2.5 text-sm font-medium transition-colors ${
                            active
                              ? "bg-tiffanyMuted text-tiffany"
                              : "text-ink hover:bg-paperDark"
                          }`}
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight className={`h-4 w-4 ${active ? "text-tiffany" : "text-inkWash"}`} />
                        </Link>
                      </motion.div>
                    );
                  })}
                  <div className="mt-2 border-t border-border pt-2">
                    <Link
                      href="/CV_Amanda_Yin_25.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-sm bg-ink px-4 py-2.5 text-sm font-medium text-paper transition-all hover:bg-inkLight"
                    >
                      <Download className="h-4 w-4" />
                      Download CV
                    </Link>
                  </div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
