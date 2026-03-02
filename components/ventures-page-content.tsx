"use client";

import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import { SectionHeader } from "@/components/section-header";
import { FeaturedBuildCard } from "@/components/featured-build-card";
import { FileText, FlaskConical, Sparkles, ArrowUpRight } from "lucide-react";

const featuredBuilds = [
  {
    name: "Telo",
    tagline: "AI-powered LaTeX CVs for STEM students",
    description:
      "AI-built LaTeX CVs + verified mentors to help STEM students stand out and land their dream roles.",
    link: "https://amanda-yin-x.github.io/telo.io/",
    icon: FileText,
    gradient: "from-[#ff9a62] to-[#ffcc8f]",
    surface: "from-[#fff7ef] via-white to-[#ffe8d4]",
    border: "border-[#ffd6b4]",
    statusClass: "border-[#ffd6b4] bg-[#fff2e5] text-[#b4621f]",
    taglineClass: "text-[#b4621f]",
    status: "Live"
  },
  {
    name: "Ottr",
    tagline: "Connecting founders with their future users",
    description:
      "Helping founders meet the people who need their product. Discovery made simple.",
    link: "https://www.linkedin.com/company/try-ottr",
    icon: Sparkles,
    gradient: "from-[#7d79ff] to-[#b5b0ff]",
    surface: "from-[#f6f4ff] via-white to-[#ebe9ff]",
    border: "border-[#d8d0ff]",
    statusClass: "border-[#d8d0ff] bg-[#f1efff] text-[#6652ad]",
    taglineClass: "text-[#6652ad]",
    status: "Building"
  },
  {
    name: "VerityLab AI",
    tagline: "Autonomous reproducibility for ML research",
    description:
      "Agents replicate and verify ML papers, starting with LLM quantization, through automated code execution, benchmarking, and evidence-backed verification. The goal: make AI research more trustworthy and auditable.",
    link: "https://amanda-yin-x.github.io/veritylab-ai-site/",
    icon: FlaskConical,
    gradient: "from-[#34b3b0] to-[#86d6d0]",
    surface: "from-[#eefcf9] via-white to-[#dcf5f0]",
    border: "border-[#b7e3dc]",
    statusClass: "border-[#b7e3dc] bg-[#e7f8f4] text-[#0e6f6d]",
    taglineClass: "text-[#0e6f6d]",
    status: "Previous venture"
  }
];

export function VenturesPageContent() {
  return (
    <PageTransition>
      <div className="mt-4 space-y-12">
        <SectionHeader
          eyebrow="Ventures"
          title="Things I'm playing around with"
          description="A mix of side quests, experiments, and ideas that got interesting enough to earn their own page."
        />

        <section className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-serif text-xl font-medium text-ink">
              Featured builds
            </h2>
            <Link
              href="/initiatives/ocean-bars"
              className="inline-flex items-center gap-2 text-sm text-inkFaded transition-colors hover:text-tiffany"
            >
              Ocean Bars
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredBuilds.map((build, index) => (
              <FeaturedBuildCard key={build.name} {...build} index={index} />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-xl font-medium text-ink">
            Blogs & notes
          </h2>
          <a
            href="https://www.notion.so/amandayin/Unscripted-29d261b5157b8104a98ef331634a2b61?source=copy_link"
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden rounded-[2.2rem] border border-[#dccff7] bg-white/90 shadow-paper transition-all hover:-translate-y-1 hover:shadow-paperLifted"
          >
            <div className="relative grid gap-6 p-6 md:grid-cols-[0.95fr_1.05fr] md:items-center md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,239,255,0.9),_transparent_30%),linear-gradient(180deg,_rgba(255,252,247,0.95),_rgba(255,255,255,0.9))]" />
              <div className="relative">
                <div className="absolute left-5 top-4 h-7 w-20 -rotate-6 rounded-sm bg-[#f4d8ad]/70 blur-[1px]" />
                <div className="absolute right-8 top-6 h-7 w-16 rotate-6 rounded-sm bg-[#d7e7ff]/70 blur-[1px]" />
                <div className="relative -rotate-1 rounded-[1.5rem] border border-[#eadffb] bg-[linear-gradient(180deg,_rgba(255,250,242,0.98),_rgba(255,255,255,0.98)),repeating-linear-gradient(180deg,transparent,transparent_31px,rgba(102,82,173,0.08)_31px,rgba(102,82,173,0.08)_32px)] p-6 shadow-paper">
                  <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6652ad] text-paper shadow-paper">
                    <FileText className="h-6 w-6" />
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6652ad]">
                    Coffee chat notes
                  </p>
                  <h3 className="mt-2 font-hand text-4xl leading-none text-[#6652ad]">
                    Unscripted
                  </h3>
                  <p className="mt-5 max-w-sm text-sm leading-relaxed text-inkLight">
                    A running collection of conversations, advice, and small observations that felt too useful to lose in a notes app.
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-inkWash">
                    <span className="h-px w-8 bg-[#6652ad]/30" />
                    scribbled after coffee chats
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[1.7rem] border border-[#eadffb] bg-white/70 p-6 shadow-paper">
                  <p className="font-hand text-3xl text-[#6652ad]">
                    little notes from real conversations
                  </p>
                  <div className="mt-5 space-y-4 text-sm leading-relaxed text-inkLight">
                    <p>
                      Expect candid coffee-chat takeaways, career weirdness, and the unpolished lessons that usually do not make it into polished portfolio copy.
                    </p>
                    <p>
                      More notebook than blog post: lightly messy, very human, and full of lines worth coming back to later.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["handwritten vibe", "lined paper", "conversation archive"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#d5cbff] bg-[#f6f3ff] px-3 py-1 text-xs font-medium text-[#6652ad]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#6652ad]">
                    Read on Notion
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </section>
      </div>
    </PageTransition>
  );
}
