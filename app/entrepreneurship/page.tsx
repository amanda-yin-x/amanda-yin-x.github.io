import type { Metadata } from "next";
import { PageWrapper } from "@/components/page-wrapper";
import { VenturesPageContent } from "@/components/ventures-page-content";

export const metadata: Metadata = {
  title: "Ventures · Amanda Yin",
  description:
    "Building tools that help people move forward — AI-powered CVs, founder discovery, and more."
};

export default function EntrepreneurshipPage() {
  return (
    <PageWrapper>
      <VenturesPageContent />
    </PageWrapper>
  );
}
