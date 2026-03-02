"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { PageTransition } from "@/components/page-transition";

const navItems = [
  { href: "#feeling", label: "Experience" },
  { href: "#approach", label: "Approach" },
  { href: "#map", label: "Map" },
  { href: "#plan", label: "Plan" },
  { href: "#me", label: "About" }
];

const feelingCards = [
  {
    title: "Imagine never reaching the horizon again.",
    kind: "horizon"
  },
  {
    title: "The ocean is mostly sound.",
    kind: "sound"
  },
  {
    title: "Calling out. No answer.",
    kind: "social"
  },
  {
    title: "Bodies built for distance.",
    kind: "scale"
  }
] as const;

const approachCards = [
  {
    title: "Immersive Experience",
    body:
      "10 to 15 minutes. First person. You enter the animal's world through sound and space. No gore. No lectures. Just presence."
  },
  {
    title: "Evidence Map",
    body:
      "Where are they? How did they get there? A public, citeable map of the captivity system. Not for outrage. For clarity."
  },
  {
    title: "Venue Toolkit",
    body:
      "Everything a school or museum needs to run this instead of a field trip to a marine park. Plug and play."
  }
];

const principles = [
  "Substitution beats protest",
  "Empathy is experiential",
  "Design for adoption",
  "Evidence must be citeable",
  "Invite, don't shame",
  "Ship small, learn fast"
];

const phases = [
  {
    step: "1",
    window: "M 1-2",
    title: "Research",
    body:
      "Literature review. Partner scouting. Experience script draft. Map data schema."
  },
  {
    step: "2",
    window: "M 3-5",
    title: "Build MVP",
    body:
      "Working prototype. Map with 20+ venues. User tests. Iterate."
  },
  {
    step: "3",
    window: "M 6-9",
    title: "Pilots",
    body:
      "Run 2 to 3 pilots. Collect feedback. Expand map to 50+ entries. Build second format."
  },
  {
    step: "4",
    window: "M 10-12",
    title: "Scale",
    body:
      "Publish toolkit. Onboard 5+ venues. Document learnings. Plan next phase."
  }
];

const metrics = [
  { value: "500+", label: "participants" },
  { value: "5+", label: "pilots" },
  { value: "50+", label: "mapped venues" }
];

export function OceanBarsPageContent() {
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      })
    );

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const next = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(next, 100));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.hash = "top";
    }
  };

  return (
    <PageTransition>
      <div className="mt-4">
        <div className="fixed left-0 right-0 top-[72px] z-30 h-[2px] bg-transparent">
          <motion.div
            className="h-full bg-gradient-to-r from-[#0c7c7a] via-[#5fb4ba] to-[#95d9d0]"
            animate={{ width: `${progress}%` }}
          />
        </div>

        <div className="space-y-10" id="top">
          <section className="relative overflow-hidden rounded-[2.6rem] border border-[#b9e3dc] bg-white/90 p-8 shadow-paper md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(170,233,225,0.36),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(19,73,105,0.15),_transparent_28%),linear-gradient(180deg,_rgba(238,252,249,0.95),_rgba(255,255,255,0.92))]" />

            <div className="relative">
              <div className="mb-8 flex flex-col gap-4 border-b border-[#d7ece8] pb-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0e6f6d]">
                    Ocean Bars initiative
                  </p>
                  <p className="mt-2 text-sm text-inkWash">
                    Project note · {date || "Loading date..."}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="rounded-full border border-[#cce9e3] bg-white/70 px-3 py-1.5 text-sm text-inkFaded transition-colors hover:border-[#0e6f6d] hover:text-[#0e6f6d]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div>
                  <p className="font-hand text-3xl text-[#0e6f6d]">
                    A cultural alternative to captive cetacean shows
                  </p>
                  <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
                    Ocean Without Bars
                  </h1>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-inkLight">
                    What if we could offer people something better than
                    watching dolphins in tanks? Not a protest. An invitation.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {["Immersive Experience", "Evidence Map", "Venue Toolkit"].map(
                      (pill, index) => (
                        <span
                          key={pill}
                          className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                            index === 0
                              ? "border-[#b9e3dc] bg-[#e7f8f4] text-[#0e6f6d]"
                              : index === 1
                                ? "border-[#d9d0ff] bg-[#f3f0ff] text-[#6652ad]"
                                : "border-[#ffd8be] bg-[#fff2e8] text-[#b26020]"
                          }`}
                        >
                          {pill}
                        </span>
                      )
                    )}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="#feeling"
                      className="inline-flex items-center gap-2 rounded-full bg-[#10243d] px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-[#16304f]"
                    >
                      See the vision
                    </a>
                    <button
                      type="button"
                      onClick={copyLink}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-[#0e6f6d] hover:text-[#0e6f6d]"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      {copied ? "Link copied" : "Copy link"}
                    </button>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,_rgba(255,255,255,0.7),_rgba(229,246,243,0.95))] p-5 shadow-paper">
                  <div className="relative h-72 overflow-hidden rounded-[1.7rem] bg-[#0a1628]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,_rgba(115,219,209,0.22),_transparent_22%),radial-gradient(circle_at_70%_18%,_rgba(255,255,255,0.12),_transparent_18%),linear-gradient(180deg,_#0f2b48_0%,_#09111c_100%)]" />
                    <div className="absolute bottom-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#5aa8b8]/40" />
                    <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#5aa8b8]/20" />
                    <div className="absolute bottom-8 left-[52%] h-1.5 w-1.5 rounded-full bg-white/60" />
                  </div>
                  <p className="mt-4 font-hand text-2xl text-[#0e6f6d]">
                    less spectacle, more presence
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="feeling"
            className="overflow-hidden rounded-[2.3rem] border border-[#1c3850] bg-[#0a1628] px-6 py-10 text-[#f0f6f8] shadow-paper md:px-8"
          >
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5aa8b8]">
                The feeling I want to create
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
                What does the ocean feel like from inside?
              </h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {feelingCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.28)]"
                >
                  <div className="mb-5 flex h-36 items-center justify-center rounded-[1.2rem] bg-white/[0.02]">
                    <FeelingVisual kind={card.kind} />
                  </div>
                  <p className="text-center text-sm leading-relaxed text-[#c8d4d8]">
                    {card.title}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-sm italic text-[#8098a0]">
              This is what I want someone to feel. Not information. Presence.
            </p>
          </section>

          <section className="rounded-[2rem] border border-border bg-white/80 p-6 shadow-paper md:p-8">
            <div className="mx-auto flex max-w-3xl flex-col items-stretch gap-6 md:flex-row md:items-center">
              <div className="flex-1 md:text-right">
                <p className="text-xs uppercase tracking-[0.18em] text-inkWash">
                  Watching a show
                </p>
                <ul className="mt-4 space-y-2 text-lg text-ink">
                  {["Applause", "Tricks on command", "Glass walls", "Entertainment"].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mx-auto h-px w-20 bg-border md:h-24 md:w-px" />
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.18em] text-inkWash">
                  Feeling the perspective
                </p>
                <ul className="mt-4 space-y-2 text-lg text-ink">
                  {[
                    "Stillness",
                    "Vast dark blue",
                    "Sound carrying for miles",
                    "Understanding"
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[#d9d0ff] bg-[#f8f5ff]/80 p-8 shadow-paper">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-3xl text-ink">
                Why I keep thinking about this
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-inkLight">
                <p>
                  I grew up in Asia where dolphin shows are normal. Family
                  outings. School trips. Nobody questions it.
                </p>
                <p>
                  Facts do not change that. People nod and then go anyway because
                  there is nothing else to do with their curiosity.
                </p>
                <p className="font-hand text-3xl text-[#6652ad]">
                  what if we gave them something better to choose?
                </p>
                <p>
                  Not shame. Not lectures. Just a different experience that
                  makes the old one feel small.
                </p>
              </div>
            </div>
          </section>

          <section
            id="approach"
            className="rounded-[2rem] border border-[#ffd8be] bg-[#fff7ef] p-8 shadow-paper"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b26020]">
              The approach
            </p>
            <h2 className="mt-3 font-serif text-3xl text-ink">
              Replace, don&apos;t just criticize
            </h2>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {approachCards.map((card, index) => (
                <article
                  key={card.title}
                  className="rounded-[1.5rem] border border-[#f2dfcd] bg-white/85 p-5 shadow-paper"
                >
                  <div
                    className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ${
                      index === 0
                        ? "bg-[#e7f8f4] text-[#0e6f6d]"
                        : index === 1
                          ? "bg-[#f1edff] text-[#6652ad]"
                          : "bg-[#fff1e3] text-[#b26020]"
                    }`}
                  >
                    <span className="text-lg">◌</span>
                  </div>
                  <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-inkLight">
                    {card.body}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="map"
            className="overflow-hidden rounded-[2.3rem] border border-[#18344d] bg-[#0c1727] p-8 text-[#f0f6f8] shadow-paper"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5aa8b8]">
              The evidence map
            </p>
            <h2 className="mt-3 font-serif text-3xl">
              Making the invisible visible
            </h2>
            <p className="mt-2 text-[#a0b0b8]">
              When something stays hidden, it never changes.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="relative h-72 overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(17,32,49,0.9),_rgba(8,15,26,0.98))]">
                <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:40px_40px]" />
                <span className="absolute left-[30%] top-[20%] h-3 w-3 rounded-full bg-[#7dd4d8] shadow-[0_0_18px_rgba(125,212,216,0.6)]" />
                <span className="absolute left-[55%] top-[45%] h-3 w-3 rounded-full bg-[#7dd4d8] shadow-[0_0_18px_rgba(125,212,216,0.6)]" />
                <span className="absolute left-[75%] top-[35%] h-3 w-3 rounded-full bg-[#7dd4d8] shadow-[0_0_18px_rgba(125,212,216,0.6)]" />
                <span className="absolute left-[40%] top-[60%] h-2 w-2 rounded-full bg-white/70" />
                <span className="absolute left-[65%] top-[25%] h-2 w-2 rounded-full bg-white/50" />
                <span className="absolute left-[32%] top-[24%] h-px w-[22%] rotate-[15deg] bg-gradient-to-r from-[#7dd4d8]/20 via-[#7dd4d8]/60 to-[#7dd4d8]/20" />
                <span className="absolute left-[57%] top-[42%] h-px w-[17%] -rotate-[25deg] bg-gradient-to-r from-[#7dd4d8]/20 via-[#7dd4d8]/60 to-[#7dd4d8]/20" />
              </div>

              <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5">
                <div className="space-y-4 text-sm text-[#d0dde1]">
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-[#7dd4d8]" />
                    <span>Venue location</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-10 bg-[#7dd4d8]" />
                    <span>Transfer route</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-5 w-5 rounded border border-white/20" />
                    <span>Timeline and context</span>
                  </div>
                </div>
                <p className="mt-8 text-sm italic text-[#8ba0a8]">
                  Not exposing. Not shaming. Just making structure legible.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-border bg-white/80 p-8 shadow-paper">
            <h2 className="font-serif text-3xl text-ink">
              How I think about this
            </h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {principles.map((principle, index) => (
                <div
                  key={principle}
                  className={`rounded-full border px-4 py-3 text-sm font-medium ${
                    index % 3 === 0
                      ? "border-[#b9e3dc] bg-[#eefcf9] text-[#0e6f6d]"
                      : index % 3 === 1
                        ? "border-[#d9d0ff] bg-[#f3f0ff] text-[#6652ad]"
                        : "border-[#ffd8be] bg-[#fff2e8] text-[#b26020]"
                  }`}
                >
                  {principle}
                </div>
              ))}
            </div>
          </section>

          <section
            id="plan"
            className="rounded-[2rem] border border-[#d7ece8] bg-[linear-gradient(180deg,_rgba(238,252,249,0.9),_rgba(255,255,255,0.9))] p-8 shadow-paper"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0e6f6d]">
              12 months
            </p>
            <h2 className="mt-3 font-serif text-3xl text-ink">The plan</h2>

            <div className="mt-8 space-y-5">
              {phases.map((phase) => (
                <div
                  key={phase.step}
                  className="grid gap-4 rounded-[1.6rem] border border-[#d7ece8] bg-white/80 p-5 md:grid-cols-[140px_1fr]"
                >
                  <div className="flex items-center gap-3 md:block">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0e6f6d] text-sm font-semibold text-white">
                      {phase.step}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0e6f6d]">
                      {phase.window}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">
                      {phase.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-inkLight">
                      {phase.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`rounded-[1.5rem] border p-5 text-center shadow-paper ${
                    index === 0
                      ? "border-[#b9e3dc] bg-[#eefcf9]"
                      : index === 1
                        ? "border-[#d9d0ff] bg-[#f3f0ff]"
                        : "border-[#ffd8be] bg-[#fff2e8]"
                  }`}
                >
                  <p className="font-serif text-3xl text-ink">{metric.value}</p>
                  <p className="mt-2 text-sm text-inkFaded">{metric.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="me"
            className="rounded-[2rem] border border-[#f0c5d4] bg-[#fff4f7] p-8 shadow-paper"
          >
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-3xl text-ink">Why me</h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-inkLight">
                <p>
                  I grew up where these shows are everywhere. I&apos;ve also
                  lived where they&apos;re unthinkable. I understand both sides
                  without condescension.
                </p>
                <p>
                  I build things. I don&apos;t just write about them. I can
                  prototype the experience, build the map, and ship the toolkit.
                </p>
                <p>
                  I care about evidence and clarity. I won&apos;t cut corners on
                  sources or make claims I can&apos;t back up.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Full stack development",
                  "Research synthesis",
                  "Cross cultural communication"
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#eab9ca] bg-white/70 px-3 py-1.5 text-sm text-[#a24f68]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-[1.8rem] border border-border bg-white/85 p-6 shadow-paper">
              <h3 className="font-serif text-2xl text-ink">
                What could go wrong
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-inkLight">
                <li>
                  <strong>Low uptake.</strong> Start with aligned partners.
                </li>
                <li>
                  <strong>Experience doesn&apos;t land.</strong> Test early,
                  iterate.
                </li>
                <li>
                  <strong>Data quality.</strong> Strict citation rules.
                </li>
                <li>
                  <strong>Scope creep.</strong> Stay focused on cetaceans.
                </li>
              </ul>
            </div>

            <div className="rounded-[1.8rem] border border-border bg-white/85 p-6 shadow-paper">
              <h3 className="font-serif text-2xl text-ink">
                What this is not
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-inkLight">
                {[
                  "Not a startup pitch",
                  "Not moral posturing",
                  "Not a VR gimmick",
                  "Not solving all animal welfare",
                  "Not naming and shaming"
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[#10243d] bg-[#10243d] p-8 text-center text-paper shadow-paper">
            <p className="font-serif text-2xl leading-relaxed sm:text-3xl">
              The goal is simple: make captivity feel culturally obsolete.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/entrepreneurship"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-white/15"
              >
                Back to ventures
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#7dd4d8] px-5 py-3 text-sm font-medium text-[#0c1727] transition-colors hover:bg-[#92dde0]"
              >
                Talk to me about it
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}

function FeelingVisual({
  kind
}: {
  kind: (typeof feelingCards)[number]["kind"];
}) {
  if (kind === "horizon") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
      </div>
    );
  }

  if (kind === "sound") {
    return (
      <div className="relative h-24 w-24">
        {[20, 40, 60, 80].map((size, index) => (
          <span
            key={size}
            className="absolute left-1/2 top-1/2 rounded-full border border-[#5aa8b8]/40"
            style={{
              width: size,
              height: size,
              transform: "translate(-50%, -50%)",
              opacity: 1 - index * 0.18
            }}
          />
        ))}
      </div>
    );
  }

  if (kind === "social") {
    return (
      <div className="relative h-20 w-full">
        <span className="absolute left-[28%] top-1/2 h-2 w-2 rounded-full bg-[#5aa8b8]" />
        <span className="absolute right-[22%] top-[40%] h-1 w-1 rounded-full bg-[#5aa8b8]/40" />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <span className="absolute bottom-[22%] left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-white/60" />
    </div>
  );
}
