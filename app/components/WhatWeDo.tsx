"use client";

import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, ShieldCheck, Target } from "lucide-react";

const principles = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Applying emerging technology to solve real business problems.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description:
      "Building flexible systems that grow alongside your organisation.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Protecting your business through reliable, resilient technology.",
  },
  {
    icon: Target,
    title: "Business Impact",
    description: "Delivering measurable improvements in efficiency and growth.",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 border-t border-border-subtle relative z-10 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <div className="section-number mx-auto">01 / Principles</div>
          <h2 className="text-3xl md:text-5xl text-foreground font-semibold tracking-tight mb-6">
            Technology built around your business
          </h2>
          <p className="text-on-surface-variant max-w-3xl mx-auto text-base font-light leading-relaxed">
            Many organisations are held back by legacy systems, manual
            processes, and tools that don&apos;t talk to each other. Operant
            Labs builds technology around your business instead of the other way
            round, covering the full lifecycle: strategy, software engineering,
            automation, AI, cloud, and ongoing optimisation.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {principles.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                // Added hover:shadow for the border outline glow
                className="glass-card p-8 flex flex-col h-full group hover:border-electric-cyan/50 hover:bg-electric-cyan/5 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] transition-all duration-500"
              >
                {/* Added box-shadow glow and border transition to the icon container */}
                <div className="w-10 h-10 rounded-full bg-border-subtle flex items-center justify-center mb-6 border border-border-subtle group-hover:border-electric-cyan/50 group-hover:bg-electric-cyan/10 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-500">
                  <Icon
                    size={20}
                    // Added drop-shadow directly to the SVG for a true "lit up" glow effect
                    className="text-foreground/70 group-hover:text-electric-cyan group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all duration-500"
                    strokeWidth={1.5}
                  />
                </div>
                
                {/* Text transitions to electric cyan to tie the effect together */}
                <h3 className="text-sm text-foreground mb-3 tracking-wide font-medium group-hover:text-electric-cyan transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-on-surface-variant text-[13px] font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}