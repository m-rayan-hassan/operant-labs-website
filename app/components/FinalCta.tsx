"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinalCta() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 relative overflow-hidden bg-background"
    >
      {/* Massive ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-electric-cyan/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Premium Glass Container */}
        <div className="relative rounded-[2.5rem] border border-border-strong bg-surface-dim/40 backdrop-blur-xl overflow-hidden shadow-2xl">
          
          {/* Inner Grid/Glow Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-electric-cyan/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,_black_10%,_transparent_70%)] pointer-events-none" />

          {/* Top border highlight line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-electric-cyan/50 to-transparent" />

          {/* Content Area */}
          <div className="relative z-10 px-6 py-24 md:py-32 text-center flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl text-foreground mb-6 font-semibold tracking-tight leading-[1.1]"
            >
              Initiate your{" "}
              <span className="italic font-light text-foreground/80">
                AI transformation.
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-on-surface-variant mb-10 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto"
            >
              Partner with our engineers to assess maturity, define strategy, and deploy enterprise-grade AI systems that scale with your ambition.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/contact-us"
                className="btn-solid text-[11px] px-8 py-4 rounded-full font-semibold tracking-widest uppercase cursor-pointer hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 flex items-center justify-center"
              >
                Schedule a Briefing
              </Link>
              <Link 
                href="/contact-us"
                className="btn-outline bg-background/50 backdrop-blur-md text-[11px] px-8 py-4 rounded-full font-semibold tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer hover:border-electric-cyan transition-colors duration-300 group"
              >
                Contact Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}