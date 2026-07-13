"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";

export default function IntelligentAutomationPage() {
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
              <Zap size={12} className="text-electric-cyan" />
              <span className="text-[10px] text-foreground uppercase tracking-[0.15em] font-medium">Capability</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-normal mb-6 leading-tight">
              Intelligent <span className="text-electric-cyan">Automation</span>
            </h1>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed">
              Automate complex, multi-step business processes by integrating legacy systems with modern AI capabilities to eliminate manual friction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/5 h-[280px] lg:h-[320px] relative rounded-3xl overflow-hidden border border-border-strong shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop"
              alt="Intelligent Automation"
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
                Legacy robotic process automation (RPA) struggles with unstructured data and exception handling. True operational efficiency requires automation that can read, understand, and make contextual decisions.
              </p>
              <p className="mb-10">
                Our Intelligent Automation solutions combine orchestration engines with generative AI and machine learning to tackle complex, cognitive workflows. We connect disparate legacy systems, automate document processing, and deploy agentic systems that reduce manual overhead, minimize errors, and free your workforce to focus on strategic execution.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-6">Core Offerings</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Cognitive Workflow Automation",
                  "Intelligent Document Processing (IDP)",
                  "Legacy System Orchestration",
                  "Agentic Process Execution",
                  "Exception Handling & Logic",
                  "Cross-Platform Integration"
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
              <h3 className="text-xl font-medium mb-4 text-foreground">Optimize Workflows</h3>
              <p className="text-sm text-on-surface-variant mb-8 font-light">
                Identify high-friction processes in your organization and discuss automation strategies with our team.
              </p>
              <Link href="/contact-us" className="btn-solid w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-[11px] font-semibold tracking-widest uppercase shadow-md">
                Schedule a Consultation <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}