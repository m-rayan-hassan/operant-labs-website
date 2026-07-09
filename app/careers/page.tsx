"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Users,
  Target,
  Code2,
  Cpu,
  PenTool,
  LineChart,
  Megaphone,
  FileText,
  Search,
  MessageSquare,
  ClipboardCheck,
  Rocket,
  ArrowRight,
} from "lucide-react";

// --- Data Arrays Based on Your Draft ---

const whatWeLookFor = [
  {
    title: "Passionate Innovators",
    description: "Passionate about technology and innovation, always looking for better ways to build.",
    icon: Lightbulb,
  },
  {
    title: "Curious Problem Solvers",
    description: "Strong problem solvers who are curious, eager to learn, and love tackling complex challenges.",
    icon: Search,
  },
  {
    title: "Collaborative Team Players",
    description: "Collaborative, adaptable, and highly focused on delivering quality work together.",
    icon: Users,
  },
];

const opportunityAreas = [
  { name: "Software Engineering & DevOps", icon: Code2 },
  { name: "Artificial Intelligence & Machine Learning", icon: Cpu },
  { name: "UI/UX Design & Quality Assurance", icon: PenTool },
  { name: "Business Analysis & Project Management", icon: LineChart },
  { name: "Sales, Marketing & Operations", icon: Megaphone },
];

const hiringProcess = [
  {
    step: "01",
    title: "Application",
    description: "Send us your resume and tell us about your interests and what drives you.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Initial Review",
    description: "We assess how your experience, skills, and background fit the role.",
    icon: Search,
  },
  {
    step: "03",
    title: "Interview(s)",
    description: "We talk through your background, technical expertise, and career goals.",
    icon: MessageSquare,
  },
  {
    step: "04",
    title: "Assessment",
    description: "Where relevant, complete a short, practical task tied directly to the role.",
    icon: ClipboardCheck,
  },
  {
    step: "05",
    title: "Offer & Onboarding",
    description: "Join the team and start contributing to real, impactful projects from day one.",
    icon: Rocket,
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <div className="section-number mb-6">08 / Careers</div>
          <h1 className="text-4xl md:text-5xl italic mb-6 leading-tight">
            Build the Future with <span className="text-electric-cyan">Operant Labs</span>
          </h1>
          <p className="text-lg text-on-surface-variant font-light leading-relaxed mb-8">
            We're a team of innovators and problem solvers building technology that creates real business impact. We look for people who are curious, collaborative, and committed to good work, and we invest in continuous learning through real projects and mentorship.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#open-positions" className="btn-solid text-[11px] px-8 py-3.5 rounded-full font-semibold tracking-widest uppercase shadow-md">
              View Open Positions
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-border-subtle shadow-xl group"
        >
          <Image 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="Operant Labs Team Collaboration" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
        </motion.div>
      </section>

      {/* 2. What We Look For */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">What We Look For</h2>
          <p className="text-on-surface-variant font-light">
            We don't just hire for skills; we hire for mindset. If you share these traits, you'll fit right in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whatWeLookFor.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 group hover:border-electric-cyan/40 hover:bg-electric-cyan/5 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-dim flex items-center justify-center mb-6 border border-border-subtle group-hover:border-electric-cyan/50 group-hover:bg-electric-cyan/10 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-500">
                <item.icon size={22} className="text-foreground group-hover:text-electric-cyan transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-electric-cyan transition-colors">
                {item.title}
              </h3>
              <p className="text-[13px] text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Opportunity Areas */}
      <section className="bg-surface-dim border-y border-border-subtle py-24 mb-32 relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Opportunity Areas</h2>
            <p className="text-on-surface-variant font-light max-w-2xl">
              We operate across the entire technology lifecycle. Explore the disciplines where you can make your mark.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            {opportunityAreas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 px-6 py-4 rounded-full glass-card hover:border-electric-cyan/40 hover:bg-electric-cyan/5 transition-all cursor-default group"
              >
                <area.icon size={16} className="text-foreground/60 group-hover:text-electric-cyan transition-colors" />
                <span className="text-[13px] font-medium text-foreground">{area.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Hiring Process */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold mb-4">Our Hiring Process</h2>
          <p className="text-on-surface-variant font-light">
            We respect your time. Our process is designed to be transparent, efficient, and mutually beneficial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {hiringProcess.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative glass-card p-6 flex flex-col group overflow-hidden"
            >
              {/* Background Large Number */}
              <div className="absolute -right-4 -bottom-6 text-[80px] font-bold text-border-strong/30 select-none group-hover:text-electric-cyan/10 transition-colors duration-500">
                {step.step}
              </div>

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-surface border border-border-subtle flex items-center justify-center mb-5 group-hover:bg-electric-cyan/10 group-hover:border-electric-cyan/30 transition-all">
                  <step.icon size={16} className="text-foreground group-hover:text-electric-cyan transition-colors" />
                </div>
                <h4 className="text-sm font-bold text-foreground mb-3">{step.title}</h4>
                <p className="text-[12px] text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. CTA Bottom Panel */}
      <section id="open-positions" className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-10 md:p-16 relative overflow-hidden border-electric-cyan/20"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-electric-cyan/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl italic font-normal mb-8">
              Ready to join our team?
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link 
                href="#open-positions" 
                className="btn-solid text-[11px] px-8 py-4 rounded-full font-semibold tracking-widest uppercase shadow-md hover:shadow-lg"
              >
                View Open Positions
              </Link>
              <Link 
                href="/contact-us" 
                className="btn-outline text-[11px] px-8 py-4 rounded-full font-semibold tracking-widest uppercase flex items-center gap-2 bg-surface/50 backdrop-blur-md"
              >
                Submit Your Resume <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
      
    </div>
  );
}