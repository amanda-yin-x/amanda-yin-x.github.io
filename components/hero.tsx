"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Linkedin, ArrowRight, Sparkles, HeartPulse, GraduationCap, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [flipped, setFlipped] = useState(false);

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
        className="relative grid gap-4 rounded-2xl bg-white/70 p-4 shadow-soft backdrop-blur-soft lg:p-6"
      >
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/14 via-white to-accent/12 blur-3xl" />
        <div className="flex items-center justify-between rounded-xl bg-white/80 p-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white shadow-glow">
              AY
            </span>
            <div>
              <p className="text-sm text-muted">Currently</p>
              <p className="font-semibold text-ink">
                Building at Boosted.ai • SWE Intern
              </p>
            </div>
          </div>
          <Sparkles className="h-5 w-5 text-primary" />
        </div>

        <div className="flex flex-col gap-3">
          <div
            className="relative overflow-hidden rounded-2xl bg-white/90 shadow-soft [perspective:1200px] aspect-[4/3]"
          >
            <div
              className="relative h-full w-full [transform-style:preserve-3d] transition-transform duration-500 ease-in-out"
              style={{
                transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                transition: "transform 0.45s ease-in-out"
              }}
              onMouseEnter={() => setFlipped(true)}
              onMouseLeave={() => setFlipped(false)}
              onClick={() => setFlipped((v) => !v)}
            >
            <div className="absolute inset-0 h-full w-full rounded-2xl [backface-visibility:hidden]">
              <Image
                src="/profile.jpg"
                alt="Portrait of Amanda Yin"
                width={1200}
                  height={800}
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
              <div className="absolute inset-0 flex h-full w-full items-center justify-center rounded-2xl bg-white/92 px-6 text-center text-sm text-muted [backface-visibility:hidden] [transform:rotateY(180deg)]">
                Photo taken in traditional Miao minority costume in Yunnan province, China.
              </div>
            </div>
          </div>

          <div className="grid gap-3 rounded-xl bg-white/60 p-4 text-sm text-muted">
            <div className="flex items-center gap-2 text-ink">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="font-semibold">Senior in Computer Science &amp; Statistics</span>
            </div>
            <div className="flex items-center gap-2 text-ink">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="font-semibold">Based in Toronto · open to global collaboration</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
