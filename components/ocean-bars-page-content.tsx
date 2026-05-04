"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Brain,
  CheckCircle2,
  FileText,
  Gauge,
  Layers3,
  MapPinned,
  MessageCircle,
  Music2,
  Route,
  School,
  Waves
} from "lucide-react";
import { PageTransition } from "@/components/page-transition";

const navItems = [
  { href: "#why", label: "Why" },
  { href: "#experience", label: "Experience" },
  { href: "#build", label: "Build" },
  { href: "#map", label: "Map" },
  { href: "#roadmap", label: "Roadmap" }
];

const originCards = [
  {
    title: "Not a guilt machine",
    body: "This is not about scolding families for being curious."
  },
  {
    title: "Not a zoo replacement slogan",
    body: "It is about building an experience people can actually choose."
  },
  {
    title: "Not just awareness",
    body: "The goal is substitution: make the old format feel obsolete."
  }
];

const oldModel = [
  "Animals performing on cue",
  "Curiosity pointed at tricks",
  "A short burst of spectacle",
  "A memory built around possession"
];

const newModel = [
  "Sound, scale, and movement",
  "Curiosity pointed at perspective",
  "A calmer immersive encounter",
  "A memory built around wonder"
];

const experiencePieces = [
  {
    icon: Waves,
    title: "Immersive Ocean Scene",
    body:
      "A 10-15 minute digital experience using projection, spatial sound, and interaction. The audience moves through open ocean scale, migration, sound, and social life before seeing the contrast with artificial confinement.",
    details: [
      "Web-based or Unity/WebXR prototype",
      "Projection-friendly scenes",
      "Spatial audio layer",
      "Keyboard, phone, or sensor input",
      "Abstract, respectful visuals"
    ],
    visual: "waves"
  },
  {
    icon: Gauge,
    title: "Shrinking Ocean Installation",
    body:
      "A physical installation that makes confinement legible at human scale. Visitors do not pretend to be dolphins. They experience a simple metaphor: movement, choice, and sensory space gradually shrinking.",
    details: [
      "Lightweight frame or projected boundary",
      "Sound shifts from open ocean to repeated loops",
      "Optional responsive movement feedback",
      "Built for classrooms, libraries, galleries, or small museum rooms"
    ],
    visual: "frame"
  },
  {
    icon: BookOpen,
    title: "Science-Backed Education Guide",
    body:
      "A toolkit that connects the emotional experience to credible learning, with source notes, discussion prompts, reflection questions, and a version schools or public spaces can adapt.",
    details: [
      "Vetted source list",
      "Facilitator guide",
      "Pre/post survey template",
      "Open toolkit",
      "Optional retrieval-grounded Q&A later"
    ],
    visual: "guide"
  }
] as const;

const buildLayers = [
  {
    icon: Layers3,
    title: "Frontend experience",
    body: "Browser-based interactive ocean scenes designed for projection and public viewing."
  },
  {
    icon: Music2,
    title: "Audio layer",
    body: "Spatial sound, ocean ambience, and repeated confinement loops used with restraint."
  },
  {
    icon: Route,
    title: "Physical layer",
    body: "Shrinking-ocean installation logic, venue layout, and portable setup notes."
  },
  {
    icon: FileText,
    title: "Evidence layer",
    body: "Source notes and careful claims so the emotional arc stays scientifically grounded."
  },
  {
    icon: Brain,
    title: "Evaluation layer",
    body: "Pre/post surveys and audience feedback to test what people understand and remember."
  },
  {
    icon: School,
    title: "Toolkit layer",
    body: "Documentation for schools, libraries, museums, and public spaces."
  }
];

const mapCards = [
  "Venue records",
  "Transfer routes",
  "Context notes",
  "Source links",
  "Timeline entries"
];

const roadmap = [
  {
    months: "Months 1-2",
    title: "Listen and scope",
    body:
      "Research, expert outreach, script, storyboards, first audience definition, and technical design."
  },
  {
    months: "Months 3-4",
    title: "Build the first prototype",
    body:
      "Create the first immersive ocean scene, sound prototype, and shrinking-ocean installation mockup."
  },
  {
    months: "Months 5-6",
    title: "Build the full experience",
    body:
      "Complete the three-act experience: open ocean, shrinking world, post-captivity future. Draft the education guide and toolkit."
  },
  {
    months: "Months 7-8",
    title: "Pilot and measure",
    body:
      "Test with small audiences. Use pre/post surveys to measure changes in understanding, memory, and attitudes toward captivity."
  },
  {
    months: "Months 9-10",
    title: "Refine",
    body:
      "Improve visuals, sound, installation design, language, and toolkit. Make the experience easier for real venues to host."
  },
  {
    months: "Months 11-12",
    title: "Public launch",
    body:
      "Run a public demo, publish the final website, release the open toolkit, and write an impact report."
  }
];

const metrics = [
  "Working 15-minute portable prototype",
  "At least 200 participants in testing",
  "Pre/post survey results on attitudes toward captivity and ethical alternatives",
  "One public demo",
  "One open toolkit for schools, libraries, museums, and advocacy groups",
  "At least 3-5 conversations with educators, animal welfare experts, or potential venue partners",
  "A clear impact report showing what worked, what did not, and what should come next"
];

const guardrails = [
  "Give people a better option, not a guilt trip.",
  "Let the feeling arrive before the facts pile up.",
  "Make the evidence clean, careful, and citeable.",
  "Design for real venues, not ideal ones.",
  "Start small enough to actually ship.",
  "Do not use animal suffering as spectacle.",
  "Do not claim to speak for whales or dolphins.",
  "Build a replacement, not just an argument."
];

const risks = [
  "It becomes emotionally moving but not scientifically careful.",
  "It becomes technically impressive but not compelling enough for venues to adopt.",
  "It makes people feel guilty without offering a better alternative.",
  "The evidence map becomes messy or too broad.",
  "The project tries to solve all animal welfare instead of focusing on captive cetacean entertainment.",
  "Immersive technology alone does not change minds unless paired with good storytelling and credible education."
];

const sectionMotion = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
};

export function OceanBarsPageContent() {
  const reduceMotion = useReducedMotion();

  const motionProps = reduceMotion
    ? {}
    : {
        initial: sectionMotion.initial,
        whileInView: sectionMotion.whileInView,
        viewport: sectionMotion.viewport,
        transition: sectionMotion.transition
      };

  return (
    <PageTransition>
      <div
        id="top"
        className="-mx-6 -mt-8 overflow-hidden bg-[#050b14] text-[#f6fbfc] shadow-[0_0_0_100vmax_#050b14] [clip-path:inset(0_-100vmax)] lg:-mx-8"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(60,191,211,0.22),transparent_30%),radial-gradient(circle_at_88%_3%,rgba(123,104,238,0.16),transparent_25%),linear-gradient(180deg,#061423_0%,#07101c_42%,#050b14_100%)]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:72px_72px]" />

          <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-8 lg:px-8">
            <nav
              className="mb-6 flex flex-wrap items-center gap-2 text-sm"
              aria-label="Ocean Without Bars sections"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-[#c9dce2] backdrop-blur transition hover:border-[#7dd4d8]/60 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <Hero reduceMotion={Boolean(reduceMotion)} />

            <div className="space-y-8 pt-8 md:space-y-10">
              <motion.section
                id="why"
                className="scroll-mt-28 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_18px_80px_rgba(0,0,0,0.28)] backdrop-blur md:p-8"
                {...motionProps}
              >
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7dd4d8]">
                      Why this exists
                    </p>
                    <h2 className="mt-3 font-serif text-3xl leading-tight text-white md:text-4xl">
                      This started from a cultural gap, not a branding idea.
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-[#c7d7dc]">
                      I was born and raised in China, where marine parks and
                      animal performance venues are still common. I grew up
                      seeing dolphins and whales treated as entertainment. Over
                      time, documentaries and conversations with people inside
                      the industry changed how I saw those shows.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-[#c7d7dc]">
                      One conversation stayed with me: a former dolphin trainer
                      told me about a dolphin who nearly pulled her underwater
                      during a performance, then let her go, and later died
                      after signs of deep distress. The story made captivity
                      feel less like a distant ethical debate and more like a
                      failure of imagination.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-[#c7d7dc]">
                      The show is only the visible part. Behind it can be
                      capture, breeding, transfer, separation from natural social
                      groups, and a lifetime of confinement. Ocean Without Bars
                      asks a different question: what if the better choice also
                      felt like the more interesting one?
                    </p>
                  </div>

                  <div className="grid content-start gap-3">
                    {originCards.map((card) => (
                      <article
                        key={card.title}
                        className="rounded-2xl border border-white/10 bg-[#0a1828]/80 p-5"
                      >
                        <h3 className="text-base font-semibold text-white">
                          {card.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#b2c6cd]">
                          {card.body}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </motion.section>

              <motion.section
                className="scroll-mt-28 rounded-[2rem] border border-[#1d5364] bg-[linear-gradient(135deg,rgba(9,25,42,0.96),rgba(5,12,22,0.98))] p-6 md:p-8"
                {...motionProps}
              >
                <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7dd4d8]">
                      Core idea
                    </p>
                    <h2 className="mt-3 font-serif text-3xl leading-tight text-white md:text-4xl">
                      The old promise was closeness. The new promise is
                      understanding.
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-[#c2d4d9]">
                      The old marine park promise was simple: come close to the
                      whale. But closeness built on captivity is not the same as
                      understanding. Ocean Without Bars gives audiences a
                      different kind of encounter: one built around distance,
                      sound, migration, social life, and scale.
                    </p>
                    <blockquote className="mt-6 border-l border-[#7dd4d8] pl-5 font-serif text-2xl leading-snug text-white">
                      "We built cages because we could not imagine another way
                      to feel close."
                    </blockquote>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <CompareCard title="The old model" items={oldModel} muted />
                    <CompareCard title="The new model" items={newModel} />
                  </div>
                </div>
              </motion.section>

              <motion.section
                id="experience"
                className="scroll-mt-28 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur md:p-8"
                {...motionProps}
              >
                <div className="max-w-3xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7dd4d8]">
                    What I will build
                  </p>
                  <h2 className="mt-3 font-serif text-3xl leading-tight text-white md:text-4xl">
                    A portable experience, not just a beautiful concept page.
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[#c2d4d9]">
                    The first version of Ocean Without Bars will be small enough
                    to ship, but serious enough to test. It has three connected
                    pieces.
                  </p>
                </div>

                <div className="mt-7 grid gap-4 lg:grid-cols-3">
                  {experiencePieces.map((piece, index) => {
                    const Icon = piece.icon;
                    return (
                      <article
                        key={piece.title}
                        className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.075),rgba(255,255,255,0.035))] p-5"
                      >
                        <ExperienceVisual
                          kind={piece.visual}
                          reduceMotion={Boolean(reduceMotion)}
                        />
                        <div className="relative">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#7dd4d8]/25 bg-[#7dd4d8]/10 text-[#8ee4e8]">
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="mt-5 text-xl font-semibold text-white">
                            {piece.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-[#bed0d5]">
                            {piece.body}
                          </p>
                          <ul className="mt-5 space-y-2 text-sm text-[#d9e8eb]">
                            {piece.details.map((detail) => (
                              <li key={detail} className="flex gap-2">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7dd4d8]" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </motion.section>

              <motion.section
                id="build"
                className="scroll-mt-28 rounded-[2rem] border border-[#1d5364] bg-[#061321] p-6 md:p-8"
                {...motionProps}
              >
                <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7dd4d8]">
                      How this becomes real
                    </p>
                    <h2 className="mt-3 font-serif text-3xl leading-tight text-white md:text-4xl">
                      Built between research, interface, and public
                      understanding.
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-[#c2d4d9]">
                      My background is in software engineering, machine
                      learning, and interactive systems. I am not approaching
                      this as a traditional campaign. I am building the missing
                      interface between marine science, public emotion, and
                      adoptable venue design.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-[#c2d4d9]">
                      I like building things that sit between research,
                      interface, and public understanding. This project needs
                      all three.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {buildLayers.map((layer) => {
                      const Icon = layer.icon;
                      return (
                        <article
                          key={layer.title}
                          className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                        >
                          <Icon className="h-5 w-5 text-[#7dd4d8]" />
                          <h3 className="mt-3 text-sm font-semibold text-white">
                            {layer.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-[#afc2c8]">
                            {layer.body}
                          </p>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </motion.section>

              <motion.section
                id="map"
                className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#081829_0%,#050c16_100%)] p-6 md:p-8"
                {...motionProps}
              >
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7dd4d8]">
                      Evidence map
                    </p>
                    <h2 className="mt-3 font-serif text-3xl leading-tight text-white md:text-4xl">
                      A calmer way to make the system legible
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-[#c2d4d9]">
                      Part of what keeps captivity culturally sticky is that the
                      system is hard to see. Venues feel disconnected. Transfers
                      feel abstract. Timelines stay buried. The evidence map is
                      meant to gather clean, citeable information in one place
                      without turning the project into a shame wall.
                    </p>
                    <p className="mt-5 text-sm italic text-[#8fb9c0]">
                      Not "gotcha" energy. More like turning the lights on.
                    </p>
                  </div>

                  <div className="relative min-h-[330px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#071320] p-5">
                    <EvidenceMapVisual />
                    <div className="relative grid gap-3 sm:grid-cols-2">
                      {mapCards.map((card) => (
                        <div
                          key={card}
                          className="rounded-2xl border border-white/10 bg-[#071320]/75 p-4 backdrop-blur"
                        >
                          <MapPinned className="h-4 w-4 text-[#7dd4d8]" />
                          <p className="mt-3 text-sm font-medium text-white">
                            {card}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>

              <motion.section
                id="roadmap"
                className="scroll-mt-28 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8"
                {...motionProps}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7dd4d8]">
                      First 12 months
                    </p>
                    <h2 className="mt-3 font-serif text-3xl leading-tight text-white md:text-4xl">
                      A one-year roadmap
                    </h2>
                  </div>
                  <a
                    href="#success"
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm text-[#d8e8eb] transition hover:border-[#7dd4d8]/60"
                  >
                    Success metrics
                    <ArrowDown className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-8 grid gap-4">
                  {roadmap.map((item, index) => (
                    <motion.article
                      key={item.months}
                      className="grid gap-4 rounded-[1.4rem] border border-white/10 bg-[#071624]/85 p-5 md:grid-cols-[140px_1fr]"
                      initial={reduceMotion ? false : { opacity: 0, x: -18 }}
                      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{
                        duration: 0.48,
                        delay: reduceMotion ? 0 : index * 0.05
                      }}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7dd4d8]">
                        {item.months}
                      </p>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#b9cbd0]">
                          {item.body}
                        </p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.section>

              <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
                <motion.section
                  id="success"
                  className="scroll-mt-28 rounded-[2rem] border border-[#1d5364] bg-[#071624] p-6 md:p-8"
                  {...motionProps}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7dd4d8]">
                    What success looks like
                  </p>
                  <h2 className="mt-3 font-serif text-3xl leading-tight text-white">
                    The project has to leave evidence behind.
                  </h2>
                  <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#c6d7dc]">
                    {metrics.map((metric) => (
                      <li key={metric} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7dd4d8]" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </motion.section>

                <motion.section
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8"
                  {...motionProps}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7dd4d8]">
                    The guardrails
                  </p>
                  <h2 className="mt-3 font-serif text-3xl leading-tight text-white">
                    Principles for staying honest
                  </h2>
                  <div className="mt-6 grid gap-2">
                    {guardrails.map((item) => (
                      <p
                        key={item}
                        className="rounded-2xl border border-white/10 bg-[#071624]/80 px-4 py-3 text-sm text-[#d4e2e6]"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </motion.section>
              </div>

              <motion.section
                className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(12,31,50,0.92),rgba(5,11,20,0.98))] p-6 md:p-8"
                {...motionProps}
              >
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7dd4d8]">
                      What could go wrong
                    </p>
                    <h2 className="mt-3 font-serif text-3xl leading-tight text-white">
                      The weak version only protests captivity.
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-[#c2d4d9]">
                      The weakest version of this project only protests
                      captivity. The version I want to build must make captivity
                      feel obsolete.
                    </p>
                  </div>
                  <ul className="grid gap-3 text-sm leading-relaxed text-[#c6d7dc]">
                    {risks.map((risk) => (
                      <li
                        key={risk}
                        className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                      >
                        {risk}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>

              <motion.section
                className="relative overflow-hidden rounded-[2rem] border border-[#1d5364] bg-[#061321] p-6 md:p-8"
                {...motionProps}
              >
                <ClosingOcean reduceMotion={Boolean(reduceMotion)} />
                <div className="relative max-w-2xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7dd4d8]">
                    Closing
                  </p>
                  <h2 className="mt-3 font-serif text-4xl leading-tight text-white md:text-5xl">
                    Not just to protest captivity.
                  </h2>
                  <p className="mt-3 font-serif text-3xl leading-tight text-[#8ee4e8] md:text-4xl">
                    To make captivity feel obsolete.
                  </p>
                  <p className="mt-6 text-base leading-relaxed text-[#c2d4d9]">
                    The real ambition is not to win an argument. It is to make a
                    future where children can feel awe for whales and dolphins
                    without learning that awe requires possession.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-[#d8e8eb]">
                    The goal is not just to protest captivity. It is to make
                    captivity feel obsolete.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-[#8ee4e8] px-5 py-3 text-sm font-semibold text-[#061321] transition hover:bg-white"
                    >
                      Contact me
                      <MessageCircle className="h-4 w-4" />
                    </Link>
                    <a
                      href="#roadmap"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-medium text-white transition hover:border-[#8ee4e8]/70"
                    >
                      View roadmap
                    </a>
                    <Link
                      href="/entrepreneurship"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-medium text-white transition hover:border-[#8ee4e8]/70"
                    >
                      Back to initiatives
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

function Hero({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <section className="relative min-h-[690px] overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#071624] px-6 py-8 shadow-[0_24px_90px_rgba(0,0,0,0.38)] md:px-10 md:py-10">
      <HeroOcean reduceMotion={reduceMotion} />
      <div className="relative z-10 flex min-h-[610px] flex-col justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8ee4e8]">
            A prototype for the post-captivity marine park
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.98] text-white sm:text-6xl md:text-7xl">
            Ocean Without Bars
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d5e6ea] md:text-xl">
            For a century, marine parks taught us that wonder requires
            captivity. Ocean Without Bars is my attempt to prove the opposite: a
            portable experience that lets people encounter whales and dolphins
            through sound, scale, story, and interaction instead of live-animal
            performance.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#b7ccd2]">
            Ocean Without Bars is a prototype for the post-captivity marine
            park: a portable experience that gives audiences the wonder of
            whales and dolphins without live animal captivity.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full bg-[#8ee4e8] px-5 py-3 text-sm font-semibold text-[#061321] transition hover:bg-white"
            >
              See the experience
            </a>
            <a
              href="#roadmap"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-[#8ee4e8]/70"
            >
              Read the plan
            </a>
          </div>
        </div>

        <p className="mt-10 max-w-sm border-l border-[#8ee4e8]/70 pl-4 font-serif text-2xl italic leading-snug text-white">
          Wonder should not require captivity.
        </p>
      </div>
    </section>
  );
}

function CompareCard({
  title,
  items,
  muted
}: {
  title: string;
  items: string[];
  muted?: boolean;
}) {
  return (
    <article
      className={`rounded-[1.5rem] border p-5 ${
        muted
          ? "border-white/10 bg-white/[0.035]"
          : "border-[#7dd4d8]/30 bg-[#7dd4d8]/10"
      }`}
    >
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8ee4e8]">
        {title}
      </h3>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#d4e2e6]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function HeroOcean({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(125,212,216,0.18),transparent_28%),linear-gradient(180deg,rgba(16,52,79,0.76)_0%,rgba(6,19,33,0.92)_56%,rgba(4,8,15,0.98)_100%)]" />
      <motion.div
        className="absolute -top-28 left-[8%] h-[620px] w-40 rotate-12 bg-[linear-gradient(180deg,rgba(174,232,238,0.28),transparent)] blur-2xl"
        animate={reduceMotion ? undefined : { x: [0, 18, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -top-24 right-[18%] h-[560px] w-32 rotate-[18deg] bg-[linear-gradient(180deg,rgba(126,213,216,0.18),transparent)] blur-2xl"
        animate={reduceMotion ? undefined : { y: [0, 24, 0], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.svg
        className="absolute bottom-[18%] left-[6%] w-[88%] max-w-[820px] text-[#020812]/75"
        viewBox="0 0 900 220"
        role="img"
        aria-label="Abstract whale silhouette moving through open ocean"
        animate={reduceMotion ? undefined : { x: ["-4%", "7%", "-4%"], y: [0, -8, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          fill="currentColor"
          d="M114 123c61-48 152-74 271-78 142-5 249 30 322 104 28-19 58-42 90-68 11-9 28 1 25 15-6 30-21 55-44 76 24 18 42 43 54 75 5 14-11 27-24 19-38-22-73-42-105-60-85 37-186 50-303 39-119-11-214-44-286-99-19-14-19-9 0-23Z"
        />
      </motion.svg>
      <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,transparent,#071624)]" />
    </div>
  );
}

function ExperienceVisual({
  kind,
  reduceMotion
}: {
  kind: (typeof experiencePieces)[number]["visual"];
  reduceMotion: boolean;
}) {
  if (kind === "waves") {
    return (
      <div className="absolute right-4 top-4 h-28 w-28 opacity-55" aria-hidden="true">
        {[42, 70, 98].map((size, index) => (
          <motion.span
            key={size}
            className="absolute right-0 top-0 rounded-full border border-[#8ee4e8]/35"
            style={{ height: size, width: size }}
            animate={reduceMotion ? undefined : { scale: [0.96, 1.08, 0.96], opacity: [0.35, 0.8, 0.35] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.28
            }}
          />
        ))}
      </div>
    );
  }

  if (kind === "frame") {
    return (
      <div className="absolute inset-5 opacity-40" aria-hidden="true">
        <motion.div
          className="h-full w-full rounded-2xl border border-[#8ee4e8]/50"
          animate={reduceMotion ? undefined : { scale: [1, 0.82, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    );
  }

  return (
    <div className="absolute right-5 top-5 space-y-2 opacity-40" aria-hidden="true">
      {[72, 96, 54].map((width) => (
        <span
          key={width}
          className="block h-1 rounded-full bg-[#8ee4e8]/60"
          style={{ width }}
        />
      ))}
    </div>
  );
}

function EvidenceMapVisual() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-70"
      viewBox="0 0 520 360"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="routeGradient" x1="0" x2="1">
          <stop offset="0%" stopColor="#8ee4e8" stopOpacity="0.12" />
          <stop offset="50%" stopColor="#8ee4e8" stopOpacity="0.74" />
          <stop offset="100%" stopColor="#8ee4e8" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <path
        d="M70 95 C150 45 230 150 308 104 S410 72 470 130"
        fill="none"
        stroke="url(#routeGradient)"
        strokeWidth="2"
      />
      <path
        d="M92 250 C178 196 258 262 334 210 S438 190 486 260"
        fill="none"
        stroke="url(#routeGradient)"
        strokeWidth="2"
      />
      {[70, 180, 308, 470, 92, 258, 334, 486].map((x, index) => (
        <circle
          key={`${x}-${index}`}
          cx={x}
          cy={index < 4 ? [95, 78, 104, 130][index] : [250, 232, 210, 260][index - 4]}
          r={index % 3 === 0 ? 5 : 3.5}
          fill="#8ee4e8"
          opacity={index % 3 === 0 ? 0.9 : 0.55}
        />
      ))}
    </svg>
  );
}

function ClosingOcean({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_36%,rgba(125,212,216,0.18),transparent_28%)]" />
      <motion.div
        className="absolute bottom-16 right-8 h-24 w-64 rounded-[100%] bg-[#020812]/70"
        animate={reduceMotion ? undefined : { x: [20, -20, 20], opacity: [0.55, 0.82, 0.55] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,#061321)]" />
    </div>
  );
}
