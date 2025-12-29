"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
      whileHover={{ translateY: -4 }}
      className="group relative flex items-start gap-3 rounded-2xl border border-border bg-white/80 p-4 shadow-soft backdrop-blur-soft"
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
      <div className="relative rounded-full bg-gradient-to-br from-primary/80 to-accent/80 p-2 text-white shadow-glow">
        {icon}
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-ink">{label}</p>
        {description ? <p className="text-sm text-muted">{description}</p> : null}
      </div>
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
