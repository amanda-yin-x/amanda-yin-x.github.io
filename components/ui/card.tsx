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
        "glass rounded-2xl p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-soft",
        className
      )}
    >
      {children}
    </div>
  );
}
