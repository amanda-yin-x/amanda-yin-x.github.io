"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Mail, Linkedin, ArrowRight, MapPin, Calendar } from "lucide-react";

const PHOTO_ROTATION_MS = 10000;
const PHOTO_SESSION_KEY = "hero-gallery-start";
const GREETING = "Dear visitor,";
const introRoles = [
  "software engineer",
  "side hustle collector",
  "builder dreamer",
  "late-night debugger",
  "curious rabbit-hole chaser"
];

const photoMoments = [
  {
    src: "/profile.jpg",
    alt: "Amanda Yin in traditional Miao minority costume in Yunnan",
    title: "Traditional Miao minority costume",
    detail: "Yunnan province, China",
    caption: "Yunnan, 2024"
  },
  {
    src: "/goldenbeach.png",
    alt: "Amanda Yin enjoying the sunshine at Golden Gardens Park in Seattle",
    title: "Golden beach, clear head",
    detail: "A Seattle sunshine day at Golden Gardens Park.",
    caption: "Golden Gardens Park, Seattle, 2025"
  },
  {
    src: "/jinxi.png",
    alt: "Amanda Yin in Jinxi after a spontaneous rain",
    title: "Jinxi after the rain",
    detail: "A little Suzhou town that felt extra magical after a spontaneous shower.",
    caption: "Jinxi, Suzhou, 2025"
  },
  {
    src: "/luguhu.png",
    alt: "Amanda Yin at Luguhu in Yunnan",
    title: "Blue-water paradise at Luguhu",
    detail: "One of those places where the water looks unreal and everything goes quiet.",
    caption: "Luguhu, Yunnan, 2024"
  },
  {
    src: "/lakeontario.png",
    alt: "Amanda Yin paddle boarding on Lake Ontario",
    title: "Toronto summer on the water",
    detail: "Paddle boarding on Lake Ontario during one of those perfect weekend afternoons.",
    caption: "Lake Ontario, Toronto, 2022"
  },
  {
    src: "/mtrainier.png",
    alt: "Amanda Yin with family at Mount Rainier",
    title: "Mount Rainier, family day, ridiculous view",
    detail: "Breathtaking in the literal sense. Paradise really earned the name.",
    caption: "Mount Rainier, Seattle, 2025"
  },
  {
    src: "/torontotrail.png",
    alt: "Amanda Yin skateboarding on a Toronto trail",
    title: "My slightly wobbly skate era",
    detail: "First getting into skateboarding on a leafy Toronto trail and refusing to quit.",
    caption: "Toronto trail, 2023"
  },
  {
    src: "/banff.png",
    alt: "Amanda Yin at the top of Sulphur Mountain in Banff",
    title: "Sulphur Mountain sky therapy",
    detail: "Banff from the top, huge sky, cold air, and a view that did all the talking.",
    caption: "Banff, 2025"
  }
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [flipped, setFlipped] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);
  const [typedGreeting, setTypedGreeting] = useState(
    reduceMotion ? GREETING : ""
  );
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState(
    reduceMotion ? introRoles[0] : ""
  );

  useEffect(() => {
    const getOrCreateAnchor = () => {
      const stored = window.sessionStorage.getItem(PHOTO_SESSION_KEY);
      if (stored) return Number(stored);

      const randomOffset =
        Math.floor(Math.random() * photoMoments.length) * PHOTO_ROTATION_MS;
      const anchor = Date.now() - randomOffset;
      window.sessionStorage.setItem(PHOTO_SESSION_KEY, String(anchor));
      return anchor;
    };

    const syncPhotoIndex = () => {
      const anchor = getOrCreateAnchor();
      const elapsed = Math.max(Date.now() - anchor, 0);
      const nextIndex =
        Math.floor(elapsed / PHOTO_ROTATION_MS) % photoMoments.length;
      setPhotoIndex(nextIndex);
    };

    syncPhotoIndex();

    const interval = window.setInterval(syncPhotoIndex, 1000);
    window.addEventListener("focus", syncPhotoIndex);
    document.addEventListener("visibilitychange", syncPhotoIndex);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("focus", syncPhotoIndex);
      document.removeEventListener("visibilitychange", syncPhotoIndex);
    };
  }, []);

  useEffect(() => {
    if (!isPhotoHovered) {
      setFlipped(false);
    }
  }, [photoIndex, isPhotoHovered]);

  useEffect(() => {
    if (reduceMotion) return;

    let current = 0;
    const interval = window.setInterval(() => {
      current += 1;
      setTypedGreeting(GREETING.slice(0, current));

      if (current >= GREETING.length) {
        window.clearInterval(interval);
      }
    }, 70);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return;

    let charIndex = 0;
    let deleting = false;
    let timeoutId: number;

    const tick = () => {
      const currentRole = introRoles[roleIndex];

      if (!deleting) {
        charIndex += 1;
        setTypedRole(currentRole.slice(0, charIndex));

        if (charIndex === currentRole.length) {
          deleting = true;
          timeoutId = window.setTimeout(tick, 1400);
          return;
        }

        timeoutId = window.setTimeout(tick, 70);
        return;
      }

      charIndex -= 1;
      setTypedRole(currentRole.slice(0, Math.max(charIndex, 0)));

      if (charIndex <= 0) {
        deleting = false;
        setRoleIndex((current) => (current + 1) % introRoles.length);
        return;
      }

      timeoutId = window.setTimeout(tick, 35);
    };

    timeoutId = window.setTimeout(tick, 180);
    return () => window.clearTimeout(timeoutId);
  }, [roleIndex, reduceMotion]);

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

  const currentPhoto = photoMoments[photoIndex];

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="relative py-12 lg:py-20"
    >
      <motion.div
        variants={item}
        className="letter-paper rounded-sm p-8 md:p-12 lg:p-16"
      >
        <motion.div variants={item} className="mb-8 text-right">
          <span className="font-hand text-xl text-inkFaded">
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              year: "numeric"
            })}
          </span>
        </motion.div>

        <motion.div variants={item} className="mb-6">
          <p className="font-hand text-2xl text-inkFaded">
            {typedGreeting}
            {!reduceMotion ? (
              <span className="ml-0.5 inline-block animate-pulse text-tiffany">
                |
              </span>
            ) : null}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="space-y-6">
            <motion.div variants={item}>
              <h1 className="font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl lg:text-6xl">
                I&apos;m Amanda Yin
              </h1>
              <p className="mt-2 font-hand text-2xl text-tiffany">
                {typedRole}
                {!reduceMotion ? (
                  <span className="ml-0.5 inline-block animate-pulse text-tiffany">
                    |
                  </span>
                ) : null}
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="space-y-4 text-inkLight leading-relaxed"
            >
              <p>
                I&apos;m a software engineer who believes technology should feel{" "}
                <span className="text-ink font-medium">human</span>. Currently
                wrapping up my senior year studying{" "}
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
                When I&apos;m not writing code, I&apos;m usually building side
                hustles, halfway through a good book, or giving a film way too
                much post-credits analysis.
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
              {[
                {
                  label: "Microsoft S25",
                  className:
                    "border-[#d4c7ff] bg-[#f6f2ff] text-[#5d4d91]"
                },
                {
                  label: "Boosted.ai W26",
                  className:
                    "border-[#b9e3dc] bg-[#e8f8f5] text-[#0e6f6d]"
                },
                {
                  label: "LLM Research",
                  className:
                    "border-[#ffd8b3] bg-[#fff3e6] text-[#b05a1f]"
                },
                {
                  label: "Books + Films",
                  className:
                    "border-[#f2c7cf] bg-[#fff1f4] text-[#a34d68]"
                }
              ].map((tag) => (
                <span
                  key={tag.label}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all hover:-translate-y-0.5 ${tag.className}`}
                >
                  {tag.label}
                </span>
              ))}
            </motion.div>

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

              <div className="pt-4">
                <p className="font-hand text-3xl text-ink">~ Amanda</p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={item} className="relative">
            <div className="paper-card rounded-sm p-3">
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-sm bg-paperDark [perspective:1200px]"
                onMouseEnter={() => {
                  setIsPhotoHovered(true);
                  setFlipped(true);
                }}
                onMouseLeave={() => {
                  setIsPhotoHovered(false);
                  setFlipped(false);
                }}
              >
                <motion.div
                  className="relative h-full w-full [transform-style:preserve-3d]"
                  animate={{ rotateY: flipped ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentPhoto.src}
                        initial={{ opacity: 0.25, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0.25, scale: 0.98 }}
                        transition={{ duration: reduceMotion ? 0 : 0.45 }}
                        className="relative h-full w-full overflow-hidden bg-[#eef3f1]"
                      >
                        <Image
                          src={currentPhoto.src}
                          alt=""
                          fill
                          aria-hidden
                          className="object-cover blur-2xl opacity-30 scale-110"
                        />
                        <Image
                          src={currentPhoto.src}
                          alt={currentPhoto.alt}
                          width={1200}
                          height={800}
                          className="relative h-full w-full object-contain p-3"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-paper px-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div>
                      <p className="font-hand text-2xl text-ink leading-relaxed">
                        {currentPhoto.title}
                      </p>
                      <p className="mt-2 text-sm text-inkFaded">
                        {currentPhoto.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="flex items-center justify-between gap-4 pt-4 pb-2">
                <p className="font-hand text-xl text-inkFaded">
                  {currentPhoto.caption}
                </p>
                <div className="flex items-center gap-1.5">
                  {photoMoments.map((photo, index) => (
                    <span
                      key={photo.src}
                      className={`h-2.5 rounded-full transition-all ${
                        index === photoIndex
                          ? "w-6 bg-tiffany"
                          : "w-2.5 bg-borderDark"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="paper-card rounded-sm px-4 py-3">
                <div className="flex items-center gap-2 text-inkFaded">
                  <Calendar className="h-4 w-4" />
                  <span className="text-xs">Currently</span>
                </div>
                <p className="mt-1 text-sm font-medium text-ink">
                  Boosted.ai, Winter 2026
                </p>
              </div>
              <div className="paper-card rounded-sm px-4 py-3">
                <div className="flex items-center gap-2 text-inkFaded">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs">Based in</span>
                </div>
                <p className="mt-1 text-sm font-medium text-ink">
                  Toronto, CA
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
