import type { Metadata } from "next";
import { PageWrapper } from "@/components/page-wrapper";
import { VenturesPageContent } from "@/components/ventures-page-content";

export const metadata: Metadata = {
  title: "Ventures · Amanda Yin",
  description:
    "Side quests, ventures, and experiments Amanda Yin keeps building, revisiting, or refusing to shut up about."
};

export default function EntrepreneurshipPage() {
  return (
    <PageWrapper>
      <VenturesPageContent />
    </PageWrapper>
  );
}
