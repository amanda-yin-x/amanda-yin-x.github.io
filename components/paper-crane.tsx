"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion, AnimatePresence } from "framer-motion";

type Phase = "mystery" | "unfolding" | "revealing" | "complete";

export function PaperCrane({
  children,
  onComplete
}: {
  children: React.ReactNode;
  onComplete?: () => void;
}) {
  const [phase, setPhase] = useState<Phase>("mystery");
  const [showCrane, setShowCrane] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth spring for scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform values for the crane unfolding
  const craneScale = useTransform(smoothProgress, [0, 0.3], [1, 0.4]);
  const craneOpacity = useTransform(smoothProgress, [0.2, 0.4], [1, 0]);
  const craneY = useTransform(smoothProgress, [0, 0.3], [0, -100]);

  // Wing rotations for unfolding effect
  const leftWingRotate = useTransform(smoothProgress, [0.05, 0.25], [0, -75]);
  const rightWingRotate = useTransform(smoothProgress, [0.05, 0.25], [0, 75]);
  const bodyFlatten = useTransform(smoothProgress, [0.1, 0.3], [1, 0.1]);

  // Content reveal
  const contentOpacity = useTransform(smoothProgress, [0.25, 0.45], [0, 1]);
  const contentY = useTransform(smoothProgress, [0.25, 0.45], [60, 0]);

  // Skip animation for return visitors
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("crane-unfolded");
    if (hasVisited) {
      setPhase("complete");
      setShowCrane(false);
    }
  }, []);

  useEffect(() => {
    if (phase === "complete") return;

    const unsubscribe = smoothProgress.on("change", (value) => {
      if (value > 0.05 && phase === "mystery") {
        setPhase("unfolding");
      }
      if (value > 0.35 && phase === "unfolding") {
        setPhase("revealing");
      }
      if (value > 0.5 && phase === "revealing") {
        setPhase("complete");
        sessionStorage.setItem("crane-unfolded", "true");

        // First scroll to top instantly (not smooth) to prevent jump
        window.scrollTo({ top: 0, behavior: "instant" });

        // Then hide crane after brief delay for exit animation
        setTimeout(() => {
          setShowCrane(false);
          onComplete?.();
        }, 100);
      }
    });

    return () => unsubscribe();
  }, [smoothProgress, phase, onComplete]);

  // Click to start scrolling
  const handleClick = () => {
    if (phase === "mystery") {
      window.scrollTo({ top: 100, behavior: "smooth" });
    }
  };

  // If animation is complete and crane is hidden, just show children
  if (phase === "complete" && !showCrane) {
    return <>{children}</>;
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Full-screen crane entry */}
      <AnimatePresence mode="wait">
        {showCrane && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-parchment"
            style={{ opacity: craneOpacity }}
            onClick={handleClick}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeOut" } }}
          >
            {/* Subtle paper texture */}
            <div className="paper-texture absolute inset-0" />

            {/* Ambient shadows */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-paperDark/30" />

            {/* The Paper Crane */}
            <motion.div
              className="relative cursor-pointer"
              style={{
                scale: craneScale,
                y: craneY
              }}
              whileHover={phase === "mystery" ? { scale: 1.02 } : {}}
            >
              {/* Crane container with perspective */}
              <div
                className="relative"
                style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
              >
                {/* Floating animation wrapper */}
                <motion.div
                  animate={phase === "mystery" ? {
                    y: [0, -15, 0],
                    rotateZ: [0, 1, 0, -1, 0],
                    rotateX: [0, 2, 0, -2, 0]
                  } : {}}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* SVG Paper Crane - Realistic Origami Style */}
                  <svg
                    viewBox="0 0 500 400"
                    className="h-[70vh] w-auto max-w-[95vw]"
                    style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.15))" }}
                  >
                    <defs>
                      {/* Subtle paper gradients for depth */}
                      <linearGradient id="paperLight" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFDF8" />
                        <stop offset="100%" stopColor="#F5F1E8" />
                      </linearGradient>
                      <linearGradient id="paperMid" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FAF8F3" />
                        <stop offset="100%" stopColor="#E8E4DB" />
                      </linearGradient>
                      <linearGradient id="paperDark" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#E8E4DB" />
                        <stop offset="100%" stopColor="#F0EBE0" />
                      </linearGradient>
                      <linearGradient id="wingLeftGrad" x1="100%" y1="50%" x2="0%" y2="50%">
                        <stop offset="0%" stopColor="#FAF8F3" />
                        <stop offset="60%" stopColor="#FFFDF8" />
                        <stop offset="100%" stopColor="#F5F1E8" />
                      </linearGradient>
                      <linearGradient id="wingRightGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                        <stop offset="0%" stopColor="#FAF8F3" />
                        <stop offset="60%" stopColor="#FFFDF8" />
                        <stop offset="100%" stopColor="#F5F1E8" />
                      </linearGradient>
                      {/* Paper texture filter */}
                      <filter id="paperTexture" x="0%" y="0%" width="100%" height="100%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
                        <feDiffuseLighting in="noise" lightingColor="#FFFDF8" surfaceScale="1.5" result="light">
                          <feDistantLight azimuth="45" elevation="60" />
                        </feDiffuseLighting>
                        <feComposite in="SourceGraphic" in2="light" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" />
                      </filter>
                    </defs>

                    {/* Left Wing - Main triangular wing with folds */}
                    <motion.g
                      style={{
                        originX: "250px",
                        originY: "180px",
                        rotateY: leftWingRotate
                      }}
                    >
                      {/* Wing outer shape */}
                      <path
                        d="M250 180 L40 100 L60 180 L40 260 Z"
                        fill="url(#wingLeftGrad)"
                        stroke="#D8D4CB"
                        strokeWidth="0.8"
                      />
                      {/* Wing inner fold - creates depth */}
                      <path
                        d="M250 180 L60 180 L40 100 Z"
                        fill="#FFFDF8"
                        stroke="#E0DCD3"
                        strokeWidth="0.5"
                        opacity="0.9"
                      />
                      {/* Secondary fold lines */}
                      <path d="M250 180 L50 140" stroke="#D0CCC3" strokeWidth="0.4" opacity="0.5" />
                      <path d="M250 180 L50 220" stroke="#D0CCC3" strokeWidth="0.4" opacity="0.5" />
                      <path d="M140 180 L80 130" stroke="#D8D4CB" strokeWidth="0.3" opacity="0.4" />
                      <path d="M140 180 L80 230" stroke="#D8D4CB" strokeWidth="0.3" opacity="0.4" />
                      {/* Wing tip highlight */}
                      <path
                        d="M40 100 L55 120 L40 140"
                        fill="none"
                        stroke="#FFFDF8"
                        strokeWidth="1"
                        opacity="0.6"
                      />
                    </motion.g>

                    {/* Right Wing - Mirror of left */}
                    <motion.g
                      style={{
                        originX: "250px",
                        originY: "180px",
                        rotateY: rightWingRotate
                      }}
                    >
                      {/* Wing outer shape */}
                      <path
                        d="M250 180 L460 100 L440 180 L460 260 Z"
                        fill="url(#wingRightGrad)"
                        stroke="#D8D4CB"
                        strokeWidth="0.8"
                      />
                      {/* Wing inner fold */}
                      <path
                        d="M250 180 L440 180 L460 100 Z"
                        fill="#FFFDF8"
                        stroke="#E0DCD3"
                        strokeWidth="0.5"
                        opacity="0.9"
                      />
                      {/* Secondary fold lines */}
                      <path d="M250 180 L450 140" stroke="#D0CCC3" strokeWidth="0.4" opacity="0.5" />
                      <path d="M250 180 L450 220" stroke="#D0CCC3" strokeWidth="0.4" opacity="0.5" />
                      <path d="M360 180 L420 130" stroke="#D8D4CB" strokeWidth="0.3" opacity="0.4" />
                      <path d="M360 180 L420 230" stroke="#D8D4CB" strokeWidth="0.3" opacity="0.4" />
                      {/* Wing tip highlight */}
                      <path
                        d="M460 100 L445 120 L460 140"
                        fill="none"
                        stroke="#FFFDF8"
                        strokeWidth="1"
                        opacity="0.6"
                      />
                    </motion.g>

                    {/* Body - Central diamond with layered folds */}
                    <motion.g style={{ scaleY: bodyFlatten, originY: "180px" }}>
                      {/* Body back layer */}
                      <path
                        d="M250 120 L285 180 L250 240 L215 180 Z"
                        fill="url(#paperMid)"
                        stroke="#D8D4CB"
                        strokeWidth="0.8"
                      />
                      {/* Body front fold */}
                      <path
                        d="M250 120 L250 240 L215 180 Z"
                        fill="url(#paperLight)"
                        stroke="#E0DCD3"
                        strokeWidth="0.4"
                        opacity="0.8"
                      />
                      {/* Central crease */}
                      <path d="M250 120 L250 240" stroke="#C8C4BB" strokeWidth="0.6" opacity="0.7" />
                    </motion.g>

                    {/* Head and Neck */}
                    <motion.g style={{ scaleY: bodyFlatten, originY: "180px" }}>
                      {/* Neck */}
                      <path
                        d="M250 120 L265 80 L250 95 L235 80 Z"
                        fill="url(#paperLight)"
                        stroke="#D8D4CB"
                        strokeWidth="0.6"
                      />
                      {/* Head - small diamond */}
                      <path
                        d="M250 80 L260 55 L250 65 L240 55 Z"
                        fill="#FFFDF8"
                        stroke="#E0DCD3"
                        strokeWidth="0.5"
                      />
                      {/* Beak - pointed */}
                      <path
                        d="M250 55 L250 35"
                        stroke="#B8B4AB"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      {/* Beak detail */}
                      <path
                        d="M250 35 L248 42 M250 35 L252 42"
                        stroke="#C8C4BB"
                        strokeWidth="0.5"
                      />
                      {/* Neck crease */}
                      <path d="M250 120 L250 65" stroke="#D0CCC3" strokeWidth="0.4" opacity="0.6" />
                    </motion.g>

                    {/* Tail */}
                    <motion.g style={{ scaleY: bodyFlatten, originY: "180px" }}>
                      {/* Main tail shape */}
                      <path
                        d="M250 240 L230 310 L250 285 L270 310 Z"
                        fill="url(#paperMid)"
                        stroke="#D8D4CB"
                        strokeWidth="0.6"
                      />
                      {/* Tail fold */}
                      <path
                        d="M250 240 L250 285 L230 310 Z"
                        fill="url(#paperLight)"
                        stroke="#E0DCD3"
                        strokeWidth="0.4"
                        opacity="0.8"
                      />
                      {/* Tail crease */}
                      <path d="M250 240 L250 310" stroke="#C8C4BB" strokeWidth="0.4" opacity="0.6" />
                      {/* Tail tip detail */}
                      <path d="M235 295 L250 285 L265 295" stroke="#D8D4CB" strokeWidth="0.3" opacity="0.5" fill="none" />
                    </motion.g>

                    {/* Subtle ambient shadow */}
                    <ellipse
                      cx="250"
                      cy="340"
                      rx="120"
                      ry="15"
                      fill="rgba(0,0,0,0.06)"
                      style={{ filter: "blur(8px)" }}
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Instruction text */}
              <motion.div
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <p className="font-hand text-2xl text-inkFaded tracking-wide">
                  scroll to unfold
                </p>
                <motion.div
                  className="mx-auto mt-4 h-10 w-px bg-gradient-to-b from-inkWash to-transparent"
                  animate={{ scaleY: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>

            {/* Corner accent */}
            <div className="absolute bottom-8 right-8">
              <p className="font-hand text-2xl text-inkWash/40">A.Y.</p>
            </div>

            {/* Decorative corner folds */}
            <div className="absolute top-0 left-0 w-16 h-16 opacity-20">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                <path d="M0 0 L64 0 L0 64 Z" fill="url(#paperDark)" />
              </svg>
            </div>
            <div className="absolute top-0 right-0 w-16 h-16 opacity-20">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                <path d="M64 0 L64 64 L0 0 Z" fill="url(#paperDark)" />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for scroll - only show during animation */}
      <AnimatePresence>
        {showCrane && (
          <motion.div
            className="h-[200vh]"
            exit={{ height: 0, transition: { duration: 0 } }}
          />
        )}
      </AnimatePresence>

      {/* Revealed content */}
      <motion.div
        className="relative z-10"
        style={showCrane ? {
          opacity: contentOpacity,
          y: contentY
        } : {}}
        initial={!showCrane ? { opacity: 1, y: 0 } : { opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
