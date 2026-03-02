"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type SkillTone = {
  card: string;
  wash: string;
  badge: string;
  accent: string;
};

type Props = {
  name: string;
  vibe: string;
  note: string;
  tone: SkillTone;
};

export function SkillCard({ name, vibe, note, tone }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -5, rotate: -0.4 }}
      className={cn(
        "group relative overflow-hidden rounded-[1.75rem] border p-5 shadow-paper transition-all hover:shadow-paperLifted",
        tone.card
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-90", tone.wash)} />

      <div className="relative flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-medium text-ink">{name}</h3>
          <span className={cn("shrink-0 rounded-full border px-3 py-1 text-xs font-medium", tone.badge)}>
            {vibe}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-inkLight">{note}</p>

        <div className="flex items-center justify-between gap-3">
          <div className={cn("h-1.5 w-16 rounded-full", tone.accent)} />
          <span className="text-xs uppercase tracking-[0.18em] text-inkWash">
            Build mode
          </span>
        </div>
      </div>
    </motion.div>
  );
}
