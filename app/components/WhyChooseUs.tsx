"use client";

import { motion } from "motion/react";
import { Check, Activity, ShieldCheck } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    title: "Senior Technical Capability, Not Commodity Staffing",
    description:
      "We provide senior architects, AI engineers, and MLOps specialists who bring a Structured Delivery Methodology to complex enterprise challenges — not generalist resources filling headcount.",
  },
  {
    title: "Forward-Deployed Execution Model",
    description:
      "Multidisciplinary teams embed directly alongside your leadership, operating teams, and domain experts to translate strategic AI priorities into production systems — without the friction of traditional outsourcing.",
  },
  {
    title: "Investor & Enterprise Aligned",
    description:
      "Every technical decision is anchored to measurable value creation. We help PE/VC firms and enterprises identify, validate, and realize AI-driven margin expansion and revenue growth.",
  },
  {
    title: "Secure & Governed by Design",
    description:
      "Security, responsible AI, and governance are foundational — not afterthoughts. Every system we build incorporates enterprise-grade controls, compliance considerations, and human-oversight mechanisms.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-24 md:py-32 border-t border-border-subtle bg-surface-dim relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-number-left">06 / Advantage</div>
            <h2 className="text-3xl md:text-5xl text-foreground font-semibold tracking-tight mb-8">
              Where Strategy Becomes an{" "}
              <span className="text-electric-cyan font-normal italic">Operating Capability</span>
            </h2>
            <div className="space-y-6">
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex gap-4"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-electric-cyan/10 flex items-center justify-center shrink-0 border border-electric-cyan/20">
                    <Check
                      size={12}
                      className="text-electric-cyan"
                      strokeWidth={3}
                    />
                  </div>
                  <div>
                    <h4 className="text-foreground text-base font-medium mb-1 tracking-wide">
                      {reason.title}
                    </h4>
                    <p className="text-on-surface-variant text-[13px] font-light leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Graphic: Hybrid Dashboard UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-125 w-full rounded-2xl border border-border-subtle overflow-hidden group shadow-2xl"
          >
            {/* Base Image: Abstract Digital Network / Software Architecture */}
            <Image
              src="/team-industrial-scientists-engineers-developers-innovating-new-vaccine-doctor-pointing-tablet-explaining-virus-evolution-coworker.jpg"
              alt="Operant Labs Engineering Team"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 dark:opacity-70"
            />

            {/* Gradient Overlay for blending and text readability */}
            <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent mix-blend-normal"></div>

            {/* Grid Overlay for the "Blueprint / Architecture" feel */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(var(--color-border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-subtle) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>

            {/* Noise Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>

            {/* Floating Glassmorphic UI Card 1 (Top Left) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-6 sm:left-10 glass-panel rounded-xl p-4 flex items-center gap-4 shadow-xl border border-border-strong bg-background/40 backdrop-blur-md w-64"
            >
              <div className="w-10 h-10 rounded-full bg-electric-cyan/10 flex items-center justify-center border border-electric-cyan/20 shrink-0">
                <Activity size={18} className="text-electric-cyan" />
              </div>
              <div>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-semibold mb-0.5">
                  System Architecture
                </p>
                <p className="text-sm text-foreground font-medium">
                  Optimal Performance
                </p>
              </div>
            </motion.div>

            {/* Floating Glassmorphic UI Card 2 (Bottom Right) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-10 right-6 sm:right-10 glass-panel rounded-xl p-5 shadow-xl border border-border-strong bg-background/40 backdrop-blur-md w-56"
            >
              <div className="flex justify-between items-center mb-4">
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-semibold">
                  Security Protocol
                </p>
                <ShieldCheck size={14} className="text-electric-cyan" />
              </div>

              {/* Progress Bar Animation */}
              <div className="w-full h-1.5 bg-border-strong rounded-full overflow-hidden mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  className="h-full bg-electric-cyan"
                ></motion.div>
              </div>
              <p className="text-xs text-foreground font-medium text-right mt-2">
                Enterprise Grade Active
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
