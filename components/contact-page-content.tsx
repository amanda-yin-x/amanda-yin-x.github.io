"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText, Calendar, ArrowUpRight, Copy, Check } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";

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

  const quickLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/amanda-yin/",
      color: "bg-[#0A66C2]/20 text-[#0A66C2]"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/amanda-yin-x",
      color: "bg-ink/10 text-ink"
    },
    {
      icon: FileText,
      label: "CV",
      href: "/CV_Amanda_Yin_25.pdf",
      color: "bg-tiffanyMuted text-tiffany"
    }
  ];

  return (
    <div className="space-y-12">
      <SectionHeader
        eyebrow="Contact"
        title="Let's connect"
        description="Whether it's about research, internships, or just a friendly chat."
      />

      {/* Main Calendly CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative overflow-hidden rounded-sm border border-fold bg-paper/90 p-8 shadow-paper"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-tiffany/10 via-transparent to-tiffany/5 opacity-50" />

        <div className="relative flex flex-col items-center gap-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-gradient-to-br from-tiffany to-tiffanyLight text-paper shadow-paper">
            <Calendar className="h-8 w-8" />
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-2xl font-medium text-ink">Book a chat</h2>
            <p className="max-w-md text-inkLight">
              I'd love to hear about what you're working on. Schedule a 30-minute call and let's explore ideas together.
            </p>
          </div>

          <Button asChild size="lg" className="group">
            <a
              href="https://calendly.com/yinamanda97"
              target="_blank"
              rel="noreferrer"
            >
              <Calendar className="h-5 w-5" />
              Schedule on Calendly
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </div>
      </motion.div>

      {/* Email section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-sm border border-fold bg-paper/90 p-6 shadow-paper"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-tiffanyMuted text-tiffany">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-inkFaded">Email me directly</p>
              <p className="font-medium text-ink">yixin.yin@mail.utoronto.ca</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={copyEmail}
              className="gap-2"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-tiffany" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy
                </>
              )}
            </Button>
            <Button asChild variant="secondary" size="sm">
              <a href="mailto:yixin.yin@mail.utoronto.ca">
                Open mail app
              </a>
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Quick links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-4"
      >
        <h3 className="text-sm font-medium text-inkFaded">Quick links</h3>
        <div className="flex flex-wrap gap-3">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-sm border border-fold bg-paper/90 px-4 py-3 shadow-paper transition-all hover:-translate-y-0.5 hover:border-tiffany/30 hover:shadow-lifted"
              >
                <div className={`flex h-8 w-8 items-center justify-center rounded-sm ${link.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <span className="font-medium text-ink">{link.label}</span>
                <ArrowUpRight className="h-4 w-4 text-inkWash transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-tiffany" />
              </a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
