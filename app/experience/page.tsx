import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";
import { SectionHeader } from "@/components/section-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { experiences, type ExperienceCategory } from "@/lib/data";
import { ExperienceTimeline } from "@/components/experience-timeline";

const filters: { value: ExperienceCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "swe", label: "SWE" },
  { value: "research", label: "Research" },
  { value: "product", label: "Product" }
];

export const metadata: Metadata = {
  title: "Experience · Amanda Yin",
  description:
    "Experience across ad-tech, productivity, finance, and ML research with full-stack and product leadership."
};

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="mt-4 space-y-8">
        <SectionHeader
          eyebrow="Experience"
          title="Roles that shaped me"
          description="A blend of product-minded engineering, ML research, and cross-functional collaboration."
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
            const sorted = [...filtered].sort((a, b) => b.order - a.order);
            return (
              <TabsContent key={filter.value} value={filter.value}>
                <ExperienceTimeline experiences={sorted} />
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </PageTransition>
  );
}
