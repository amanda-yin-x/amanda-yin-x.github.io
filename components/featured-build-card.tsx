"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  name: string;
  tagline: string;
  description: string;
  link: string;
  icon: LucideIcon;
  gradient: string;
  surface: string;
  border: string;
  statusClass: string;
  taglineClass: string;
  status: string;
  index: number;
};

export function FeaturedBuildCard({
  name,
  tagline,
  description,
  link,
  icon: Icon,
  gradient,
  surface,
  border,
  statusClass,
  taglineClass,
  status,
  index
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-[2rem] border bg-paper/90 p-6 shadow-paper transition-all hover:shadow-paperLifted ${border}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${surface} opacity-95`} />
      <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${gradient} opacity-20 blur-2xl transition-transform duration-300 group-hover:scale-125`} />

      {/* Animated floating icon */}
      <motion.div
        className={`relative mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-paper shadow-paper`}
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Icon className="h-7 w-7" />
      </motion.div>

      {/* Status badge */}
      <div className="absolute right-4 top-4">
        <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${statusClass}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {status}
        </span>
      </div>

      {/* Content */}
      <div className="relative space-y-3">
        <div>
          <h3 className="font-serif text-xl font-medium text-ink">{name}</h3>
          <p className={`text-sm ${taglineClass}`}>{tagline}</p>
        </div>

        <p className="text-sm leading-relaxed text-inkLight">{description}</p>

        {/* CTA */}
        <Button asChild variant="outline" size="sm" className="group/btn mt-2 rounded-full bg-white/70">
          <a href={link} target="_blank" rel="noreferrer">
            Visit project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </Button>
      </div>

      {/* Decorative corner */}
      <div className={`absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br ${gradient} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`} />
    </motion.div>
  );
}
