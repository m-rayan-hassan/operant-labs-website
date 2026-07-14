"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const expertise = [
  {
    title: "AI Strategy & Transformation",
    desc: "Assess enterprise readiness, map value-creation opportunities, and define an implementation roadmap.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Technical AI Due Diligence",
    desc: "Deep technical assessments of AI architectures, data maturity, and algorithmic IP for private equity.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "AI Solution Architecture",
    desc: "Design secure, scalable, and compliant AI architectures that seamlessly integrate with your systems.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Forward-Deployed Engineering",
    desc: "Embed specialized, multi-disciplinary engineering teams into your organization to execute at speed.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Intelligent Automation",
    desc: "Automate complex, multi-step business processes by integrating legacy systems with modern AI.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Managed AI Operations",
    desc: "Provide continuous monitoring, optimization, and support for deployed AI systems to ensure sustained ROI.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-24">
      <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
        <Image
          src="/about-us-hero.png"
          alt="Engineering AI Transformation"
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
              <div className="section-number mb-6">Who We Are</div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-normal mb-6 leading-tight">
                Engineering AI <span className="text-electric-cyan">Transformation</span>
              </h1>

              <p className="text-sm md:text-base text-on-surface-variant font-light leading-relaxed max-w-xl">
                Operant Labs is an AI transformation, technical advisory, and enterprise execution partner. We bridge the gap between high-level ambition and robust production systems, helping enterprises and investor-backed companies assess, architect, and deploy AI at scale. We do not just build software; we engineer sustainable business value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <div className="section-number-left mb-6">The Origin</div>
            <h2 className="text-3xl md:text-4xl italic font-normal">
              Our Story
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-8 space-y-6 text-sm md:text-base text-on-surface-variant leading-relaxed font-light"
          >
            <p>
              <strong className="text-foreground font-medium">
                Operant Labs
              </strong>{" "}
              was founded on the belief that traditional software development models are insufficient for the AI era. True transformation requires more than staff augmentation or off-the-shelf wrappers; it demands strategic alignment, proprietary engineering depth, and a commitment to rigorous governance.
            </p>
            <p>
              We act as the execution engine for enterprise AI. By combining our forward-deployed engineering model with deep technical advisory, we help Private Equity firms evaluate technical IP and assist enterprises in modernizing data infrastructure, automating cognitive workflows, and driving measurable EBITDA growth through applied AI.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 bg-surface-dim border-y border-border-subtle relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col mb-16 text-left"
          >
            <div className="section-number-left mb-6">Capabilities</div>
            <h2 className="text-3xl md:text-4xl italic font-normal">
              Our Expertise
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {expertise.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card flex flex-col group overflow-hidden hover:border-electric-cyan/40 hover:bg-electric-cyan/5 transition-all duration-500 h-full"
              >
                <div className="relative h-48 overflow-hidden bg-surface">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan shadow-[0_0_8px_rgba(0,240,255,0.8)] group-hover:shadow-[0_0_12px_rgba(0,240,255,1)] transition-shadow"></div>
                    <h3 className="text-lg font-medium tracking-wide group-hover:text-electric-cyan transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed text-[13px] pl-4 border-l border-border-strong group-hover:border-electric-cyan/30 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass-panel p-12 md:p-20 rounded-3xl relative overflow-hidden border-electric-cyan/20 shadow-2xl"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-electric-cyan/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="section-number justify-center mb-8">Philosophy</div>
            <h2 className="text-3xl md:text-4xl italic font-normal leading-snug">
              Technology should drive{" "}
              <span className="text-electric-cyan">enterprise value</span>,{" "}
              <br className="hidden md:block" />
              <span className="text-on-surface-variant">
                not technical debt.
              </span>
            </h2>
          </div>
        </motion.div>
      </section>

      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 md:p-14 hover:border-electric-cyan/30 transition-colors duration-500"
          >
            <span className="text-electric-cyan font-semibold tracking-[0.2em] uppercase text-[11px] block mb-6">
              Our Commitment
            </span>
            <h3 className="text-2xl font-medium mb-6">Technical Depth</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm font-light">
              We do not rely on API wrappers or generic staff augmentation. Our teams bring deep architectural expertise, ensuring the systems we deploy are secure, compliant, and highly performant.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-10 md:p-14 hover:border-electric-cyan/30 transition-colors duration-500"
          >
            <span className="text-electric-cyan font-semibold tracking-[0.2em] uppercase text-[11px] block mb-6">
              Strategic Partnership
            </span>
            <h3 className="text-2xl font-medium mb-6">Investor Aligned</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm font-light">
              Organizations partner with Operant Labs because we understand the fundamental link between technical execution and EBITDA growth, operating as true technical partners rather than vendors.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-10 md:p-16 relative overflow-hidden border-electric-cyan/20"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-electric-cyan/10 blur-[80px] rounded-full z-0"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full z-0"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl italic font-normal mb-6">
              Ready to initiate a{" "}
              <span className="text-electric-cyan">transformation?</span>
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant font-light leading-relaxed max-w-2xl mx-auto mb-8">
              Partner with Operant Labs and deploy the engineering capabilities required to scale your enterprise.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="btn-solid text-[11px] px-8 py-4 rounded-full font-semibold tracking-widest uppercase shadow-md hover:shadow-lg"
              >
                Schedule a Briefing
              </Link>
              <Link
                href="/capabilities"
                className="btn-outline text-[11px] px-8 py-4 rounded-full font-semibold tracking-widest uppercase flex items-center gap-2 bg-surface/50 backdrop-blur-md"
              >
                Explore Capabilities <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
