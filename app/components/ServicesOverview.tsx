"use client";

import { motion } from "motion/react";
import {
  Code2,
  Cog,
  Brain,
  Cloud,
  BarChart3,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Secure, scalable software built around how your business actually works.",
    href: "#",
  },
  {
    icon: Cog,
    title: "Intelligent Business Automation",
    description:
      "Turning manual, repetitive processes into fast, connected digital workflows.",
    href: "#",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Practical AI, from virtual assistants to predictive analytics, built to solve real problems.",
    href: "#",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Solutions",
    description:
      "Cloud infrastructure, migration, and delivery pipelines that keep pace with your growth.",
    href: "#",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Business Intelligence",
    description:
      "Turning scattered business data into dashboards and insight you can act on.",
    href: "#",
  },
  {
    icon: Compass,
    title: "Technology Advisory & Digital Transformation",
    description:
      "Strategic guidance so you invest in the right technology at the right time.",
    href: "#",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 md:py-32 border-t border-border-subtle bg-surface-dim relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="section-number mx-auto">02 / Services</div>
          <h2 className="text-3xl md:text-5xl text-foreground font-semibold tracking-tight">
            Core Services
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 * i }}
              >
                <Link
                  href={service.href}
                  className="glass-card p-8 flex flex-col h-full group relative overflow-hidden block"
                >
                  <div className="absolute top-6 right-6 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                    <ArrowUpRight size={20} className="text-foreground" strokeWidth={1.5} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-border-subtle border border-border-strong flex items-center justify-center mb-6">
                    <Icon
                      size={20}
                      className="text-foreground/70"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-on-surface-variant text-[13px] font-light leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
