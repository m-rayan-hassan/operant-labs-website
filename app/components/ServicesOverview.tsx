"use client";

import { motion } from "motion/react";
import {
  Code2,
  Cog,
  Brain,
  Cloud,
  BarChart3,
  Compass,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Secure, scalable software built around how your business actually works.",
    href: "/services/custom-software",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Cog,
    title: "Intelligent Business Automation",
    description:
      "Turning manual, repetitive processes into fast, connected digital workflows.",
    href: "/services/business-automation",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Practical AI, from virtual assistants to predictive analytics, built to solve real problems.",
    href: "/services/ai-solutions",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Solutions",
    description:
      "Cloud infrastructure, migration, and delivery pipelines that keep pace with your growth.",
    href: "/services/cloud-devops",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Business Intelligence",
    description:
      "Turning scattered business data into dashboards and insight you can act on.",
    href: "/services/data-analytics",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Compass,
    title: "Technology Advisory & Transformation",
    description:
      "Strategic guidance so you invest in the right technology at the right time.",
    href: "/services/technology-advisory",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ServicesOverview() {
  return (
    <section
      id="services"
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
          <div className="section-number mx-auto mb-6">02 / Services</div>
          <h2 className="text-3xl md:text-5xl text-foreground font-semibold tracking-tight">
            Core Services
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="h-full"
              >
                <Link
                  href={service.href}
                  className="glass-card flex flex-col h-full group relative overflow-hidden block"
                >
                  {/* Top Image Section */}
                  <div className="h-48 md:h-52 w-full relative overflow-hidden bg-card">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                    />
                    
                    {/* Top Right Arrow Indicator */}
                    <div className="absolute top-4 right-4 bg-surface/40 backdrop-blur-md border border-border-subtle p-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={16} className="text-foreground" />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8 pt-0 flex-grow flex flex-col relative z-10">
                    {/* Floating Icon Box */}
                    <div className="w-14 h-14 -mt-7 mb-6 rounded-xl bg-card border border-border-strong flex items-center justify-center shadow-lg relative overflow-hidden group-hover:border-electric-cyan/50 transition-colors duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                      <Icon
                        size={24}
                        className="text-foreground/80 group-hover:text-electric-cyan transition-colors duration-300"
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="text-xl font-medium text-foreground mb-3 leading-snug group-hover:text-electric-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-on-surface-variant text-[14px] font-light leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    {/* Explore Service Button */}
                    <div className="mt-8 pt-6 border-t border-border-subtle">
                      <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-semibold text-foreground/60 group-hover:text-electric-cyan transition-colors duration-300">
                        Explore Service
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
      </div>
    </section>
  );
}