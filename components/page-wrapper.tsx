"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { BackgroundDecor } from "@/components/background";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackgroundDecor />
      <Navigation />
      <div className="relative z-10">
        <main className="mx-auto max-w-5xl px-6 pb-16 pt-28 lg:px-8">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
