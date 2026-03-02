"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import { aliceQuotes } from "@/lib/site";

const menuSections = [
  {
    label: "Explore",
    links: [
      { href: "/", label: "Home" },
      { href: "/experience", label: "Experience" },
      { href: "/skills", label: "Skills" },
      { href: "/entrepreneurship", label: "Ventures" },
      { href: "/fun-stuff", label: "Fun Stuff" },
      { href: "/contact", label: "Contact" }
    ]
  },
  {
    label: "Initiatives",
    links: [{ href: "/initiatives/ocean-bars", label: "Ocean Bars" }]
  }
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

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

  // Close menu when clicking outside (with delay to allow link navigation)
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      // Don't close if clicking inside the dropdown
      const target = e.target as HTMLElement;
      if (target.closest('[data-dropdown]')) return;
      setOpen(false);
    };
    // Use capture phase with slight delay
    const timeoutId = setTimeout(() => {
      document.addEventListener("click", handleClick);
    }, 0);
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("click", handleClick);
    };
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
                    data-dropdown
                    className="absolute right-0 top-full z-50 mt-2 w-72 rounded-3xl border border-border bg-paper/95 p-3 shadow-paperLifted backdrop-blur-sm"
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setQuoteIndex((current) => (current + 1) % aliceQuotes.length)
                      }
                      className="w-full rounded-2xl border border-borderLight bg-gradient-to-br from-paper to-paperWarm/60 px-4 py-3 text-left transition-colors hover:border-tiffany/40"
                    >
                      <p className="font-hand text-xl text-ink">Pick a rabbit hole</p>
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.p
                          key={aliceQuotes[quoteIndex]}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.18 }}
                          className="mt-1 text-xs leading-relaxed text-inkWash"
                        >
                          {aliceQuotes[quoteIndex]}
                        </motion.p>
                      </AnimatePresence>
                      <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-inkWash/80">
                        Tap for another
                      </p>
                    </button>

                    <nav className="mt-3 flex flex-col gap-3">
                      {menuSections.map((section, sectionIndex) => (
                        <div key={section.label} className="space-y-1.5">
                          <div className="px-2">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-inkWash">
                              {section.label}
                            </p>
                          </div>
                          {section.links.map((link, linkIndex) => {
                            const active =
                              pathname === link.href ||
                              pathname.startsWith(`${link.href}/`);

                            return (
                              <motion.div
                                key={link.href}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: sectionIndex * 0.04 + linkIndex * 0.03
                                }}
                              >
                                <Link
                                  href={link.href}
                                  className={`flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all ${
                                    active
                                      ? "bg-gradient-to-r from-tiffanyMuted to-[#dff7f4] text-tiffany"
                                      : "text-ink hover:bg-paperDark/70 hover:translate-x-1"
                                  }`}
                                >
                                  <span className="font-hand text-xl">{link.label}</span>
                                  <ArrowUpRight
                                    className={`h-3.5 w-3.5 ${
                                      active ? "text-tiffany" : "text-inkWash"
                                    }`}
                                  />
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                      ))}
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
