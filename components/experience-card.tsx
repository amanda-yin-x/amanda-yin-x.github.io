"use client";

import { Building2, MapPin } from "lucide-react";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

type Props = {
  company: string;
  team?: string;
  title: string;
  location: string;
  timeframe: string;
  highlights: string[];
  tags: string[];
};

export function ExperienceCard({
  company,
  team,
  title,
  location,
  timeframe,
  highlights,
  tags
}: Props) {
  return (
    <motion.article
      whileHover={{ translateY: -6 }}
      className="relative overflow-hidden rounded-2xl border border-border bg-white/80 p-6 shadow-soft backdrop-blur-soft"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-white to-accent/8" />
      <div className="relative flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <Building2 className="h-4 w-4 text-primary" />
              <span className="font-semibold text-ink">{company}</span>
              {team ? <span className="text-muted">· {team}</span> : null}
            </div>
            <h3 className="text-xl font-semibold text-ink">{title}</h3>
          </div>
          <Badge variant="outline">{timeframe}</Badge>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
          <Badge variant="soft" className="bg-white/70">
            <MapPin className="h-4 w-4 text-primary" />
            {location}
          </Badge>
        </div>

        <ul className="relative grid gap-2 pl-4 text-sm text-muted">
          {highlights.map((item) => (
            <li key={item} className="list-disc">
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-semibold text-muted transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </motion.article>
  );
}
