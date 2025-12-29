import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Hero } from "@/components/hero";
import { PageTransition } from "@/components/page-transition";
import { SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const sorted = [...experiences].sort((a, b) => b.order - a.order);
  const highlights = sorted.slice(0, 3);

  return (
    <PageTransition>
      <Hero />

      <section className="mt-14 grid gap-4 lg:grid-cols-2">
        <Card className="relative overflow-hidden">
          <div className="absolute right-[-30px] top-[-40px] h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          <SectionHeader
            eyebrow="Current focus"
            title="What I'm doing now"
            description="Incoming SWE Intern at Boosted.ai (Winter 2026). Shipping as a SWE intern at Microsoft (S25) and scouting bold founders with LvlUp Ventures."
          />
          <div className="mt-4 space-y-3 text-sm text-muted">
            <p>
              Exploring LLM weight + activation quantization as a Data Sciences Institute
              research scholar (ICAART 2026 paper acceptance).
            </p>
            <p>
              I write crisp specs, align with partners, and ship the smallest
              lovable version to learn fast.
            </p>
          </div>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute left-[-40px] top-[-30px] h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
          <SectionHeader
            eyebrow="How I work"
            title="Systems meet story"
            description="Human-first engineering with venture-minded impact."
          />
          <ul className="mt-4 grid gap-3 text-sm text-muted">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              Human-first engineering — clarity, usability, reliability.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
              Ship → learn → iterate — fast feedback loops and measured impact.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-mint" />
              Venture-minded builder — turning bold ideas into outcomes.
            </li>
          </ul>
        </Card>
      </section>

      <section className="mt-14">
        <SectionHeader
          eyebrow="Highlights"
          title="Recent work"
          description="A snapshot of roles where I paired engineering depth with product clarity."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {highlights.map((exp) => (
            <Card key={exp.id} className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-ink">
                  {exp.company}
                </p>
                <Badge variant="outline">{exp.timeframe}</Badge>
              </div>
              <p className="text-base font-semibold text-ink">{exp.title}</p>
              {exp.team ? <p className="text-sm text-muted">{exp.team}</p> : null}
              <div className="flex items-center gap-2 text-xs text-muted">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {exp.location}
              </div>
              <p className="line-clamp-3 text-sm text-muted">
                {exp.highlights[0]}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-white/70 px-2.5 py-1 text-[11px] font-semibold text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <Button variant="ghost" asChild>
            <Link href="/experience">
              See full experience
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </PageTransition>
  );
}
