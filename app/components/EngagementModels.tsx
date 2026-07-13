"use client";

import { motion } from "motion/react";
import { Search, FlaskConical, Rocket, Users, Activity, Compass, ArrowRight } from "lucide-react";
import Link from "next/link";

const projectBased = [
  {
    n: "01",
    icon: Search,
    title: "Advisory & Assessment",
    description: "AI readiness, due diligence, strategy, and roadmaps.",
  },
  {
    n: "02",
    icon: FlaskConical,
    title: "Architecture & Pilot",
    description: "Technical validation, solution design, prototypes, and proofs of value.",
  },
  {
    n: "03",
    icon: Rocket,
    title: "Build & Deploy",
    description: "Dedicated implementation teams and production delivery.",
  },
];

const ongoing = [
  {
    n: "04",
    icon: Users,
    title: "Forward-Deployed Engineering",
    description: "Embedded multidisciplinary technical execution.",
  },
  {
    n: "05",
    icon: Activity,
    title: "Managed AI Operations",
    description:
      "Ongoing workflow monitoring, agent performance tracking, model and prompt optimization, MLOps pipeline management, data-pipeline monitoring, governance reviews, security controls, incident support, continuous improvement cycles, and executive-level reporting.",
  },
  {
    n: "06",
    icon: Compass,
    title: "AI Transformation Office",
    description: "Continuous strategic and technical oversight.",
  },
];

function ModelCard({ model, index }: { model: typeof projectBased[number]; index: number }) {
  const Icon = model.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.08 * index }}
      className="relative glass-card p-7 flex flex-col h-full group hover:border-electric-cyan/40 transition-colors duration-300 overflow-hidden"
    >
      {/* Accent edge that draws in on hover */}
      <span
        className="absolute left-0 top-0 h-full w-[2px] bg-electric-cyan scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500"
        aria-hidden
      />

      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 rounded-full bg-border-subtle flex items-center justify-center border border-border-strong group-hover:border-electric-cyan/40 group-hover:bg-electric-cyan/5 transition-all duration-300">
          <Icon size={20} className="text-foreground group-hover:text-electric-cyan transition-colors" />
        </div>
        <span className="text-[11px] font-mono tracking-[0.15em] text-on-surface-variant/60 group-hover:text-electric-cyan/70 transition-colors mt-1">
          {model.n}
        </span>
      </div>

      <h3 className="text-base font-medium text-foreground mb-2.5 leading-snug">
        {model.title}
      </h3>
      <p className="text-sm text-on-surface-variant font-light leading-relaxed">
        {model.description}
      </p>
    </motion.div>
  );
}

export default function EngagementModels() {
  return (
    <section className="py-24 md:py-32 relative z-10 bg-surface">
      {/* Smooth gradient blend from the preceding bg-background section */}
      <div
        className="pointer-events-none absolute top-0 inset-x-0 h-32"
        style={{ background: "linear-gradient(to bottom, var(--background), var(--surface))" }}
        aria-hidden
      />
      {/* Smooth gradient blend into the following bg-background section */}
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0 h-32"
        style={{ background: "linear-gradient(to top, var(--background), var(--surface))" }}
        aria-hidden
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="section-number mx-auto mb-6">04 / Partnership</div>
          <h2 className="text-3xl md:text-5xl text-foreground font-semibold tracking-tight mb-6">
            Engagement Models
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-base font-light leading-relaxed">
            Six ways to work with us — from a single advisory engagement to a
            continuous, embedded transformation partnership.
          </p>
        </motion.div>

        {/* Engagement-depth spine: encodes that the six models run from a light-touch
            single engagement to a fully embedded, ongoing partnership. */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex items-center gap-4 mb-10 px-1"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/70 whitespace-nowrap">
            Single Engagement
          </span>
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(to right, var(--border-strong), var(--color-electric-cyan))",
            }}
          />
          <span className="text-[10px] uppercase tracking-[0.2em] text-electric-cyan whitespace-nowrap">
            Embedded Partnership
          </span>
        </motion.div>

        {/* Project-based engagements */}
        <div className="mb-4 flex items-center gap-3">
          <span className="text-[11px] uppercase tracking-[0.15em] text-on-surface-variant font-medium">
            Project-Based
          </span>
          <span className="flex-1 h-px bg-border-subtle" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {projectBased.map((model, i) => (
            <ModelCard key={model.title} model={model} index={i} />
          ))}
        </div>

        {/* Ongoing & embedded engagements */}
        <div className="mb-4 flex items-center gap-3">
          <span className="text-[11px] uppercase tracking-[0.15em] text-electric-cyan font-medium">
            Ongoing & Embedded
          </span>
          <span className="flex-1 h-px bg-border-subtle" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {ongoing.map((model, i) => (
            <ModelCard key={model.title} model={model} index={i + 3} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 text-sm text-foreground font-medium group"
          >
            Not sure which model fits? Discuss an AI Transformation
            <ArrowRight size={16} className="text-electric-cyan group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
} 