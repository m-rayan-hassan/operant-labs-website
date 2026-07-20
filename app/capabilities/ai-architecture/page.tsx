"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, LayoutGrid } from "lucide-react";

export default function AIArchitecturePage() {
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
              <LayoutGrid size={12} className="text-electric-cyan" />
              <span className="text-[10px] text-foreground uppercase tracking-[0.15em] font-medium">Capability</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-normal mb-6 leading-tight">
              AI Solution <span className="text-electric-cyan">Architecture</span>
            </h1>
            <p className="text-base md:text-lg text-on-surface-variant font-light leading-relaxed">
              Design secure, scalable, and compliant AI architectures that seamlessly integrate with your existing enterprise systems and data infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/5 h-[280px] lg:h-[320px] relative rounded-3xl overflow-hidden border border-border-strong shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
              alt="AI Solution Architecture"
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
                Integrating AI into an enterprise environment introduces profound architectural challenges. From data ingestion and vector storage to model hosting, inference scaling, and security boundary management, a poorly designed architecture limits scalability and introduces critical risks.
              </p>
              <p className="text-base md:text-lg mb-10">
                Our AI Solution Architecture service provides the foundational blueprint for production-ready AI. We design system topologies that balance performance, latency, and cost, ensuring models can access secure enterprise data via Retrieval-Augmented Generation (RAG) or hybrid approaches without compromising compliance or data residency requirements.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-6">Architectural Focus Areas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "System Integration Design",
                  "Secure Data Pipelines & RAG",
                  "Model Serving & Inference Scaling",
                  "Security & Boundary Management",
                  "Cost & Performance Optimization",
                  "Hybrid & Multi-Cloud Topology"
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
              <h3 className="text-xl font-medium mb-4 text-foreground">Discuss Architecture</h3>
              <p className="text-sm md:text-base text-on-surface-variant mb-8 font-light">
                Consult with an enterprise AI architect to review your technical requirements and constraints.
              </p>
              <Link href="/contact-us" className="btn-solid w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-[11px] font-semibold tracking-widest uppercase shadow-md">
                Schedule Technical Review <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}