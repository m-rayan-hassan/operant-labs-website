"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Scale,
  TrendingUp,
  Brain,
  GitMerge,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import CalendlyButton from "../components/CalendlyButton";

const contexts = [
  {
    icon: TrendingUp,
    title: "Investors & Private Capital",
    description:
      "Independent validation of AI claims, technical IP, and infrastructure quality before transaction close.",
    items: [
      "Code-level audit of proprietary AI systems",
      "Data pipeline and model robustness assessment",
      "Technical team capability evaluation",
      "Hidden technical debt identification",
    ],
  },
  {
    icon: GitMerge,
    title: "Mergers & Acquisitions",
    description:
      "Objective technical risk assessment during M&A due diligence to inform deal structuring and valuation.",
    items: [
      "Technology stack compatibility analysis",
      "Integration complexity and timeline estimation",
      "Scalability ceiling assessment",
      "Post-merger integration risk register",
    ],
  },
  {
    icon: Brain,
    title: "AI Initiatives",
    description:
      "Independent review of proposed or in-flight AI programmes to validate feasibility, approach, and value potential.",
    items: [
      "Architecture feasibility validation",
      "Vendor and platform independence assessment",
      "Build vs. buy analysis",
      "ROI and value-creation modelling",
    ],
  },
  {
    icon: Rocket,
    title: "Transformation Programmes",
    description:
      "Ongoing independent oversight of large-scale digital and AI transformation efforts to ensure programme integrity.",
    items: [
      "Technical governance and milestone review",
      "Architecture decision record audit",
      "Delivery quality assurance",
      "Risk escalation and remediation guidance",
    ],
  },
];

export default function IndependentTechnicalOpinionPage() {
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
              <Scale size={12} className="text-electric-cyan" />
              <span className="text-[10px] text-foreground uppercase tracking-[0.15em] font-medium">
                Independent Advisory
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-normal mb-6 leading-tight">
              Independent Technical{" "}
              <span className="text-electric-cyan">Opinion</span>
            </h1>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed mb-6">
              Operant Labs acts as your independent technical advisory partner
              — providing objective, evidence-based assessments for investors,
              acquisitions, AI initiatives, mergers, and enterprise
              transformation programmes.
            </p>
            <p className="text-on-surface-variant/70 text-sm italic font-light">
              No vendor affiliations. No implementation bias. Pure technical
              truth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/5 h-[280px] lg:h-[320px] relative rounded-3xl overflow-hidden border border-border-strong shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
              alt="Independent Technical Advisory"
              fill
              className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              priority
              unoptimized
            />
          </motion.div>
        </div>
      </section>

      {/* Why Independence Matters */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 relative overflow-hidden border-electric-cyan/20"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-electric-cyan/40 to-transparent" />
          <div className="max-w-3xl mx-auto text-center">
            <ShieldCheck
              size={32}
              className="text-electric-cyan mx-auto mb-6"
            />
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Why Independence Matters
            </h2>
            <p className="text-on-surface-variant font-light leading-relaxed text-base md:text-lg">
              When millions are at stake in investment decisions, M&amp;A
              transactions, or enterprise transformation, you need technical
              advisory that is completely independent. Our assessments carry no
              implementation bias, no vendor lock-in, and no conflicts of
              interest — giving decision-makers the confidence to act on
              objective technical evidence.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Context Cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Where We Provide Independent Opinion
          </h2>
          <p className="text-on-surface-variant text-sm font-light max-w-2xl">
            Our independent technical advisory spans the full spectrum of
            strategic technology decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contexts.map((context, i) => {
            const Icon = context.icon;
            return (
              <motion.div
                key={context.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass-card p-8 group hover:border-electric-cyan/40 transition-colors duration-300 relative overflow-hidden"
              >
                <span
                  className="absolute left-0 top-0 h-full w-[2px] bg-electric-cyan scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500"
                  aria-hidden
                />

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-border-subtle flex items-center justify-center border border-border-strong group-hover:border-electric-cyan/40 group-hover:bg-electric-cyan/5 transition-all duration-300 shrink-0">
                    <Icon
                      size={22}
                      className="text-foreground group-hover:text-electric-cyan transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-electric-cyan transition-colors duration-300">
                      {context.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                      {context.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 pl-2">
                  {context.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={14}
                        className="text-electric-cyan shrink-0 mt-0.5"
                      />
                      <span className="text-[13px] text-on-surface-variant font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
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
              Request an Independent Technical Opinion
            </h2>
            <p className="text-sm text-on-surface-variant font-light mb-8 max-w-xl mx-auto">
              Engage our team for an objective, evidence-based technical
              assessment to inform your next strategic decision.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <CalendlyButton
                url="https://calendly.com/operantlabs/executive-strategy-session"
                className="btn-solid text-[11px] px-8 py-4 rounded-full font-semibold tracking-widest uppercase shadow-md hover:shadow-lg cursor-pointer"
              >
                Book a Consultation
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
