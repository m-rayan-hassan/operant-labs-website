"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function TechnologyAdvisoryPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="section-number mb-6">Service 06</div>
          <h1 className="text-4xl md:text-5xl italic font-normal mb-6 leading-tight">
            Strategic Guidance for <span className="text-electric-cyan">Confident Investment</span>
          </h1>
          <p className="text-lg text-on-surface-variant font-light leading-relaxed mb-8">
            Adopting the right technology takes more than technical skill—it takes a clear understanding of your business and industry. We help organisations evaluate opportunities, build strategies, and modernise with confidence.
          </p>
          <Link href="/contact-us" className="btn-solid inline-block text-xs px-6 py-3 rounded-full font-semibold tracking-widest uppercase">Talk to an Advisor</Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-border-subtle">
          <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Business Strategy Meeting" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
        </motion.div>
      </section>

      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <div className="glass-panel p-8 md:p-12 rounded-3xl">
          <div className="text-center mb-10">
            <h3 className="text-3xl italic font-normal mb-4">What We Help With</h3>
            <p className="text-on-surface-variant">Bridging the gap between business objectives and technical execution.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Technology strategy and roadmap development",
              "Solution architecture and feasibility assessment",
              "Legacy system modernisation planning",
              "Cloud migration and infrastructure strategy",
              "Ongoing digital transformation guidance",
              "Vendor evaluation and technology selection"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-surface/50 p-4 rounded-xl border border-border-subtle">
                <CheckCircle2 size={20} className="text-electric-cyan shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="glass-panel rounded-3xl p-12 relative overflow-hidden border-electric-cyan/20">
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-electric-cyan/10 blur-[80px] rounded-full z-0"></div>
           <div className="relative z-10">
             <h2 className="text-3xl md:text-4xl italic font-normal mb-6">Let's plan your next move.</h2>
             <div className="flex flex-wrap justify-center gap-4">
               <Link href="/contact-us" className="btn-solid text-xs px-8 py-4 rounded-full font-semibold tracking-widest uppercase">Schedule a Consultation</Link>
               <Link href="/contact-us" className="btn-outline text-xs px-8 py-4 rounded-full font-semibold tracking-widest uppercase">Talk to an Advisor</Link>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}