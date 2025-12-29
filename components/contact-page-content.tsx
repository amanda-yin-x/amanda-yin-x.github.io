"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { ContactTile } from "@/components/contact-tile";
import { ContactForm } from "@/components/contact-form";
import { contactSuggestions } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function ContactPageContent() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("yixin.yin@mail.utoronto.ca");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = "mailto:yixin.yin@mail.utoronto.ca";
    }
  };

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Contact"
        title="Say hello"
        description="Warm, human, and ready to collaborate. Reach out about product ideas, research, internships, or hikes."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <ContactTile
          icon={<Mail className="h-4 w-4" />}
          label="yixin.yin@mail.utoronto.ca"
          description={copied ? "Copied!" : "Click to copy or open email client"}
          onClick={copyEmail}
        />
        <ContactTile
          href="https://www.linkedin.com/in/amanda-yin/"
          icon={<Linkedin className="h-4 w-4" />}
          label="LinkedIn"
          description="Connect or send a message"
        />
        <ContactTile
          href="https://github.com/amanda-yin-x"
          icon={<Github className="h-4 w-4" />}
          label="GitHub"
          description="Projects and experiments"
        />
        <ContactTile
          href="/CV_Amanda_Yin_25.pdf"
          icon={<FileText className="h-4 w-4" />}
          label="Download CV"
          description="Updated resume"
        />
      </div>

      <div className="space-y-3">
        <p className="text-sm font-semibold text-ink">Let&apos;s chat about…</p>
        <div className="flex flex-wrap gap-2">
          {contactSuggestions.map((item) => (
            <Badge key={item} variant="soft" className="bg-white/80">
              {item}
            </Badge>
          ))}
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
