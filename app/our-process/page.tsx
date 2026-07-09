"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Compass, Code, Rocket, ArrowRight } from 'lucide-react';

// Replace with your actual image path


const OurProcess = () => {
  const steps = [
    {
      title: "Discovery & Strategy",
      desc: "We dive deep into your business model, current constraints, and growth objectives to define the right architecture.",
      detail: "Deep audit of existing tech stacks and workflow bottlenecks.",
      icon: Search
    },
    {
      title: "Solution Design",
      desc: "Creating the technical blueprint, selecting the right stack, and mapping the user journey or data flow.",
      detail: "Custom system architecture designed for 10x scalability.",
      icon: Compass
    },
    {
      title: "Agile Engineering",
      desc: "Iterative development with regular feedback loops, ensuring what we build exactly matches what you need.",
      detail: "Clean code standards with continuous integration pipelines.",
      icon: Code
    },
    {
      title: "Deployment & Scale",
      desc: "Secure, zero-downtime deployment followed by ongoing monitoring, support, and optimization.",
      detail: "24/7 reliability monitoring and performance tuning.",
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen pb-24">
      <main className="relative z-10">
        
        {/* ── HERO SECTION ── */}
        <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
          <Image
          src="/process-hero.jpeg"
            alt="Our Process"
            fill
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          
          <div className="absolute inset-0 z-20">
            <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center pt-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <div className="section-number mb-6">
                  Execution Framework
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-normal mb-6 leading-tight">
                  From <span className="text-electric-cyan">Blueprint</span> to Deployment
                </h1>
                <p className="text-lg text-on-surface-variant font-light leading-relaxed">
                  A structured approach to delivering successful digital solutions — transparent, iterative, and results-driven.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── PROCESS STEPS ── */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-8 md:p-10 relative group overflow-hidden flex flex-col h-full hover:border-electric-cyan/40 hover:bg-electric-cyan/5 transition-all duration-500"
                >
                  {/* Faded Background Number */}
                  <div className="absolute -right-4 -bottom-6 text-[100px] font-bold text-border-strong/20 select-none group-hover:text-electric-cyan/10 transition-colors duration-500">
                    0{idx + 1}
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-full border border-border-subtle bg-surface-dim flex items-center justify-center text-foreground group-hover:border-electric-cyan/50 group-hover:bg-electric-cyan/10 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-500">
                        <step.icon size={20} className="group-hover:text-electric-cyan transition-colors" />
                      </div>
                      <div className="h-px flex-grow bg-border-strong group-hover:bg-electric-cyan/30 transition-colors"></div>
                    </div>
                    
                    <h3 className="text-xl font-medium mb-4 tracking-tight group-hover:text-electric-cyan transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-on-surface-variant text-sm leading-relaxed font-light mb-8 flex-grow">
                      {step.desc}
                    </p>
                    
                    <div className="pt-5 border-t border-border-strong group-hover:border-electric-cyan/30 transition-colors">
                      <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-electric-cyan font-semibold leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CALLOUT ── */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 py-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel rounded-3xl p-10 md:p-16 relative overflow-hidden border-electric-cyan/20"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-electric-cyan/10 blur-[80px] rounded-full z-0"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full z-0"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl italic font-normal mb-6">
                Ready to bring your project to life?
              </h2>
              <p className="text-on-surface-variant font-light leading-relaxed max-w-2xl mx-auto mb-8">
                We don't just write code — we build resilient business systems that grow as you grow.
                Every step is documented, transparent, and results-driven.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact-us" className="btn-solid text-[11px] px-8 py-4 rounded-full font-semibold tracking-widest uppercase shadow-md hover:shadow-lg">
                  Schedule a Consultation
                </Link>
                <Link
                  href="/services"
                  className="btn-outline text-[11px] px-8 py-4 rounded-full font-semibold tracking-widest uppercase flex items-center gap-2 bg-surface/50 backdrop-blur-md"
                >
                  Explore Our Services <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
        
      </main>
    </div>
  );
};

export default OurProcess;