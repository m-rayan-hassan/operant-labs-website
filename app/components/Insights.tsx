"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const insights = [
  {
    category: "Private Equity",
    time: "5 min read",
    title: "The AI Value Creation Playbook",
    desc: "How operating partners are using AI to drive EBITDA growth across portfolios.",
    image: "/scaling microservices.webp",
  },
  {
    category: "Architecture",
    time: "8 min read",
    title: "Securing RAG Architectures",
    desc: "A practical guide to deploying safe, compliant generative AI in enterprise environments.",
    image: "/implementing enterprises llm.png",
  },
  {
    category: "Due Diligence",
    time: "4 min read",
    title: "Evaluating Technical IP in M&A",
    desc: "How to separate true proprietary AI from API wrappers during technical due diligence.",
    image: "/AWS-vs-Azure.jpg",
  },
];

export default function Insights() {
  return (
    <section className="py-24 md:py-32 border-t border-border-subtle bg-surface relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-number-left">07 / Knowledge</div>
            <h2 className="text-3xl md:text-5xl text-foreground font-semibold tracking-tight">
              Latest Insights
            </h2>
          </motion.div>
          <Link
            href="/insights"
            className="text-[11px] font-medium uppercase tracking-widest text-electric-cyan hover:text-foreground transition-all flex items-center gap-2 group mb-2"
          >
            Read Journal
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.a
              key={insight.title}
              href="/insights"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-background rounded-2xl mb-5 overflow-hidden border border-border-subtle group-hover:border-border-strong transition-all duration-500 relative">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>

              <div className="flex-grow flex flex-col">
                <span className="text-[10px] text-electric-cyan font-medium uppercase tracking-widest mb-2 block">
                  {insight.category} • {insight.time}
                </span>
                <h3 className="text-base font-medium text-foreground mb-2">
                  {insight.title}
                </h3>
                <p className="text-[13px] text-on-surface-variant font-light leading-relaxed mt-auto">
                  {insight.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}