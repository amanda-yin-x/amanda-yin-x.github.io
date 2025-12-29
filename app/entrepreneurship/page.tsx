import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";
import { SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Sparkles } from "lucide-react";

const ventures = [
  {
    title: "Hatch Fellow",
    org: "Foundess",
    timeframe: "Jan 2025 – Mar 2025",
    location: "SF Bay Area · Hybrid",
    description: "Research and prototyping fast with founders.",
    link: null
  },
  {
    title: "Builder",
    org: "telo.io",
    timeframe: "Nov 2025 – Present",
    location: "Remote",
    description:
      "AI-built LaTeX CVs + verified mentors to help STEM students stand out.",
    link: "https://amanda-yin-x.github.io/telo.io/"
  }
];

const featured = [
  {
    name: "VerityLab",
    description: "A showcased build highlighting AI-forward work.",
    link: "https://amanda-yin-x.github.io/veritylab-ai-site/"
  }
];

export const metadata: Metadata = {
  title: "Entrepreneurship · Amanda Yin",
  description:
    "Entrepreneurship and building — prototyping, testing ideas, and shipping tools that help people move forward."
};

export default function EntrepreneurshipPage() {
  return (
    <PageTransition>
      <div className="mt-4 space-y-10">
        <SectionHeader
          eyebrow="Entrepreneurship"
          title="Entrepreneurship & building"
          description="I prototype fast, test ideas, and build tools that help people move forward."
        />

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="relative overflow-hidden">
            <div className="absolute right-[-30px] top-[-30px] h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="flex items-center gap-2 text-sm font-semibold text-ink">
              <Sparkles className="h-4 w-4 text-primary" />
              Builder timeline
            </div>
            <div className="relative mt-4">
              <div className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-primary/70 via-accent/60 to-primary/70" />
              <div className="space-y-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-gradient-to-br from-primary to-accent shadow-glow" />
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    What I&apos;m building next
                  </p>
                  <p className="text-sm text-ink">
                    Exploring new ways to ship mentoring + career tools faster.
                  </p>
                </div>
                {ventures.map((venture) => (
                  <div key={venture.title} className="relative pl-8">
                    <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-gradient-to-br from-primary to-accent shadow-glow" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      {venture.timeframe}
                    </p>
                    <div className="flex flex-col gap-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-base font-semibold text-ink">
                          {venture.title}
                        </p>
                        <Badge variant="soft">{venture.org}</Badge>
                      </div>
                      <p className="text-sm text-muted">{venture.description}</p>
                      <p className="text-xs font-semibold text-muted">
                        {venture.location}
                      </p>
                      {venture.link ? (
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="w-fit px-0 text-sm text-ink"
                        >
                          <a href={venture.link} target="_blank" rel="noreferrer">
                            Visit
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </Button>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute left-[-30px] top-[-30px] h-36 w-36 rounded-full bg-primary/20 blur-3xl" />
            <h3 className="text-xl font-semibold text-ink">Featured builds</h3>
            <div className="mt-4 space-y-4">
              {featured.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-2 rounded-2xl border border-border bg-white/80 p-4 shadow-soft"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-semibold text-ink">
                        {item.name}
                      </p>
                      <p className="text-sm text-muted">{item.description}</p>
                    </div>
                    <Button
                      asChild
                      variant="secondary"
                      size="sm"
                      className="text-sm"
                    >
                      <a href={item.link} target="_blank" rel="noreferrer">
                        Visit
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </PageTransition>
  );
}
