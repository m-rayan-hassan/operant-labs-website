"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function CustomSoftwarePage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="section-number mb-6">Service 01</div>
          <h1 className="text-4xl md:text-5xl italic font-normal mb-6 leading-tight">
            Building Software That Fits Your Business, <span className="text-electric-cyan">Not the Other Way Around</span>
          </h1>
          <p className="text-lg text-on-surface-variant font-light leading-relaxed mb-8">
            Off-the-shelf software often forces your business to adapt to it. We build secure, scalable, high-performance software tailored to your operations, whether that's enterprise systems, internal platforms, web apps, or mobile solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact-us" className="btn-solid inline-block text-xs px-6 py-3 rounded-full font-semibold tracking-widest uppercase">Schedule a Consultation</Link>
            <Link href="#process" className="btn-outline text-xs px-6 py-3 rounded-full font-semibold tracking-widest uppercase flex items-center gap-2">
              How We Deliver <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-border-subtle">
          <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="Custom Software Code" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
        </motion.div>
      </section>

      {/* What We Build & Benefits */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 grid md:grid-cols-2 gap-12">
        <div className="glass-panel p-8 md:p-10 rounded-3xl">
          <h3 className="text-2xl italic font-normal mb-8">What We Build</h3>
          <ul className="space-y-4">
            {[
              "Enterprise software for business-critical operations",
              "Web applications with seamless, secure user experiences",
              "Mobile applications for Android and iOS",
              "Internal platforms, dashboards, and employee portals",
              "SaaS products, from concept to ongoing support",
              "Legacy system modernisation"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-on-surface-variant">
                <CheckCircle2 size={20} className="text-electric-cyan shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="glass-panel p-8 md:p-10 rounded-3xl bg-surface/30">
          <h3 className="text-2xl italic font-normal mb-8">Business Benefits</h3>
          <ul className="space-y-6">
            {[
              { title: "Improved Efficiency", desc: "Boost productivity through automation-ready design tailored to your exact workflows." },
              { title: "Better Decision Making", desc: "Gain clarity through real-time dashboards and comprehensive reporting." },
              { title: "Stronger Security", desc: "Built with a security-first mindset and greater scalability as your company grows." }
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-electric-cyan/10 flex items-center justify-center shrink-0 border border-electric-cyan/20">
                  <span className="text-electric-cyan text-xs font-bold">{i+1}</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-on-surface-variant">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      {/* CTA Bottom */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="glass-panel rounded-3xl p-12 border-electric-cyan/20 relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-electric-cyan/10 blur-[120px] rounded-full z-0"></div>
           <div className="relative z-10">
             <h2 className="text-3xl md:text-4xl italic font-normal mb-6">Ready to build software that drives business growth?</h2>
             <div className="flex flex-wrap justify-center gap-4">
               <Link href="/contact-us" className="btn-solid text-xs px-8 py-4 rounded-full font-semibold tracking-widest uppercase">Schedule a Consultation</Link>
               <Link href="/contact-us" className="btn-outline text-xs px-8 py-4 rounded-full font-semibold tracking-widest uppercase">Discuss Your Project</Link>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}