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

  // Close menu when clicking outside
  useEffect(() => {
    if (!open) return;
    const handleClick = () => setOpen(false);
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open]);

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

          <div className="flex items-center gap-3">
            {/* CV Download button - always visible */}
            <Link
              href="/CV_Amanda_Yin_25.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-borderDark bg-paper px-3 py-2 text-sm font-medium text-ink transition-all hover:border-tiffany hover:text-tiffany"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">CV</span>
            </Link>

            {/* Hamburger menu button - always visible */}
            <div className="relative">
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen((v) => !v);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-paper text-ink transition-all hover:border-tiffany focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tiffany/40"
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

              {/* Dropdown menu */}
              <AnimatePresence>
                {open && (
                  <motion.div
                    className="absolute right-0 top-full z-50 mt-2 w-48 rounded-sm border border-border bg-paper p-2 shadow-paperLifted"
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
                            transition={{ delay: index * 0.03 }}
                          >
                            <Link
                              href={link.href}
                              className={`flex items-center justify-between rounded-sm px-3 py-2 text-sm font-medium transition-colors ${
                                active
                                  ? "bg-tiffanyMuted text-tiffany"
                                  : "text-ink hover:bg-paperDark"
                              }`}
                            >
                              <span>{link.label}</span>
                              <ArrowUpRight className={`h-3.5 w-3.5 ${active ? "text-tiffany" : "text-inkWash"}`} />
                            </Link>
                          </motion.div>
                        );
                      })}
                    </nav>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Backdrop overlay when menu is open */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-ink/5"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
