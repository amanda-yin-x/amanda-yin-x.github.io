"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type TabsContextValue = {
  value: string;
  setValue: (v: string) => void;
};

const TabsContext = React.createContext<TabsContextValue | null>(null);

export function Tabs({
  defaultValue,
  value,
  onValueChange,
  children,
  className
}: {
  defaultValue: string;
  value?: string;
  onValueChange?: (val: string) => void;
  children: React.ReactNode;
  className?: string;
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const activeValue = value ?? internal;

  return (
    <TabsContext.Provider
      value={{
        value: activeValue,
        setValue: (v) => {
          setInternal(v);
          onValueChange?.(v);
        }
      }}
    >
      <div className={cn("flex flex-col gap-4", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 p-1 shadow-soft">
      {children}
    </div>
  );
}

export function TabsTrigger({
  value,
  children
}: {
  value: string;
  children: React.ReactNode;
}) {
  const ctx = React.useContext(TabsContext);
  const reduceMotion = useReducedMotion();
  if (!ctx) throw new Error("TabsTrigger must be used inside Tabs");

  const isActive = ctx.value === value;

  return (
    <button
      onClick={() => ctx.setValue(value)}
      className={cn(
        "relative rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
        isActive ? "text-white" : "text-muted"
      )}
      type="button"
    >
      {isActive ? (
        <motion.span
          layoutId="tab-bg"
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent shadow-glow"
          transition={{
            duration: reduceMotion ? 0 : 0.25,
            ease: "easeOut"
          }}
        />
      ) : null}
      <span className="relative z-10">{children}</span>
    </button>
  );
}

export function TabsContent({
  value,
  children
}: {
  value: string;
  children: React.ReactNode;
}) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error("TabsContent must be used inside Tabs");
  if (ctx.value !== value) return null;
  return <div className="pt-2">{children}</div>;
}
