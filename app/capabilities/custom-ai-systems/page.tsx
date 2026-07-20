"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Cpu } from "lucide-react";

export default function CustomAISystemsPage() {
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
              <Cpu size={12} className="text-electric-cyan" />
              <span className="text-[10px] text-foreground uppercase tracking-[0.15em] font-medium">Capability</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-normal mb-6 leading-tight">
              Custom AI <span className="text-electric-cyan">Systems</span>
            </h1>
            <p className="text-base md:text-lg text-on-surface-variant font-light leading-relaxed">
              Build proprietary machine learning models, generative AI applications, and specialized intelligent systems tailored to your unique operational requirements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/5 h-[280px] lg:h-[320px] relative rounded-3xl overflow-hidden border border-border-strong shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
              alt="Custom AI Systems"
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
                Off-the-shelf AI solutions often fail to capture the nuanced domain expertise and specific operational workflows of an enterprise. Real competitive advantage comes from bespoke systems that leverage your proprietary data.
              </p>
              <p className="text-base md:text-lg mb-10">
                We engineer custom AI solutions ranging from advanced predictive analytics and computer vision systems to enterprise-grade generative AI co-pilots. Our engineering process focuses on data quality, model fine-tuning, and robust evaluation frameworks, ensuring the systems we deploy are accurate, highly performant, and deeply integrated into your business logic.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-6">Development Focus</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Generative AI & Enterprise Co-Pilots",
                  "Predictive Analytics & Forecasting",
                  "Computer Vision & Pattern Recognition",
                  "Natural Language Processing (NLP)",
                  "Model Fine-Tuning & Alignment",
                  "Custom Agentic Workflows"
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
              <h3 className="text-xl font-medium mb-4 text-foreground">Build Proprietary AI</h3>
              <p className="text-sm md:text-base text-on-surface-variant mb-8 font-light">
                Discuss your use case with our AI engineers to determine feasibility, data requirements, and technical approach.
              </p>
              <Link href="/contact-us" className="btn-solid w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-[11px] font-semibold tracking-widest uppercase shadow-md">
                Discuss Your Use Case <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}