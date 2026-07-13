"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";

export default function InvestorsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section: Text on Left, Image on Right */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Original Text (Untouched) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-strong bg-border-subtle mb-6">
              <TrendingUp size={12} className="text-electric-cyan" />
              <span className="text-[10px] text-foreground uppercase tracking-[0.15em] font-medium">Private Capital</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-normal mb-6 leading-tight">
              AI Value Creation for <span className="text-electric-cyan">Investors</span>
            </h1>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed">
              Partner with Operant Labs to assess AI maturity, validate technical IP, and deploy engineering teams across your portfolio to drive measurable enterprise value.
            </p>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden glass-card group shadow-2xl lg:ml-auto"
          >
            <div className="absolute inset-0 bg-electric-cyan/5 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
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

      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8 space-y-8 text-on-surface-variant font-light leading-relaxed">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-base md:text-lg mb-6">
                Private equity and venture capital firms recognize AI as a critical lever for value creation, but identifying the right opportunities and executing them across a diverse portfolio requires specialized technical capacity.
              </p>
              <p className="mb-10">
                Operant Labs acts as the technical operating partner for investment firms. We provide pre-acquisition technical due diligence to validate AI assets, and post-acquisition engineering teams to modernize data infrastructure, automate workflows, and deploy proprietary AI solutions that accelerate EBITDA growth.
              </p>

              {/* Visual break before the engagement models */}
              <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden glass-card mb-10 group shadow-md">
                <div className="absolute inset-0 bg-background/20 z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
                  alt="Global network and technological infrastructure"
                  fill
                  className="object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  unoptimized
                />
              </div>

              <h2 className="text-2xl font-semibold text-foreground mb-6">Our Engagement Models</h2>
              
              <div className="space-y-8 mb-12">
                <div className="glass-card p-6 border-l-2 border-l-electric-cyan border-t-border-subtle border-r-border-subtle border-b-border-subtle bg-surface/30">
                  <h3 className="text-lg font-medium text-foreground mb-2">Pre-Acquisition Technical Due Diligence</h3>
                  <p className="text-sm font-light leading-relaxed text-on-surface-variant mb-4">
                    Objective, code-level audits of target companies to validate claims of proprietary AI, assess data quality, evaluate infrastructure scalability, and uncover hidden technical debt before finalizing transactions.
                  </p>
                  <Link href="/capabilities/ai-due-diligence" className="text-electric-cyan text-[11px] uppercase tracking-widest font-semibold flex items-center gap-1 group">
                    Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="glass-card p-6 border-l-2 border-l-electric-cyan border-t-border-subtle border-r-border-subtle border-b-border-subtle bg-surface/30">
                  <h3 className="text-lg font-medium text-foreground mb-2">Portfolio-Wide Value Creation</h3>
                  <p className="text-sm font-light leading-relaxed text-on-surface-variant mb-4">
                    Systematic assessment of portfolio companies to identify the highest-ROI automation and AI opportunities. We develop tailored implementation roadmaps focused on margin expansion and revenue acceleration.
                  </p>
                  <Link href="/capabilities/ai-strategy" className="text-electric-cyan text-[11px] uppercase tracking-widest font-semibold flex items-center gap-1 group">
                    Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="glass-card p-6 border-l-2 border-l-electric-cyan border-t-border-subtle border-r-border-subtle border-b-border-subtle bg-surface/30">
                  <h3 className="text-lg font-medium text-foreground mb-2">Execution &amp; Forward-Deployed Engineering</h3>
                  <p className="text-sm font-light leading-relaxed text-on-surface-variant mb-4">
                    Deploying specialized, cross-functional engineering squads directly into portfolio companies to rapidly build, test, and scale the AI solutions identified in the value-creation roadmap.
                  </p>
                  <Link href="/capabilities/forward-deployed-engineering" className="text-electric-cyan text-[11px] uppercase tracking-widest font-semibold flex items-center gap-1 group">
                    Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
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
              <h3 className="text-xl font-medium mb-4 text-foreground">Partner with Us</h3>
              <p className="text-sm text-on-surface-variant mb-8 font-light">
                Discuss due diligence requirements or schedule a portfolio-wide AI readiness assessment.
              </p>
              <Link href="/contact-us" className="btn-solid w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-[11px] font-semibold tracking-widest uppercase shadow-md">
                Schedule a Briefing <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}