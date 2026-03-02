"use client";

import { Building2, MapPin, Calendar } from "lucide-react";
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
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-sm border border-fold bg-paper/80 p-6 shadow-paper transition-all hover:border-tiffany/30 hover:shadow-lifted"
    >
      {/* Subtle accent line */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-tiffany via-tiffany/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative flex flex-col gap-4">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-sm">
              <Building2 className="h-4 w-4 text-tiffany" />
              <span className="font-medium text-ink">{company}</span>
              {team && <span className="text-inkFaded">/ {team}</span>}
            </div>
            <h3 className="font-serif text-lg font-medium text-ink">{title}</h3>
          </div>
          <Badge variant="outline" className="shrink-0">
            <Calendar className="h-3 w-3" />
            {timeframe}
          </Badge>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-inkFaded">
          <MapPin className="h-3.5 w-3.5" />
          <span>{location}</span>
        </div>

        {/* Highlights */}
        <ul className="space-y-2 text-sm text-inkLight">
          {highlights.map((item, index) => (
            <li key={index} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-tiffany/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-fold bg-paperWarm px-2 py-0.5 text-xs font-medium text-inkFaded transition-colors hover:border-tiffany/30 hover:text-ink"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
