"use client";

import { PageTransition } from "@/components/page-transition";
import { SectionHeader } from "@/components/section-header";
import { SkillBar } from "@/components/skill-bar";
import { Heart, Users, Zap } from "lucide-react";

const coreStack = [
  { name: "TypeScript", level: 95 },
  { name: "React", level: 90 },
  { name: "Python", level: 88 },
  { name: "JavaScript", level: 92 },
  { name: "GraphQL", level: 80 },
  { name: "SQL", level: 85 },
  { name: "Rust", level: 70 },
  { name: "C/C++", level: 75 }
];

const systemsResearch = [
  { name: "API Design & Protocols", level: 90 },
  { name: "Data Modeling", level: 85 },
  { name: "Microservices", level: 82 },
  { name: "Kubernetes", level: 75 },
  { name: "LLM Quantization", level: 78 },
  { name: "ML Pipelines", level: 80 },
  { name: "Data Systems", level: 85 },
  { name: "Research & Publications", level: 88 }
];

const waysIWork = [
  {
    icon: Zap,
    title: "Performance First",
    description: "I design systems with long-term performance and reliability in mind."
  },
  {
    icon: Heart,
    title: "Human-Centered",
    description: "I care deeply about accessible, intuitive UX."
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "I thrive in product-driven, cross-functional teams."
  }
];

export function SkillsPageContent() {
  return (
    <PageTransition>
      <div className="mt-6 space-y-16">
        <SectionHeader
          eyebrow="Skills"
          title="How I work"
        />

        {/* Core Stack */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="font-serif text-xl font-medium text-ink">Core Stack</h2>
            <span className="text-sm text-inkFaded">Languages & Frameworks</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {coreStack.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 0.05}
              />
            ))}
          </div>
          <p className="text-sm text-inkFaded">
            Typed, scalable systems · Native + web integration · Product-facing infrastructure
          </p>
        </section>

        {/* Systems & Research */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="font-serif text-xl font-medium text-ink">Systems & Research</h2>
            <span className="text-sm text-inkFaded">Architecture & ML</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {systemsResearch.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 0.05}
                variant="accent"
              />
            ))}
          </div>
        </section>

        {/* How I Work */}
        <section className="space-y-6">
          <h2 className="font-serif text-xl font-medium text-ink">How I Work</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {waysIWork.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-sm border border-fold bg-paper/80 p-5 shadow-paper transition-all hover:-translate-y-1 hover:border-tiffany/30 hover:shadow-lifted"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-sm bg-tiffanyMuted text-tiffany transition-colors group-hover:bg-tiffany group-hover:text-paper">
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
