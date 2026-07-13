"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  Rocket,
  LayoutGrid,
  TrendingUp,
  Users,
  ShieldCheck,
  Scale,
  Bot,
  Activity,
  ClipboardList,
} from "lucide-react";

type Article = {
  category: string;
  icon: React.ElementType;
  title: string;
  desc: string;
  ctaLabel: string;
  ctaHref: string;
  imageUrl: string;
};

const articles: Article[] = [
  {
    category: "AI Transformation",
    icon: Rocket,
    title: "Why AI Strategy Fails Without an Execution Path",
    desc: "Most AI strategy documents stop at recommendations. A roadmap only creates value once it is sequenced against real technical feasibility, data readiness, and delivery capacity — not before.",
    ctaLabel: "Explore AI Strategy & Transformation",
    ctaHref: "/capabilities/ai-strategy",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Enterprise Architecture",
    icon: LayoutGrid,
    title: "Designing AI Systems That Survive Contact With Production",
    desc: "Proof-of-concept architecture and production architecture are rarely the same system. Integration boundaries, data contracts, and failure modes need to be designed in from the start, not retrofitted after a pilot succeeds.",
    ctaLabel: "Explore AI Solution Architecture",
    ctaHref: "/capabilities/ai-architecture",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Private Capital",
    icon: TrendingUp,
    title: "AI Value Creation Across a Portfolio, Not Just One Company",
    desc: "Portfolio-wide AI value creation requires a different lens than single-company transformation: comparable maturity scoring, shared architecture patterns, and a roadmap that respects each company's technical constraints.",
    ctaLabel: "Explore Investors & Portfolio Companies",
    ctaHref: "/investors",
    imageUrl:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Forward-Deployed Engineering",
    icon: Users,
    title: "What 'Embedded' Actually Means in Technical Delivery",
    desc: "Embedded delivery works when a team sits close enough to the business problem to make architecture calls in context — not when specialists are handed a spec and asked to build in isolation.",
    ctaLabel: "Explore Forward-Deployed Engineering",
    ctaHref: "/capabilities/forward-deployed-engineering",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Responsible AI",
    icon: ShieldCheck,
    title: "Human Oversight Is a Design Decision, Not a Policy Statement",
    desc: "Responsible AI holds up in production when review checkpoints, escalation paths, and override controls are built into the system architecture — not documented separately from it.",
    ctaLabel: "Explore AI Governance",
    ctaHref: "/capabilities/ai-governance",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "AI Governance",
    icon: Scale,
    title: "Governance That Scales With the Number of Models You Run",
    desc: "A single-model pilot can be governed with a checklist. A dozen production agents need a governance model with clear ownership, audit trails, and a defined process for retiring what no longer earns its risk.",
    ctaLabel: "Explore AI Governance",
    ctaHref: "/capabilities/ai-governance",
    imageUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Agentic Systems",
    icon: Bot,
    title: "Where Agentic Systems Create Value — and Where They Don't Yet",
    desc: "Autonomous, multi-step agents are strongest in bounded, well-instrumented workflows with clear success criteria. Outside that boundary, a simpler automated pipeline is often the more defensible engineering choice.",
    ctaLabel: "Explore Custom AI Systems",
    ctaHref: "/capabilities/custom-ai-systems",
    imageUrl:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "MLOps",
    icon: Activity,
    title: "Deployment Is the Midpoint, Not the Finish Line",
    desc: "Model and prompt performance drift the moment real usage begins. Sustained value depends on monitoring, retraining or re-prompting cadence, and cost visibility long after the initial launch.",
    ctaLabel: "Explore Managed AI Operations",
    ctaHref: "/capabilities/managed-ai-operations",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Implementation Lessons",
    icon: ClipboardList,
    title: "The Gap Between a Working Pilot and a Trusted System",
    desc: "Pilots are judged on whether they work once. Production systems are judged on whether operators trust them every day. Closing that gap is usually a change-management problem as much as a technical one.",
    ctaLabel: "Explore How We Deliver",
    ctaHref: "/our-process",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
];

const categories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

const PATTERN_ANGLES = [18, -12, 24, -20, 14, -16, 22, -10, 16];

function ArticleCover({ article, index }: { article: Article; index: number }) {
  const Icon = article.icon;
  const angle = PATTERN_ANGLES[index % PATTERN_ANGLES.length];
  return (
    <div className="aspect-video relative overflow-hidden border-b border-border-subtle bg-surface-dim group">
      {/* Dynamic Network Image */}
      <Image
        src={article.imageUrl}
        alt={article.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover object-center transition-transform duration-700 opacity-[0.65] group-hover:scale-105 group-hover:opacity-[0.85]"
        priority={index < 3}
      />

      {/* Matte Contrast Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 mix-blend-multiply" />

      {/* Unique Diagonal Matrix Grid */}
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
          background:
            "radial-gradient(circle at 20% 30%, rgba(0,240,255,0.18), transparent 60%)",
        }}
      />

      {/* Floating Categorical Badge */}
      <div className="absolute bottom-3 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-md border border-white/5 px-2 py-1 rounded">
        <Icon size={12} className="text-electric-cyan" />
        <span className="text-[9px] text-white font-medium uppercase tracking-widest">
          {article.category}
        </span>
      </div>
    </div>
  );
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12, transition: { duration: 0.25 } }}
      transition={{ duration: 0.45, delay: 0.05 * index }}
      className="glass-card overflow-hidden flex flex-col h-full group hover:border-electric-cyan/40 transition-colors duration-300"
    >
      <ArticleCover article={article} index={index} />

      {/* Fixed Alignment Structural Body */}
      <div className="p-7 flex flex-col flex-grow bg-surface-card">
        {/* Enforces exactly 2 text lines layout boundary */}
        <h3 className="text-base font-medium text-foreground mb-3 leading-snug min-h-[48px] line-clamp-2">
          {article.title}
        </h3>
        {/* Enforces exactly 4 text lines structural spacing */}
        <p className="text-sm text-on-surface-variant font-light leading-relaxed mb-6 line-clamp-4 flex-grow">
          {article.desc}
        </p>
        <Link
          href={article.ctaHref}
          className="mt-auto inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-medium text-foreground group-hover:text-electric-cyan transition-colors"
        >
          {article.ctaLabel}
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function InsightsPage() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? articles : articles.filter((a) => a.category === active);

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
            <BookOpen size={12} className="text-electric-cyan" />
            <span className="text-[10px] text-foreground uppercase tracking-[0.15em] font-medium">Insights</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-normal mb-6 leading-tight">
            Perspectives on <span className="text-electric-cyan">AI Transformation</span>
          </h1>
          <p className="text-lg text-on-surface-variant font-light leading-relaxed">
            Evidence-led thinking on strategy, architecture, and delivery — written for
            operators, investors, and technical leaders turning AI ambition into
            production systems.
          </p>
        </motion.div>
      </section>

      {/* Segment Controllers */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative text-[11px] uppercase tracking-[0.12em] font-medium px-4 py-2 rounded-full border transition-colors duration-300 ${
                active === cat
                  ? "border-electric-cyan/50 text-electric-cyan"
                  : "border-border-subtle text-on-surface-variant hover:border-border-strong hover:text-foreground"
              }`}
            >
              {active === cat && (
                <motion.span
                  layoutId="active-category-pill"
                  className="absolute inset-0 rounded-full bg-electric-cyan/10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Unified Grid Mesh */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {visible.map((article, i) => (
              <ArticleCard key={article.title} article={article} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Bottom Conversion Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="glass-card p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
              Have a use case in mind?
            </h2>
            <p className="text-on-surface-variant font-light">
              Bring us a specific problem — we&apos;ll tell you honestly whether it&apos;s an AI problem.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="btn-solid text-[11px] px-7 py-3.5 rounded-full font-semibold tracking-[0.1em] uppercase whitespace-nowrap"
          >
            Discuss an AI Transformation
          </Link>
        </div>
      </section>
    </div>
  );
}