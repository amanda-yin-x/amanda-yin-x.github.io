"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Linkedin, ArrowRight, MapPin, Calendar } from "lucide-react";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [flipped, setFlipped] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: reduceMotion ? 0 : 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="relative py-12 lg:py-20"
    >
      {/* Letter paper container */}
      <motion.div
        variants={item}
        className="letter-paper rounded-sm p-8 md:p-12 lg:p-16"
      >
        {/* Date stamp - like a letter */}
        <motion.div variants={item} className="mb-8 text-right">
          <span className="font-hand text-xl text-inkFaded">
            {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </span>
        </motion.div>

        {/* Salutation */}
        <motion.div variants={item} className="mb-6">
          <p className="font-hand text-2xl text-inkFaded">Dear visitor,</p>
        </motion.div>

        {/* Main content - letter body */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Left - Introduction */}
          <div className="space-y-6">
            {/* Name as signature */}
            <motion.div variants={item}>
              <h1 className="font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl lg:text-6xl">
                I'm Amanda Yin
              </h1>
              <p className="mt-2 font-hand text-2xl text-tiffany">
                software engineer & builder
              </p>
            </motion.div>

            {/* Letter body - personal introduction */}
            <motion.div variants={item} className="space-y-4 text-inkLight leading-relaxed">
              <p>
                I'm a software engineer who believes technology should feel{" "}
                <span className="text-ink font-medium">human</span>. Currently wrapping up my senior year studying{" "}
                <a
                  href="https://utsc.calendar.utoronto.ca/section/Computer-Science"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-ink link-tiffany text-tiffany"
                >
                  Computer Science
                </a>{" "}
                and{" "}
                <a
                  href="https://utsc.calendar.utoronto.ca/major-program-statistics-science-scmaj2289"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-ink link-tiffany text-tiffany"
                >
                  Statistics
                </a>{" "}
                at the University of Toronto.
              </p>
              <p>
                When I'm not writing code, I'm scouting early-stage startups at{" "}
                <a
                  href="https://www.lvlup.vc/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-ink link-tiffany text-tiffany"
                >
                  LvlUp Ventures
                </a>
                , looking for founders building something meaningful.
              </p>
            </motion.div>

            {/* Experience notes */}
            <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
              {["Microsoft W26", "Boosted.ai S25", "LvlUp Scout", "LLM Research"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm border border-border bg-paper px-3 py-1.5 text-xs font-medium text-inkFaded transition-colors hover:border-tiffany/30 hover:text-ink"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Signature & CTAs */}
            <motion.div variants={item} className="space-y-6 pt-6">
              <div className="hr-ornament" />

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="/CV_Amanda_Yin_25.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm font-medium text-paper transition-all hover:bg-inkLight"
                >
                  Read my CV
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="mailto:yixin.yin@mail.utoronto.ca"
                  className="group inline-flex items-center gap-2 rounded-sm border border-borderDark bg-transparent px-5 py-3 text-sm font-medium text-ink transition-all hover:border-tiffany hover:text-tiffany"
                >
                  <Mail className="h-4 w-4" />
                  Write to me
                </a>
                <a
                  href="https://www.linkedin.com/in/amanda-yin/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-inkFaded transition-colors hover:text-tiffany"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>

              {/* Handwritten signature */}
              <div className="pt-4">
                <p className="font-hand text-3xl text-ink">~ Amanda</p>
              </div>
            </motion.div>
          </div>

          {/* Right - Photo card */}
          <motion.div variants={item} className="relative">
            {/* Polaroid-style photo */}
            <div className="paper-card rounded-sm p-3">
              {/* Photo with flip */}
              <div
                className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-sm bg-paperDark [perspective:1200px]"
                onMouseEnter={() => setFlipped(true)}
                onMouseLeave={() => setFlipped(false)}
                onClick={() => setFlipped((v) => !v)}
              >
                <motion.div
                  className="relative h-full w-full [transform-style:preserve-3d]"
                  animate={{ rotateY: flipped ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Front - Photo */}
                  <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
                    <Image
                      src="/profile.jpg"
                      alt="Portrait of Amanda Yin"
                      width={1200}
                      height={800}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Back - Caption */}
                  <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-paper px-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div>
                      <p className="font-hand text-2xl text-ink leading-relaxed">
                        Traditional Miao minority costume
                      </p>
                      <p className="mt-2 text-sm text-inkFaded">
                        Yunnan province, China
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Polaroid caption */}
              <div className="pt-4 pb-2 text-center">
                <p className="font-hand text-xl text-inkFaded">Yunnan, 2024</p>
              </div>
            </div>

            {/* Info cards */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="paper-card rounded-sm px-4 py-3">
                <div className="flex items-center gap-2 text-inkFaded">
                  <Calendar className="h-4 w-4" />
                  <span className="text-xs">Currently</span>
                </div>
                <p className="mt-1 text-sm font-medium text-ink">SWE @ Boosted.ai</p>
              </div>
              <div className="paper-card rounded-sm px-4 py-3">
                <div className="flex items-center gap-2 text-inkFaded">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs">Based in</span>
                </div>
                <p className="mt-1 text-sm font-medium text-ink">Toronto, CA</p>
              </div>
            </div>

            {/* Decorative stamp */}
            <div className="absolute -right-2 -top-2 rotate-12">
              <div className="stamp-accent h-16 w-16">
                <span className="font-hand text-xl text-tiffany">A.Y.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
