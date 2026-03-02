"use client";

import { PageTransition } from "@/components/page-transition";
import { SectionHeader } from "@/components/section-header";
import { SkillCard, type SkillTone } from "@/components/skill-card";
import { Coffee, Compass, Zap } from "lucide-react";

const coreStack = [
  {
    name: "TypeScript",
    vibe: "My favorite",
    note: "Still the fastest way I know to keep a growing codebase honest without making it miserable."
  },
  {
    name: "React",
    vibe: "Good enough to ship",
    note: "I can move from rough idea to usable interface quickly and still leave it maintainable."
  },
  {
    name: "Python",
    vibe: "Been using since Year 1",
    note: "Research scripts, data wrangling, one-off experiments, and the inevitable notebook detours."
  },
  {
    name: "Go",
    vibe: "Can learn fast on the spot",
    note: "Comfortable jumping into backend services and picking things up while the code is still warm."
  },
  {
    name: "Ruby on Rails",
    vibe: "Quietly reliable",
    note: "Used it in production for real product work. Still impressed by how quickly a feature can go live."
  },
  {
    name: "GraphQL",
    vibe: "Schema-brain activated",
    note: "Especially useful when a bunch of teams need one API shape to stop the chaos."
  },
  {
    name: "Rust",
    vibe: "Annoying syntax but worth it",
    note: "A little stubborn, a lot powerful. Great when native systems need to behave."
  },
  {
    name: "C/C++",
    vibe: "Can still do it",
    note: "Mostly for lower-level integrations and the occasional 'why is this pointer mad at me' moment."
  }
];

const systemsResearch = [
  {
    name: "gRPC + API Design",
    vibe: "Infra brain on",
    note: "I like making service boundaries cleaner so everyone stops rewriting the same reliability logic."
  },
  {
    name: "ML Pipelines",
    vibe: "Happy in the weeds",
    note: "Benchmarks, scoring, eval flows, feature plumbing - the less glamorous middle is usually where I am."
  },
  {
    name: "LLM Quantization",
    vibe: "Research rabbit hole",
    note: "A weirdly fun mix of optimization, experiments, and proving whether the idea actually holds up."
  },
  {
    name: "Data Systems",
    vibe: "Can make it behave",
    note: "SQL, MongoDB, Solr, and whatever else is currently pretending to be the source of truth."
  },
  {
    name: "System Design",
    vibe: "Let's whiteboard it",
    note: "I like turning fuzzy ideas into tradeoffs, diagrams, and something a team can actually build."
  },
  {
    name: "Research Writing",
    vibe: "Surprisingly into it",
    note: "Turns out I enjoy translating experimental mess into a paper that other people can follow."
  }
];

const waysIWork = [
  {
    icon: Zap,
    title: "Vibe-code at 3am, then clean it up",
    description: "Some of my best debugging happens at slightly cursed hours. The follow-up pass is where I make it respectable."
  },
  {
    icon: Compass,
    title: "Can go full ADHD-mode on a problem",
    description: "If something is interesting enough, I will happily disappear into it for hours and come back with a better version."
  },
  {
    icon: Coffee,
    title: "Ship, regroup, iterate, repeat",
    description: "I would rather learn from a real version than spend forever pretending the first draft will be perfect."
  }
];

const tones: SkillTone[] = [
  {
    card: "border-[#b7e3dc] bg-white/85",
    wash: "from-[#eefcf8] via-white to-[#ddf6f0]",
    badge: "border-[#b7e3dc] bg-[#e8f8f4] text-[#0e6f6d]",
    accent: "bg-[#0e6f6d]"
  },
  {
    card: "border-[#d7ccff] bg-white/85",
    wash: "from-[#f7f4ff] via-white to-[#ece7ff]",
    badge: "border-[#d7ccff] bg-[#f1eeff] text-[#6652ad]",
    accent: "bg-[#6652ad]"
  },
  {
    card: "border-[#ffd4b0] bg-white/85",
    wash: "from-[#fff7ef] via-white to-[#ffe8d5]",
    badge: "border-[#ffd4b0] bg-[#fff1e3] text-[#b26020]",
    accent: "bg-[#b26020]"
  },
  {
    card: "border-[#f0c5d4] bg-white/85",
    wash: "from-[#fff5f8] via-white to-[#ffe8ef]",
    badge: "border-[#f0c5d4] bg-[#fff0f4] text-[#a24f68]",
    accent: "bg-[#a24f68]"
  }
];

export function SkillsPageContent() {
  return (
    <PageTransition>
      <div className="mt-6 space-y-16">
        <SectionHeader
          eyebrow="Skills"
          title="The stack I reach for when I'm making stuff"
          description="Less 'self-assessment dashboard,' more honest field notes from things I've actually shipped."
        />

        {/* Core Stack */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="font-serif text-xl font-medium text-ink">Core Stack</h2>
            <span className="text-sm text-inkFaded">Languages and frameworks I keep reaching for</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {coreStack.map((skill, index) => (
              <SkillCard
                key={skill.name}
                {...skill}
                tone={tones[index % tones.length]}
              />
            ))}
          </div>
          <p className="text-sm text-inkFaded">
            Typed systems, product-facing infra, the occasional native detour, and a soft spot for useful abstractions.
          </p>
        </section>

        {/* Systems & Research */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="font-serif text-xl font-medium text-ink">Infra, research, and other rabbit holes</h2>
            <span className="text-sm text-inkFaded">The parts I end up liking more than expected</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {systemsResearch.map((skill, index) => (
              <SkillCard
                key={skill.name}
                {...skill}
                tone={tones[(index + 1) % tones.length]}
              />
            ))}
          </div>
        </section>

        {/* How I Work */}
        <section className="space-y-6">
          <h2 className="font-serif text-xl font-medium text-ink">How I work when nobody is forcing me to sound corporate</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {waysIWork.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-[1.75rem] border border-fold bg-paper/80 p-5 shadow-paper transition-all hover:-translate-y-1 hover:shadow-paperLifted"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e9f8f5] text-[#0e6f6d] transition-colors group-hover:bg-[#0e6f6d] group-hover:text-paper">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-1 font-medium text-ink">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-inkLight">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
