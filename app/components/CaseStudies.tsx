"use client";

import { motion } from "motion/react";
import { ArrowRight, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    category: "Private Equity",
    title: "Pre-Acquisition Technical Due Diligence",
    challenge: "Validating proprietary AI claims of a target company.",
    solution: "Deep code-level audit and architecture assessment.",
    result: "Prevented £12M overvaluation due to technical debt.",
    image: "/global payment gateway.jpg",
  },
  {
    category: "Healthcare",
    title: "Clinical Document Copilot",
    challenge: "High manual overhead in processing patient records.",
    solution: "Secure, HIPAA-compliant NLP & RAG pipeline.",
    result: "85% reduction in document processing time.",
    image: "/patient data ai system.jpg",
  },
  {
    category: "Manufacturing",
    title: "Predictive Maintenance System",
    challenge: "Unplanned downtime causing significant revenue loss.",
    solution: "Deployed IoT edge analytics with ML forecasting.",
    result: "30% increase in overall equipment effectiveness.",
    image: "/automated fleet routing.webp",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-24 md:py-32 border-t border-border-subtle relative z-10 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
        >
          <div>
            <div className="section-number-left">03 / Impact</div>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl md:text-5xl text-foreground font-semibold tracking-tight">
                Enterprise Impact
              </h2>
              <div className="hidden md:flex items-center gap-1.5 px-3 py-1 bg-surface-dim border border-border-subtle rounded-full text-[10px] text-on-surface-variant uppercase tracking-widest font-medium">
                <Info size={12} />
                <span>Illustrative Scenarios</span>
              </div>
            </div>
          </div>
          <Link
            href="/case-studies"
            className="text-[11px] uppercase tracking-widest text-foreground/70 hover:text-foreground transition-all flex items-center gap-2 group mb-2 font-medium"
          >
            Explore Our Work
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Mobile Badge */}
        <div className="md:hidden flex items-center gap-1.5 px-3 py-1.5 mb-8 w-fit bg-surface-dim border border-border-subtle rounded-full text-[10px] text-on-surface-variant uppercase tracking-widest font-medium">
          <Info size={12} />
          <span>Illustrative Scenarios</span>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group cursor-pointer flex flex-col h-full"
            >
              {/* Thumbnail */}
              <div className="aspect-[4/3] bg-card rounded-2xl mb-6 overflow-hidden relative border border-border-subtle group-hover:border-border-strong transition-all duration-500">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-[9px] text-white/80 uppercase tracking-[0.2em] font-semibold bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                    {study.category}
                  </span>
                </div>
              </div>

              <div className="flex-grow flex flex-col">
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {study.title}
                </h3>
                <div className="space-y-2 text-[13px] font-light mt-auto">
                  <p className="text-on-surface-variant">
                    <span className="text-foreground/70 font-medium text-[10px] uppercase tracking-wider mr-2">
                      Challenge:
                    </span>
                    {study.challenge}
                  </p>
                  <p className="text-on-surface-variant">
                    <span className="text-foreground/70 font-medium text-[10px] uppercase tracking-wider mr-2">
                      Solution:
                    </span>
                    {study.solution}
                  </p>
                  <p className="text-electric-cyan mt-3 font-medium">
                    <span className="text-foreground/70 text-[10px] uppercase tracking-wider mr-2">
                      Result:
                    </span>
                    {study.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
