"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you integrate with our existing legacy systems?",
    answer:
      "Yes. We specialise in modernising legacy architecture through APIs, microservices, and targeted refactoring, ensuring zero disruption to your current operations.",
  },
  {
    question: "How do you handle data security and compliance?",
    answer:
      "Security is foundational. We build to SOC2 and ISO27001 standards, employing end-to-end encryption, role-based access control (RBAC), and continuous vulnerability scanning.",
  },
  {
    question: "What is your typical engagement model?",
    answer:
      "We operate primarily on dedicated squad or fixed-scope outcome models. After an initial discovery phase, we align our engineering teams with your business objectives.",
  },
];

export default function FaqTeaser() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 border-t border-border-subtle bg-background relative z-10">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="section-number mx-auto mb-6">08 / FAQ</div>
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
                  isOpen ? "border-border-strong bg-border-subtle/50" : "border-border-subtle bg-transparent hover:border-border-strong"
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
