import type { Metadata } from "next";
import { PageWrapper } from "@/components/page-wrapper";
import { FunStuffPageContent } from "@/components/fun-stuff-page-content";

export const metadata: Metadata = {
  title: "Fun Stuff · Amanda Yin",
  description:
    "A visual wall of Amanda Yin's puzzles, watercolor studies, and oil-pastel experiments."
};

export default function FunStuffPage() {
  return (
    <PageWrapper>
      <FunStuffPageContent />
    </PageWrapper>
  );
}
