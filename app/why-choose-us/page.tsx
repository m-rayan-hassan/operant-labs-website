"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, Target, ShieldCheck, MessageSquare, ArrowRight } from 'lucide-react';

// Replace with your actual image path


const WhyChooseUs = () => {
  const advantages = [
    {
      title: "Engineering Excellence",
      desc: "Deep dive into your business model, current constraints, and growth objectives to define the right architecture.",
      tag: "Best-in-class Technologies",
      icon: Code2
    },
    {
      title: "Business Alignment",
      desc: "Every technical decision is driven by your specific business goals, not just technical trends.",
      tag: "Strategic Partnership",
      icon: Target
    },
    {
      title: "Enterprise-Grade Security",
      desc: "Security is built in from day one, ensuring your data and infrastructure are protected against modern threats.",
      tag: "Zero-Trust Architecture",
      icon: ShieldCheck
    },
    {
      title: "Transparent Partnership",
      desc: "No technical jargon hiding missed deadlines. We provide clear communication, honest timelines, and measurable results.",
      tag: "Shared Success",
      icon: MessageSquare
    }
  ];

  return (
    <div className="min-h-screen pb-24">      
      <main className="relative z-10">
        
        {/* ── HERO SECTION ── */}
        <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
          <Image
          src="/why-choose-us-hero.png"
            alt="Why Choose Us"
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
                  The Operant Advantage
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-normal mb-6 leading-tight">
                  Why Partner <span className="text-electric-cyan">With Us?</span>
                </h1>
                <p className="text-lg text-on-surface-variant font-light leading-relaxed">
                  More than a vendor — we are your long-term technology partner, aligned to your goals every step of the way.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── ADVANTAGES SECTION ── */}
        <section className="py-24 md:py-32 px-6 relative">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-electric-cyan/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
          
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
            {advantages.map((adv, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-10 md:p-12 group hover:border-electric-cyan/40 hover:bg-electric-cyan/5 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-surface-dim border border-border-subtle flex items-center justify-center group-hover:border-electric-cyan/50 group-hover:bg-electric-cyan/10 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-500">
                    <adv.icon size={22} className="text-foreground group-hover:text-electric-cyan transition-colors" />
                  </div>
                  <span className="text-[11px] uppercase tracking-widest text-electric-cyan font-semibold">
                    {adv.tag}
                  </span>
                </div>
                <h3 className="text-xl font-medium mb-4 tracking-tight group-hover:text-electric-cyan transition-colors duration-300">
                  {adv.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                  {adv.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── TRUSTED BY LEADERS ── */}
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
                Building long-term relationships based on <span className="text-electric-cyan">Trust.</span>
              </h2>
              <p className="text-on-surface-variant font-light leading-relaxed max-w-3xl mx-auto mb-8">
                Organisations choose Operant Labs because they want a technology partner who understands business.
                We move away from generic templates to build custom value that lasts.
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

export default WhyChooseUs;