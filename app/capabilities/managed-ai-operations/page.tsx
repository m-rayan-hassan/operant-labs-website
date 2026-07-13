"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Activity } from "lucide-react";

export default function ManagedAIOperationsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl lg:w-3/5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-strong bg-border-subtle mb-6">
              <Activity size={12} className="text-electric-cyan" />
              <span className="text-[10px] text-foreground uppercase tracking-[0.15em] font-medium">Capability</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-normal mb-6 leading-tight">
              Managed AI <span className="text-electric-cyan">Operations</span>
            </h1>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed">
              Provide continuous monitoring, optimization, and support for deployed AI systems to ensure sustained performance and ROI over time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/5 h-[280px] lg:h-[320px] relative rounded-3xl overflow-hidden border border-border-strong shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
              alt="Managed AI Operations"
              fill
              className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              priority
              unoptimized
            />
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8 space-y-8 text-on-surface-variant font-light leading-relaxed">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-base md:text-lg mb-6">
                Unlike traditional software, AI systems degrade over time. Data distributions shift, underlying foundational models update, and business logic evolves. Without continuous oversight, a once-accurate model can quickly become a business liability.
              </p>
              <p className="mb-10">
                Our Managed AI Operations (MLOps) service ensures your intelligent systems remain accurate, performant, and secure long after the initial deployment. We provide 24/7 monitoring for model drift, manage pipeline orchestration, handle prompt engineering updates, and provide continuous fine-tuning to maximize the lifespan and ROI of your AI investments.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-6">Operational Focus</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Continuous Model Monitoring",
                  "Data & Concept Drift Detection",
                  "Automated Retraining Pipelines",
                  "Prompt Optimization & Tuning",
                  "Infrastructure Cost Management",
                  "Monthly Performance Reporting"
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
              <h3 className="text-xl font-medium mb-4 text-foreground">Support Your AI</h3>
              <p className="text-sm text-on-surface-variant mb-8 font-light">
                Transition your AI projects from deployment to continuous, managed operations.
              </p>
              <Link href="/contact-us" className="btn-solid w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-[11px] font-semibold tracking-widest uppercase shadow-md">
                Discuss Managed Ops <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}