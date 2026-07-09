"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Make sure your header and footer are imported correctly in your actual file routing
// import Header from "../components/Header";
// import Footer from "../components/Footer";



const expertise = [
  {
    title: "Custom Software Development",
    desc: "Secure and scalable software built around how your business actually works.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Artificial Intelligence Solutions",
    desc: "Intelligent systems that automate work and sharpen decisions with precision.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Business Process Automation",
    desc: "Streamlined, connected workflows that bridge departments and eliminate friction.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800", // Replaced with high-res Unsplash alternative
  },
  {
    title: "Cloud & DevOps",
    desc: "Resilient infrastructure and faster, safer delivery pipelines for modern scale.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Data Analytics & BI",
    desc: "Turning raw data into actionable insights that leaders can act on immediately.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Technology Advisory",
    desc: "Informed technology investment and digital strategy aligned with business goals.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-24">
      {/* 
        NOTE: Header would go here. 
        Assuming your Header component is fixed at the top.
      */}
      
      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
        <Image
          src="/about-us-hero.png"
          alt="Business Automation"
          fill
          className="w-full h-full object-cover"
          priority
        />
        {/* Gradient overlays to blend smoothly into the background */}
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
                Innovation Architecture
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-normal mb-6 leading-tight">
                Building Technology Around <span className="text-electric-cyan">Business</span>
              </h1>

              <p className="text-lg text-on-surface-variant font-light leading-relaxed">
                Operant Labs is a technology consulting and innovation company specialising in
                software development, intelligent automation, and AI solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <div className="section-number-left mb-6">The Origin</div>
            <h2 className="text-3xl md:text-4xl italic font-normal">Our Story</h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-8 space-y-8 text-lg md:text-xl text-on-surface-variant leading-relaxed font-light"
          >
            <p>
              Operant Labs was founded to bridge the gap between business strategy and technology execution. We specialize in practical, scalable solutions aligned with real goals—not complex systems that fail to deliver.
            </p>
            <p>
              We work as a strategic partner through discovery, planning, development, deployment, and long-term support, for startups, growing businesses, and enterprises alike.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── EXPERTISE GRID ── */}
      <section className="py-16 md:py-20 px-6 bg-surface-dim border-y border-border-subtle relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col mb-16 text-left"
          >
            <div className="section-number-left mb-6">Capabilities</div>
            <h2 className="text-3xl md:text-4xl italic font-normal">Our Expertise</h2>
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
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-surface">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan shadow-[0_0_8px_rgba(0,240,255,0.8)] group-hover:shadow-[0_0_12px_rgba(0,240,255,1)] transition-shadow"></div>
                    <h3 className="text-lg font-medium tracking-wide group-hover:text-electric-cyan transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed text-sm pl-4 border-l border-border-strong group-hover:border-electric-cyan/30 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="py-16 md:py-20 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass-panel p-12 md:p-20 rounded-3xl relative overflow-hidden border-electric-cyan/20 shadow-2xl"
        >
          {/* Intense center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-electric-cyan/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="section-number justify-center mb-8">Philosophy</div>
            <h2 className="text-3xl md:text-4xl italic font-normal leading-snug">
              Technology should <span className="text-electric-cyan">empower</span> businesses,{" "}<br className="hidden md:block" />
              <span className="text-on-surface-variant">not complicate them.</span>
            </h2>
          </div>
        </motion.div>
      </section>

      {/* ── COMMITMENT & PARTNERSHIP ── */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
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
            <h3 className="text-2xl font-medium mb-6">Lasting Value</h3>
            <p className="text-on-surface-variant leading-relaxed text-base md:text-lg font-light">
              Every project begins with listening. We take the time to understand your long-term vision, ensuring what we build is secure, scalable, and reliable.
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
            <h3 className="text-2xl font-medium mb-6">Shared Success</h3>
            <p className="text-on-surface-variant leading-relaxed text-base md:text-lg font-light">
              Organizations choose Operant Labs because they want a technology partner who understands business, building long-term relationships based on trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 pb-16 text-center">
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
              Ready to build something <span className="text-electric-cyan">exceptional?</span>
            </h2>
            <p className="text-on-surface-variant font-light leading-relaxed max-w-2xl mx-auto mb-8">
              Partner with Operant Labs and let's turn your vision into a scalable, future-proof solution.
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

    </div>
  );
}