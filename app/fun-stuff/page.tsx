import type { Metadata } from "next";
import { PageWrapper } from "@/components/page-wrapper";
import { FunStuffPageContent } from "@/components/fun-stuff-page-content";

export const metadata: Metadata = {
  title: "Fun Stuff · Amanda Yin",
  description:
    "A future home for books, films, reviews, and other non-work rabbit holes."
};

export default function FunStuffPage() {
  return (
    <PageWrapper>
      <FunStuffPageContent />
    </PageWrapper>
  );
}
