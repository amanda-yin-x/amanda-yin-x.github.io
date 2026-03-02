"use client";

import { PageTransition } from "@/components/page-transition";
import { SectionHeader } from "@/components/section-header";
import { FeaturedBuildCard } from "@/components/featured-build-card";
import { FileText, Sparkles } from "lucide-react";

const featuredBuilds = [
  {
    name: "Telo",
    tagline: "AI-powered LaTeX CVs for STEM students",
    description: "AI-built LaTeX CVs + verified mentors to help STEM students stand out and land their dream roles.",
    link: "https://amanda-yin-x.github.io/telo.io/",
    icon: FileText,
    gradient: "from-tiffany to-tiffanyLight",
    status: "Live"
  },
  {
    name: "Ottr",
    tagline: "Connecting founders with their future users",
    description: "Helping founders meet the people who need their product. Discovery made simple.",
    link: "https://www.linkedin.com/company/try-ottr",
    icon: Sparkles,
    gradient: "from-tiffany/80 to-tiffany",
    status: "Building"
  }
];

export function VenturesPageContent() {
  return (
    <PageTransition>
      <div className="mt-4 space-y-12">
        <SectionHeader
          eyebrow="Ventures"
          title="Things I'm building"
          description="I prototype fast, test ideas, and ship tools that help people move forward."
        />

        {/* Featured Builds */}
        <section className="space-y-6">
          <h2 className="font-serif text-xl font-medium text-ink">Featured Builds</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredBuilds.map((build, index) => (
              <FeaturedBuildCard key={build.name} {...build} index={index} />
            ))}
          </div>
        </section>

        {/* Blogs Section Placeholder */}
        <section className="space-y-6">
          <h2 className="font-serif text-xl font-medium text-ink">Blogs & Notes</h2>
          <div className="rounded-sm border border-dashed border-fold bg-paperWarm/50 p-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-tiffanyMuted text-tiffany">
              <FileText className="h-6 w-6" />
            </div>
            <p className="text-inkFaded">
              Coffee chat notes, learnings, and thoughts coming soon.
            </p>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
