import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "soft" | "outline";

export function Badge({
  children,
  className,
  variant = "default"
}: {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
}) {
  const variants: Record<Variant, string> = {
    default:
      "bg-gradient-to-r from-primary/80 to-accent/80 text-white shadow-glow",
    soft:
      "gradient-pill text-ink",
    outline:
      "border border-primary/40 text-ink bg-white/70"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
