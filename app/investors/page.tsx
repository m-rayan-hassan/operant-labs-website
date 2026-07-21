"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  FileSearch,
  Scale,
  Compass,
  Users,
  ShieldCheck,
} from "lucide-react";
import CalendlyButton from "../components/CalendlyButton";
import GovernanceStrip from "../components/GovernanceStrip";

const investorServices = [
  {
    icon: FileSearch,
    title: "Why Investors Need AI Due Diligence",
    description:
      "Claims of 'proprietary AI' are routinely overstated. Without independent technical verification, investors risk overvaluing assets, underestimating integration costs, and missing critical technical debt.",
    points: [
      "Validate AI and technical IP claims at code level",
      "Quantify hidden technical debt before transaction close",
      "Assess data pipeline quality and model robustness",
      "Evaluate team capability and retention risk",
    ],
    href: "/capabilities/ai-due-diligence",
    cta: "Explore AI Due Diligence",
  },
  {
    icon: TrendingUp,
    title: "Portfolio AI Assessment",
    description:
      "Systematic evaluation of AI readiness and value-creation opportunities across your entire portfolio — identifying the highest-priority initiatives and building implementation roadmaps focused on measurable margin expansion.",
    points: [
      "Cross-portfolio AI maturity benchmarking",
      "Prioritised value-creation opportunity mapping",
      "Implementation roadmaps per portfolio company",
      "Executive-level reporting and dashboards",
    ],
    href: "/capabilities/ai-strategy",
    cta: "Explore Portfolio Assessment",
  },
  {
    icon: Scale,
    title: "Independent Technical Opinion",
    description:
      "When millions are at stake, you need technical advisory with no vendor bias and no conflicts of interest. Our independent assessments give investors confidence in their technical decisions.",
    points: [
      "Objective, vendor-independent analysis",
      "Pre-acquisition technical risk assessment",
      "Post-acquisition integration planning",
      "Board-ready technical opinion reports",
    ],
    href: "/independent-technical-opinion",
    cta: "Explore Independent Opinion",
  },
  {
    icon: Compass,
    title: "Technical Discovery",
    description:
      "A comprehensive technical assessment that maps every layer of a target's or portfolio company's technical estate — establishing the foundation for architecture validation and transformation planning.",
    points: [
      "Technical landscape audit and risk register",
      "Infrastructure scalability assessment",
      "Data readiness and pipeline quality evaluation",
      "Integration complexity analysis",
    ],
    href: "/capabilities/technical-discovery",
    cta: "Explore Technical Discovery",
  },
  {
    icon: Users,
    title: "Executive Advisory",
    description:
      "Strategic AI guidance for board members, investment committees, and C-suite executives navigating transformation decisions — from deal evaluation through to post-acquisition value creation.",
    points: [
      "Board-level AI strategy presentations",
      "Investment committee technical briefings",
      "Executive transformation workshops",
      "Ongoing strategic and technical oversight",
    ],
    href: "/contact-us",
    cta: "Discuss Advisory",
  },
  {
    icon: ShieldCheck,
    title: "Governance",
    description:
      "Establish robust AI governance frameworks across portfolio companies — ensuring responsible AI practices, regulatory compliance, and human oversight mechanisms from day one.",
    points: [
      "AI governance policy development",
      "Compliance and regulatory alignment",
      "Human oversight framework design",
      "Risk management protocol implementation",
    ],
    href: "/capabilities/ai-governance",
    cta: "Explore Governance",
  },
];

export default function InvestorsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-strong bg-border-subtle mb-6">
              <TrendingUp size={12} className="text-electric-cyan" />
              <span className="text-[10px] text-foreground uppercase tracking-[0.15em] font-medium">
                Private Capital
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-normal mb-6 leading-tight">
              AI Value Creation for{" "}
              <span className="text-electric-cyan">Investors</span>
            </h1>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed mb-6">
              Partner with Operant Labs to independently assess AI maturity,
              validate technical IP, conduct due diligence, and drive measurable
              enterprise value across your portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CalendlyButton
                url="https://calendly.com/executive-strategy-session/30min"
                className="btn-solid text-[11px] px-6 py-3.5 rounded-full font-semibold tracking-[0.1em] uppercase cursor-pointer text-center"
              >
                Book Executive Strategy Session
              </CalendlyButton>
              <CalendlyButton
                url="https://calendly.com/executive-strategy-session/30min"
                className="btn-outline text-[11px] px-6 py-3.5 rounded-full font-semibold tracking-[0.1em] uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                Request Technical Discovery
                <ArrowRight size={14} />
              </CalendlyButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden glass-card group shadow-2xl lg:ml-auto"
          >
            <div className="absolute inset-0 bg-electric-cyan/5 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
              alt="Data and AI visualization representing value creation"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
              unoptimized
            />
          </motion.div>
        </div>
      </section>

      {/* Investor Journey */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            The Investor Journey
          </h2>
          <p className="text-on-surface-variant text-sm font-light mb-10 max-w-2xl">
            From pre-acquisition assessment through to long-term managed AI
            operations — a continuous partnership across the full investment
            lifecycle.
          </p>

          <div className="relative">
            <div className="hidden lg:block absolute top-[28px] left-[40px] right-[40px] h-px bg-gradient-to-r from-border-strong via-electric-cyan/40 to-border-strong" />

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
              {[
                { n: "01", label: "Portfolio Assessment" },
                { n: "02", label: "AI Opportunity Mapping" },
                { n: "03", label: "Technical Due Diligence" },
                { n: "04", label: "Transformation Roadmap" },
                { n: "05", label: "Pilot" },
                { n: "06", label: "Enterprise Implementation" },
                { n: "07", label: "Managed AI Operations" },
              ].map((stage, i) => (
                <motion.div
                  key={stage.n}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.07 * i }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative z-10 w-14 h-14 rounded-full bg-card border border-border-strong flex items-center justify-center mb-3 group-hover:border-electric-cyan/60 group-hover:bg-electric-cyan/5 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all duration-500">
                    <span className="font-mono text-xs text-foreground/60 group-hover:text-electric-cyan transition-colors">
                      {stage.n}
                    </span>
                  </div>
                  <p className="text-[11px] text-on-surface-variant font-medium leading-tight group-hover:text-foreground transition-colors">
                    {stage.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Service Sections */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="space-y-8">
          {investorServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="glass-card p-8 md:p-10 group hover:border-electric-cyan/40 transition-colors duration-300 relative overflow-hidden"
              >
                <span
                  className="absolute left-0 top-0 h-full w-[2px] bg-electric-cyan scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500"
                  aria-hidden
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-5">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-border-subtle flex items-center justify-center border border-border-strong group-hover:border-electric-cyan/40 group-hover:bg-electric-cyan/5 transition-all duration-300 shrink-0">
                        <Icon
                          size={22}
                          className="text-foreground group-hover:text-electric-cyan transition-colors duration-300"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="text-xl font-medium text-foreground group-hover:text-electric-cyan transition-colors duration-300 pt-2">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-on-surface-variant font-light leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="text-electric-cyan text-[11px] uppercase tracking-widest font-semibold flex items-center gap-1 group/link"
                    >
                      {service.cta}{" "}
                      <ArrowRight
                        size={12}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>

                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.points.map((point) => (
                        <div key={point} className="flex items-start gap-3">
                          <CheckCircle2
                            size={15}
                            className="text-electric-cyan shrink-0 mt-0.5"
                          />
                          <span className="text-sm font-light text-on-surface-variant">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Governance Strip */}
      <GovernanceStrip />

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 text-center mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-10 md:p-16 relative overflow-hidden border-electric-cyan/20"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-electric-cyan/10 blur-[80px] rounded-full z-0" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full z-0" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl italic font-normal mb-6">
              Partner with Us
            </h2>
            <p className="text-sm text-on-surface-variant font-light mb-8 max-w-xl mx-auto">
              Discuss due diligence requirements, schedule a portfolio-wide AI
              readiness assessment, or explore how we can drive value across
              your investments.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <CalendlyButton
                url="https://calendly.com/executive-strategy-session/30min"
                className="btn-solid text-[11px] px-8 py-4 rounded-full font-semibold tracking-widest uppercase shadow-md hover:shadow-lg cursor-pointer"
              >
                Book Executive Strategy Session
              </CalendlyButton>
              <Link
                href="/capabilities"
                className="btn-outline text-[11px] px-8 py-4 rounded-full font-semibold tracking-widest uppercase flex items-center gap-2 bg-surface/50 backdrop-blur-md"
              >
                Explore Capabilities <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}