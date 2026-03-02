"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  description: string;
  level: number;
};

export function SkillCard({ name, description, level }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -3 }}
      className="group relative overflow-hidden rounded-sm border border-fold bg-paper/80 p-4 shadow-paper transition-all hover:border-tiffany/30 hover:shadow-lifted"
    >
      <div className="relative flex flex-col gap-3">
        {/* Header with name and level indicator */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-medium text-ink">{name}</h3>
          <span className="shrink-0 rounded-sm border border-fold bg-paperWarm px-2 py-0.5 text-xs font-medium text-inkFaded">
            {levelLabel(level)}
          </span>
        </div>

        {/* Description */}
        <p className="line-clamp-2 text-sm leading-relaxed text-inkLight">{description}</p>

        {/* Progress bar style level indicator */}
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => {
            const active = index < level;
            return (
              <div
                key={index}
                className={cn(
                  "h-1 flex-1 rounded-full transition-colors",
                  active ? "bg-tiffany" : "bg-fold"
                )}
              />
            );
          })}
        </div>
      </div>

      {/* Hover accent */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-tiffany transition-all duration-300 group-hover:w-full" />
    </motion.div>
  );
}

function levelLabel(level: number) {
  if (level >= 5) return "Expert";
  if (level === 4) return "Advanced";
  if (level === 3) return "Proficient";
  return "Learning";
}
