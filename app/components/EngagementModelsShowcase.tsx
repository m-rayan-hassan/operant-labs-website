"use client";

import { motion } from "motion/react";
import {
  FileSearch,
  BarChart3,
  Compass,
  PresentationIcon,
  GraduationCap,
  Search,
  Building,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const engagementModels = [
  {
    icon: FileSearch,
    title: "Technical Due Diligence",
    description:
      "Independent, code-level assessment of AI capabilities, data maturity, and technical risk for investment decisions.",
    href: "/capabilities/ai-due-diligence",
  },
  {
    icon: BarChart3,
    title: "Portfolio AI Assessment",
    description:
      "Systematic evaluation of AI readiness and value-creation opportunities across portfolio companies.",
    href: "/investors",
  },
  {
    icon: Compass,
    title: "AI Strategy Review",
    description:
      "Evaluate existing AI strategy against industry best practices, competitive positioning, and implementation feasibility.",
    href: "/capabilities/ai-strategy",
  },
  {
    icon: PresentationIcon,
    title: "Board Advisory",
    description:
      "Strategic AI guidance for board members and C-suite executives navigating transformation decisions.",
    href: "/contact-us",
  },
  {
    icon: GraduationCap,
    title: "Executive Workshops",
    description:
      "Hands-on sessions to align leadership teams on AI opportunity, risk, governance, and implementation approach.",
    href: "/contact-us",
  },
  {
    icon: Search,
    title: "Technical Discovery",
    description:
      "Comprehensive technical assessment establishing the foundation for architecture validation and transformation planning.",
    href: "/capabilities/technical-discovery",
  },
  {
    icon: Building,
    title: "Transformation Office",
    description:
      "Continuous strategic and technical oversight throughout the full AI transformation lifecycle.",
    href: "/contact-us",
  },
];

export default function EngagementModelsShowcase() {
  return (
    <section className="py-16 md:py-24 border-t border-border-subtle relative z-10 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="section-number mx-auto mb-6">
            Engagement Models
          </div>
          <h2 className="text-3xl md:text-5xl text-foreground font-semibold tracking-tight mb-6">
            How We{" "}
            <span className="text-electric-cyan font-normal italic">
              Engage
            </span>
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-base font-light leading-relaxed">
            Seven flexible engagement models — from focused technical
            assessments to continuous enterprise transformation partnerships.
          </p>
        </motion.div>

        {/* Compact Feature Grid Layout */}
        <motion.div 
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10 lg:gap-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {engagementModels.map((model, i) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={model.title}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <Link
                  href={model.href}
                  className="group flex items-start gap-5 relative block outline-none"
                >
                  {/* Icon Box */}
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-surface-dim/50 flex items-center justify-center border border-border-subtle group-hover:border-electric-cyan/40 group-hover:bg-electric-cyan/5 transition-all duration-300 shadow-sm">
                      <Icon
                        size={22}
                        className="text-foreground/70 group-hover:text-electric-cyan transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-electric-cyan transition-colors duration-300">
                      {model.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant font-light leading-relaxed mb-4">
                      {model.description}
                    </p>
                    
                    {/* Action Link */}
                    <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-semibold text-foreground/50 group-hover:text-electric-cyan transition-colors duration-300">
                      Learn More
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
