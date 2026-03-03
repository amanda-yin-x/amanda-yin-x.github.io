import type { Metadata } from "next";
import { PageWrapper } from "@/components/page-wrapper";
import { OceanBarsPageContent } from "@/components/ocean-bars-page-content";

export const metadata: Metadata = {
  title: "Ocean Without Bars · Amanda Yin",
  description:
    "Ocean Without Bars is Amanda Yin's human-centered initiative for offering a more thoughtful public alternative to captive cetacean shows."
};

export default function OceanBarsPage() {
  return (
    <PageWrapper>
      <OceanBarsPageContent />
    </PageWrapper>
  );
}
