import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/60 bg-white/70 backdrop-blur-soft">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-muted lg:px-8">
        <p className="font-semibold text-ink">
          Amanda Yin — building thoughtful, human-centered software.
        </p>
        <p className="text-muted">© 2026 Amanda Yin. All rights reserved.</p>
        <div className="flex items-center gap-3 pt-1">
          <Link
            href="mailto:yixin.yin@mail.utoronto.ca"
            className="rounded-full border border-border bg-white/70 p-2 text-ink transition hover:-translate-y-0.5 hover:shadow-soft"
            aria-label="Email Amanda Yin"
          >
            <Mail className="h-4 w-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/amanda-yin/"
            target="_blank"
            className="rounded-full border border-border bg-white/70 p-2 text-ink transition hover:-translate-y-0.5 hover:shadow-soft"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href="https://github.com/amanda-yin-x"
            target="_blank"
            className="rounded-full border border-border bg-white/70 p-2 text-ink transition hover:-translate-y-0.5 hover:shadow-soft"
            aria-label="GitHub profile"
          >
            <Github className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
