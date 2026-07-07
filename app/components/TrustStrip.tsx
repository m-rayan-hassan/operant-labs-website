"use client";

import { motion } from "motion/react";
import { Award, CheckCircle, Building2 } from "lucide-react";

const stats = [
  {
    icon: Award,
    label: "10+ Years Experience",
  },
  {
    icon: CheckCircle,
    label: "200+ Projects Delivered",
  },
  {
    icon: Building2,
    label: "Fortune 500 Trusted",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-t border-border-subtle bg-surface-dim relative z-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap justify-center md:justify-between items-center gap-8"
      >
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="flex items-center gap-2 group cursor-default"
            >
              <Icon
                size={18}
                className="text-on-surface-variant group-hover:text-foreground transition-colors"
                strokeWidth={1.5}
              />
              <span className="text-[11px] tracking-wider uppercase text-on-surface-variant group-hover:text-foreground transition-colors font-medium">
                {stat.label}
              </span>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
