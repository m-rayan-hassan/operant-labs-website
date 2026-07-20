"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does your forward-deployed model differ from staff augmentation?",
    answer:
      "We embed autonomous, cross-functional squads (AI architects, data engineers, MLOps) directly into your organization. They operate as a specialized unit with proprietary frameworks to accelerate time-to-value, rather than just providing individual contractors.",
  },
  {
    question: "Do you support pre-acquisition technical due diligence for private equity?",
    answer:
      "Yes. We conduct deep code-level audits of target companies to validate proprietary AI claims, assess data maturity, and uncover technical debt before you finalize transactions.",
  },
  {
    question: "How do you handle AI model governance and MLOps?",
    answer:
      "We implement strict RBAC, data privacy controls, and deploy continuous monitoring (MLOps) to detect model drift, prevent hallucinations, and ensure sustained ROI post-deployment.",
  },
];

export default function FaqTeaser() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 border-t border-border-subtle bg-background relative z-10">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="section-number mx-auto mb-6">FAQ</div>
          <h2 className="text-3xl md:text-5xl text-foreground font-semibold tracking-tight">
            Common Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isOpen
                    ? "border-border-strong bg-border-subtle/50"
                    : "border-border-subtle bg-transparent hover:border-border-strong"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="text-base font-medium text-foreground pr-8">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-foreground/40">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-on-surface-variant text-[13px] font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}