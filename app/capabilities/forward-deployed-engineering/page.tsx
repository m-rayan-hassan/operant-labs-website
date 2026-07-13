"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Users } from "lucide-react";

export default function ForwardDeployedEngineeringPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl lg:w-3/5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-strong bg-border-subtle mb-6">
              <Users size={12} className="text-electric-cyan" />
              <span className="text-[10px] text-foreground uppercase tracking-[0.15em] font-medium">Capability</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-normal mb-6 leading-tight">
              Forward-Deployed <span className="text-electric-cyan">Engineering</span>
            </h1>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed">
              Embed specialized, multi-disciplinary engineering teams into your organization to execute complex AI and software implementations at speed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/5 h-[280px] lg:h-[320px] relative rounded-3xl overflow-hidden border border-border-strong shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
              alt="Forward Deployed Engineering"
              fill
              className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              priority
              unoptimized
            />
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8 space-y-8 text-on-surface-variant font-light leading-relaxed">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-base md:text-lg mb-6">
                Executing an AI transformation requires specialized talent that is difficult to recruit, retain, and scale. Traditional staff augmentation often fails to deliver cohesive product vision, while rigid outsourced projects struggle to adapt to evolving enterprise needs.
              </p>
              <p className="mb-10">
                Our Forward-Deployed Engineering model solves this by embedding autonomous, high-performing squads directly into your organization. These teams—comprising AI architects, data engineers, full-stack developers, and MLOps specialists—operate as a direct extension of your capability, bringing proprietary frameworks, enterprise governance standards, and a delivery-focused culture to accelerate time-to-value.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-6">Our Delivery Teams Provide</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "AI & Machine Learning Engineers",
                  "Data Infrastructure Specialists",
                  "Full-Stack Product Engineers",
                  "Cloud & MLOps Architects",
                  "Technical Product Managers",
                  "Security & Governance Leads"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-electric-cyan shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="glass-card p-8 sticky top-32"
            >
              <h3 className="text-xl font-medium mb-4 text-foreground">Mobilize a Team</h3>
              <p className="text-sm text-on-surface-variant mb-8 font-light">
                Discuss your capability gaps and deploy a specialized engineering squad to accelerate your roadmap.
              </p>
              <Link href="/contact-us" className="btn-solid w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-[11px] font-semibold tracking-widest uppercase shadow-md">
                Deploy Engineering Team <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}