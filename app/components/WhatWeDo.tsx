"use client";

import { motion } from "motion/react";
import { Lightbulb, LayoutGrid, ShieldCheck, Users } from "lucide-react";

const principles = [
  {
    icon: Lightbulb,
    title: "Strategic Alignment",
    description:
      "Connecting technical execution directly to measurable business outcomes and enterprise value creation.",
  },
  {
    icon: LayoutGrid,
    title: "Enterprise Architecture",
    description:
      "Designing secure, scalable AI topologies that respect data boundaries, privacy, and existing infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI",
    description:
      "Implementing guardrails, model explainability, and robust governance for autonomous systems.",
  },
  {
    icon: Users,
    title: "Forward-Deployed Delivery",
    description: "Embedding specialized engineering squads to eliminate friction and accelerate time-to-value.",
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
          <div className="section-number mx-auto">01 / Philosophy</div>
          <h2 className="text-3xl md:text-5xl text-foreground font-semibold tracking-tight mb-6">
            Engineering AI <span className="text-electric-cyan font-normal italic">Transformation</span>
          </h2>
          <p className="text-on-surface-variant max-w-3xl mx-auto text-base font-light leading-relaxed">
            True AI transformation requires more than off-the-shelf models. It demands deep technical integration, secure architecture, and strategic alignment. Operant Labs acts as the execution engine for enterprise AI, bridging the gap between high-level ambition and robust, scalable production systems.
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
                className="glass-card p-8 flex flex-col h-full group hover:border-electric-cyan/50 hover:bg-electric-cyan/5 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-full bg-border-subtle flex items-center justify-center mb-6 border border-border-subtle group-hover:border-electric-cyan/50 group-hover:bg-electric-cyan/10 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-500">
                  <Icon
                    size={20}
                    className="text-foreground/70 group-hover:text-electric-cyan group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all duration-500"
                    strokeWidth={1.5}
                  />
                </div>
                
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