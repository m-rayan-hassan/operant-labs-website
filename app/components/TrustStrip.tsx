"use client";

import { motion } from "motion/react";
import { 
  Award, 
  CheckCircle, 
  Building2, 
  ShieldCheck, 
  Users 
} from "lucide-react";

const stats = [
  {
    icon: Award,
    label: "10+ Years Excellence",
  },
  {
    icon: CheckCircle,
    label: "250+ Systems Delivered",
  },
  {
    icon: ShieldCheck,
    label: "ISO 27001 Certified",
  },
  {
    icon: Users,
    label: "98% Client Retention",
  },
  {
    icon: Building2,
    label: "Fortune 500 Trusted",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-t border-border-subtle bg-surface-dim relative z-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} // Increased base opacity for better visibility
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-5"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="flex items-center gap-6">
              <div className="flex items-center gap-2.5 group cursor-default">
                <Icon
                  size={18}
                  // Added an electric-cyan hover effect on the icon for an extra premium touch
                  className="text-on-surface-variant group-hover:text-electric-cyan transition-colors"
                  strokeWidth={1.5}
                />
                <span className="text-[11px] tracking-widest uppercase text-on-surface-variant group-hover:text-foreground transition-colors font-medium">
                  {stat.label}
                </span>
              </div>
              
              {/* Separator Dot - Hidden on the last item and hidden on mobile wrap */}
              {index !== stats.length - 1 && (
                <div className="hidden lg:block w-1.5 h-1.5 rounded-full bg-border-strong/50" />
              )}
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}