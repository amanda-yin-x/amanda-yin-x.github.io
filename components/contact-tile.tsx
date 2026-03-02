"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ContactTile({
  href,
  icon,
  label,
  description,
  onClick
}: {
  href?: string;
  icon: React.ReactNode;
  label: string;
  description?: string;
  onClick?: () => void;
}) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -3 }}
      className="group relative flex items-center gap-4 rounded-sm border border-fold bg-paper/80 p-4 shadow-paper transition-all hover:border-tiffany/30 hover:shadow-lifted"
      onClick={onClick}
      role={!href ? "button" : undefined}
      tabIndex={!href ? 0 : undefined}
      onKeyDown={(e) => {
        if (!href && onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Icon */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-tiffanyMuted text-tiffany">
        {icon}
      </div>

      {/* Text */}
      <div className="flex flex-1 flex-col">
        <p className="font-medium text-ink">{label}</p>
        {description && <p className="text-sm text-inkFaded">{description}</p>}
      </div>

      {/* Arrow indicator for links */}
      {href && (
        <ArrowUpRight className="h-4 w-4 shrink-0 text-inkWash transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}

      {/* Hover accent */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-tiffany transition-all duration-300 group-hover:w-full" />
    </motion.div>
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className="block"
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {content}
      </Link>
    );
  }

  return content;
}
