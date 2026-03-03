"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Ear,
  MapPinned,
  School,
  Sparkles,
  Waves
} from "lucide-react";
import { PageTransition } from "@/components/page-transition";

const navItems = [
  { href: "#why", label: "Why" },
  { href: "#feeling", label: "Experience" },
  { href: "#approach", label: "Build" },
  { href: "#map", label: "Map" },
  { href: "#plan", label: "Roadmap" }
];

const heroHighlights = [
  {
    title: "Human-first angle",
    body:
      "This is meant to meet curiosity with something better, not to shame people for having it."
  },
  {
    title: "What gets built",
    body:
      "An immersive experience, a public evidence map, and a lightweight toolkit for schools and museums."
  },
  {
    title: "The real hope",
    body:
      "Make captive cetacean shows feel outdated not by yelling louder, but by offering a richer alternative."
  }
];

const feelingCards = [
  {
    title: "No walls, no applause, just distance.",
    body:
      "The point is to feel how huge the animal's world actually is before anyone starts explaining it.",
    kind: "horizon"
  },
  {
    title: "The ocean is sound before it is sight.",
    body:
      "A lot of understanding starts with listening: echoes, calls, orientation, and absence.",
    kind: "sound"
  },
  {
    title: "Connection can be felt as much as seen.",
    body:
      "The emotional center is not spectacle. It is social life, movement, and what isolation really means.",
    kind: "social"
  },
  {
    title: "Bodies built for migration deserve scale.",
    body:
      "A tank makes everything look manageable. The ocean makes the mismatch impossible to ignore.",
    kind: "scale"
  }
] as const;

const compareColumns = {
  before: [
    "A short burst of entertainment",
    "Animals performing on cue",
    "Curiosity pointed at tricks",
    "A memory built around spectacle"
  ],
  after: [
    "A calmer, more immersive encounter",
    "Curiosity pointed at perspective",
    "A sense of distance, sound, and social life",
    "A memory built around wonder"
  ]
};

const approachCards = [
  {
    icon: Waves,
    title: "Immersive experience",
    body:
      "A 10 to 15 minute encounter told through sound, scale, movement, and stillness. No gore. No scolding. Just enough design to help the feeling land."
  },
  {
    icon: MapPinned,
    title: "Evidence map",
    body:
      "A public, citeable map showing where captive cetaceans are, how they moved, and what that system looks like when you stop treating each venue as an isolated case."
  },
  {
    icon: School,
    title: "Venue toolkit",
    body:
      "A practical package for schools, museums, and community spaces so they can run this without needing a giant production budget or a marine park field trip."
  }
];

const buildCards = [
  {
    title: "For families",
    body:
      "Something a kid can walk out of feeling curious, moved, and more connected, without being preached at."
  },
  {
    title: "For schools",
    body:
      "An experience teachers can point to as educational, thoughtful, and easier to justify than animal performance."
  },
  {
    title: "For museums and cultural spaces",
    body:
      "A format that fits their mission: public learning, emotional resonance, and a clear invitation to think differently."
  }
];

const principles = [
  "Give people a better option, not a guilt trip",
  "Let the feeling arrive before the facts pile up",
  "Make the evidence clean, careful, and citeable",
  "Design for real venues, not just ideal ones",
  "Keep the tone invitational",
  "Start small enough to actually ship"
];

const phases = [
  {
    step: "01",
    window: "Months 1-2",
    title: "Listen and scope",
    body:
      "Read deeply, talk to potential partners, narrow the first audience, and draft the emotional arc of the experience."
  },
  {
    step: "02",
    window: "Months 3-5",
    title: "Build the first version",
    body:
      "Prototype the experience, shape the map schema, test the language, and figure out what people actually remember afterward."
  },
  {
    step: "03",
    window: "Months 6-9",
    title: "Pilot in real spaces",
    body:
      "Run a few early pilots with aligned schools or public venues, then use that feedback to simplify, sharpen, and expand."
  },
  {
    step: "04",
    window: "Months 10-12",
    title: "Package it for adoption",
    body:
      "Turn the scrappy prototype into something another venue could reasonably pick up, run, and adapt."
  }
];

const metrics = [
  { value: "500+", label: "people reached in early pilots" },
  { value: "5+", label: "aligned venues or partners" },
  { value: "50+", label: "mapped entries with sources" }
];

const risks = [
  {
    title: "It feels too abstract",
    body: "Test with real people early and keep trimming until the emotional core lands fast."
  },
  {
    title: "The map gets messy",
    body: "Use strict sourcing rules and keep the first version narrow instead of pretending the whole system can be mapped at once."
  },
  {
    title: "Venues worry it is too political",
    body: "Frame it as a cultural and educational alternative, not a public takedown."
  },
  {
    title: "Scope balloons",
    body: "Stay focused on cetaceans and on one first format that can actually ship."
  }
];

const thisIsNot = [
  "Not a startup deck in disguise",
  "Not a guilt machine",
  "Not an anti-family lecture",
  "Not a flashy VR gimmick for its own sake",
  "Not a claim to solve all animal welfare at once"
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
      <div className="mt-4" id="top">
        <div className="fixed left-0 right-0 top-[72px] z-30 h-[2px] bg-transparent">
          <motion.div
            className="h-full bg-gradient-to-r from-[#0c5f73] via-[#53a8b7] to-[#9ddfd8]"
            animate={{ width: `${progress}%` }}
          />
        </div>

        <div className="space-y-10">
          <section className="relative overflow-hidden rounded-[2.8rem] border border-[#b9e3dc] bg-[linear-gradient(180deg,rgba(240,252,249,0.96),rgba(255,255,255,0.94))] p-8 shadow-paper md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(170,233,225,0.34),_transparent_30%),radial-gradient(circle_at_85%_15%,_rgba(212,227,255,0.42),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(11,88,104,0.12),_transparent_30%)]" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,transparent,rgba(11,88,104,0.07))]" />

            <div className="relative">
              <div className="mb-8 flex flex-col gap-4 border-b border-[#d6ece8] pb-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0e6f6d]">
                    Ocean Without Bars
                  </p>
                  <p className="mt-2 text-sm text-inkWash">
                    Initiative note · {date || "Loading date..."}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="rounded-full border border-[#cce9e3] bg-white/80 px-3 py-1.5 text-sm text-inkFaded transition-all hover:-translate-y-0.5 hover:border-[#0e6f6d] hover:text-[#0e6f6d]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                <div>
                  <p className="font-hand text-3xl text-[#0e6f6d]">
                    a gentler alternative to captive cetacean shows
                  </p>
                  <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
                    A public experience that makes the ocean feel bigger than the tank.
                  </h1>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-inkLight">
                    I keep coming back to a simple question: if someone is curious
                    about dolphins or whales, why is the default still a show?
                    Ocean Without Bars is my attempt at offering something more
                    honest, more moving, and more human.
                  </p>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-inkFaded">
                    Not a protest people have to agree with before they walk in.
                    More like an invitation: step into sound, scale, migration,
                    and social life, and let the old format start to feel small
                    on its own.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {["Immersive experience", "Evidence map", "Venue toolkit"].map(
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
                      className="inline-flex items-center gap-2 rounded-full bg-[#10243d] px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-[#183656]"
                    >
                      See the experience
                    </a>
                    <button
                      type="button"
                      onClick={copyLink}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-white/85 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-[#0e6f6d] hover:text-[#0e6f6d]"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      {copied ? "Link copied" : "Copy link"}
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(228,246,243,0.96))] p-5 shadow-paper">
                    <div className="relative h-72 overflow-hidden rounded-[1.7rem] bg-[#0a1628]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_24%,_rgba(115,219,209,0.2),_transparent_22%),radial-gradient(circle_at_78%_18%,_rgba(255,255,255,0.12),_transparent_16%),linear-gradient(180deg,_#0d2a47_0%,_#09111c_100%)]" />
                      <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(5,10,19,0.34))]" />
                      <div className="absolute bottom-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#5aa8b8]/40" />
                      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#5aa8b8]/20" />
                      <div className="absolute left-[46%] top-[42%] h-12 w-24 rounded-[999px] border border-white/15 bg-white/5 blur-[1px]" />
                      <div className="absolute bottom-8 left-[52%] h-1.5 w-1.5 rounded-full bg-white/60" />
                    </div>
                    <p className="mt-4 font-hand text-2xl text-[#0e6f6d]">
                      less spectacle, more presence
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {heroHighlights.map((item, index) => (
                      <div
                        key={item.title}
                        className={`rounded-[1.6rem] border p-4 shadow-paper ${
                          index === 0
                            ? "border-[#b9e3dc] bg-[#f3fcf9]"
                            : index === 1
                              ? "border-[#d9d0ff] bg-[#f7f5ff]"
                              : "border-[#ffd8be] bg-[#fff8f1]"
                        }`}
                      >
                        <p className="text-sm font-semibold text-ink">{item.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-inkLight">
                          {item.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="why"
            className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="rounded-[2rem] border border-[#d8d0ff] bg-[#f8f5ff] p-7 shadow-paper">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6652ad]">
                Why this exists
              </p>
              <h2 className="mt-3 font-serif text-3xl text-ink">
                This started from a cultural gap, not a branding idea.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-inkLight">
                I grew up in places where dolphin shows were framed as normal:
                family outings, school trips, something fun to do on a weekend.
                In other places I have lived, the exact same thing feels almost
                unthinkable.
              </p>
              <p className="mt-4 text-base leading-relaxed text-inkLight">
                That gap matters. It means the answer is not just "tell people
                more facts." People already hear the facts. What they usually do
                not have is another outlet for their curiosity.
              </p>
              <p className="mt-5 font-hand text-3xl text-[#6652ad]">
                what if the better choice also felt like the more interesting one?
              </p>
            </div>

            <div className="rounded-[2rem] border border-border bg-white/85 p-7 shadow-paper">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-[#dbece9] bg-[#f8fcfb] p-5">
                  <p className="text-sm font-semibold text-ink">What I am not trying to do</p>
                  <p className="mt-2 text-sm leading-relaxed text-inkLight">
                    Make people feel scolded, cornered, or morally embarrassed in
                    order to care.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-[#dbece9] bg-[#f8fcfb] p-5">
                  <p className="text-sm font-semibold text-ink">What I am trying to do</p>
                  <p className="mt-2 text-sm leading-relaxed text-inkLight">
                    Offer an encounter so thoughtful and memorable that the old
                    format starts to feel thin by comparison.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-[#dbece9] bg-[#f8fcfb] p-5 md:col-span-2">
                  <p className="text-sm font-semibold text-ink">Who this is for</p>
                  <p className="mt-2 text-sm leading-relaxed text-inkLight">
                    Curious kids, teachers, families, museum visitors, and the
                    many people who are not looking for an argument but are open
                    to a better way of seeing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="feeling"
            className="overflow-hidden rounded-[2.4rem] border border-[#173852] bg-[linear-gradient(180deg,#0a1628_0%,#0c1c31_100%)] px-6 py-10 text-[#f0f6f8] shadow-paper md:px-8"
          >
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7cc7d0]">
                The experience
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
                Before anyone learns a fact, I want them to feel a world.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#bed0d5]">
                The experience should feel more like slipping underwater than
                sitting through a lesson. Quiet, spatial, and slightly haunting
                in a way that stays with you.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {feelingCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.28)]"
                >
                  <div className="mb-5 flex h-36 items-center justify-center rounded-[1.2rem] bg-white/[0.02]">
                    <FeelingVisual kind={card.kind} />
                  </div>
                  <p className="text-center text-base leading-relaxed text-[#eef4f6]">
                    {card.title}
                  </p>
                  <p className="mt-3 text-center text-sm leading-relaxed text-[#a9bcc2]">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-sm italic text-[#89a0a8]">
              Less information overload. More emotional accuracy.
            </p>
          </section>

          <section className="rounded-[2rem] border border-border bg-white/85 p-6 shadow-paper md:p-8">
            <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
              <div className="rounded-[1.6rem] border border-[#eadfd3] bg-[#fffaf4] p-5 md:text-right">
                <p className="text-xs uppercase tracking-[0.18em] text-inkWash">
                  What people usually get
                </p>
                <ul className="mt-4 space-y-2 text-base text-ink">
                  {compareColumns.before.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mx-auto flex items-center justify-center">
                <div className="h-px w-16 bg-border md:h-24 md:w-px" />
              </div>
              <div className="rounded-[1.6rem] border border-[#d7ece8] bg-[#f4fcfa] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-inkWash">
                  What I want them to leave with
                </p>
                <ul className="mt-4 space-y-2 text-base text-ink">
                  {compareColumns.after.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section
            id="approach"
            className="rounded-[2.1rem] border border-[#d8ece7] bg-[linear-gradient(180deg,#f7fcfb_0%,#ffffff_100%)] p-8 shadow-paper"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0e6f6d]">
              How it gets built
            </p>
            <h2 className="mt-3 font-serif text-3xl text-ink">
              Three pieces that make the idea usable in the real world
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-inkLight">
              I do not want this to live as a beautiful concept page forever.
              The point is to turn the idea into something a venue could
              actually host and a visitor could actually remember.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {approachCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.title}
                    className="rounded-[1.6rem] border border-[#e3ece9] bg-white/90 p-5 shadow-paper"
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
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-inkLight">
                      {card.body}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {buildCards.map((card, index) => (
                <div
                  key={card.title}
                  className={`rounded-[1.6rem] border p-5 ${
                    index === 0
                      ? "border-[#b9e3dc] bg-[#eefcf9]"
                      : index === 1
                        ? "border-[#d9d0ff] bg-[#f6f3ff]"
                        : "border-[#ffd8be] bg-[#fff7ee]"
                  }`}
                >
                  <p className="text-sm font-semibold text-ink">{card.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-inkLight">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="map"
            className="overflow-hidden rounded-[2.3rem] border border-[#18344d] bg-[linear-gradient(180deg,#0c1727_0%,#0a1320_100%)] p-8 text-[#f0f6f8] shadow-paper"
          >
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7cc7d0]">
                  The evidence map
                </p>
                <h2 className="mt-3 font-serif text-3xl">
                  A calmer way to make the system legible
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[#bfd0d5]">
                  Part of what keeps captivity culturally sticky is that the
                  system is hard to see. Venues feel disconnected. Transfers feel
                  abstract. Timelines stay buried.
                </p>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[#9fb0b8]">
                  The map is meant to do something simple but useful: gather the
                  evidence in one place, keep the sources clean, and help people
                  understand the structure without turning the whole thing into a
                  shame wall.
                </p>

                <div className="mt-6 rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
                  <div className="space-y-4 text-sm text-[#d0dde1]">
                    <div className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full bg-[#7dd4d8]" />
                      <span>Venue locations and current records</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="h-px w-10 bg-[#7dd4d8]" />
                      <span>Transfer routes and movement history</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded border border-white/20">
                        <Ear className="h-3.5 w-3.5" />
                      </span>
                      <span>Context notes with sources attached</span>
                    </div>
                  </div>
                  <p className="mt-8 text-sm italic text-[#8ba0a8]">
                    Not "gotcha" energy. More like turning the lights on.
                  </p>
                </div>
              </div>

              <div className="relative h-80 overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(17,32,49,0.9),_rgba(8,15,26,0.98))]">
                <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:40px_40px]" />
                <span className="absolute left-[22%] top-[22%] h-3 w-3 rounded-full bg-[#7dd4d8] shadow-[0_0_18px_rgba(125,212,216,0.6)]" />
                <span className="absolute left-[52%] top-[46%] h-3 w-3 rounded-full bg-[#7dd4d8] shadow-[0_0_18px_rgba(125,212,216,0.6)]" />
                <span className="absolute left-[76%] top-[31%] h-3 w-3 rounded-full bg-[#7dd4d8] shadow-[0_0_18px_rgba(125,212,216,0.6)]" />
                <span className="absolute left-[38%] top-[64%] h-2 w-2 rounded-full bg-white/70" />
                <span className="absolute left-[63%] top-[24%] h-2 w-2 rounded-full bg-white/50" />
                <span className="absolute left-[24%] top-[25%] h-px w-[30%] rotate-[16deg] bg-gradient-to-r from-[#7dd4d8]/20 via-[#7dd4d8]/60 to-[#7dd4d8]/20" />
                <span className="absolute left-[54%] top-[44%] h-px w-[22%] -rotate-[28deg] bg-gradient-to-r from-[#7dd4d8]/20 via-[#7dd4d8]/60 to-[#7dd4d8]/20" />
                <span className="absolute left-[31%] top-[59%] h-px w-[20%] rotate-[8deg] bg-gradient-to-r from-white/10 via-white/30 to-white/10" />
                <div className="absolute inset-x-6 bottom-6 rounded-[1.3rem] border border-white/10 bg-[#0d1d31]/80 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#7cc7d0]">
                    first pass
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#d0dde1]">
                    A readable public layer showing locations, transfers, and the
                    connective tissue that usually stays invisible.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-border bg-white/85 p-8 shadow-paper">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0e6f6d]">
                  Working principles
                </p>
                <h2 className="mt-3 font-serif text-3xl text-ink">
                  The guardrails I want to keep
                </h2>
              </div>
              <div className="rounded-full border border-[#d7ece8] bg-[#f5fcfa] px-4 py-2 text-sm text-[#0e6f6d]">
                thoughtful, citeable, adoptable
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {principles.map((principle, index) => (
                <div
                  key={principle}
                  className={`rounded-[1.3rem] border px-4 py-4 text-sm font-medium ${
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
            className="rounded-[2.1rem] border border-[#d7ece8] bg-[linear-gradient(180deg,_rgba(238,252,249,0.92),_rgba(255,255,255,0.96))] p-8 shadow-paper"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0e6f6d]">
                  First 12 months
                </p>
                <h2 className="mt-3 font-serif text-3xl text-ink">
                  A roadmap that stays honest about scope
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7ece8] bg-white/80 px-4 py-2 text-sm text-inkFaded">
                <Sparkles className="h-4 w-4 text-[#0e6f6d]" />
                build small, test early, keep the bar high
              </div>
            </div>

            <div className="mt-8 space-y-5">
              {phases.map((phase, index) => (
                <div
                  key={phase.step}
                  className="grid gap-4 rounded-[1.7rem] border border-[#d7ece8] bg-white/88 p-5 md:grid-cols-[160px_1fr]"
                >
                  <div className="flex items-center gap-3 md:block">
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold text-white ${
                        index % 3 === 0
                          ? "bg-[#0e6f6d]"
                          : index % 3 === 1
                            ? "bg-[#6652ad]"
                            : "bg-[#b26020]"
                      }`}
                    >
                      {phase.step}
                    </span>
                    <p className="mt-0 text-xs font-semibold uppercase tracking-[0.18em] text-inkWash md:mt-3">
                      {phase.window}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{phase.title}</h3>
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
                  className={`rounded-[1.6rem] border p-5 shadow-paper ${
                    index === 0
                      ? "border-[#b9e3dc] bg-[#eefcf9]"
                      : index === 1
                        ? "border-[#d9d0ff] bg-[#f3f0ff]"
                        : "border-[#ffd8be] bg-[#fff2e8]"
                  }`}
                >
                  <p className="font-serif text-3xl text-ink">{metric.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-inkFaded">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            <div
              id="me"
              className="rounded-[1.9rem] border border-[#f0c5d4] bg-[#fff4f7] p-6 shadow-paper"
            >
              <h2 className="font-serif text-2xl text-ink">
                Why I feel responsible for building this well
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-inkLight">
                <p>
                  I understand the cultural normality around these shows because
                  I grew up around it. I also understand the distance many people
                  feel from that world once they have seen alternatives.
                </p>
                <p>
                  I like building things that sit between research, interface,
                  and public understanding. This idea needs all three.
                </p>
                <p>
                  I also care about tone. If this becomes self-righteous, it
                  loses the exact people it needs to reach.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "full-stack prototyping",
                  "research synthesis",
                  "cross-cultural communication"
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

            <div className="space-y-4">
              <div className="rounded-[1.9rem] border border-border bg-white/88 p-6 shadow-paper">
                <h3 className="font-serif text-2xl text-ink">What could go wrong</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-inkLight">
                  {risks.map((item) => (
                    <li key={item.title}>
                      <strong>{item.title}.</strong> {item.body}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.9rem] border border-border bg-white/88 p-6 shadow-paper">
                <h3 className="font-serif text-2xl text-ink">What this is not</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-inkLight">
                  {thisIsNot.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-[2.2rem] border border-[#10243d] bg-[linear-gradient(180deg,#10243d_0%,#0d1c31_100%)] p-8 text-paper shadow-paper">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7cc7d0]">
                  Closing thought
                </p>
                <p className="mt-3 font-serif text-2xl leading-relaxed sm:text-3xl">
                  The real ambition is not to win an argument. It is to make
                  captivity feel culturally obsolete because the alternative
                  feels more thoughtful, more moving, and simply better.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
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
        <div className="absolute left-[22%] top-[44%] h-14 w-14 rounded-full border border-[#5aa8b8]/20 blur-[1px]" />
      </div>
    );
  }

  if (kind === "sound") {
    return (
      <div className="relative h-24 w-24">
        {[20, 40, 60, 80].map((size, index) => (
          <motion.span
            key={size}
            className="absolute left-1/2 top-1/2 rounded-full border border-[#5aa8b8]/40"
            style={{
              width: size,
              height: size,
              transform: "translate(-50%, -50%)",
              opacity: 1 - index * 0.18
            }}
            animate={{ scale: [0.92, 1.06, 0.92], opacity: [0.45, 0.9, 0.45] }}
            transition={{
              duration: 3.2,
              ease: "easeInOut",
              repeat: Infinity,
              delay: index * 0.22
            }}
          />
        ))}
      </div>
    );
  }

  if (kind === "social") {
    return (
      <div className="relative h-20 w-full">
        <span className="absolute left-[28%] top-1/2 h-2.5 w-2.5 rounded-full bg-[#5aa8b8]" />
        <span className="absolute left-[36%] top-[48%] h-px w-16 bg-gradient-to-r from-[#5aa8b8]/30 to-transparent" />
        <span className="absolute right-[22%] top-[40%] h-1.5 w-1.5 rounded-full bg-[#5aa8b8]/40" />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <span className="absolute bottom-[22%] left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-white/60" />
      <span className="absolute inset-x-[25%] bottom-[23%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </div>
  );
}
