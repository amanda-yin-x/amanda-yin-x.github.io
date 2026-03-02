"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { BackgroundDecor } from "@/components/background";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackgroundDecor />
      <div className="relative z-10">
        <Navigation />
        <main className="max-w-5xl mx-auto px-6 lg:px-8 pb-16 pt-6">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
