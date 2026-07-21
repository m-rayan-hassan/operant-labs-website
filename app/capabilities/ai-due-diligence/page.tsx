"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  Activity,
  AlertTriangle,
  LayoutGrid,
  ShieldCheck,
  Database,
  TrendingUp,
} from "lucide-react";
import CalendlyButton from "../../components/CalendlyButton";

const assessmentSections = [
  {
    id: "maturity",
    icon: Activity,
    title: "AI Maturity Assessment",
    description:
      "Evaluate your organisation's current position on the AI maturity curve — from data readiness through to production-grade ML operations.",
    deliverables: [
      "AI maturity scorecard across 5 dimensions",
      "Benchmark against industry peers",
      "Capability gap analysis",
      "Maturity advancement roadmap",
    ],
  },
  {
    id: "readiness",
    icon: TrendingUp,
    title: "AI Readiness Assessment",
    description:
      "Determine whether your organisation has the technical, operational, and cultural foundations needed to adopt AI at enterprise scale.",
    deliverables: [
      "Organisational readiness score",
      "Skills and talent gap assessment",
      "Change management readiness evaluation",
      "Infrastructure readiness checklist",
    ],
  },
  {
    id: "risk",
    icon: AlertTriangle,
    title: "Technical Risk Review",
    description:
      "Surface hidden technical risks — from model fragility and data quality issues to single points of failure and vendor lock-in.",
    deliverables: [
      "Technical risk register with severity ratings",
      "Technical debt quantification",
      "Dependency and single-point-of-failure analysis",
      "Risk mitigation recommendations",
    ],
  },
  {
    id: "architecture",
    icon: LayoutGrid,
    title: "Architecture Review",
    description:
      "Evaluate existing and proposed AI architectures for scalability, security, compliance, and integration fitness.",
    deliverables: [
      "Architecture fitness assessment",
      "Scalability ceiling analysis",
      "Integration complexity evaluation",
      "Security boundary review",
    ],
  },
  {
    id: "governance",
    icon: ShieldCheck,
    title: "Governance Assessment",
    description:
      "Assess the strength of AI governance frameworks, responsible-AI policies, and human oversight mechanisms in place.",
    deliverables: [
      "Governance maturity assessment",
      "Responsible AI policy gap analysis",
      "Compliance and regulatory alignment review",
      "Human oversight mechanism evaluation",
    ],
  },
  {
    id: "data",
    icon: Database,
    title: "Data Readiness Assessment",
    description:
      "Evaluate data quality, pipeline reliability, storage architecture, and whether data assets can support production AI systems.",
    deliverables: [
      "Data quality scorecard",
      "Pipeline reliability assessment",
      "Data architecture review",
      "Data strategy recommendations",
    ],
  },
  {
    id: "investment",
    icon: TrendingUp,
    title: "AI Investment Validation",
    description:
      "For investors and acquirers — objective validation of AI claims, technical IP, and the real value of a target's technology assets.",
    deliverables: [
      "Algorithmic IP verification",
      "Technology asset valuation support",
      "Team and talent capability assessment",
      "Post-acquisition integration risk analysis",
    ],
  },
];

export default function AIDueDiligencePage() {
  const [activeTab, setActiveTab] = useState("maturity");

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
              <FileSearch size={12} className="text-electric-cyan" />
              <span className="text-[10px] text-foreground uppercase tracking-[0.15em] font-medium">
                Core Service
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-normal mb-6 leading-tight">
              AI{" "}
              <span className="text-electric-cyan">Due Diligence</span>
            </h1>
            <p className="text-base md:text-lg text-on-surface-variant font-light leading-relaxed">
              Comprehensive, independent assessment of AI capabilities, data
              maturity, technical risk, and governance readiness — for
              private equity firms, venture capital, enterprises, and
              pre-acquisition reviews.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/5 h-[280px] lg:h-[320px] relative rounded-3xl overflow-hidden border border-border-strong shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop"
              alt="AI Due Diligence"
              fill
              className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              priority
              unoptimized
            />
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-base md:text-lg text-on-surface-variant font-light leading-relaxed mb-6">
            In M&amp;A and venture transactions, evaluating a target company's AI
            capabilities requires deep technical expertise. Claims of
            &ldquo;proprietary AI&rdquo; are often overstated, masking reliance
            on third-party APIs or unscalable infrastructure.
          </p>
          <p className="text-base md:text-lg text-on-surface-variant font-light leading-relaxed">
            Our AI Due Diligence service provides investors and enterprises with
            an objective, evidence-based analysis across seven critical
            assessment dimensions — equipping decision-makers to accurately
            value technological assets, identify risks, and plan transformation
            with confidence.
          </p>
        </motion.div>
      </section>

      {/* Tab Navigation */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Desktop: horizontal tabs */}
          <div className="hidden lg:flex flex-wrap gap-2">
            {assessmentSections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`flex items-center gap-2 text-[11px] uppercase tracking-[0.1em] font-medium px-4 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                    activeTab === section.id
                      ? "border-electric-cyan/50 text-electric-cyan bg-electric-cyan/10"
                      : "border-border-subtle text-on-surface-variant hover:border-border-strong hover:text-foreground"
                  }`}
                >
                  <Icon size={14} />
                  {section.title}
                </button>
              );
            })}
          </div>

          {/* Mobile: vertical list */}
          <div className="lg:hidden flex flex-col gap-2">
            {assessmentSections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`flex items-center gap-3 text-[12px] font-medium px-4 py-3 rounded-xl border transition-all duration-300 cursor-pointer text-left ${
                    activeTab === section.id
                      ? "border-electric-cyan/50 text-electric-cyan bg-electric-cyan/10"
                      : "border-border-subtle text-on-surface-variant hover:border-border-strong hover:text-foreground"
                  }`}
                >
                  <Icon size={16} className="shrink-0" />
                  {section.title}
                </button>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Active Assessment Detail */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        {assessmentSections
          .filter((s) => s.id === activeTab)
          .map((section) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="glass-card p-8 md:p-12 relative overflow-hidden"
              >
                <span
                  className="absolute left-0 top-0 h-full w-[2px] bg-electric-cyan"
                  aria-hidden
                />

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-electric-cyan/10 flex items-center justify-center border border-electric-cyan/30 shrink-0">
                    <Icon
                      size={24}
                      className="text-electric-cyan"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                      {section.title}
                    </h3>
                    <p className="text-base md:text-lg text-on-surface-variant font-light leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-[11px] font-semibold uppercase tracking-widest text-foreground mb-4">
                    Key Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {section.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          size={15}
                          className="text-electric-cyan shrink-0 mt-0.5"
                        />
                        <span className="text-sm font-medium text-foreground">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
      </section>

      {/* Sidebar CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Our Assessment Framework
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Algorithmic IP Verification",
                  "Data Pipeline & Quality Audit",
                  "Infrastructure Scalability Review",
                  "Security & Compliance Checks",
                  "Team & Talent Assessment",
                  "Technical Debt Analysis",
                  "Model Robustness Testing",
                  "Vendor Dependency Analysis",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-electric-cyan shrink-0 mt-0.5"
                    />
                    <span className="text-sm font-medium text-foreground">
                      {item}
                    </span>
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
                Secure an Assessment
              </h3>
              <p className="text-sm md:text-base text-on-surface-variant mb-8 font-light">
                Engage our experts for rapid, confidential due diligence on a
                prospective target or enterprise AI initiative.
              </p>
              <CalendlyButton
                url="https://calendly.com/executive-strategy-session/30min"
                className="btn-solid w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-[11px] font-semibold tracking-widest uppercase shadow-md cursor-pointer"
              >
                Discuss Due Diligence <ArrowRight size={14} />
              </CalendlyButton>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}