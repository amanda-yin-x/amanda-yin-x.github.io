import type { Metadata } from "next";
import { PageWrapper } from "@/components/page-wrapper";
import { PageTransition } from "@/components/page-transition";
import { SectionHeader } from "@/components/section-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { experiences, type ExperienceCategory } from "@/lib/data";
import { ExperienceTimeline } from "@/components/experience-timeline";

const filters: { value: ExperienceCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "swe", label: "SWE" },
  { value: "research", label: "Research" },
  { value: "teaching", label: "Teaching" }
];

export const metadata: Metadata = {
  title: "Experience · Amanda Yin",
  description:
    "Internships, research, and teaching - the projects and teams that taught Amanda Yin how to build with range."
};

const preferredOrderByFilter: Partial<Record<ExperienceCategory, string[]>> = {
  all: [
    "boosted-2026",
    "microsoft-s25",
    "stackadapt-w25",
    "dsi-2025",
    "microsoft-s24",
    "scotiabank-w24",
    "teaching-w24"
  ],
  swe: [
    "boosted-2026",
    "microsoft-s25",
    "stackadapt-w25",
    "microsoft-s24",
    "scotiabank-w24"
  ],
  research: ["dsi-2025", "scotiabank-w24"],
  teaching: ["teaching-w24"]
};

function sortExperiences(
  items: typeof experiences,
  filterValue: ExperienceCategory
) {
  const preferredOrder = preferredOrderByFilter[filterValue];

  if (!preferredOrder) {
    return [...items].sort((a, b) => b.order - a.order);
  }

  const rankMap = new Map(preferredOrder.map((id, index) => [id, index]));

  return [...items].sort((a, b) => {
    const rankA = rankMap.get(a.id);
    const rankB = rankMap.get(b.id);

    if (rankA != null && rankB != null) return rankA - rankB;
    if (rankA != null) return -1;
    if (rankB != null) return 1;
    return b.order - a.order;
  });
}

export default function ExperiencePage() {
  return (
    <PageWrapper>
      <PageTransition>
        <div className="mt-4 space-y-8">
          <SectionHeader
            eyebrow="Experience"
            title="A timeline with a little more personality"
            description="Internships, research, and one teaching detour. Hover around - each stop has its own mood."
          />

          <Tabs defaultValue="all">
            <TabsList>
              {filters.map((filter) => (
                <TabsTrigger key={filter.value} value={filter.value}>
                  {filter.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {filters.map((filter) => {
              const filtered =
                filter.value === "all"
                  ? experiences
                  : experiences.filter((exp) =>
                      exp.categories.includes(filter.value)
                    );
              const sorted = sortExperiences(filtered, filter.value);
              return (
                <TabsContent key={filter.value} value={filter.value}>
                  <ExperienceTimeline experiences={sorted} />
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </PageTransition>
    </PageWrapper>
  );
}
