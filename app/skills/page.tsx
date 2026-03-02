import type { Metadata } from "next";
import { PageWrapper } from "@/components/page-wrapper";
import { SkillsPageContent } from "@/components/skills-page-content";

export const metadata: Metadata = {
  title: "Skills · Amanda Yin",
  description:
    "Core stack, infra rabbit holes, and a less-corporate explanation of how Amanda Yin actually likes to work."
};

export default function SkillsPage() {
  return (
    <PageWrapper>
      <SkillsPageContent />
    </PageWrapper>
  );
}
