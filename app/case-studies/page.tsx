"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Info,
  ShieldCheck,
  Globe,
  BarChart3,
  Stethoscope,
  LineChart,
  Factory,
} from "lucide-react";
import Image from "next/image";

type CaseStudy = {
  category: string;
  icon: React.ElementType;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
  isIllustrative: boolean;
};

const categories = ["All", "Private Equity", "Healthcare", "Financial Services", "Manufacturing"];

const categoryIcons: Record<string, React.ElementType> = {
  "Private Equity": BarChart3,
  "Healthcare": Stethoscope,
  "Financial Services": LineChart,
  "Manufacturing": Factory,
};

const allCaseStudies: CaseStudy[] = [
  {
    category: "Private Equity",
    icon: categoryIcons["Private Equity"],
    title: "Pre-Acquisition Technical Due Diligence",
    challenge: "Validating proprietary AI claims for a high-stakes £50M acquisition.",
    solution: "Deep code-level audit and architecture stress testing of core IP.",
    result: "Prevented £12M overvaluation by identifying significant technical debt.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    isIllustrative: false,
  },
  {
    category: "Healthcare",
    icon: categoryIcons["Healthcare"],
    title: "Clinical Document Copilot",
    challenge: "Manual processing of unstructured patient records across 40+ clinics.",
    solution: "HIPAA-compliant RAG architecture for automated medical history synthesis.",
    result: "85% reduction in manual processing time with 99% extraction accuracy.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    isIllustrative: true,
  },
  {
    category: "Financial Services",
    icon: categoryIcons["Financial Services"],
    title: "Real-Time Risk Analytics Engine",
    challenge: "Legacy systems failing to process extreme market volatility data.",
    solution: "Event-driven architecture with automated ML risk-scoring layers.",
    result: "Reduced margin call response time from 4 hours to 12 minutes.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    isIllustrative: false,
  },
  {
    category: "Manufacturing",
    icon: categoryIcons["Manufacturing"],
    title: "Predictive Maintenance for Global Fleet",
    challenge: "Unplanned downtime costing an estimated $200k per hour.",
    solution: "IoT edge analytics and custom forecasting models for hardware failure.",
    result: "30% increase in equipment effectiveness and 15% lower repair costs.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    isIllustrative: false,
  },
  {
    category: "Private Equity",
    icon: categoryIcons["Private Equity"],
    title: "Portfolio AI Value-Creation Audit",
    challenge: "VC firm needed to assess AI readiness across 15 portfolio companies.",
    solution: "Strategic maturity assessment and prioritized implementation roadmaps.",
    result: "Identified £22M in potential EBITDA improvement through automation.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80",
    isIllustrative: false,
  },
  {
    category: "Healthcare",
    icon: categoryIcons["Healthcare"],
    title: "Autonomous Patient Intake System",
    challenge: "Front-desk bottlenecks leading to patient churn and data errors.",
    solution: "Voice-AI intake layer integrated directly with Epic/Cerner EHRs.",
    result: "40% increase in patient throughput and zero data entry errors.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80",
    isIllustrative: true,
  },
  {
    category: "Financial Services",
    icon: categoryIcons["Financial Services"],
    title: "Investment Intelligence Platform",
    challenge: "Analysts overwhelmed by manual synthesis of earnings and news.",
    solution: "Agentic AI system for multi-source data synthesis and signal detection.",
    result: "Increased research capacity by 300% without adding headcount.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    isIllustrative: false,
  },
  {
    category: "Manufacturing",
    icon: categoryIcons["Manufacturing"],
    title: "Post-Merger Tech Consolidation",
    challenge: "Incompatible tech stacks between two recently merged entities.",
    solution: "AI-assisted code migration and unified cloud-native architecture.",
    result: "Achieved full integration in 4 months vs. the projected 12 months.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    isIllustrative: false,
  },
  {
    category: "Healthcare",
    icon: categoryIcons["Healthcare"],
    title: "AI Governance & Security Layer",
    challenge: "Strict regulatory requirements preventing the use of LLMs.",
    solution: "Custom data-masking proxy and secure on-premise model deployment.",
    result: "Enabled safe LLM usage while maintaining 100% HIPAA compliance.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    isIllustrative: false,
  },
];

const PATTERN_ANGLES = [18, -12, 24, -20, 14, -16, 22, -10, 16];

function CaseStudyCover({ study, index }: { study: CaseStudy; index: number }) {
  const Icon = study.icon;
  const angle = PATTERN_ANGLES[index % PATTERN_ANGLES.length];
  return (
    <div className="aspect-video relative overflow-hidden border-b border-border-subtle bg-surface-dim group">
      {/* Image */}
      <Image
        src={study.image}
        alt={study.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover object-center transition-transform duration-700 opacity-[0.65] group-hover:scale-105 group-hover:opacity-[0.85]"
        priority={index < 3}
      />

      {/* Matte Contrast Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 mix-blend-multiply" />

      {/* Diagonal Matrix Grid */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none transition-transform duration-700 group-hover:scale-110"
        style={{
          backgroundImage:
            "repeating-linear-gradient(" +
            angle +
            "deg, var(--border-strong) 0px, var(--border-strong) 1px, transparent 1px, transparent 18px)",
        }}
      />

      {/* Neon Glow Node Map */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 20% 30%, rgba(0,240,255,0.18), transparent 60%)",
        }}
      />

      {/* Category Badge */}
      <div className="absolute bottom-3 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-md border border-white/5 px-2 py-1 rounded">
        <Icon size={12} className="text-electric-cyan" />
        <span className="text-[9px] text-white font-medium uppercase tracking-widest">
          {study.category}
        </span>
      </div>

      {/* Illustrative Badge */}
      {study.isIllustrative && (
        <div className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1.5 bg-electric-cyan/20 backdrop-blur-md border border-electric-cyan/30 rounded-full text-[8px] text-electric-cyan uppercase tracking-widest font-bold">
          <Info size={10} />
          <span>Illustrative</span>
        </div>
      )}
    </div>
  );
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12, transition: { duration: 0.25 } }}
      transition={{ duration: 0.45, delay: 0.05 * index }}
      className="glass-card overflow-hidden flex flex-col h-full group hover:border-electric-cyan/40 transition-colors duration-300"
    >
      <CaseStudyCover study={study} index={index} />

      <div className="p-7 flex flex-col flex-grow bg-surface-card">
        <h3 className="text-base font-medium text-foreground mb-5 leading-snug min-h-[48px] line-clamp-2 group-hover:text-electric-cyan transition-colors">
          {study.title}
        </h3>

        <div className="space-y-5 border-l border-border-subtle pl-5 ml-1 flex-grow">
          <div>
            <span className="text-[9px] uppercase tracking-widest text-foreground/40 font-bold block mb-1">
              Challenge
            </span>
            <p className="text-sm text-on-surface-variant font-light line-clamp-2 leading-relaxed">
              {study.challenge}
            </p>
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-widest text-foreground/40 font-bold block mb-1">
              Solution
            </span>
            <p className="text-sm text-on-surface-variant font-light line-clamp-2 leading-relaxed">
              {study.solution}
            </p>
          </div>
          <div className="pt-1">
            <span className="text-[9px] uppercase tracking-widest text-electric-cyan font-bold block mb-1">
              Impact
            </span>
            <p className="text-sm font-medium text-foreground leading-relaxed">{study.result}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState("All");

  const filteredStudies =
    filter === "All" ? allCaseStudies : allCaseStudies.filter((study) => study.category === filter);

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-strong bg-border-subtle mb-6">
            <ShieldCheck size={12} className="text-electric-cyan" />
            <span className="text-[10px] text-foreground uppercase tracking-[0.15em] font-medium">
              Impact & Case Studies
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-normal mb-6 leading-tight">
            Engineering Value <span className="text-electric-cyan">Through AI Excellence</span>
          </h1>
          <p className="text-lg text-on-surface-variant font-light leading-relaxed">
            From technical due diligence to full-scale enterprise architectures, we deliver
            defensible results for investors and global organizations.
          </p>
        </motion.div>
      </section>

      {/* Segment Controllers */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative text-[11px] uppercase tracking-[0.12em] font-medium px-4 py-2 rounded-full border transition-colors duration-300 ${
                filter === cat
                  ? "border-electric-cyan/50 text-electric-cyan"
                  : "border-border-subtle text-on-surface-variant hover:border-border-strong hover:text-foreground"
              }`}
            >
              {filter === cat && (
                <motion.span
                  layoutId="active-filter-pill"
                  className="absolute inset-0 rounded-full bg-electric-cyan/10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Grid of Case Studies */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study, i) => (
              <CaseStudyCard key={study.title} study={study} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Bottom Conversion Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="glass-card p-10 md:p-14 flex flex-col items-center justify-between gap-8 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
              Move from Strategy <span className="text-electric-cyan">to Execution.</span>
            </h2>
            <p className="text-on-surface-variant font-light mb-8 max-w-2xl mx-auto">
              We provide the senior technical leadership and specialized engineering teams
              required to turn AI potential into production reality.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <button className="btn-solid text-[11px] px-7 py-3.5 rounded-full font-semibold tracking-[0.1em] uppercase whitespace-nowrap">
                Start a Conversation
              </button>
              <button className="btn-outline text-[11px] px-7 py-3.5 rounded-full font-semibold tracking-[0.1em] uppercase whitespace-nowrap">
                Our Capabilities
              </button>
            </div>
          </div>

          <ShieldCheck size={280} className="absolute -bottom-20 -right-20 opacity-[0.03] text-foreground pointer-events-none" />
          <Globe size={280} className="absolute -top-20 -left-20 opacity-[0.03] text-foreground pointer-events-none" />
        </div>
      </section>
    </div>
  );
}