"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { 
  Search, LayoutGrid, Users, 
  Activity, CheckCircle2, Cloud, FileSearch, ArrowRight
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Maturity Assessment",
    description: "We evaluate your current data infrastructure, technical capabilities, and business objectives to determine organizational AI readiness.",
    icon: Search,
    items: ["Data landscape audit", "Technical debt analysis", "Stakeholder interviews"]
  },
  {
    step: "02",
    title: "Strategic Roadmapping",
    description: "Aligning AI capabilities with business outcomes. We identify high-impact use cases and sequence them to deliver early ROI while building long-term capability.",
    icon: FileSearch,
    items: ["Use-case prioritization", "Build vs. buy analysis", "ROI forecasting"]
  },
  {
    step: "03",
    title: "Solution Architecture",
    description: "Designing secure, scalable systems that integrate seamlessly with your enterprise architecture while adhering to stringent compliance and governance standards.",
    icon: LayoutGrid,
    items: ["System topology design", "Data pipeline blueprinting", "Security boundary definition"]
  },
  {
    step: "04",
    title: "Proof of Concept (PoC)",
    description: "Rapid prototyping of the highest-priority use case to validate technical feasibility, test user adoption, and prove business value before scaling.",
    icon: Cloud,
    items: ["Rapid prototyping", "Technical validation", "Value realization metrics"]
  },
  {
    step: "05",
    title: "Forward-Deployed Engineering",
    description: "Deploying specialized, cross-functional squads to execute the full-scale implementation, embedding directly into your organization to accelerate delivery.",
    icon: Users,
    items: ["Agile execution", "Enterprise integration", "Knowledge transfer"]
  },
  {
    step: "06",
    title: "Managed Operations (MLOps)",
    description: "Continuous monitoring, fine-tuning, and support of deployed systems to prevent model drift and ensure sustained performance over time.",
    icon: Activity,
    items: ["Performance monitoring", "Drift detection", "Continuous optimization"]
  }
];

export default function OurProcessPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-electric-cyan/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="section-number justify-center mb-6">Execution</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-normal mb-6 leading-tight">
            How We <span className="text-electric-cyan">Deliver</span>
          </h1>
          <p className="text-lg text-on-surface-variant font-light leading-relaxed mb-6">
            A proven, 6-stage enterprise execution model designed to de-risk AI investments, accelerate time-to-value, and build sustainable technical capabilities.
          </p>
        </motion.div>
      </section>

      {/* FULL-WIDTH HERO IMAGE: Replaced card look with a cinematic edge-to-edge banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative w-full h-[350px] md:h-[500px] lg:h-[600px] mb-32 overflow-hidden"
      >
        {/* Top & Bottom gradient fades to seamlessly blend the image into the background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-electric-cyan/5 mix-blend-overlay z-10 pointer-events-none"></div>
        
        <Image
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070"
          alt="Technology process and execution"
          fill
          className="object-cover opacity-60"
          priority
          unoptimized
        />
      </motion.div>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 relative">
        {/* Vertical Line for desktop timeline */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-border-strong to-transparent -translate-x-1/2 z-0" />

        <div className="space-y-12 lg:space-y-0 relative z-10">
          {processSteps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${
                  !isEven ? "lg:flex-row-reverse" : ""
                } relative`}
              >
                {/* Timeline Node */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-2 border-border-strong items-center justify-center z-10 shadow-lg">
                  <span className="text-[11px] font-semibold text-foreground tracking-widest">{step.step}</span>
                </div>

                {/* Content Box */}
                <div className={`w-full lg:w-1/2 ${isEven ? "lg:pr-16 text-left" : "lg:pl-16 lg:text-left"} flex flex-col ${!isEven && "lg:items-start"}`}>
                  <div className={`glass-card p-8 lg:p-10 w-full relative group ${
                    isEven 
                      ? "hover:-translate-x-2" 
                      : "hover:translate-x-2"
                  } transition-transform duration-300`}>
                    
                    {/* Mobile Step Indicator */}
                    <div className="lg:hidden w-10 h-10 mb-6 rounded-full bg-background border border-border-strong flex items-center justify-center shadow-md">
                      <span className="text-[10px] font-semibold text-foreground tracking-widest">{step.step}</span>
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-surface-dim border border-border-strong flex items-center justify-center mb-6 text-foreground group-hover:text-electric-cyan group-hover:border-electric-cyan/40 transition-colors">
                      <step.icon size={20} />
                    </div>
                    
                    <h3 className="text-xl font-medium mb-4 text-foreground group-hover:text-electric-cyan transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-on-surface-variant font-light leading-relaxed mb-6">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {step.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-electric-cyan shrink-0 mt-0.5 opacity-80" />
                          <span className="text-[13px] text-foreground/80 font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Bottom Panel */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-10 md:p-16 relative overflow-hidden border-electric-cyan/20"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-electric-cyan/10 blur-[80px] rounded-full z-0"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full z-0"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl italic font-normal mb-6">Begin Phase One</h2>
            <p className="text-sm text-on-surface-variant font-light mb-8 max-w-xl mx-auto">
              Engage our team for a Discovery & Maturity Assessment to define your enterprise AI roadmap.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact-us" className="btn-solid text-[11px] px-8 py-4 rounded-full font-semibold tracking-widest uppercase shadow-md hover:shadow-lg">
                Request an Assessment
              </Link>
              <Link 
                href="/services" 
                className="btn-outline text-[11px] px-8 py-4 rounded-full font-semibold tracking-widest uppercase flex items-center gap-2 bg-surface/50 backdrop-blur-md"
              >
                Explore Services <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}