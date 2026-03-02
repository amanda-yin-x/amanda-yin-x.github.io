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
      <div className="relative z-10">
        <Navigation />
        <main className="max-w-5xl mx-auto px-6 lg:px-8 pb-16 pt-6">
          <Hero />
        </main>
        <Footer />
      </div>
    </PaperCrane>
  );
}
