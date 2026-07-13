"use client";

import { motion } from "motion/react";
import { Users, Workflow, Activity } from "lucide-react";
import Link from "next/link";

const models = [
  {
    icon: Workflow,
    title: "Strategic Advisory",
    description: "Executive-level consulting, technical due diligence, and AI readiness assessments.",
  },
  {
    icon: Users,
    title: "Dedicated Engineering Pods",
    description: "Cross-functional, forward-deployed engineering teams embedded in your organization.",
  },
  {
    icon: Activity,
    title: "Managed AI Operations",
    description: "Continuous monitoring, MLOps, and model optimization for production systems.",
  }
];

export default function EngagementModels() {
  return (
    <section className="py-24 md:py-32 border-t border-border-subtle relative z-10 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="section-number mx-auto mb-6">04 / Partnership</div>
          <h2 className="text-3xl md:text-5xl text-foreground font-semibold tracking-tight mb-6">
            Engagement Models
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-base font-light leading-relaxed">
            We adapt to your enterprise needs, offering flexible partnership structures that range from high-level advisory to fully managed engineering execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, i) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass-card p-10 text-center flex flex-col items-center h-full group hover:border-electric-cyan/40 transition-colors duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-border-subtle flex items-center justify-center mb-6 border border-border-strong group-hover:border-electric-cyan/40 group-hover:bg-electric-cyan/5 transition-all duration-300">
                  <Icon size={24} className="text-foreground group-hover:text-electric-cyan transition-colors" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-4">
                  {model.title}
                </h3>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                  {model.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
