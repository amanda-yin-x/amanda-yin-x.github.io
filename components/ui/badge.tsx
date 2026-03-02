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
      "bg-tiffany text-paper",
    soft:
      "bg-tiffanyMuted text-tiffany border border-tiffany/10",
    outline:
      "border border-border text-inkFaded bg-paper"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm px-2.5 py-1 text-xs font-medium tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
