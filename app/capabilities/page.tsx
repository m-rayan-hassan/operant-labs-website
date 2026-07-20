"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { 
  ArrowRight, ArrowUpRight, Code2, Zap, Cpu, Cloud, LineChart, 
  Rocket, Search, ShieldCheck, Activity, Users, LayoutGrid, FileSearch
} from "lucide-react";

const capabilities = [
  {
    title: "AI Strategy & Transformation",
    description: "Assess enterprise readiness, map value-creation opportunities, and define an implementation roadmap that connects AI capabilities to strategic business outcomes.",
    href: "/capabilities/ai-strategy",
    icon: Rocket,
    // Team analyzing strategy and mapping roadmaps
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "AI Due Diligence",
    description: "Deep technical assessments of AI architectures, data maturity, and algorithmic IP for private equity firms, venture capital, and pre-acquisition reviews.",
    href: "/capabilities/ai-due-diligence",
    icon: FileSearch,
    // Deep code analysis and technical inspection
    img: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "AI Solution Architecture",
    description: "Design secure, scalable, and compliant AI architectures that seamlessly integrate with your existing enterprise systems and data infrastructure.",
    href: "/capabilities/ai-architecture",
    icon: LayoutGrid,
    // Blueprints and complex network topologies
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Forward-Deployed Engineering",
    description: "Embed specialized, multi-disciplinary engineering teams into your organization to execute complex AI and software implementations at speed.",
    href: "/capabilities/forward-deployed-engineering",
    icon: Users,
    // Engineering team actively collaborating and executing
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Custom AI Systems",
    description: "Build proprietary machine learning models, generative AI applications, and specialized intelligent systems tailored to your unique operational requirements.",
    href: "/capabilities/custom-ai-systems",
    icon: Cpu,
    // Advanced glowing neural network representing proprietary AI models
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Intelligent Automation",
    description: "Automate complex, multi-step business processes by integrating legacy systems with modern AI capabilities to eliminate manual friction.",
    href: "/capabilities/intelligent-automation",
    icon: Zap,
    // Robotic process automation and mechanical efficiency
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Data & Cloud Engineering",
    description: "Modernize your data infrastructure, establish secure cloud pipelines, and ensure your data is accessible, clean, and ready for AI applications.",
    href: "/capabilities/data-cloud-engineering",
    icon: Cloud,
    // Modern server racks representing robust cloud and data infrastructure
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "AI Governance",
    description: "Implement robust frameworks for responsible AI usage, data security, model explainability, and regulatory compliance across the enterprise.",
    href: "/capabilities/ai-governance",
    icon: ShieldCheck,
    // Digital lock representing security, compliance, and governance frameworks
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Managed AI Operations",
    description: "Provide continuous monitoring, optimization, and support for deployed AI systems to ensure sustained performance and ROI over time.",
    href: "/capabilities/managed-ai-operations",
    icon: Activity,
    // Dashboards and monitoring metrics for continuous operations (MLOps)
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
];

export default function CapabilitiesIndexPage() {
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
          <div className="section-number justify-center mb-6">Capabilities</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-normal mb-6 leading-tight">
            Engineering AI <span className="text-electric-cyan">At Scale</span>
          </h1>
          <p className="text-base md:text-lg text-on-surface-variant font-light leading-relaxed mb-10">
            From strategic readiness assessments and deep technical due diligence, to forward-deployed engineering and continuous optimization—we provide the complete capability stack required for enterprise AI transformation.
          </p>
        </motion.div>
      </section>

      {/* Capabilities Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              <Link href={capability.href} className="block h-full glass-card group flex flex-col relative overflow-hidden">
                {/* Top Image Section */}
                <div className="h-48 w-full relative overflow-hidden bg-card">
                  <img
                    src={capability.img}
                    alt={capability.title}
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
                    <capability.icon size={24} className="text-foreground/80 group-hover:text-electric-cyan transition-colors" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-medium mb-3 group-hover:text-electric-cyan transition-colors leading-snug">{capability.title}</h3>
                  <p className="text-sm md:text-base text-on-surface-variant font-light leading-relaxed mb-8 flex-grow">
                    {capability.description}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-border-subtle flex items-center gap-2 text-[11px] uppercase tracking-widest font-semibold text-foreground/60 group-hover:text-electric-cyan transition-colors duration-300">
                    Explore Capability
                    <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="max-w-4xl mx-auto px-6 text-center mt-32">
        <div className="glass-panel rounded-3xl p-12 border-electric-cyan/20 relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-electric-cyan/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>
           <div className="relative z-10">
             <h2 className="text-3xl md:text-4xl italic font-normal mb-6">Ready to initiate an AI transformation?</h2>
             <Link href="/contact-us" className="btn-solid inline-block text-xs px-8 py-4 rounded-full font-semibold tracking-widest uppercase mt-4">
               Discuss Your Requirements
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
}