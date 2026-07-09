"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function DataAnalyticsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="section-number mb-6">Service 05</div>
          <h1 className="text-4xl md:text-5xl italic font-normal mb-6 leading-tight">
            Turning Business Data <span className="text-electric-cyan">Into Decisions</span>
          </h1>
          <p className="text-lg text-on-surface-variant font-light leading-relaxed mb-8">
            Most organisations sit on more data than they use. We help you collect, clean, and visualise it, so leadership can make decisions based on evidence rather than guesswork.
          </p>
          <Link href="/contact" className="btn-solid inline-block text-xs px-6 py-3 rounded-full font-semibold tracking-widest uppercase">Explore Data Solutions</Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-border-subtle">
          <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Data Analytics Dashboards" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 grid md:grid-cols-2 gap-12">
        <div className="glass-panel p-8 md:p-10 rounded-3xl">
          <h3 className="text-2xl italic font-normal mb-8">What We Deliver</h3>
          <ul className="space-y-4">
            {[
              "Data pipeline and warehouse design",
              "Business intelligence dashboards and reporting",
              "Predictive and prescriptive analytics",
              "Data integration across CRM, ERP, and operations",
              "Data governance and quality management"
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
              { title: "Single Source of Truth", desc: "Unify fragmented systems into one reliable hub for all business data." },
              { title: "Confident Decision Making", desc: "Empower leadership at every level to act quickly and accurately based on facts." },
              { title: "Proactive Strategy", desc: "Gain early visibility into market trends, operational risks, and hidden opportunities." }
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

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="glass-panel rounded-3xl p-12 relative overflow-hidden">
           <div className="relative z-10">
             <h2 className="text-3xl md:text-4xl italic font-normal mb-6">Let's put your data to work.</h2>
             <div className="flex flex-wrap justify-center gap-4">
               <Link href="/contact" className="btn-solid text-xs px-8 py-4 rounded-full font-semibold tracking-widest uppercase">Schedule a Consultation</Link>
               <Link href="/contact" className="btn-outline text-xs px-8 py-4 rounded-full font-semibold tracking-widest uppercase">Explore Data Solutions</Link>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}