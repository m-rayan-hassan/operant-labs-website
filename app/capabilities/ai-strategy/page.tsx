"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Rocket } from "lucide-react";

export default function AIStrategyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-strong bg-border-subtle mb-6">
            <Rocket size={12} className="text-electric-cyan" />
            <span className="text-[10px] text-foreground uppercase tracking-[0.15em] font-medium">Capability</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-normal mb-6 leading-tight">
            AI Strategy &amp; <span className="text-electric-cyan">Transformation</span>
          </h1>
          <p className="text-lg text-on-surface-variant font-light leading-relaxed">
            Assess enterprise readiness, map value-creation opportunities, and define an implementation roadmap that connects AI capabilities to strategic business outcomes.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8 text-on-surface-variant font-light leading-relaxed">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-base md:text-lg mb-6">
                Many organizations struggle to move AI from proof-of-concept into scaled production. A successful AI transformation requires more than just deploying a model; it requires aligning technology investments with business objectives, assessing data readiness, and defining clear governance frameworks.
              </p>
              <p className="mb-10">
                Our AI Strategy &amp; Transformation service helps enterprises and investment-backed companies bridge the gap between AI ambition and execution. We work alongside executive leadership and technical teams to identify high-impact use cases, evaluate "build vs. buy" scenarios, and sequence implementations to deliver early ROI while building long-term capability.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-6">How We Deliver Value</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "AI Readiness Assessment",
                  "Use-Case Prioritization",
                  "Data & Infrastructure Audit",
                  "Build vs. Buy Evaluation",
                  "Implementation Roadmapping",
                  "Governance & Risk Planning"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-electric-cyan shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar / CTA */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="glass-card p-8 sticky top-32"
            >
              <h3 className="text-xl font-medium mb-4 text-foreground">Initiate a Transformation</h3>
              <p className="text-sm text-on-surface-variant mb-8 font-light">
                Schedule a briefing with our technical strategists to discuss your organization's AI maturity and objectives.
              </p>
              <Link href="/contact-us" className="btn-solid w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-[11px] font-semibold tracking-widest uppercase shadow-md">
                Request Assessment <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
