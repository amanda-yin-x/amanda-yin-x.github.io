import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Skills · Amanda Yin",
  description:
    "Core stack, systems depth, and how I work — signal-forward and intentionally minimal."
};

export default function SkillsPage() {
  const coreStack = [
    "TypeScript",
    "JavaScript",
    "React",
    "GraphQL",
    "Rust",
    "C/C++",
    "Python",
    "SQL"
  ];

  const systemsResearch = [
    "Client–Server Protocols & API Design",
    "Data Modeling",
    "Microservices",
    "Kubernetes",
    "LLM Quantization",
    "Mathematical Optimization",
    "ML Pipelines",
    "Data Systems (MySQL, MongoDB, Solr)",
    "Research Writing & Publications"
  ];

  const waysIWork = [
    "I design systems with long-term performance and reliability in mind.",
    "I care deeply about accessible, human-centered UX.",
    "I work best in collaborative, product-driven environments."
  ];

  return (
    <PageTransition>
      <div className="mt-6 space-y-14">
        <SectionHeader
          eyebrow="Skills"
          title="Core stack, systems depth, and how I work"
          description="Signal-only. Calm, intentional, and confident."
          className="relative"
        />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-ink">Core Stack</h2>
          <div className="flex flex-wrap gap-3 text-lg font-semibold text-ink">
            {coreStack.map((item) => (
              <span
                key={item}
                className="rounded-xl bg-white/60 px-4 py-2 transition duration-150 hover:bg-primary/10"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted">
            Typed, scalable systems · Native + web integration · Product-facing infrastructure
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-ink">Systems &amp; Research</h2>
          <div className="grid gap-3 text-base text-ink md:grid-cols-2">
            {systemsResearch.map((item) => (
              <span
                key={item}
                className="rounded-lg px-2 py-1 transition duration-150 hover:bg-accent/8 hover:underline hover:decoration-primary/70 hover:underline-offset-4"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-2xl bg-white/60 p-5 text-base text-ink shadow-soft">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
            {waysIWork.map((item) => (
              <p key={item} className="md:w-1/3 text-muted md:text-base">
                {item}
              </p>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
