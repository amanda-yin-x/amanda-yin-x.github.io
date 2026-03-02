"use client";

import { PageTransition } from "@/components/page-transition";
import { SectionHeader } from "@/components/section-header";
import { BookOpen, Compass, Film, FileText } from "lucide-react";

const shelves = [
  {
    icon: BookOpen,
    title: "Bookshelf",
    note: "The books I am annotating, recommending, or aggressively underlining."
  },
  {
    icon: Film,
    title: "Film log",
    note: "Movies that were good, weird, beautifully shot, or all three at once."
  },
  {
    icon: FileText,
    title: "Tiny reviews",
    note: "Short reactions for when a whole essay would be too dramatic."
  },
  {
    icon: Compass,
    title: "Rabbit holes",
    note: "Odd internet finds, favorite corners, and whatever else keeps stealing my tabs."
  }
];

export function FunStuffPageContent() {
  return (
    <PageTransition>
      <div className="mt-4 space-y-12">
        <SectionHeader
          eyebrow="Fun Stuff"
          title="A proper home for the non-work obsessions"
          description="Books, films, little reviews, and the other things I keep meaning to organize instead of leaving scattered across tabs."
        />

        <section className="rounded-[2.2rem] border border-[#f0c5d4] bg-white/85 p-8 shadow-paper">
          <div className="grid gap-5 md:grid-cols-2">
            {shelves.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`rounded-[1.6rem] border p-5 shadow-paper ${
                    index % 2 === 0
                      ? "border-[#ffd6b4] bg-[#fff7ef]"
                      : "border-[#d8d0ff] bg-[#f6f4ff]"
                  }`}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-ink shadow-paper">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-inkLight">
                    {item.note}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-[2rem] border border-border bg-paper/80 p-6 shadow-paper">
          <p className="font-hand text-2xl text-[#a24f68]">
            scaffold for future chaos
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-inkLight">
            This page is intentionally lightweight for now, but the structure is
            here for books, films, ratings, and short reviews whenever you are
            ready to add them.
          </p>
        </section>
      </div>
    </PageTransition>
  );
}
