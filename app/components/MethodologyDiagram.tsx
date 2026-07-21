"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Brain,
  Compass,
  LayoutGrid,
  ShieldCheck,
  Map,
  Users,
  RefreshCw,
  ChevronDown,
} from "lucide-react";

const stages = [
  {
    icon: Search,
    label: "Business Discovery",
    description:
      "Deep-dive into your organisation's strategic objectives, competitive landscape, and operational reality to establish a clear baseline.",
  },
  {
    icon: Brain,
    label: "AI-Native Assessment",
    description:
      "Evaluate current AI maturity, data readiness, infrastructure capability, and organisational capacity for AI adoption.",
  },
  {
    icon: Compass,
    label: "Technical Discovery",
    description:
      "Map existing technical assets, identify integration points, and surface hidden risks before committing to an architecture.",
  },
  {
    icon: LayoutGrid,
    label: "Architecture Validation",
    description:
      "Design and stress-test secure, scalable AI architectures that integrate with enterprise systems and respect data boundaries.",
  },
  {
    icon: ShieldCheck,
    label: "Governance",
    description:
      "Establish responsible-AI frameworks, compliance controls, human-oversight mechanisms, and risk-management protocols.",
  },
  {
    icon: Map,
    label: "Transformation Roadmap",
    description:
      "Sequence high-impact initiatives, set KPIs, define resource requirements, and build a phased plan from pilot to enterprise scale.",
  },
  {
    icon: Users,
    label: "Implementation Oversight",
    description:
      "Embed forward-deployed engineering teams and programme leadership to execute at pace with full technical governance.",
  },
  {
    icon: RefreshCw,
    label: "Continuous Optimization",
    description:
      "Monitor model performance, optimise workflows, conduct governance reviews, and iterate for sustained enterprise value.",
  },
];

export default function MethodologyDiagram() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="pt-16 md:pt-24 pb-8 md:pb-12 border-t border-border-subtle bg-surface relative z-10 overflow-hidden">
      {/* Smooth gradient blends */}
      <div
        className="pointer-events-none absolute top-0 inset-x-0 h-16 md:h-24"
        style={{
          background:
            "linear-gradient(to bottom, var(--surface-dim), var(--surface))",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0 h-16 md:h-24"
        style={{
          background:
            "linear-gradient(to top, var(--surface-dim), var(--surface))",
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="section-number mx-auto mb-6">Our Methodology</div>
          <h2 className="text-3xl md:text-5xl text-foreground font-semibold tracking-tight mb-6">
            Eight Stages of{" "}
            <span className="text-electric-cyan font-normal italic">
              AI-Native Transformation
            </span>
          </h2>
          <p className="text-on-surface-variant max-w-3xl mx-auto text-base md:text-lg font-light leading-relaxed italic">
            &ldquo;We don&rsquo;t begin with AI tools. We begin with your
            business, then redesign it through an AI-Native operating
            model.&rdquo;
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════════════
            DESKTOP: Horizontal connected nodes (hidden on mobile)
            ═══════════════════════════════════════════════════ */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-[28px] left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-electric-cyan/40 to-transparent z-0" />

            <div className="grid grid-cols-8 gap-4 relative z-10">
              {stages.map((stage, i) => {
                const Icon = stage.icon;
                return (
                  <motion.div
                    key={stage.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.08 * i }}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* Node circle */}
                    <div className="relative z-10 w-14 h-14 rounded-full bg-surface border border-border-strong flex items-center justify-center mb-4 group-hover:border-electric-cyan/60 group-hover:bg-electric-cyan/5 group-hover:shadow-[0_0_24px_rgba(0,240,255,0.2)] transition-all duration-500">
                      <Icon
                        size={20}
                        className="text-foreground/70 group-hover:text-electric-cyan transition-colors duration-500"
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Stage number */}
                    <div className="text-sm md:text-base font-mono text-electric-cyan uppercase tracking-[0.2em] mb-2 font-semibold">
                      0{i + 1}
                    </div>

                    {/* Label - Increased font size and weight */}
                    <h3 className="text-sm xl:text-base font-normal text-foreground mb-3 leading-tight group-hover:text-electric-cyan transition-colors duration-300">
                      {stage.label}
                    </h3>

                    {/* Description (shown on hover) - Increased font size, removed strict max-width */}
                    <p className="text-on-surface-variant text-xs xl:text-sm font-normal leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full px-1">
                      {stage.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            MOBILE / TABLET: Vertical accordion (shown on < lg)
            ═══════════════════════════════════════════════════ */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical connector */}
            <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border-strong to-transparent z-0" />

            <div className="space-y-3 relative z-10">
              {stages.map((stage, i) => {
                const Icon = stage.icon;
                const isExpanded = expandedIndex === i;

                return (
                  <motion.div
                    key={stage.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.06 * i }}
                  >
                    <button
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : i)
                      }
                      className="w-full flex items-center gap-5 py-4 px-2 group cursor-pointer text-left"
                    >
                      {/* Node */}
                      <div
                        className={`relative z-10 w-14 h-14 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isExpanded
                            ? "bg-electric-cyan/10 border-electric-cyan/50 shadow-[0_0_20px_rgba(0,240,255,0.15)]"
                            : "bg-surface border-border-strong group-hover:border-electric-cyan/30"
                        }`}
                      >
                        <Icon
                          size={20}
                          className={`transition-colors duration-300 ${
                            isExpanded
                              ? "text-electric-cyan"
                              : "text-foreground/70 group-hover:text-electric-cyan"
                          }`}
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Label */}
                      <div className="flex-grow min-w-0">
                        <div className="text-sm md:text-base font-mono text-electric-cyan uppercase tracking-[0.2em] mb-1 font-semibold">
                          0{i + 1}
                        </div>
                        {/* Title - Increased to text-lg and semibold for mobile legibility */}
                        <h3 className={`text-lg font-normal transition-colors duration-300 ${
                            isExpanded
                              ? "text-electric-cyan"
                              : "text-foreground"
                          }`}
                        >
                          {stage.label}
                        </h3>
                      </div>

                      {/* Expand indicator */}
                      <ChevronDown
                        size={20}
                        className={`text-on-surface-variant shrink-0 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pl-[76px] pr-4 pb-5">
                            {/* Description - Increased to text-base and normal weight */}
                            <p className="text-on-surface-variant text-base font-normal leading-relaxed">
                              {stage.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}