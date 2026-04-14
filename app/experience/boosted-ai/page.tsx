import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Bot,
  Gauge,
  GitBranch,
  Layers3,
  ShieldCheck
} from "lucide-react";
import { PageWrapper } from "@/components/page-wrapper";
import { PageTransition } from "@/components/page-transition";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Boosted.ai (W26) · Amanda Yin",
  description:
    "A concise technical summary of Amanda Yin's Winter 2026 SWE internship on Boosted.ai's Reliability Team."
};

const highlights = [
  {
    title: "End-to-end agent recommendation engine",
    detail:
      "Built a production-grade recommendation service from scratch in about 3 weeks to replace static onboarding with a personalized multi-stage LLM pipeline.",
    icon: Bot
  },
  {
    title: "Infra abstraction with measurable speedups",
    detail:
      "Designed and rolled out a shared gRPC client library (retries, timeout policy, pooling mode) to replace repeated per-service implementations. Internal measurements after adoption showed up to 10x latency improvement on targeted call paths.",
    icon: Gauge
  },
  {
    title: "Observability and traceability",
    detail:
      "Contributed to request ID propagation patterns across services so debugging, incident analysis, and performance triage could follow a request from edge to backend with less ambiguity.",
    icon: GitBranch
  },
  {
    title: "Agent quality guardrails",
    detail:
      "Helped design an end-to-end evaluation flow for a client-facing agent, including scored checks on response quality to catch regressions earlier and support safer model iteration.",
    icon: ShieldCheck
  }
];

const stack = [
  "Python 3.12",
  "FastAPI",
  "Go",
  "TypeScript",
  "PostgreSQL",
  "asyncpg",
  "Kubernetes",
  "gRPC",
  "PydanticAI",
  "GPT-5.1 / GPT-4.1-mini",
  "tiktoken",
  "pytest",
  "CI/CD",
  "RAG systems",
  "Streamlit"
];

const recommendationStats = [
  { label: "Delivery window", value: "~3 weeks" },
  { label: "Codebase", value: "~9,000 LOC" },
  { label: "Tests", value: "214 passing" },
  { label: "Pull requests", value: "8 PRs" }
];

const pipelineStages = [
  {
    stage: "1. Interest Extraction",
    detail:
      "Analyzed up to 30 days of chat history and built structured user interest profiles, with persona fallback for cold start users."
  },
  {
    stage: "2A. Template Ranking",
    detail:
      "Ranked agent templates independently with LLM scoring and richer context pulled from execution plan metadata."
  },
  {
    stage: "2B. Stock Ranking",
    detail:
      "Combined 7 independent stock signals (chat, peers, watchlist, portfolio, GICS, thematic exploration, onboarding) into a weighted ranking."
  },
  {
    stage: "3. Template + Stock Combination",
    detail:
      "Assigned unique primary stocks via a single LLM pass and filled secondary slots with MMR to balance relevance and diversity."
  },
  {
    stage: "4. Production Gating",
    detail:
      "Applied validity checks for template-stock combinations and fallback selection to keep recommendations deployable."
  }
];

export default function BoostedAiExperiencePage() {
  return (
    <PageWrapper>
      <PageTransition>
        <div className="mt-4 space-y-8">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-sm text-inkFaded transition-colors hover:text-tiffany"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Experience
          </Link>

          <SectionHeader
            eyebrow="Work Term Report · Winter 2026"
            title="Software Engineering Intern at Boosted.ai (Reliability Team)"
            description="A focused summary of my fourth co-op term (Jan 5, 2026 to Apr 24, 2026), centered on technical growth and infrastructure impact inside an early-stage AI startup."
          />

          <section className="grid gap-4 rounded-[2rem] border border-[#b9e3dc] bg-white/85 p-6 shadow-paper sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-inkWash">Role</p>
              <p className="mt-2 text-sm text-inkLight">SWE Intern (Infra-focused)</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-inkWash">Team</p>
              <p className="mt-2 text-sm text-inkLight">Reliability Team</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-inkWash">Term</p>
              <p className="mt-2 text-sm text-inkLight">Winter 2026 (Jan 5 - Apr 24)</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-inkWash">Work Term</p>
              <p className="mt-2 text-sm text-inkLight">Fourth</p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[#d5cbff] bg-white/90 p-6 shadow-paper">
            <h2 className="font-serif text-2xl text-ink">Technical Growth Focus</h2>
            <p className="mt-3 text-sm leading-relaxed text-inkLight">
              This term shifted my engineering perspective from feature-only delivery to
              reliability-first product development. I learned how infrastructure decisions
              directly affect AI product quality, debugging speed, and iteration confidence.
              The biggest growth area was moving from implementing tasks to designing reusable
              system patterns that other engineers can safely build on.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#d5cbff] bg-[#f6f3ff] px-3 py-1 text-xs font-semibold text-[#6652ad]"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Key Contributions</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="relative overflow-hidden rounded-[1.6rem] border border-[#ffd6b4] bg-white/90 p-5 shadow-paper"
                  >
                    <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#ffb36a]/15 blur-2xl" />
                    <div className="relative space-y-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff1e2] text-[#b4621f]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-serif text-lg text-ink">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-inkLight">{item.detail}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="space-y-4 rounded-[2rem] border border-[#b7e3dc] bg-[linear-gradient(180deg,_rgba(239,252,249,0.9),_rgba(255,255,255,0.95))] p-6 shadow-paper">
            <div className="space-y-2">
              <h2 className="font-serif text-2xl text-ink">
                End-to-End Agent Recommendation Engine
              </h2>
              <p className="text-sm leading-relaxed text-inkLight">
                Built as a standalone Python microservice to replace static template suggestions
                with personalized recommendations for an investment research platform with about
                24 agent templates.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {recommendationStats.map((item) => (
                <article
                  key={item.label}
                  className="rounded-2xl border border-[#b9e3dc] bg-white/90 p-4"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-inkWash">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#0e6f6d]">{item.value}</p>
                </article>
              ))}
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {pipelineStages.map((item) => (
                <article
                  key={item.stage}
                  className="rounded-2xl border border-[#d8ece8] bg-white/90 p-4"
                >
                  <p className="text-sm font-semibold text-ink">{item.stage}</p>
                  <p className="mt-2 text-sm leading-relaxed text-inkLight">{item.detail}</p>
                </article>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border border-[#d5cbff] bg-white/90 p-5">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#f1edff] text-[#6652ad]">
                  <Layers3 className="h-4 w-4" />
                </div>
                <h3 className="mt-3 font-serif text-lg text-ink">Notable Engineering Decisions</h3>
                <ul className="mt-3 grid gap-2 pl-5 text-sm leading-relaxed text-inkLight">
                  <li className="list-disc">
                    Designed independent template and stock ranking to reduce coupling and make
                    ranking behavior easier to test.
                  </li>
                  <li className="list-disc">
                    Used reason-before-score prompts and integer ID mapping to improve ranking quality
                    while reducing token cost.
                  </li>
                  <li className="list-disc">
                    Implemented continuous maturity scoring and 3-layer stock deduplication to improve
                    personalization reliability.
                  </li>
                </ul>
              </article>

              <article className="rounded-2xl border border-[#ffd6b4] bg-white/90 p-5">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff1e2] text-[#b4621f]">
                  <BarChart3 className="h-4 w-4" />
                </div>
                <h3 className="mt-3 font-serif text-lg text-ink">Observed Outcomes</h3>
                <ul className="mt-3 grid gap-2 pl-5 text-sm leading-relaxed text-inkLight">
                  <li className="list-disc">
                    Diversity improved from repetitive assignment to 20 unique stocks across
                    10 recommendations with mostly unique primaries.
                  </li>
                  <li className="list-disc">
                    Model comparison showed top recommendations were largely consistent, enabling
                    cost-optimized use of lower-cost models for frequent regeneration.
                  </li>
                  <li className="list-disc">
                    Production integration design was approved with event-triggered background runs,
                    append-only intermediate storage, and cooldown controls.
                  </li>
                </ul>
              </article>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[#b7e3dc] bg-[linear-gradient(180deg,_rgba(239,252,249,0.9),_rgba(255,255,255,0.95))] p-6 shadow-paper">
            <h2 className="font-serif text-2xl text-ink">Startup Execution Lessons</h2>
            <ul className="mt-4 grid gap-2 pl-5 text-sm leading-relaxed text-inkLight">
              <li className="list-disc">
                Small-team environments compress planning and execution, so writing clear specs
                early has outsized leverage.
              </li>
              <li className="list-disc">
                Cross-functional communication is a technical skill when product, web, and
                reliability decisions are tightly coupled.
              </li>
              <li className="list-disc">
                AI coding tools increase prototyping speed, but engineering judgment is still
                required for correctness, reliability, and maintainability.
              </li>
              <li className="list-disc">
                Taking ownership from architecture to testing to integration planning accelerated my
                transition from implementation-focused contributor to systems-level engineer.
              </li>
            </ul>
          </section>

          <section className="flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-border bg-paper/90 p-6 shadow-paper">
            <div className="space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-inkWash">
                ePortfolio checklist
              </p>
              <p className="text-sm text-inkLight">
                Includes updated resume access, technical artifacts, measurable outcomes, and reflection.
              </p>
              <p className="text-sm text-inkLight">
                Audience: recruiters, hiring managers, and technical interviewers evaluating SWE impact.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/CV_Amanda_Yin_25.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-borderDark bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:text-tiffany"
              >
                Updated Resume
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.boosted.ai/company"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-borderDark bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:text-tiffany"
              >
                About Boosted.ai
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </section>
        </div>
      </PageTransition>
    </PageWrapper>
  );
}
