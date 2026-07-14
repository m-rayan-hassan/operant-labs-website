"use client";

import { motion } from "motion/react";
import {
  ShieldCheck,
  Brain,
  Plug,
  Users,
  Cloud,
  Cpu,
} from "lucide-react";

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Secure Architecture",
    description:
      "Zero-trust design, RBAC, encryption at rest and in transit, and hardened infrastructure by default.",
  },
  {
    icon: Brain,
    title: "Responsible AI",
    description:
      "Model explainability, bias auditing, ethical guardrails, and governance frameworks embedded at every layer.",
  },
  {
    icon: Plug,
    title: "Enterprise Integration",
    description:
      "Seamless connectivity with legacy systems, ERPs, data warehouses, and third-party platforms.",
  },
  {
    icon: Users,
    title: "Human-in-the-Loop Governance",
    description:
      "Structured review points, approval workflows, and human oversight designed into every autonomous system.",
  },
  {
    icon: Cloud,
    title: "Scalable Cloud Infrastructure",
    description:
      "Cloud-native architectures on AWS, Azure, and GCP built for elastic scale and enterprise reliability.",
  },
  {
    icon: Cpu,
    title: "Production-Grade Engineering",
    description:
      "Rigorous testing, CI/CD pipelines, observability, and MLOps ensuring systems perform in production.",
  },
];

export default function Partners() {
  return (
    <section className="py-16 md:py-24 border-t border-border-subtle bg-surface-dim relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="section-number mx-auto mb-6">Environment</div>
          <h2 className="text-3xl md:text-5xl text-foreground font-semibold tracking-tight mb-4">
            Built for Complex{" "}
            <span className="text-electric-cyan font-normal italic">
              Enterprise Environments
            </span>
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto font-light text-base leading-relaxed">
            Every engagement is designed to meet enterprise requirements for
            security, governance, scalability, and integration.
          </p>
        </motion.div>

        {/* Capability Indicator Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * i }}
                className="glass-card p-7 flex flex-col group hover:border-electric-cyan/40 hover:bg-electric-cyan/[0.03] transition-all duration-500"
              >
                <div className="w-11 h-11 rounded-xl bg-border-subtle border border-border-strong flex items-center justify-center mb-5 group-hover:border-electric-cyan/50 group-hover:bg-electric-cyan/10 transition-all duration-300">
                  <Icon
                    size={20}
                    className="text-foreground/70 group-hover:text-electric-cyan transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-base font-medium text-foreground mb-2 group-hover:text-electric-cyan transition-colors duration-300">
                  {cap.title}
                </h3>
                <p className="text-on-surface-variant text-[13px] font-light leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}