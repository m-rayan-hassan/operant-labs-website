"use client";

import { motion } from "motion/react";
import { Hexagon, Cloud, Shield, Activity, Triangle, Cpu, Globe, Zap, Box, Command } from "lucide-react";

// Combined single list of companies
const partnerLogos = [
  { name: "Dell", icon: Globe },
  { name: "KPMG", icon: Hexagon },
  { name: "SoftBank", icon: Cloud },
  { name: "Petrobras", icon: Activity },
  { name: "KeyBank", icon: Shield },
  { name: "NHS", icon: Box },
  { name: "The Washington Post", icon: Command },
  { name: "Gilead", icon: Triangle },
  { name: "Cisco", icon: Activity },
  { name: "BNSF Railway", icon: Zap },
  { name: "BDO", icon: Hexagon },
  { name: "Adobe", icon: Triangle },
  { name: "Workday", icon: Cloud },
  { name: "S&P Global", icon: Cpu },
];

// Tripled array for a perfectly seamless, gapless infinite scroll on wide screens
const singleMarquee = [...partnerLogos, ...partnerLogos, ...partnerLogos];

export default function Partners() {
  return (
    <section className="py-20 md:py-28 border-t border-border-subtle bg-surface-dim relative z-10 overflow-hidden">
      {/* Hardware Accelerated Keyframes for a Single Row */}
      <style dangerouslySetInnerHTML={{__html: `
        .marquee-left-fast {
          animation: scrollLeftFast 50s linear infinite;
          will-change: transform;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
        @keyframes scrollLeftFast {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.3333%, 0, 0); }
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-4xl text-foreground font-light tracking-tight">
            Powering AI-driven automation for <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/60">global leaders.</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative mt-12">
        {/* Gradients to fade edges smoothly into the background */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-64 bg-gradient-to-r from-surface-dim to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-64 bg-gradient-to-l from-surface-dim to-transparent z-10 pointer-events-none" />

        {/* Single Row: Scrolling Left */}
        <div className="flex w-[300%] pause-on-hover marquee-left-fast items-center">
          {singleMarquee.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={`logo-${idx}`} 
                className="w-[220px] md:w-[300px] shrink-0 flex items-center justify-center group cursor-pointer" 
                style={{ WebkitTransform: 'translateZ(0)' }}
              >
                <div className="flex items-center gap-3 text-foreground/40 group-hover:text-foreground transition-all duration-300 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100">
                  <Icon size={28} strokeWidth={1.5} className="group-hover:text-electric-cyan transition-colors duration-300" />
                  <span className="text-xl md:text-2xl font-bold tracking-tight">{item.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}