"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import FloatingLines from "./FloatingLens";

const ACTION_WORDS = [
  "Strategy",
  "Architecture",
  "Engineering",
  "Deployment",
  "Scale",
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ACTION_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* FloatingLines background */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <div className="absolute -top-[35%] -left-[20%] w-[140%] h-[140%] opacity-[0.60] dark:opacity-[0.90] transition-opacity duration-700">
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={[4, 6, 3]}
            lineDistance={[6, 5, 8]}
            topWavePosition={{ x: 10, y: 0.5, rotate: -0.4 }}
            middleWavePosition={{ x: 5, y: 0.0, rotate: 0.15 }}
            bottomWavePosition={{ x: 2, y: -0.7, rotate: -0.6 }}
            bendRadius={6}
            bendStrength={-1.5}
            interactive
            parallax={true}
            parallaxStrength={0.15}
            animationSpeed={0.6}
            mouseDamping={0.03}
            linesGradient={["#004F54", "#006970", "#00dbe9", "#00F0FF"]}
            mixBlendMode="screen"
          />
        </div>

        {/* Top edge fade */}
        <div
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, transparent 100%)",
            zIndex: 1,
          }}
        />

        {/* Bottom edge fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, var(--background) 0%, transparent 100%)",
            zIndex: 1,
          }}
        />

        {/* Side vignettes */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, var(--background) 100%)",
            zIndex: 1,
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center pt-20 pb-32 px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-strong bg-border-subtle mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan animate-pulse" />
          <span className="text-[10px] text-foreground uppercase tracking-[0.15em] font-medium">
            AI Transformation &amp; Engineering
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center text-[clamp(1.45rem,6vw,4.4rem)] sm:text-4xl md:text-5xl lg:text-[70px] text-foreground w-full max-w-[1200px] mb-6 leading-[1.05] sm:leading-[1.15] tracking-tight text-center"
        >
          {/* Line 1 */}
          <span className="inline-flex items-center justify-center whitespace-nowrap text-center">
            From AI{" "}
            <span className="relative inline-flex justify-center text-center shrink-0 ml-[0.3em]">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="italic pr-[0.1em] text-electric-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.3)] leading-none"
                >
                  {ACTION_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>

          {/* Line 2 */}
          <span className="block mt-1 md:mt-2">to Enterprise Execution</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-on-surface-variant max-w-2xl mx-auto mb-4 text-base md:text-lg font-light leading-relaxed"
        >
          We help enterprises and investment-backed companies assess AI
          opportunities, design scalable architectures, deploy specialized
          engineering teams, and turn transformation strategies into production
          systems.
        </motion.p>

        {/* Supporting line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-on-surface-variant/70 max-w-xl mx-auto mb-10 text-sm italic font-light"
        >
          Strategy defines the opportunity. Engineering creates the value.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
        >
          <Link
            href="/contact-us"
            className="btn-solid text-[11px] px-8 py-3.5 rounded-full font-semibold tracking-[0.1em] uppercase w-full sm:w-auto text-center cursor-pointer"
          >
            Discuss an AI Transformation
          </Link>
          <Link
            href="/capabilities"
            className="btn-outline text-[11px] px-8 py-3.5 rounded-full font-semibold tracking-[0.1em] uppercase w-full sm:w-auto text-center flex items-center justify-center gap-2 cursor-pointer group"
          >
            Explore Our Capabilities
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
