"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Landmark,
  HeartPulse,
  Truck,
  ShoppingBag,
  Factory,
  Scale,
  GraduationCap,
  Rocket,
  Building,
  Gavel,
  Shield,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const industriesData = [
  {
    name: "Government & Public Sector",
    icon: Landmark,
    img: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=800&auto=format&fit=crop",
    description: "We help public bodies modernise services, enhance security, and improve citizen engagement through robust and scalable digital platforms.",
    solutions: [
      "Digital service portals",
      "Workflow automation",
      "Secure data platforms",
      "Citizen engagement tools",
    ],
  },
  {
    name: "Defense",
    icon: Shield,
    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop",
    description: "Developing mission-critical systems with a focus on security, reliability, and performance for national security and defense operations.",
    solutions: [
      "Mission-critical comms",
      "Advanced threat intelligence",
      "Logistics optimization",
      "Secure infrastructure",
    ],
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    description: "Building HIPAA-compliant solutions that streamline patient management, enable telehealth, and leverage AI for better health outcomes.",
    solutions: [
      "Patient management",
      "Appointment scheduling",
      "EMR integration",
      "Telehealth & AI analytics",
    ],
  },
  {
    name: "Financial Services",
    icon: Scale,
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    description: "Engineering secure fintech platforms, automating compliance, and deploying fraud detection systems to navigate a complex regulatory landscape.",
    solutions: [
      "Financial platforms",
      "Digital onboarding",
      "Compliance automation",
      "Fraud detection support",
    ],
  },
  {
    name: "Legal & Compliance",
    icon: Gavel,
    img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
    description: "Automating document analysis and contract lifecycle management to increase efficiency and reduce risk for legal professionals.",
    solutions: [
      "Document lifecycle management",
      "Contract lifecycle tracking",
      "Compliance monitoring",
      "AI document analysis",
    ],
  },
  {
    name: "Manufacturing",
    icon: Factory,
    img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=800&auto=format&fit=crop",
    description: "Integrating IoT and AI to optimize production lines, enable predictive maintenance, and build resilient, automated supply chains.",
    solutions: [
      "Production management",
      "Predictive maintenance",
      "Quality control automation",
      "Supply chain optimization",
    ],
  },
  {
    name: "Logistics & Supply Chain",
    icon: Truck,
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    description: "Providing real-time visibility and AI-driven insights for fleet, warehouse, and inventory management to create efficient supply networks.",
    solutions: [
      "Fleet management",
      "Warehouse management",
      "Shipment tracking",
      "Route optimization & AI forecasting",
    ],
  },
  {
    name: "Retail & E-commerce",
    icon: ShoppingBag,
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    description: "Creating seamless omnichannel experiences, personalized recommendations, and data-driven analytics to boost sales and customer loyalty.",
    solutions: [
      "E-commerce platforms",
      "AI product recommendations",
      "Omnichannel commerce",
      "Advanced sales analytics",
    ],
  },
  {
    name: "Education",
    icon: GraduationCap,
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    description: "Developing modern EdTech platforms, including virtual classrooms and AI learning assistants, to enhance education and administration.",
    solutions: [
      "Learning management systems",
      "Virtual classrooms",
      "AI learning assistants",
      "Admin automation tools",
    ],
  },
  {
    name: "Startups & SMEs",
    icon: Rocket,
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    description: "Accelerating growth with agile MVP development, scalable cloud architectures, and foundational technology that supports rapid innovation.",
    solutions: [
      "Rapid MVP development",
      "SaaS application build-outs",
      "Cloud infrastructure setup",
      "Seamless AI integration",
    ],
  },
  {
    name: "Enterprise Organisations",
    icon: Building,
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    description: "Driving large-scale digital transformation through legacy system modernization, enterprise-wide automation, and strategic cloud migration.",
    solutions: [
      "Legacy modernisation",
      "Enterprise automation",
      "Cloud migration",
      "Large scale system integration",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="section-number justify-center mb-6">Sectors We Serve</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-normal mb-6 leading-tight">
            Technology Solutions Designed for <span className="text-electric-cyan">Every Industry</span>
          </h1>
          <p className="text-lg text-on-surface-variant font-light leading-relaxed">
            Every industry has its own challenges and regulations, so we build technology around each client's operational reality rather than a one-size-fits-all approach.
          </p>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {industriesData.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card flex flex-col overflow-hidden group h-full"
              >
                {/* Image Header */}
                <div className="h-48 relative overflow-hidden bg-surface-dim">
                  <Image
                    src={industry.img}
                    alt={industry.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  <div className="absolute top-4 right-4 bg-surface/40 backdrop-blur-md border border-border-subtle p-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight size={16} className="text-foreground" />
                  </div>
                  
                  <div className="absolute bottom-4 left-6 p-2.5 rounded-xl bg-card/90 border border-border-subtle group-hover:border-electric-cyan/50 group-hover:bg-electric-cyan/5 transition-all duration-300 shadow-sm">
                    <Icon size={20} className="text-foreground group-hover:text-electric-cyan transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-medium mb-3 group-hover:text-electric-cyan transition-colors">
                    {industry.name}
                  </h3>

                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6 flex-grow">
                    {industry.description}
                  </p>
                  
                  <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant">
                    Key Solutions
                  </div>
                  
                  <ul className="space-y-3">
                    {industry.solutions.map((solution, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-electric-cyan/80 shrink-0 mt-0.5" />
                        <span className="text-[13px] text-on-surface-variant leading-snug">
                          {solution}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Bottom Panel */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-10 md:p-16 relative overflow-hidden border-electric-cyan/20"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-electric-cyan/10 blur-[80px] rounded-full z-0"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full z-0"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl italic font-normal mb-8">
              Let's build industry-specific solutions together.
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact-us" className="btn-solid text-[11px] px-8 py-4 rounded-full font-semibold tracking-widest uppercase shadow-md hover:shadow-lg">
                Schedule a Consultation
              </Link>
              <Link 
                href="/services" 
                className="btn-outline text-[11px] px-8 py-4 rounded-full font-semibold tracking-widest uppercase flex items-center gap-2 bg-surface/50 backdrop-blur-md"
              >
                Explore Our Solutions <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}