"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import WorldMap from "../components/WorldMap";

export default function SchedulePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Load the CSS
    if (!document.querySelector('link[href*="calendly"]')) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    // 2. Load the JS
    const scriptId = "calendly-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // 3. Initialize widget
    const url = "https://calendly.com/executive-strategy-session/30min";
    
    const initWidget = setInterval(() => {
      if (window.Calendly && containerRef.current) {
        // Prevent duplicate widgets
        containerRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url,
          parentElement: containerRef.current,
        });
        clearInterval(initWidget);
      }
    }, 100);

    return () => clearInterval(initWidget);
  }, []);

  return (
    <main className="flex-grow pt-24 pb-0 relative z-10">
      <div className="min-h-screen pt-32 pb-8">
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="section-number justify-center mb-6">Executive Session</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl italic mb-6 leading-tight tracking-tight">
              Schedule Your{" "}
              <span className="text-electric-cyan">Strategy Session</span>
            </h1>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed">
              Select a time below to meet with our executive team. We'll discuss your AI maturity, business objectives, and how Operant Labs can accelerate your transformation.
            </p>
          </motion.div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-panel p-2 sm:p-4 rounded-[2rem] relative overflow-hidden shadow-2xl bg-surface/30 backdrop-blur-md border border-border-strong w-full">
              <div 
                ref={containerRef} 
                className="w-full h-[750px] sm:h-[700px] overflow-hidden rounded-xl relative z-10"
              />
              <div className="absolute top-0 right-0 w-64 h-64 bg-electric-cyan/5 blur-[80px] rounded-full pointer-events-none"></div>
            </div>
          </motion.div>
        </section>
        
        <WorldMap />
      </div>
    </main>
  );
}
