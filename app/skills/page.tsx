import type { Metadata } from "next";
import { PageWrapper } from "@/components/page-wrapper";
import { SkillsPageContent } from "@/components/skills-page-content";

export const metadata: Metadata = {
  title: "Skills · Amanda Yin",
  description:
    "Core stack, systems depth, and how I work — signal-forward and intentionally minimal."
};

export default function SkillsPage() {
  return (
    <PageWrapper>
      <SkillsPageContent />
    </PageWrapper>
  );
}
