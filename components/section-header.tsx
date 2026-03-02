"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  className
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={cn("flex flex-col gap-3", className)}
    >
      {eyebrow && (
        <div className="inline-flex w-fit items-center gap-2">
          <span className="h-px w-8 bg-tiffany/40" />
          <span className="font-hand text-sm tracking-wide text-tiffany">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-serif text-2xl font-medium tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-inkFaded">
          {description}
        </p>
      )}
    </motion.div>
  );
}
