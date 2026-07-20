"use client";

import { motion } from "motion/react";
import {
  ShieldCheck,
  AlertTriangle,
  FileCheck,
  Eye,
  BadgeCheck,
} from "lucide-react";

const pillars = [
  { icon: ShieldCheck, label: "AI Governance" },
  { icon: AlertTriangle, label: "Risk Management" },
  { icon: FileCheck, label: "Compliance" },
  { icon: Eye, label: "Human Oversight" },
  { icon: BadgeCheck, label: "Technical Assurance" },
];

export default function GovernanceStrip() {
  return (
    <section className="py-12 md:py-16 border-t border-border-subtle bg-surface-dim relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-on-surface-variant font-medium">
            Enterprise-Grade Safeguards
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-14"
        >
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="flex items-center gap-2.5 group cursor-default"
              >
                <div className="w-9 h-9 rounded-full bg-border-subtle flex items-center justify-center border border-border-strong group-hover:border-electric-cyan/40 group-hover:bg-electric-cyan/5 transition-all duration-300">
                  <Icon
                    size={16}
                    className="text-foreground/70 group-hover:text-electric-cyan transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="text-[11px] tracking-widest uppercase text-on-surface-variant group-hover:text-foreground transition-colors font-medium whitespace-nowrap">
                  {pillar.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
