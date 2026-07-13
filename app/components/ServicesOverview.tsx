"use client";

import { motion } from "motion/react";
import {
  Rocket,
  LayoutGrid,
  Users,
  Cpu,
  Zap,
  Cloud,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const capabilities = [
  {
    icon: Rocket,
    title: "AI Strategy & Transformation",
    description:
      "Assess enterprise readiness, map value-creation opportunities, and define an implementation roadmap.",
    href: "/capabilities/ai-strategy",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: LayoutGrid,
    title: "AI Solution Architecture",
    description:
      "Design secure, scalable, and compliant AI architectures that seamlessly integrate with your systems.",
    href: "/capabilities/ai-architecture",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Users,
    title: "Forward-Deployed Engineering",
    description:
      "Embed specialized, multi-disciplinary engineering teams into your organization to execute at speed.",
    href: "/capabilities/forward-deployed-engineering",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Cpu,
    title: "Custom AI Systems",
    description:
      "Build proprietary machine learning models and generative AI applications tailored to your workflows.",
    href: "/capabilities/custom-ai-systems",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Zap,
    title: "Intelligent Automation",
    description:
      "Automate complex, multi-step business processes by integrating legacy systems with modern AI.",
    href: "/capabilities/intelligent-automation",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Cloud,
    title: "Data & Cloud Engineering",
    description:
      "Modernize your data infrastructure and establish secure cloud pipelines ready for AI applications.",
    href: "/capabilities/data-cloud-engineering",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ServicesOverview() {
  return (
    <section
      id="capabilities"
      className="py-24 md:py-32 border-t border-border-subtle bg-surface-dim relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="section-number mx-auto mb-6">02 / Expertise</div>
          <h2 className="text-3xl md:text-5xl text-foreground font-semibold tracking-tight">
            Core Capabilities
          </h2>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, i) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="h-full"
              >
                <Link
                  href={capability.href}
                  className="glass-card flex flex-col h-full group relative overflow-hidden block"
                >
                  <div className="h-48 md:h-52 w-full relative overflow-hidden bg-card">
                    <img
                      src={capability.img}
                      alt={capability.title}
                      className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                    />
                    
                    <div className="absolute top-4 right-4 bg-surface/40 backdrop-blur-md border border-border-subtle p-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={16} className="text-foreground" />
                    </div>
                  </div>

                  <div className="p-8 pt-0 flex-grow flex flex-col relative z-10">
                    <div className="w-14 h-14 -mt-7 mb-6 rounded-xl bg-card border border-border-strong flex items-center justify-center shadow-lg relative overflow-hidden group-hover:border-electric-cyan/50 transition-colors duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                      <Icon
                        size={24}
                        className="text-foreground/80 group-hover:text-electric-cyan transition-colors duration-300"
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="text-xl font-medium text-foreground mb-3 leading-snug group-hover:text-electric-cyan transition-colors duration-300">
                      {capability.title}
                    </h3>
                    
                    <p className="text-on-surface-variant text-[14px] font-light leading-relaxed flex-grow">
                      {capability.description}
                    </p>

                    <div className="mt-8 pt-6 border-t border-border-subtle">
                      <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-semibold text-foreground/60 group-hover:text-electric-cyan transition-colors duration-300">
                        Explore Capability
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-1.5 transition-transform duration-300"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link href="/capabilities" className="btn-solid inline-flex items-center gap-2 text-[11px] px-8 py-4 rounded-full font-semibold tracking-widest uppercase shadow-md">
            View All Capabilities <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}