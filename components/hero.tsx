"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Linkedin, ArrowRight, Sparkles, HeartPulse } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: reduceMotion ? 0 : 0.08 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-10 pt-6 lg:grid-cols-2 lg:items-center"
    >
      <div className="flex flex-col gap-4">
        <motion.div variants={item} className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-muted">
          <HeartPulse className="h-4 w-4 text-accent" />
          <span>Software engineer • human-first</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl"
        >
          Turning bold ideas into shipped software.
        </motion.h1>

        <motion.p variants={item} className="text-lg text-muted">
          I thrive at the intersection of technology and venture innovation—building human-first products that make a real impact.
        </motion.p>

        <motion.p variants={item} className="text-lg text-muted">
          I&apos;m Amanda Yin — a senior in{" "}
          <a
            href="https://utsc.calendar.utoronto.ca/section/Computer-Science"
            target="_blank"
            rel="noreferrer noopener"
            className="text-ink underline decoration-primary/50 underline-offset-4"
          >
            Computer Science (Software Engineering Stream)
          </a>{" "}
          and{" "}
          <a
            href="https://utsc.calendar.utoronto.ca/major-program-statistics-science-scmaj2289"
            target="_blank"
            rel="noreferrer noopener"
            className="text-ink underline decoration-primary/50 underline-offset-4"
          >
            Statistics
          </a>{" "}
          at the{" "}
          <a
            href="https://www.utoronto.ca/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-ink underline decoration-primary/50 underline-offset-4"
          >
            University of Toronto
          </a>
          . I build reliable, human-centered software and scout at{" "}
          <a
            href="https://www.lvlup.vc/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-ink underline decoration-primary/50 underline-offset-4"
          >
            LvlUp Ventures
          </a>
          .
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap items-center gap-3"
        >
          <Badge variant="soft">Incoming SWE @ Boosted.ai (W26)</Badge>
          <Badge variant="soft">SWE Intern @ Microsoft (S25)</Badge>
          <Badge variant="soft">LvlUp Ventures scout</Badge>
          <Badge variant="soft">DSI research scholar (LLM quantization)</Badge>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-wrap items-center gap-3"
        >
          <Button asChild>
            <a
              className="group"
              href="/CV_Amanda_Yin_25.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View CV
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="mailto:yixin.yin@mail.utoronto.ca">
              <Mail className="h-4 w-4" />
              Email me
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://www.linkedin.com/in/amanda-yin/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        variants={item}
        className="relative grid gap-4 rounded-2xl border border-border bg-white/70 p-5 shadow-soft backdrop-blur-soft"
      >
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/25 via-white to-accent/20 blur-3xl" />
        <div className="flex items-center justify-between rounded-xl bg-white/80 p-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white shadow-glow">
              AY
            </span>
            <div>
              <p className="text-sm text-muted">Currently</p>
              <p className="font-semibold text-ink">
                Shipping at Microsoft • SWE Intern
              </p>
            </div>
          </div>
          <Sparkles className="h-5 w-5 text-primary" />
        </div>

        <div className="relative overflow-hidden rounded-xl border border-border bg-white/90 shadow-soft">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-white" />
          <div className="relative grid grid-cols-3 gap-3 p-3">
            <div className="col-span-2 overflow-hidden rounded-xl">
              <Image
                src="/profile.jpg"
                alt="Portrait of Amanda Yin"
                width={420}
                height={340}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <FactPill label="Film lover" />
              <FactPill label="Paddle boarder" />
              <FactPill label="Cat mom" />
            </div>
          </div>
        </div>
        <div className="grid gap-3 rounded-xl bg-white/70 p-4 text-sm text-muted md:grid-cols-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Senior — Computer Science (Software Engineering Stream) &amp; Statistics
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Based in Toronto · open to global collaboration
          </div>
          <div className="md:col-span-2 text-muted">
            Photo taken in traditional Miao minority costume in Yunnan province, China.
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

function FactPill({ label }: { label: string }) {
  return (
    <div
      className={cn(
        "gradient-pill flex items-center justify-center rounded-full px-3 py-2 text-xs font-semibold text-ink shadow-soft"
      )}
    >
      {label}
    </div>
  );
}
