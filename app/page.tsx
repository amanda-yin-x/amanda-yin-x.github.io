import Link from "next/link";
import { Hero } from "@/components/hero";
import { PageTransition } from "@/components/page-transition";

export default function HomePage() {
  return (
    <PageTransition>
      <div className="pb-20">
        <Hero />
      </div>
    </PageTransition>
  );
}
