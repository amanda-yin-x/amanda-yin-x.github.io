import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  className
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {eyebrow ? (
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span>{eyebrow}</span>
        </div>
      ) : null}
      <div className="flex items-center gap-3">
        <h2 className="text-3xl font-bold tracking-tight text-ink sparkle">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-2xl text-base text-muted">{description}</p>
      ) : null}
    </div>
  );
}
