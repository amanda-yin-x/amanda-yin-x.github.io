"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Phase = "sealed" | "opening" | "revealed";

export function UnfoldingExperience({
  children,
  onComplete
}: {
  children: React.ReactNode;
  onComplete?: () => void;
}) {
  const [phase, setPhase] = useState<Phase>("sealed");
  const [hasInteracted, setHasInteracted] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleUnfold = useCallback(() => {
    if (phase === "sealed" && !hasInteracted) {
      setHasInteracted(true);
      setPhase("opening");
      setTimeout(() => {
        setPhase("revealed");
        onComplete?.();
      }, reduceMotion ? 100 : 1800);
    }
  }, [phase, hasInteracted, onComplete, reduceMotion]);

  // Allow scroll or click to trigger
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        handleUnfold();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        handleUnfold();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleUnfold]);

  // Skip animation after first visit (session storage)
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("unfold-complete");
    if (hasVisited) {
      setPhase("revealed");
    }
  }, []);

  useEffect(() => {
    if (phase === "revealed") {
      sessionStorage.setItem("unfold-complete", "true");
    }
  }, [phase]);

  return (
    <div className="relative min-h-screen">
      {/* Sealed state - The mysterious entry */}
      <AnimatePresence mode="wait">
        {phase === "sealed" && (
          <motion.div
            key="sealed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-void"
            onClick={handleUnfold}
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-tiffany/5 blur-[100px]"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* The folded letter symbol */}
            <motion.div
              className="relative cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Envelope/letter shape */}
              <div className="relative">
                {/* Back of envelope */}
                <motion.div
                  className="relative h-48 w-72 rounded-sm bg-gradient-to-b from-charcoal to-slate shadow-paper"
                  style={{ perspective: "1000px" }}
                >
                  {/* Envelope flap (top triangle) */}
                  <motion.div
                    className="absolute -top-12 left-0 h-0 w-0"
                    style={{
                      borderLeft: "144px solid transparent",
                      borderRight: "144px solid transparent",
                      borderBottom: "48px solid #2A2A2F"
                    }}
                    animate={{ rotateX: [0, 2, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />

                  {/* Wax seal */}
                  <motion.div
                    className="absolute left-1/2 top-8 -translate-x-1/2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-tiffany shadow-glow">
                      <span className="font-serif text-2xl font-semibold text-void">A</span>
                    </div>
                  </motion.div>

                  {/* Decorative lines on envelope */}
                  <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col gap-2">
                    <div className="h-px w-32 bg-gradient-to-r from-transparent via-border to-transparent" />
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Instruction text */}
            <motion.div
              className="mt-16 flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <p className="font-serif text-lg tracking-wide text-ash">
                Click to unfold
              </p>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown className="h-5 w-5 text-tiffany/60" />
              </motion.div>
            </motion.div>

            {/* Corner accents */}
            <div className="absolute left-8 top-8 h-12 w-px bg-gradient-to-b from-tiffany/30 to-transparent" />
            <div className="absolute left-8 top-8 h-px w-12 bg-gradient-to-r from-tiffany/30 to-transparent" />
            <div className="absolute bottom-8 right-8 h-12 w-px bg-gradient-to-t from-tiffany/30 to-transparent" />
            <div className="absolute bottom-8 right-8 h-px w-12 bg-gradient-to-l from-tiffany/30 to-transparent" />
          </motion.div>
        )}

        {/* Opening state - The transition */}
        {phase === "opening" && (
          <motion.div
            key="opening"
            className="fixed inset-0 z-50 flex items-center justify-center bg-void"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Unfolding animation */}
            <div className="relative" style={{ perspective: "1200px" }}>
              {/* Multiple paper layers unfolding */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-gradient-to-b from-paper to-parchment shadow-paper"
                  initial={{
                    rotateX: -90,
                    y: -50,
                    opacity: 0
                  }}
                  animate={{
                    rotateX: 0,
                    y: 0,
                    opacity: [0, 1, 1, 0],
                    scale: [0.8, 1, 1.5, 2]
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  style={{
                    transformOrigin: "top center"
                  }}
                />
              ))}

              {/* Center glow expanding */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-tiffany"
                initial={{ width: 20, height: 20, opacity: 1 }}
                animate={{
                  width: [20, 800],
                  height: [20, 800],
                  opacity: [1, 0]
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1]
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Revealed state - Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: phase === "revealed" ? 1 : 0,
          y: phase === "revealed" ? 0 : 30
        }}
        transition={{
          duration: 0.8,
          delay: phase === "revealed" ? 0.2 : 0
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
