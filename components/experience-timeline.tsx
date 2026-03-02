"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "./ui/badge";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Experience } from "@/lib/data";

export function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="relative mt-10">
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#c5ece7] via-[#cdd7ff] to-[#ffd8b5] md:block" />
      <div className="space-y-8 md:space-y-12">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          const theme = cardThemes[exp.id] ?? fallbackThemes[index % fallbackThemes.length];
          const card = (
            <TimelineCard
              experience={exp}
              reduceMotion={reduceMotion}
              theme={theme}
              isLeft={isLeft}
            />
          );

          return (
            <div
              key={exp.id}
              className="relative md:grid md:grid-cols-2 md:items-start"
            >
              <div
                className={cn(
                  "hidden md:col-start-1 md:block md:pr-12",
                  !isLeft && "md:order-2 md:pl-10 md:pr-0"
                )}
              >
                {isLeft ? card : null}
              </div>

              <div className="absolute left-1/2 top-8 hidden -translate-x-1/2 md:flex md:flex-col md:items-center">
                <div className={cn("h-4 w-4 rounded-full border-4 border-paper shadow-paper", theme.dot)} />
                <div className={cn("mt-3 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]", theme.pill)}>
                  {exp.timeframe}
                </div>
              </div>

              <div
                className={cn(
                  "hidden md:col-start-2 md:block md:pl-12",
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
  reduceMotion,
  theme,
  isLeft
}: {
  experience: Experience;
  reduceMotion: boolean;
  theme: CardTheme;
  isLeft: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -8,
              rotate: isLeft ? -0.5 : 0.5
            }
      }
      className={cn(
        "group relative my-4 overflow-hidden rounded-[2rem] border p-6 shadow-paper transition-shadow duration-300",
        theme.shell
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-95", theme.wash)} />
      <div className={cn("absolute -right-12 -top-10 h-32 w-32 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-125", theme.glow)} />
      <div className={cn("absolute -bottom-14 left-8 h-24 w-24 rounded-full blur-3xl transition-transform duration-500 group-hover:translate-y-2", theme.glowSoft)} />

      <div className="relative flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className={cn("font-hand text-3xl leading-none", theme.kicker)}>
              {experience.timeframe}
            </p>
            <div>
              <h3 className="font-serif text-2xl font-medium text-ink">
                {experience.company}
              </h3>
              {experience.team ? (
                <p className="mt-1 text-sm text-inkLight">{experience.team}</p>
              ) : null}
            </div>
          </div>
          {experience.status ? (
            <Badge className={theme.status}>{experience.status}</Badge>
          ) : (
            <span />
          )}
        </div>

        <div className="space-y-1">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-inkWash">
            {experience.title}
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm text-inkFaded">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {experience.location}
            </span>
          </div>
        </div>

        <ul className="grid gap-2 pl-4 text-sm leading-relaxed text-inkLight">
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
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-sm",
                theme.tag
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

type CardTheme = {
  shell: string;
  wash: string;
  glow: string;
  glowSoft: string;
  kicker: string;
  dot: string;
  pill: string;
  status: string;
  tag: string;
};

const fallbackThemes: CardTheme[] = [
  {
    shell: "border-[#b9e3dc] bg-white/85",
    wash: "from-[#effcf9] via-white to-[#daf4ee]",
    glow: "bg-[#7fd2c7]/35",
    glowSoft: "bg-[#ccefeb]/35",
    kicker: "text-[#0e6f6d]",
    dot: "bg-[#0e6f6d]",
    pill: "border-[#b9e3dc] bg-[#e9f8f5] text-[#0e6f6d]",
    status: "border-[#b9e3dc] bg-[#e9f8f5] text-[#0e6f6d]",
    tag: "border-[#b9e3dc] bg-white/70 text-[#0e6f6d]"
  },
  {
    shell: "border-[#d5cbff] bg-white/85",
    wash: "from-[#f6f3ff] via-white to-[#ece7ff]",
    glow: "bg-[#b6a6ff]/35",
    glowSoft: "bg-[#e2dbff]/40",
    kicker: "text-[#6652ad]",
    dot: "bg-[#6652ad]",
    pill: "border-[#d5cbff] bg-[#f1edff] text-[#6652ad]",
    status: "border-[#d5cbff] bg-[#f1edff] text-[#6652ad]",
    tag: "border-[#d5cbff] bg-white/70 text-[#6652ad]"
  },
  {
    shell: "border-[#ffd6b4] bg-white/85",
    wash: "from-[#fff7ef] via-white to-[#ffe9d7]",
    glow: "bg-[#ffb36a]/30",
    glowSoft: "bg-[#ffe0bf]/40",
    kicker: "text-[#b4621f]",
    dot: "bg-[#b4621f]",
    pill: "border-[#ffd6b4] bg-[#fff1e2] text-[#b4621f]",
    status: "border-[#ffd6b4] bg-[#fff1e2] text-[#b4621f]",
    tag: "border-[#ffd6b4] bg-white/70 text-[#b4621f]"
  },
  {
    shell: "border-[#f0c8d4] bg-white/85",
    wash: "from-[#fff4f7] via-white to-[#ffe7ee]",
    glow: "bg-[#f18aaa]/30",
    glowSoft: "bg-[#ffd7e1]/40",
    kicker: "text-[#a24f68]",
    dot: "bg-[#a24f68]",
    pill: "border-[#f0c8d4] bg-[#fff0f4] text-[#a24f68]",
    status: "border-[#f0c8d4] bg-[#fff0f4] text-[#a24f68]",
    tag: "border-[#f0c8d4] bg-white/70 text-[#a24f68]"
  }
];

const cardThemes: Record<string, CardTheme> = {
  "boosted-2026": fallbackThemes[0],
  "microsoft-s25": fallbackThemes[1],
  "dsi-2025": fallbackThemes[2],
  "stackadapt-w25": fallbackThemes[3],
  "microsoft-s24": fallbackThemes[1],
  "teaching-w24": fallbackThemes[2],
  "scotiabank-w24": fallbackThemes[0]
};
