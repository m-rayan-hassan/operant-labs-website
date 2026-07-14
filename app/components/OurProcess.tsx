"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "AI Baseline & Readiness",
    description:
      "Assess your organization's current AI maturity, data infrastructure, governance posture, and readiness to support production AI systems.",
  },
  {
    number: "02",
    title: "Value-Creation Opportunity Mapping",
    description:
      "Identify and prioritize the highest-ROI AI opportunities across your operations, aligned to strategic objectives and measurable business outcomes.",
  },
  {
    number: "03",
    title: "Technical Validation & Architecture",
    description:
      "Design secure, scalable AI architectures and validate technical feasibility through structured proof-of-concept work before full investment.",
  },
  {
    number: "04",
    title: "Pilot / Proof of Value",
    description:
      "Deliver a focused, time-boxed pilot to validate the solution in a real operational context and establish the baseline for enterprise rollout.",
  },
  {
    number: "05",
    title: "Forward-Deployed Execution",
    description:
      "Embed multidisciplinary engineering teams directly into your organization to build, integrate, and deploy production AI systems at pace.",
  },
  {
    number: "06",
    title: "Scale, Governance & Optimization",
    description:
      "Expand proven systems across the enterprise, establish AI governance frameworks, monitor performance, and continuously optimize for sustained value.",
  },
];

export default function OurProcess() {
  return (
    <section
      className="py-16 md:py-24 border-t border-border-subtle relative z-10 bg-background"
      id="process"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="section-number mx-auto">How We Deliver</div>
          <h2 className="text-3xl md:text-5xl text-foreground font-semibold tracking-tight">
            Six Stages of{" "}
            <span className="text-electric-cyan font-normal italic">
              AI Transformation
            </span>
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mt-6 font-light text-base leading-relaxed">
            A structured, repeatable methodology — from initial assessment to
            scalable, governed AI operations.
          </p>
        </motion.div>

        {/* Process Steps — 3+3 grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 * i }}
              className="relative flex flex-col group glass-card p-8 hover:border-electric-cyan/40 transition-colors duration-500"
            >
              {/* Step Number */}
              <div className="w-14 h-14 rounded-full bg-card border border-border-strong flex items-center justify-center mb-6 relative z-10 group-hover:border-electric-cyan/50 transition-colors duration-500 shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <span className="font-technical-data text-xl text-foreground/80 group-hover:text-electric-cyan transition-colors font-light">
                  {step.number}
                </span>
              </div>

              {/* Accent line */}
              <span
                className="absolute left-0 top-0 h-full w-[2px] bg-electric-cyan scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 rounded-l-sm"
                aria-hidden
              />

              <h3 className="text-base font-medium text-foreground mb-3 group-hover:text-electric-cyan transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-on-surface-variant text-[13px] font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
