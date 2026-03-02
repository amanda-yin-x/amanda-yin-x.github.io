import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "paper-card rounded-sm p-6 transition-all duration-200 hover:-translate-y-0.5",
        className
      )}
    >
      {children}
    </div>
  );
}
