"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Search,
  ShieldCheck,
  LayoutGrid,
  Map,
  Users,
} from "lucide-react";
import CalendlyButton from "../../components/CalendlyButton";

const engagementSteps = [
  {
    icon: Search,
    label: "Technical Discovery",
    description:
      "Comprehensive assessment of existing technical assets, infrastructure, integration points, and hidden risks.",
  },
  {
    icon: LayoutGrid,
    label: "Architecture Validation",
    description:
      "Stress-test proposed AI architectures for scalability, security, and compliance before build commitment.",
  },
  {
    icon: ShieldCheck,
    label: "Governance Framework",
    description:
      "Establish responsible-AI policies, compliance controls, human-oversight mechanisms, and risk protocols.",
  },
  {
    icon: Map,
    label: "Transformation Roadmap",
    description:
      "Sequence high-impact initiatives with KPIs, resource requirements, and a phased plan from pilot to enterprise scale.",
  },
  {
    icon: Users,
    label: "Implementation Oversight",
    description:
      "Embed forward-deployed engineering teams and programme leadership to execute with full technical governance.",
  },
];

const deliverables = [
  "Technical landscape audit and risk register",
  "Infrastructure scalability assessment",
  "Data pipeline quality and readiness evaluation",
  "Integration points mapping and dependency analysis",
  "Technical debt quantification and remediation plan",
  "Security posture and compliance gap assessment",
  "Architecture feasibility analysis",
  "Prioritised technical recommendations report",
];

export default function TechnicalDiscoveryPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl lg:w-3/5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-strong bg-border-subtle mb-6">
              <Compass size={12} className="text-electric-cyan" />
              <span className="text-[10px] text-foreground uppercase tracking-[0.15em] font-medium">
                Core Offering
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-normal mb-6 leading-tight">
              Technical{" "}
              <span className="text-electric-cyan">Discovery</span>
            </h1>
            <p className="text-base md:text-lg text-on-surface-variant font-light leading-relaxed mb-6">
              A comprehensive technical assessment that establishes the
              foundation for architecture validation, governance frameworks,
              and enterprise AI transformation. The essential first step before
              any strategic commitment.
            </p>
            <p className="text-on-surface-variant/70 text-sm italic font-light">
              For investors evaluating targets, enterprises planning
              transformation, and leadership teams seeking independent
              technical clarity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/5 h-[280px] lg:h-[320px] relative rounded-3xl overflow-hidden border border-border-strong shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop"
              alt="Technical Discovery"
              fill
              className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              priority
              unoptimized
            />
          </motion.div>
        </div>
      </section>

      {/* Engagement Flow — Horizontal on desktop, vertical stepper on mobile */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            The Engagement Flow
          </h2>
          <p className="text-on-surface-variant text-sm font-light max-w-2xl">
            Technical Discovery is the critical first phase in a structured
            engagement that progresses through validation, governance, planning,
            and oversight.
          </p>
        </motion.div>

        {/* Desktop: horizontal step diagram */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div className="absolute top-[28px] left-[10%] right-[10%] h-px bg-gradient-to-r from-border-strong via-electric-cyan/40 to-border-strong" />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {engagementSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex flex-col items-center text-center group"
                >
                  <div
                    className={`relative z-10 w-14 h-14 rounded-full border flex items-center justify-center mb-4 transition-all duration-500 ${
                      i === 0
                        ? "bg-electric-cyan/10 border-electric-cyan/50 shadow-[0_0_20px_rgba(0,240,255,0.15)]"
                        : "bg-card border-border-strong group-hover:border-electric-cyan/60 group-hover:bg-electric-cyan/5 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={`transition-colors duration-500 ${
                        i === 0
                          ? "text-electric-cyan"
                          : "text-foreground/70 group-hover:text-electric-cyan"
                      }`}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3
                    className={`text-[12px] font-medium mb-2 leading-snug transition-colors duration-300 ${
                      i === 0
                        ? "text-electric-cyan"
                        : "text-foreground group-hover:text-electric-cyan"
                    }`}
                  >
                    {step.label}
                  </h3>
                  <p className="text-on-surface-variant text-[10px] font-light leading-relaxed max-w-[160px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet: vertical stepper */}
        <div className="lg:hidden relative">
          <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border-strong to-transparent z-0" />

          <div className="space-y-6 relative z-10">
            {engagementSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 * i }}
                  className="flex items-start gap-4"
                >
                  <div
                    className={`relative z-10 w-14 h-14 rounded-full border flex items-center justify-center shrink-0 ${
                      i === 0
                        ? "bg-electric-cyan/10 border-electric-cyan/50 shadow-[0_0_20px_rgba(0,240,255,0.15)]"
                        : "bg-card border-border-strong"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={
                        i === 0
                          ? "text-electric-cyan"
                          : "text-foreground/70"
                      }
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="pt-2">
                    <h3
                      className={`text-sm font-medium mb-1 ${
                        i === 0 ? "text-electric-cyan" : "text-foreground"
                      }`}
                    >
                      {step.label}
                    </h3>
                    <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8 space-y-8 text-on-surface-variant font-light leading-relaxed">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                What Technical Discovery Covers
              </h2>
              <p className="text-base md:text-lg mb-6">
                Technical Discovery provides decision-makers with an objective,
                evidence-based understanding of their current technical
                landscape. Before committing to architecture, implementation,
                or investment, you need clarity on what exists, what works, and
                where the risks lie.
              </p>
              <p className="text-base md:text-lg mb-10">
                Our independent assessment maps every layer of your technical
                estate — from data pipelines and infrastructure to team
                capabilities and security posture — producing a comprehensive
                findings report that directly informs architecture validation
                and transformation planning.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Key Deliverables
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={15}
                      className="text-electric-cyan mt-0.5 shrink-0"
                    />
                    <span className="text-sm font-light text-on-surface-variant">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Who It&rsquo;s For
              </h2>
              <div className="space-y-6 mb-12">
                {[
                  {
                    title: "Investors & Private Capital",
                    desc: "Objective technical assessment before acquisition, investment, or portfolio review decisions.",
                  },
                  {
                    title: "Enterprise Leadership",
                    desc: "Clear understanding of the technical landscape before committing to transformation programmes.",
                  },
                  {
                    title: "Board & Advisory",
                    desc: "Independent technical opinion to inform strategic decisions and governance oversight.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="glass-card p-6 border-l-2 border-l-electric-cyan border-t-border-subtle border-r-border-subtle border-b-border-subtle bg-surface/30"
                  >
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-on-surface-variant">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 sticky top-32"
            >
              <h3 className="text-xl font-medium mb-4 text-foreground">
                Request Technical Discovery
              </h3>
              <p className="text-sm md:text-base text-on-surface-variant mb-8 font-light">
                Engage our team for an independent, comprehensive technical
                assessment before your next strategic decision.
              </p>
              <CalendlyButton
                url="https://calendly.com/operantlabs/technical-discovery"
                className="btn-solid w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-[11px] font-semibold tracking-widest uppercase shadow-md cursor-pointer"
              >
                Schedule Discovery <ArrowRight size={14} />
              </CalendlyButton>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
