"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function BusinessAutomationPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="section-number mb-6">Service 02</div>
          <h1 className="text-4xl md:text-5xl italic font-normal mb-6 leading-tight">
            Transforming Manual Processes into <span className="text-electric-cyan">Intelligent Workflows</span>
          </h1>
          <p className="text-lg text-on-surface-variant font-light leading-relaxed mb-8">
            Manual processes slow teams down and add cost. We automate repetitive tasks, connect disconnected systems, and build workflows that let your people focus on higher-value work.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact-us" className="btn-solid inline-block text-xs px-6 py-3 rounded-full font-semibold tracking-widest uppercase">Schedule a Consultation</Link>
            <button className="btn-outline text-xs px-6 py-3 rounded-full font-semibold tracking-widest uppercase flex items-center gap-2">
              Explore Solutions <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-border-subtle">
          <Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" alt="Abstract automation gears" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 grid md:grid-cols-2 gap-12">
        <div className="glass-panel p-8 md:p-10 rounded-3xl">
          <h3 className="text-2xl italic font-normal mb-8">What We Automate</h3>
          <ul className="space-y-4">
            {[
              "Workflow and business process automation",
              "Document automation and approval management",
              "CRM and ERP integration",
              "HR process automation (recruitment, onboarding, leave)",
              "Finance and accounting automation",
              "Customer service automation (chatbots, ticket routing)"
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
              { title: "Lower Operational Costs", desc: "Drastically reduce manual errors and overhead associated with repetitive tasks." },
              { title: "Faster Decision Making", desc: "Gain agility through real-time data flow and automated reporting structures." },
              { title: "Stronger Compliance", desc: "Ensure regulatory adherence through robust, automated audit trails." }
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
             <h2 className="text-3xl md:text-4xl italic font-normal mb-6">Let's automate your business.</h2>
             <div className="flex flex-wrap justify-center gap-4">
               <Link href="/contact-us" className="btn-solid text-xs px-8 py-4 rounded-full font-semibold tracking-widest uppercase">Schedule a Consultation</Link>
               <Link href="/contact-us" className="btn-outline text-xs px-8 py-4 rounded-full font-semibold tracking-widest uppercase">Explore Automation Solutions</Link>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}