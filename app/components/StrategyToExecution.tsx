"use client";

import React from "react";
import { motion } from "motion/react";
import { Lightbulb, PenTool, Code2, TrendingUp } from "lucide-react";

const stages = [
  {
    icon: Lightbulb,
    label: "Strategic Opportunity",
    description:
      "Identify where AI creates measurable value aligned to business objectives.",
  },
  {
    icon: PenTool,
    label: "Technical Architecture",
    description:
      "Design secure, scalable systems that integrate with your existing infrastructure.",
  },
  {
    icon: Code2,
    label: "Engineering Execution",
    description:
      "Embed specialist teams to build and deploy production AI systems at pace.",
  },
  {
    icon: TrendingUp,
    label: "Scalable Operations",
    description:
      "Govern, monitor, and continuously optimize AI systems across the enterprise.",
  },
];

const pipelineSteps = [
  "AI Assessment",
  "Value-Creation Strategy",
  "Technical Validation",
  "Architecture",
  "Pilot",
  "Forward-Deployed Engineering",
  "Deployment",
  "Managed AI Operations",
];

export default function StrategyToExecution() {
  return (
    <section className="py-16 md:py-24 border-t border-border-subtle bg-surface-dim relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="section-number mx-auto mb-6">Differentiator</div>
          <h2 className="text-3xl md:text-5xl text-foreground font-semibold tracking-tight mb-6">
            Where Strategy Becomes an{" "}
            <span className="text-electric-cyan font-normal italic">
              Operating Capability
            </span>
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto font-light text-base md:text-lg leading-relaxed">
            Operant Labs connects strategic opportunity to scalable AI operations
            through a single, continuous engagement — no handoff risk, no
            translation loss.
          </p>
        </motion.div>

        {/* Flow: 4 stages connected by arrows */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Connector line (desktop) */}
          {/* top-7 is exactly 28px, which is the center of the 56px (h-14) icon circles */}
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-electric-cyan/40 to-transparent z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4 relative z-10">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.12 * i }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon circle */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-surface-dim border border-border-strong flex items-center justify-center mb-6 group-hover:border-electric-cyan/60 group-hover:bg-electric-cyan/5 group-hover:shadow-[0_0_24px_rgba(0,240,255,0.2)] transition-all duration-500">
                    <Icon
                      size={22}
                      className="text-foreground/70 group-hover:text-electric-cyan transition-colors duration-500"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Stage number badge */}
                  <div className="text-[9px] font-mono text-electric-cyan/60 uppercase tracking-[0.2em] mb-3">
                    0{i + 1}
                  </div>

                  <h3 className="text-base font-medium text-foreground mb-3 tracking-wide group-hover:text-electric-cyan transition-colors duration-300">
                    {stage.label}
                  </h3>
                  <p className="text-on-surface-variant text-[13px] font-light leading-relaxed max-w-[240px]">
                    {stage.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom emphasis formatted beautifully */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 pt-10 border-t border-border-subtle max-w-4xl mx-auto"
        >
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-4">
            {pipelineSteps.map((step, idx) => (
              <React.Fragment key={step}>
                <span className="text-on-surface-variant/80 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] font-medium whitespace-nowrap">
                  {step}
                </span>
                {idx < pipelineSteps.length - 1 && (
                  <span className="text-electric-cyan/50 text-[10px] hidden md:inline-block">
                    →
                  </span>
                )}
                {/* Mobile divider */}
                {idx < pipelineSteps.length - 1 && (
                  <span className="text-electric-cyan/30 text-[10px] md:hidden">
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}