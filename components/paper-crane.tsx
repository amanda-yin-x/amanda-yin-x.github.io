"use client";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform
} from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const INTRO_KEY = "paper-crane-intro-seen-v5";
const CONTENT_REVEAL_AT = 0.2;
const INTRO_RELEASE_AT = 0.2;
const INTRO_FINISH_AT = 0.22;

type IntroState = "checking" | "intro" | "revealed";

export function PaperCrane({
  children
}: {
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion() ?? false;
  const [state, setState] = useState<IntroState>("checking");
  const [isFinishing, setIsFinishing] = useState(false);
  const [interactionReleased, setInteractionReleased] = useState(false);
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001
  });
  const touchStartY = useRef<number | null>(null);
  const finishStarted = useRef(false);

  const finishIntro = useCallback(() => {
    if (finishStarted.current) return;
    finishStarted.current = true;
    setIsFinishing(true);

    animate(progress, 1, {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1],
      onComplete: () => {
        window.sessionStorage.setItem(INTRO_KEY, "true");
        setState("revealed");
      }
    });
  }, [progress]);

  useLayoutEffect(() => {
    if (reduceMotion) {
      setState("revealed");
      return;
    }

    finishStarted.current = false;
    setIsFinishing(false);
    setInteractionReleased(false);
    progress.set(0);

    const seen = window.sessionStorage.getItem(INTRO_KEY);
    setState(seen ? "revealed" : "intro");
  }, [progress, reduceMotion]);

  useEffect(() => {
    if (state !== "intro" || interactionReleased) return;

    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [interactionReleased, state]);

  useEffect(() => {
    if (state !== "intro") return;

    const nudgeProgress = (delta: number) => {
      if (finishStarted.current) return;
      const next = Math.max(0, Math.min(progress.get() + delta, 1));
      progress.set(next);

      if (next >= INTRO_FINISH_AT) {
        finishIntro();
      }
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      nudgeProgress(Math.abs(event.deltaY) * 0.0018);
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (touchStartY.current == null) return;
      const currentY = event.touches[0]?.clientY ?? touchStartY.current;
      const delta = touchStartY.current - currentY;
      touchStartY.current = currentY;
      if (delta > 0) {
        nudgeProgress(delta * 0.004);
      }
    };

    const onTouchEnd = () => {
      touchStartY.current = null;
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === " " || event.key === "Enter" || event.key === "ArrowDown") {
        event.preventDefault();
        nudgeProgress(0.16);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [finishIntro, progress, state]);

  useEffect(() => {
    if (state !== "intro") return;

    const unsubscribe = smoothProgress.on("change", (value) => {
      if (value >= INTRO_RELEASE_AT) {
        setInteractionReleased(true);
      }
      if (value >= INTRO_FINISH_AT) {
        finishIntro();
      }
    });

    return () => unsubscribe();
  }, [finishIntro, smoothProgress, state]);

  const craneScale = useTransform(smoothProgress, [0, 0.22, 0.56], [1, 0.94, 0.48]);
  const craneY = useTransform(smoothProgress, [0, 0.56], [0, -110]);
  const craneOpacity = useTransform(smoothProgress, [0.42, 0.72], [1, 0]);
  const leftWingRotate = useTransform(smoothProgress, [0.08, 0.46], [0, -74]);
  const rightWingRotate = useTransform(smoothProgress, [0.08, 0.46], [0, 74]);
  const bodyFlatten = useTransform(smoothProgress, [0.16, 0.46], [1, 0.12]);

  const sheetOpacity = useTransform(smoothProgress, [0.26, 0.5, 0.8], [0, 0.96, 0]);
  const sheetScale = useTransform(smoothProgress, [0.26, 0.72], [0.55, 4.4]);
  const sheetY = useTransform(smoothProgress, [0.26, 0.72], [16, 0]);
  const leftSheetRotate = useTransform(smoothProgress, [0.24, 0.52], [78, 0]);
  const rightSheetRotate = useTransform(smoothProgress, [0.24, 0.52], [-78, 0]);
  const sheetCenterScaleY = useTransform(smoothProgress, [0.24, 0.52], [0.2, 1]);

  const overlayOpacity = useTransform(smoothProgress, [0.76, 1], [1, 0]);
  const promptOpacity = useTransform(smoothProgress, [0, 0.22, 0.32], [0.92, 0.92, 0]);

  const contentOpacity = useTransform(smoothProgress, [CONTENT_REVEAL_AT, 0.42], [0, 1]);
  const contentY = useTransform(smoothProgress, [CONTENT_REVEAL_AT, 0.42], [54, 0]);
  const contentBlur = useTransform(smoothProgress, [CONTENT_REVEAL_AT, 0.42], [10, 0]);
  const contentFilter = useMotionTemplate`blur(${contentBlur}px)`;

  if (state === "checking") {
    return <div className="min-h-screen bg-parchment" />;
  }

  if (state === "revealed") {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      <motion.div
        className="relative z-10"
        style={{
          opacity: contentOpacity,
          y: contentY,
          filter: contentFilter
        }}
      >
        {children}
      </motion.div>

      <motion.div
        className={`fixed inset-0 z-[60] overflow-hidden bg-parchment ${
          isFinishing || interactionReleased ? "pointer-events-none" : ""
        }`}
        style={{ opacity: overlayOpacity }}
      >
        <div className="paper-texture absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.92),transparent_26%),radial-gradient(circle_at_18%_20%,rgba(221,245,238,0.7),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(236,231,255,0.58),transparent_22%),linear-gradient(180deg,rgba(255,253,248,0.98),rgba(245,241,232,0.98))]" />

        <motion.div
          className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dff7f4]/75 blur-[110px]"
          animate={{
            scale: isFinishing ? 1.18 : [1, 1.08, 1],
            opacity: isFinishing ? 0.52 : [0.42, 0.6, 0.42]
          }}
          transition={
            isFinishing
              ? { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
              : { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }
        />

        <div className="absolute left-5 top-5 h-24 w-24 opacity-30 md:left-10 md:top-10">
          <CornerFold side="left" />
        </div>
        <div className="absolute right-5 top-5 h-24 w-24 rotate-90 opacity-30 md:right-10 md:top-10">
          <CornerFold side="right" />
        </div>
        <div className="absolute bottom-5 left-5 h-24 w-24 -rotate-90 opacity-20 md:bottom-10 md:left-10">
          <CornerFold side="left" />
        </div>
        <div className="absolute bottom-5 right-5 h-24 w-24 rotate-180 opacity-20 md:bottom-10 md:right-10">
          <CornerFold side="right" />
        </div>

        <div className="absolute inset-0">
          <motion.div
            className="absolute left-1/2 top-1/2 z-10 h-[12rem] w-[18rem] md:h-[14rem] md:w-[22rem]"
            style={{
              x: "-50%",
              y: "-50%",
              opacity: sheetOpacity,
              scale: sheetScale
            }}
          >
            <motion.div
              className="absolute left-1/2 top-1/2 h-full w-1/2 origin-right rounded-l-[1.4rem] border border-borderDark/10 bg-[linear-gradient(180deg,rgba(255,253,248,0.98),rgba(240,235,224,0.96))] shadow-paper"
              style={{
                y: sheetY,
                rotateY: leftSheetRotate,
                transformPerspective: 1400
              }}
            >
              <div className="paper-texture absolute inset-0 rounded-l-[1.4rem]" />
              <div className="absolute inset-0 rounded-l-[1.4rem] bg-[repeating-linear-gradient(180deg,transparent,transparent_28px,rgba(0,0,0,0.03)_28px,rgba(0,0,0,0.03)_29px)]" />
            </motion.div>
            <motion.div
              className="absolute right-1/2 top-1/2 h-full w-1/2 origin-left rounded-r-[1.4rem] border border-borderDark/10 bg-[linear-gradient(180deg,rgba(255,253,248,0.98),rgba(240,235,224,0.96))] shadow-paper"
              style={{
                y: sheetY,
                rotateY: rightSheetRotate,
                transformPerspective: 1400
              }}
            >
              <div className="paper-texture absolute inset-0 rounded-r-[1.4rem]" />
              <div className="absolute inset-0 rounded-r-[1.4rem] bg-[repeating-linear-gradient(180deg,transparent,transparent_28px,rgba(0,0,0,0.03)_28px,rgba(0,0,0,0.03)_29px)]" />
            </motion.div>
            <motion.div
              className="absolute left-1/2 top-1/2 h-full w-[2px] -translate-x-1/2 border-x border-borderDark/10 bg-gradient-to-b from-transparent via-inkWash/25 to-transparent"
              style={{
                y: sheetY,
                scaleY: sheetCenterScaleY
              }}
            />
          </motion.div>

          <motion.div
            className="absolute left-1/2 top-1/2 z-20"
            style={{
              x: "-50%",
              y: "-50%",
              scale: craneScale,
              opacity: craneOpacity
            }}
          >
            <motion.div
              animate={{
                y: [0, -18, -8, 0],
                rotateZ: [0, 0.8, -0.6, 0],
                x: [0, 2, -2, 0]
              }}
              transition={{ duration: 7.6, repeat: Infinity, ease: "easeInOut" }}
              style={{ y: craneY }}
            >
              <OrigamiCrane
                leftWingRotate={leftWingRotate}
                rightWingRotate={rightWingRotate}
                bodyFlatten={bodyFlatten}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-16 left-1/2 z-20 -translate-x-1/2 text-center"
            style={{ opacity: promptOpacity }}
          >
            <p className="font-hand text-3xl text-ink">scroll to unfold</p>
            <div className="mx-auto mt-4 h-10 w-px bg-gradient-to-b from-inkWash to-transparent" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function OrigamiCrane({
  leftWingRotate,
  rightWingRotate,
  bodyFlatten
}: {
  leftWingRotate: any;
  rightWingRotate: any;
  bodyFlatten: any;
}) {
  return (
    <svg
      viewBox="0 0 500 400"
      className="h-[62vh] w-auto max-w-[92vw] md:h-[74vh]"
      style={{ filter: "drop-shadow(0 26px 56px rgba(0,0,0,0.14))" }}
    >
      <defs>
        <linearGradient id="paperLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF8" />
          <stop offset="100%" stopColor="#F5F1E8" />
        </linearGradient>
        <linearGradient id="paperMid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAF8F3" />
          <stop offset="100%" stopColor="#E8E4DB" />
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
      </defs>

      <motion.g style={{ rotate: leftWingRotate, transformOrigin: "250px 180px" }}>
        <path
          d="M250 180 L40 100 L60 180 L40 260 Z"
          fill="url(#wingLeftGrad)"
          stroke="#D8D4CB"
          strokeWidth="0.8"
        />
        <path
          d="M250 180 L60 180 L40 100 Z"
          fill="#FFFDF8"
          stroke="#E0DCD3"
          strokeWidth="0.5"
          opacity="0.9"
        />
        <path d="M250 180 L50 140" stroke="#D0CCC3" strokeWidth="0.4" opacity="0.5" />
        <path d="M250 180 L50 220" stroke="#D0CCC3" strokeWidth="0.4" opacity="0.5" />
        <path d="M140 180 L80 130" stroke="#D8D4CB" strokeWidth="0.3" opacity="0.4" />
        <path d="M140 180 L80 230" stroke="#D8D4CB" strokeWidth="0.3" opacity="0.4" />
      </motion.g>

      <motion.g style={{ rotate: rightWingRotate, transformOrigin: "250px 180px" }}>
        <path
          d="M250 180 L460 100 L440 180 L460 260 Z"
          fill="url(#wingRightGrad)"
          stroke="#D8D4CB"
          strokeWidth="0.8"
        />
        <path
          d="M250 180 L440 180 L460 100 Z"
          fill="#FFFDF8"
          stroke="#E0DCD3"
          strokeWidth="0.5"
          opacity="0.9"
        />
        <path d="M250 180 L450 140" stroke="#D0CCC3" strokeWidth="0.4" opacity="0.5" />
        <path d="M250 180 L450 220" stroke="#D0CCC3" strokeWidth="0.4" opacity="0.5" />
        <path d="M360 180 L420 130" stroke="#D8D4CB" strokeWidth="0.3" opacity="0.4" />
        <path d="M360 180 L420 230" stroke="#D8D4CB" strokeWidth="0.3" opacity="0.4" />
      </motion.g>

      <motion.g style={{ scaleY: bodyFlatten, transformOrigin: "250px 180px" }}>
        <path
          d="M250 120 L285 180 L250 240 L215 180 Z"
          fill="url(#paperMid)"
          stroke="#D8D4CB"
          strokeWidth="0.8"
        />
        <path
          d="M250 120 L250 240 L215 180 Z"
          fill="url(#paperLight)"
          stroke="#E0DCD3"
          strokeWidth="0.4"
          opacity="0.8"
        />
        <path d="M250 120 L250 240" stroke="#C8C4BB" strokeWidth="0.6" opacity="0.7" />
      </motion.g>

      <motion.g style={{ scaleY: bodyFlatten, transformOrigin: "250px 180px" }}>
        <path
          d="M250 120 L265 80 L250 95 L235 80 Z"
          fill="url(#paperLight)"
          stroke="#D8D4CB"
          strokeWidth="0.6"
        />
        <path
          d="M250 80 L260 55 L250 65 L240 55 Z"
          fill="#FFFDF8"
          stroke="#E0DCD3"
          strokeWidth="0.5"
        />
        <path d="M250 55 L250 35" stroke="#B8B4AB" strokeWidth="2.5" strokeLinecap="round" />
      </motion.g>

      <motion.g style={{ scaleY: bodyFlatten, transformOrigin: "250px 180px" }}>
        <path
          d="M250 240 L230 310 L250 285 L270 310 Z"
          fill="url(#paperMid)"
          stroke="#D8D4CB"
          strokeWidth="0.6"
        />
        <path
          d="M250 240 L250 285 L230 310 Z"
          fill="url(#paperLight)"
          stroke="#E0DCD3"
          strokeWidth="0.4"
          opacity="0.8"
        />
      </motion.g>

      <ellipse
        cx="250"
        cy="338"
        rx="120"
        ry="14"
        fill="rgba(0,0,0,0.06)"
        style={{ filter: "blur(8px)" }}
      />
    </svg>
  );
}

function CornerFold({ side }: { side: "left" | "right" }) {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <defs>
        <linearGradient id={`cornerFoldGradient-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF8" />
          <stop offset="100%" stopColor="#E8E4DB" />
        </linearGradient>
      </defs>
      {side === "left" ? (
        <path d="M0 0 H100 L0 100 Z" fill={`url(#cornerFoldGradient-${side})`} />
      ) : (
        <path d="M100 0 V100 L0 0 Z" fill={`url(#cornerFoldGradient-${side})`} />
      )}
    </svg>
  );
}
