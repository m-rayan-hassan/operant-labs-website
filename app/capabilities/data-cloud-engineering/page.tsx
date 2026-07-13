"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Cloud } from "lucide-react";

export default function DataCloudEngineeringPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-strong bg-border-subtle mb-6">
            <Cloud size={12} className="text-electric-cyan" />
            <span className="text-[10px] text-foreground uppercase tracking-[0.15em] font-medium">Capability</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-normal mb-6 leading-tight">
            Data &amp; Cloud <span className="text-electric-cyan">Engineering</span>
          </h1>
          <p className="text-lg text-on-surface-variant font-light leading-relaxed">
            Modernize your data infrastructure, establish secure cloud pipelines, and ensure your data is accessible, clean, and ready for AI applications.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8 space-y-8 text-on-surface-variant font-light leading-relaxed">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-base md:text-lg mb-6">
                An AI transformation cannot succeed on brittle infrastructure. Fragmented data lakes, inconsistent schemas, and inflexible cloud environments severely throttle the deployment and effectiveness of machine learning models.
              </p>
              <p className="mb-10">
                Our Data &amp; Cloud Engineering capability lays the necessary groundwork for advanced analytics and AI. We architect secure, highly-available cloud topologies, build resilient ETL/ELT data pipelines, and implement vector databases to ensure that your enterprise data is clean, compliant, and continuously available for downstream intelligent systems.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-6">Core Capabilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Data Pipeline Architecture (ETL/ELT)",
                  "Vector Database Implementation",
                  "Cloud Migration & Modernization",
                  "Data Governance & Quality Control",
                  "Infrastructure as Code (IaC)",
                  "High-Availability Topologies"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-electric-cyan shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
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
              <h3 className="text-xl font-medium mb-4 text-foreground">Modernize Infrastructure</h3>
              <p className="text-sm text-on-surface-variant mb-8 font-light">
                Connect with our engineering team to assess your current data architecture and cloud readiness.
              </p>
              <Link href="/contact-us" className="btn-solid w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-[11px] font-semibold tracking-widest uppercase shadow-md">
                Request an Assessment <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
