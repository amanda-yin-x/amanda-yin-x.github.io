import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { siteTagline } from "@/lib/site";

const socialLinks = [
  {
    href: "mailto:yixin.yin@mail.utoronto.ca",
    label: "Email",
    icon: Mail
  },
  {
    href: "https://www.linkedin.com/in/amanda-yin/",
    label: "LinkedIn",
    icon: Linkedin,
    external: true
  },
  {
    href: "https://github.com/amanda-yin-x",
    label: "GitHub",
    icon: Github,
    external: true
  }
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-paperDark/30">
      <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left section */}
          <div className="flex flex-col gap-1">
            <p className="font-hand text-xl text-ink">
              Amanda Yin
            </p>
            <p className="text-sm text-inkFaded">
              {siteTagline}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="group flex items-center gap-2 rounded-sm border border-border bg-paper px-3 py-2 text-sm text-inkFaded transition-all hover:border-tiffany hover:text-tiffany"
                  aria-label={link.label}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{link.label}</span>
                  {link.external && (
                    <ArrowUpRight className="hidden h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:inline" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Decorative line */}
        <div className="hr-ornament my-6" />

        {/* Copyright */}
        <div className="flex items-center justify-between">
          <p className="text-xs text-inkWash">
            © {new Date().getFullYear()} Amanda Yin
          </p>
          <p className="font-hand text-sm text-inkWash">
            Toronto, Canada
          </p>
        </div>
      </div>
    </footer>
  );
}
