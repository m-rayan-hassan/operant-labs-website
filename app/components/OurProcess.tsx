"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "Deep dive into your business model, current constraints, and growth objectives to define the right architecture.",
  },
  {
    number: "02",
    title: "Solution Design",
    description: "Creating the technical blueprint, selecting the right stack, and mapping the user journey or data flow.",
  },
  {
    number: "03",
    title: "Agile Engineering",
    description: "Iterative development with regular feedback loops, ensuring what we build exactly matches what you need.",
  },
  {
    number: "04",
    title: "Deployment & Scale",
    description: "Secure, zero-downtime deployment followed by ongoing monitoring, support, and optimisation.",
  },
];

export default function OurProcess() {
  return (
    <section className="py-24 md:py-32 border-t border-border-subtle relative z-10 bg-background" id="process">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="section-number mx-auto">05 / Approach</div>
          <h2 className="text-3xl md:text-5xl text-foreground font-semibold tracking-tight">
            How We Deliver
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Step Circle */}
              <div className="w-[90px] h-[90px] rounded-full bg-card border border-border-strong flex items-center justify-center mb-8 relative z-10 group-hover:border-electric-cyan/50 transition-colors duration-500 shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <span className="font-technical-data text-2xl text-foreground/80 group-hover:text-electric-cyan transition-colors font-light">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-on-surface-variant text-[13px] font-light leading-relaxed max-w-[260px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
