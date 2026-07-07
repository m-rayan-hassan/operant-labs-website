"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="py-24 md:py-32 border-t border-border-subtle relative overflow-hidden bg-background">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-24 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl text-foreground mb-6 font-semibold tracking-tight leading-[1.1]"
        >
          Let's build <span className="italic font-light text-foreground/80">intelligent</span> solutions.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-on-surface-variant mb-10 text-base font-light leading-relaxed max-w-xl mx-auto"
        >
          Ready to transform your operations? Partner with our engineers to design a system that scales with your ambition.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="btn-solid text-[11px] px-8 py-3.5 rounded-full font-semibold tracking-[0.1em] uppercase cursor-pointer">
            Book a Consultation
          </button>
          <button className="btn-outline text-[11px] px-8 py-3.5 rounded-full font-semibold tracking-[0.1em] uppercase flex items-center justify-center gap-2 cursor-pointer">
            Contact Us
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}