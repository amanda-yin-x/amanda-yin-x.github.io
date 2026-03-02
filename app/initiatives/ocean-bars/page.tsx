import type { Metadata } from "next";
import { PageWrapper } from "@/components/page-wrapper";
import { OceanBarsPageContent } from "@/components/ocean-bars-page-content";

export const metadata: Metadata = {
  title: "Ocean Without Bars · Amanda Yin",
  description:
    "Ocean Without Bars - a cultural alternative to captive cetacean shows, presented as an interactive initiative page."
};

export default function OceanBarsPage() {
  return (
    <PageWrapper>
      <OceanBarsPageContent />
    </PageWrapper>
  );
}
