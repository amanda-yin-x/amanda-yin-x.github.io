import type { Metadata } from "next";
import { PageWrapper } from "@/components/page-wrapper";
import { OceanBarsPageContent } from "@/components/ocean-bars-page-content";

export const metadata: Metadata = {
  title: "Ocean Without Bars · Amanda Yin",
  description:
    "A prototype for the post-captivity marine park: a portable immersive experience that gives audiences the wonder of whales and dolphins without live-animal captivity."
};

export default function OceanBarsPage() {
  return (
    <PageWrapper>
      <OceanBarsPageContent />
    </PageWrapper>
  );
}
