"use client";

import { PageTransition } from "@/components/page-transition";
import { SectionHeader } from "@/components/section-header";
import { ArtWall } from "@/components/art-wall";

export function FunStuffPageContent() {
  return (
    <PageTransition>
      <div className="mt-4 space-y-8">
        <SectionHeader
          eyebrow="Off hours"
          title="Puzzles, paint, and other ways I lose track of time"
          description="A small wall of watercolor experiments, oil-pastel detours, and jigsaws in varying states of negotiation. Turn any piece over for the story."
        />

        <ArtWall />
      </div>
    </PageTransition>
  );
}
