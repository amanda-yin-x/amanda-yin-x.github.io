import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";
import { ContactPageContent } from "@/components/contact-page-content";

export const metadata: Metadata = {
  title: "Contact · Amanda Yin",
  description:
    "Say hello to Amanda Yin — email, LinkedIn, GitHub, and a friendly contact form."
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="mt-4">
        <ContactPageContent />
      </div>
    </PageTransition>
  );
}
