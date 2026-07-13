"use client";

import { motion } from "motion/react";
import { 
  Compass, 
  Users, 
  Layers, 
  Brain, 
  ShieldCheck 
} from "lucide-react";

const stats = [
  {
    icon: Compass,
    label: "Strategy-Led Engineering",
  },
  {
    icon: Users,
    label: "Senior Technical Leadership",
  },
  {
    icon: Layers,
    label: "Flexible Delivery Teams",
  },
  {
    icon: Brain,
    label: "AI-Native Architecture",
  },
  {
    icon: ShieldCheck,
    label: "Enterprise Delivery Governance",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-t border-border-subtle bg-surface-dim relative z-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-5"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="flex items-center gap-6">
              <div className="flex items-center gap-2.5 group cursor-default">
                <Icon
                  size={18}
                  className="text-on-surface-variant group-hover:text-electric-cyan transition-colors"
                  strokeWidth={1.5}
                />
                <span className="text-[11px] tracking-widest uppercase text-on-surface-variant group-hover:text-foreground transition-colors font-medium">
                  {stat.label}
                </span>
              </div>
              
              {/* Separator Dot */}
              {index !== stats.length - 1 && (
                <div className="hidden lg:block w-1.5 h-1.5 rounded-full bg-border-strong/50" />
              )}
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}