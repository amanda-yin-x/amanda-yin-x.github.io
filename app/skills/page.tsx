import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";
import { SectionHeader } from "@/components/section-header";
import { SkillCard } from "@/components/skill-card";
import { Badge } from "@/components/ui/badge";
import { skills, toolbox, optimizationFocus } from "@/lib/data";
import { Wand2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Skills · Amanda Yin",
  description:
    "Skills, tools, and areas of focus across frontend, backend, ranking systems, and collaboration."
};

export default function SkillsPage() {
  return (
    <PageTransition>
      <div className="mt-4 space-y-10">
        <SectionHeader
          eyebrow="Skills"
          title="Skills & tools"
          description="Crafting experiences across full-stack product work, ranking systems, and collaborative delivery."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-ink">
            <Wand2 className="h-4 w-4 text-primary" />
            Toolbox
          </div>
          <Toolbox />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-ink">
            <Wand2 className="h-4 w-4 text-accent" />
            What I&apos;m optimizing for
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {optimizationFocus.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm text-ink shadow-soft"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

function Toolbox() {
  const labels: Record<string, string> = {
    languages: "Languages",
    frontend: "Frontend",
    backend: "Backend",
    dataML: "Data / ML",
    systems: "Systems"
  };

  return (
    <div className="grid gap-3 md:grid-cols-2">
      {Object.entries(toolbox).map(([category, items]) => (
        <div
          key={category}
          className="rounded-2xl border border-border bg-white/80 p-4 shadow-soft"
        >
          <p className="text-sm font-semibold capitalize text-ink">
            {labels[category] ?? category}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {items.map((item) => (
              <Badge key={item} variant="outline" className="bg-white/80">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
