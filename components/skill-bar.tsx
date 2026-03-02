"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  level: number;
  delay?: number;
  variant?: "primary" | "accent";
};

export function SkillBar({ name, level, delay = 0, variant = "primary" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay, ease: [0.4, 0, 0.2, 1] }}
      className="group"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-ink">{name}</span>
        <span className="text-xs text-inkFaded">{level}%</span>
      </div>
      <div className="relative h-2 overflow-hidden rounded-full bg-fold">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.2, ease: [0.4, 0, 0.2, 1] }}
          className={cn(
            "absolute inset-y-0 left-0 rounded-full",
            variant === "primary"
              ? "bg-gradient-to-r from-tiffany to-tiffanyLight"
              : "bg-gradient-to-r from-tiffany/80 to-tiffany"
          )}
        />
        {/* Animated shimmer on hover */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:animate-shimmer group-hover:opacity-100" />
      </div>
    </motion.div>
  );
}
