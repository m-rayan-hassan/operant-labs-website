"use client";

import { motion } from "motion/react";
import { 
  Compass, 
  Users, 
  Layers, 
  Brain, 
  ShieldCheck 
} from "lucide-react";

const stats = [
  { icon: Compass, label: "Strategy-Led Engineering" },
  { icon: Users, label: "Senior Technical Leadership" },
  { icon: Layers, label: "Flexible Delivery Teams" },
  { icon: Brain, label: "AI-Native Architecture" },
  { icon: ShieldCheck, label: "Enterprise Delivery Governance" },
  { icon: Brain, label: "Responsible AI" },
  { icon: Layers, label: "MLOps & Governance" },
];

export default function TrustStrip() {
  // Triple the items to ensure there is never a gap on ultra-wide screens
  const marqueeItems = [...stats, ...stats, ...stats];

  return (
    <section className="border-t border-border-subtle bg-surface-dim relative z-20 overflow-hidden">
      <div className="py-7 relative">
        <motion.div 
          className="flex items-center gap-12 w-max will-change-transform"
          initial={{ x: "-33.333%" }} // Start at the end of the first set
          animate={{ x: "0%" }}       // Move to the right
          transition={{
            ease: "linear",
            duration: 30,             // Lower number = faster, Higher = slower/smoother
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={`${stat.label}-${index}`} 
                className="flex items-center gap-8 flex-shrink-0"
                style={{ backfaceVisibility: "hidden" }} // Hardware acceleration trick
              >
                <div className="flex items-center gap-2.5 group cursor-default">
                  <Icon
                    size={18}
                    className="text-on-surface-variant group-hover:text-electric-cyan transition-colors"
                    strokeWidth={1.5}
                  />
                  <span className="text-[11px] tracking-widest uppercase text-on-surface-variant group-hover:text-foreground transition-colors font-medium whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
                
                {/* Separator Dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-border-strong/50 flex-shrink-0" />
              </div>
            );
          })}
        </motion.div>

        {/* Side Fades for depth - hides the "cut-off" at the screen edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-dim via-surface-dim/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface-dim via-surface-dim/80 to-transparent z-10" />
      </div>
    </section>
  );
} //slider