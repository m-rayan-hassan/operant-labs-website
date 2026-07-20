"use client";

import { motion } from "motion/react";
import { TrendingUp, Rocket, Landmark, Building, ArrowRight } from "lucide-react";
import Link from "next/link";

const audiences = [
  {
    icon: TrendingUp,
    title: "Private Equity Firms",
    description:
      "De-risk AI investments and drive portfolio value through independent technical due diligence, AI maturity assessment, and transformation roadmapping.",
    href: "/investors",
  },
  {
    icon: Rocket,
    title: "Venture Capital Firms",
    description:
      "Validate technical IP, assess AI readiness in prospective investments, and accelerate post-investment value creation.",
    href: "/investors",
  },
  {
    icon: Landmark,
    title: "Family Offices",
    description:
      "Navigate the AI landscape with independent advisory, strategic assessment, and governed transformation programs.",
    href: "/investors",
  },
  {
    icon: Building,
    title: "Enterprise Organizations",
    description:
      "Transform operations through AI-native operating models with architecture validation, governance frameworks, and implementation oversight.",
    href: "/capabilities",
  },
];

export default function WhoWeServe() {
  return (
    <section
      id="who-we-serve"
      className="py-16 md:py-24 border-t border-border-subtle relative z-10 bg-background"
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
          <div className="section-number mx-auto mb-6">Who We Serve</div>
          <h2 className="text-3xl md:text-5xl text-foreground font-semibold tracking-tight mb-6">
            Built for{" "}
            <span className="text-electric-cyan font-normal italic">
              Decision Makers
            </span>
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-base font-light leading-relaxed">
            We partner with investors, boards, and enterprise leadership teams
            who need independent technical advisory and AI transformation
            expertise they can trust.
          </p>
        </motion.div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, i) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="h-full"
              >
                <Link
                  href={audience.href}
                  className="glass-card p-8 flex flex-col h-full group relative overflow-hidden hover:border-electric-cyan/40 transition-colors duration-300 block"
                >
                  {/* Accent edge */}
                  <span
                    className="absolute left-0 top-0 h-full w-[2px] bg-electric-cyan scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500"
                    aria-hidden
                  />

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-border-subtle flex items-center justify-center mb-6 border border-border-strong group-hover:border-electric-cyan/40 group-hover:bg-electric-cyan/5 transition-all duration-300">
                    <Icon
                      size={22}
                      className="text-foreground/70 group-hover:text-electric-cyan transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-medium text-foreground mb-3 tracking-wide group-hover:text-electric-cyan transition-colors duration-300">
                    {audience.title}
                  </h3>
                  <p className="text-on-surface-variant text-[13px] font-light leading-relaxed flex-grow">
                    {audience.description}
                  </p>

                  {/* Footer link */}
                  <div className="mt-6 pt-4 border-t border-border-subtle/50">
                    <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-semibold text-foreground/60 group-hover:text-electric-cyan transition-colors duration-300">
                      Learn More
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1.5 transition-transform duration-300"
                      />
                    </span>
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
