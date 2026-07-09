"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Zap, Cpu, Cloud, LineChart, Rocket, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    description: "Building secure, scalable, high-performance software tailored to your operations, from enterprise systems to SaaS products.",
    href: "/services/custom-software",
    icon: Code2,
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Intelligent Business Automation",
    description: "Automate repetitive tasks, connect disconnected systems, and build workflows that let your people focus on higher-value work.",
    href: "/services/business-automation",
    icon: Zap,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "AI Solutions",
    description: "Practical, responsible AI that solves real operational challenges, spanning virtual assistants to predictive analytics.",
    href: "/services/ai-solutions",
    icon: Cpu,
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Cloud & DevOps Solutions",
    description: "Design, migrate, and manage cloud environments, and build delivery pipelines that let your team ship reliably and often.",
    href: "/services/cloud-devops",
    icon: Cloud,
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Data Analytics & Business Intelligence",
    description: "Collect, clean, and visualise data, so leadership can make decisions based on evidence rather than guesswork.",
    href: "/services/data-analytics",
    icon: LineChart,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Technology Advisory & Digital Transformation",
    description: "Strategic guidance to evaluate opportunities, build roadmaps, and modernise operations with confidence.",
    href: "/services/technology-advisory",
    icon: Rocket,
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
];

const technologies = [
  { category: "AI & ML", tech: "Machine Learning, Generative AI, NLP, LLMs, Computer Vision" },
  { category: "Front-End", tech: "React.js, Next.js, Angular, Vue.js, TypeScript" },
  { category: "Back-End", tech: "Node.js, Python, Java, .NET, PHP, Go" },
  { category: "Mobile", tech: "Flutter, React Native, native Android and iOS" },
  { category: "Cloud", tech: "AWS, Microsoft Azure, Google Cloud, hybrid and multi-cloud" },
  { category: "DevOps", tech: "Docker, Kubernetes, CI/CD pipelines, Infrastructure as Code" },
  { category: "Data", tech: "PostgreSQL, MySQL, SQL Server, MongoDB, Firebase, Redis" },
  { category: "Security", tech: "IAM, Encryption, API Security, Compliance-oriented architecture" },
];

export default function ServicesLandingPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="section-number justify-center mb-6">Our Services</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-normal mb-6 leading-tight">
            Technology and Automation Solutions <span className="text-electric-cyan">Built Around Your Business</span>
          </h1>
          <p className="text-lg text-on-surface-variant font-light leading-relaxed mb-10">
            Operant Labs provides end-to-end technology services, from custom software and business automation to AI, cloud, data, and strategic advisory, so you can work with one trusted partner across your entire digital journey.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href} className="block h-full glass-card group flex flex-col relative overflow-hidden">
                {/* Top Image Section */}
                <div className="h-48 w-full relative overflow-hidden bg-card">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                  />
                  <div className="absolute top-4 right-4 bg-surface/40 backdrop-blur-md border border-border-subtle p-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight size={16} className="text-foreground" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 pt-0 flex-grow flex flex-col relative z-10">
                  <div className="w-14 h-14 -mt-7 mb-6 rounded-xl bg-card border border-border-strong flex items-center justify-center shadow-lg relative overflow-hidden group-hover:border-electric-cyan/50 transition-colors duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                    <service.icon size={24} className="text-foreground/80 group-hover:text-electric-cyan transition-colors" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-medium mb-3 group-hover:text-electric-cyan transition-colors">{service.title}</h3>
                  <p className="text-sm text-on-surface-variant font-light leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-border-subtle flex items-center gap-2 text-[11px] uppercase tracking-widest font-semibold text-foreground/60 group-hover:text-electric-cyan transition-colors duration-300">
                    Explore Service
                    <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Stack Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technology We Work With</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Our teams are proficient in modern, enterprise-grade stacks designed for scale, security, and performance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {technologies.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-4 rounded-xl border border-border-subtle bg-surface/50 hover:bg-surface transition-colors">
                <div className="sm:w-32 shrink-0">
                  <span className="text-[11px] uppercase tracking-widest font-semibold text-electric-cyan">{item.category}</span>
                </div>
                <div className="text-sm text-on-surface-variant font-medium">
                  {item.tech}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Bottom */}
      <section className="max-w-4xl mx-auto px-6 text-center mt-32">
        <div className="glass-panel rounded-3xl p-12 border-electric-cyan/20 relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-electric-cyan/10 blur-[120px] rounded-full z-0"></div>
           <div className="relative z-10">
             <h2 className="text-3xl md:text-4xl italic font-normal mb-6">Ready to transform your business?</h2>
             <Link href="/contact-us" className="btn-solid inline-block text-xs px-8 py-4 rounded-full font-semibold tracking-widest uppercase">
               Discuss Your Project
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
}