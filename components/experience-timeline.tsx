"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "./ui/badge";
import { MapPin, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Experience } from "@/lib/data";

export function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <div className="relative mt-8">
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/70 via-accent/60 to-primary/70 md:block" />
      <div className="space-y-10">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          const card = (
            <TimelineCard experience={exp} reduceMotion={reduceMotion} />
          );
          return (
            <div
              key={exp.id}
              className="relative md:grid md:grid-cols-2 md:items-center"
            >
              <div
                className={cn(
                  "hidden md:col-start-1 md:block md:pr-10",
                  !isLeft && "md:order-2 md:pl-10 md:pr-0"
                )}
              >
                {isLeft ? card : null}
              </div>

              <div className="absolute left-1/2 top-10 hidden -translate-x-1/2 md:block">
                <div className="h-4 w-4 rounded-full bg-gradient-to-br from-primary to-accent shadow-glow" />
              </div>

              <div
                className={cn(
                  "hidden md:col-start-2 md:block md:pl-10",
                  !isLeft && "md:order-1"
                )}
              >
                {!isLeft ? card : null}
              </div>

              <div className="md:hidden">{card}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TimelineCard({
  experience,
  reduceMotion
}: {
  experience: Experience;
  reduceMotion: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
      className="relative my-4 overflow-hidden rounded-2xl border border-border bg-white/80 p-5 shadow-soft backdrop-blur-soft"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-white to-accent/10" />
      <div className="relative flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-ink">
            <Building2 className="h-4 w-4 text-primary" />
            <span>{experience.company}</span>
            {experience.team ? <span className="text-muted">· {experience.team}</span> : null}
          </div>
          <Badge variant="outline">
            {experience.status ? experience.status : experience.timeframe}
          </Badge>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
          <span className="font-semibold text-ink">{experience.title}</span>
          <span className="text-muted">· {experience.timeframe}</span>
          <span className="flex items-center gap-1 text-xs font-semibold text-muted">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            {experience.location}
          </span>
        </div>
        <ul className="grid gap-2 pl-4 text-sm text-muted">
          {experience.highlights.map((item) => (
            <li key={item} className="list-disc">
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-semibold text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
