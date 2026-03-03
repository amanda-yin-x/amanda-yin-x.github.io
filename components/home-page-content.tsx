"use client";

import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { BackgroundDecor } from "@/components/background";
import { PaperCrane } from "@/components/paper-crane";

export function HomePageContent() {
  return (
    <PaperCrane>
      <BackgroundDecor />
      <Navigation />
      <div className="relative z-10">
        <main className="mx-auto max-w-5xl px-6 pb-16 pt-28 lg:px-8">
          <Hero />
        </main>
        <Footer />
      </div>
    </PaperCrane>
  );
}
