"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

type Props = {
  name: string;
  description: string;
  level: number;
};

export function SkillCard({ name, description, level }: Props) {
  return (
    <motion.div
      whileHover={{ translateY: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-white/80 p-4 shadow-soft backdrop-blur-soft"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-white to-accent/10 opacity-0 transition group-hover:opacity-100" />
      <div className="relative flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-ink">{name}</h3>
          <Badge variant="outline" className="text-xs">
            {levelLabel(level)}
          </Badge>
        </div>
        <p className="line-clamp-2 text-sm text-muted">{description}</p>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => {
            const active = index < level;
            return (
              <span
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full",
                  active ? "bg-primary" : "bg-muted/20"
                )}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

function levelLabel(level: number) {
  if (level >= 5) return "Expert";
  if (level === 4) return "Advanced";
  if (level === 3) return "Comfortable";
  return "Learning";
}
