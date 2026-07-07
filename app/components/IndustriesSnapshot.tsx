"use client";

import { motion } from "motion/react";
import {
  Landmark,
  HeartPulse,
  Truck,
  ShoppingBag,
  Factory,
  Scale,
  GraduationCap,
  Rocket,
  Building,
  ArrowRight,
} from "lucide-react";

const industries = [
  { icon: Landmark, name: "Government" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Scale, name: "Financial Services" },
  { icon: Landmark, name: "Legal" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Truck, name: "Logistics" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: GraduationCap, name: "Education" },
  { icon: Rocket, name: "Startups & SMEs" },
  { icon: Building, name: "Enterprise" },
];

export default function IndustriesSnapshot() {
  return (
    <section className="py-24 md:py-32 border-t border-border-subtle bg-surface-dim relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-number mx-auto mb-10">04 / Sectors</div>
          <h2 className="text-3xl md:text-5xl text-foreground mb-16 font-semibold tracking-tight">
            Industries We Serve
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className="px-6 py-3.5 border border-border-subtle rounded-full text-on-surface-variant text-[12px] hover:border-border-strong hover:text-foreground transition-all duration-300 cursor-pointer bg-card flex items-center gap-3 group font-medium tracking-wide"
              >
                <Icon
                  size={16}
                  strokeWidth={1.5}
                  className="group-hover:text-electric-cyan transition-colors"
                />
                {industry.name}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          href="#"
          className="inline-flex items-center text-[11px] uppercase tracking-widest text-foreground/70 hover:text-foreground transition-all gap-2 group font-medium"
        >
          View All Industries
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </motion.a>
      </div>
    </section>
  );
}
