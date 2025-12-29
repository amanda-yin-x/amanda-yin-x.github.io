import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";
import { SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { principles, outsideWork } from "@/lib/data";
import { Heart, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About · Amanda Yin",
  description:
    "Learn more about Amanda Yin — software engineer, LLM quantization researcher, and product builder in Toronto."
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="mt-4 space-y-10">
        <SectionHeader
          eyebrow="About"
          title="A little about me"
          description="I enjoy bringing meaningful ideas to life with technology—balancing rigor with warmth."
        />

        <Card>
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-3 text-muted">
              <p>
                I&apos;m a senior in Computer Science (Software Engineering
                Stream) and Statistics at the University of Toronto. I thrive in
                teams that value clarity, curiosity, and thoughtful delivery.
              </p>
              <p>
                Beyond engineering, I love connecting dots across product,
                design, and research—writing crisp docs, aligning partners, and
                shipping iterative wins.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                <Heart className="h-4 w-4 text-accent" />
                Values I bring
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="soft">Human-first engineering</Badge>
                <Badge variant="soft">Ship → learn → iterate</Badge>
                <Badge variant="soft">Venture-minded builder</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                <Sparkles className="h-4 w-4 text-primary" />
                Outside work
              </div>
              <div className="grid gap-2 sm:grid-cols-3">
                {outsideWork.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border bg-white/80 px-3 py-2 text-sm font-semibold text-ink"
                  >
                    <span className="mr-2">{item.emoji}</span>
                    {item.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((principle) => (
            <Card key={principle.title} className="relative">
              <div className="absolute right-[-12px] top-[-12px] h-12 w-12 rounded-full bg-accent/20 blur-xl" />
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Principle
              </p>
              <h3 className="text-xl font-semibold text-ink">
                {principle.title}
              </h3>
              <p className="text-muted">{principle.copy}</p>
            </Card>
          ))}
        </div>

        <Card>
          <div className="grid gap-4 md:grid-cols-3">
            <TimelineItem
              label="Now"
              detail="Incoming SWE Intern @ Boosted.ai (Winter 2026). SWE Intern @ Microsoft (S25). Scouting at LvlUp Ventures. Research scholar in LLM quantization."
            />
            <TimelineItem
              label="Recently"
              detail="Built native-to-web data bridge for Outlook (S25). Shipped geo-radius targeting at StackAdapt (W25). Designed MRU sorting and intelligent pinning for Outlook (S24)."
            />
            <TimelineItem
              label="Next"
              detail="Growing as a product-minded engineer building delightful, reliable systems and leading cross-functional work."
            />
          </div>
        </Card>
      </div>
    </PageTransition>
  );
}

function TimelineItem({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="space-y-2 rounded-2xl border border-border bg-white/70 p-4 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted">
        {label}
      </p>
      <p className="text-sm text-ink">{detail}</p>
    </div>
  );
}
