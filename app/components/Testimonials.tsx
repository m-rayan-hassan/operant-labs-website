"use client";

import { memo, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Star, Quote, Hexagon, Command, Triangle, Globe, Cloud, Zap } from "lucide-react";

const topRowTestimonials = [
  { quote: "Operant Labs exceeded our expectations in all aspects of product development. They took our initial idea and engineered a highly scalable, secure microservices architecture.", name: "Sarah Jenkins", title: "CTO, CloudScale Inc", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop", logo: Cloud },
  { quote: "We needed a clear, enterprise-grade, production-ready use case to demonstrate how our platform secures agentic workloads. Operant delivered exactly that with speed and discipline.", name: "Michael Chen", title: "VP Solutions Engineering", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop", logo: Hexagon },
  { quote: "The team's ability to seamlessly integrate with our internal workflows was impressive. They didn't just write code; they provided strategic technical advisory that saved us months.", name: "Elena Rodriguez", title: "Founder & CEO, FinTech Dynamics", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop", logo: Triangle },
  { quote: "Operant are keen to embrace new challenges and work tirelessly to accomplish the common goal. I admire the team's enthusiasm, deep technical knowledge, and pride in their work.", name: "David Smith", title: "Director of IT, HealthSecure", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop", logo: Command },
];

const bottomRowTestimonials = [
  { quote: "This project was high complexity and the Operant team demonstrated excellent qualities throughout. No corners were cut, and diligent QA was done to ensure the highest quality.", name: "James Wilson", title: "CEO, DataStream Analytics", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop", logo: Globe },
  { quote: "In just three weeks, Operant delivered a GenAI proof of value that brought our vision to life. Their blend of technical depth, speed, and alignment with our strategic goals is exceptional.", name: "Anita Patel", title: "Chief Product Officer", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop", logo: Zap },
  { quote: "It has been an absolute pleasure working with Operant in bootstrapping our infrastructure. I was thoroughly impressed with their expertise in Cloud Native development.", name: "Marcus Johnson", title: "Lead Architect, Nexus Logistics", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop", logo: Hexagon },
  { quote: "Their focus on business-first architecture meant we didn't just get a shiny new tool, we got a system directly tied to our revenue goals. The transparency was best-in-class.", name: "Sophie Laurent", title: "Head of Digital, RetailEdge", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop", logo: Cloud },
];

// Duplicate for seamless infinite loop
const topRow = [...topRowTestimonials, ...topRowTestimonials];
const bottomRow = [...bottomRowTestimonials, ...bottomRowTestimonials];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // All mutable flags stored in refs — ZERO re-renders from hover/visibility
  const isVisibleRef = useRef(false);
  const isHoveredTopRef = useRef(false);
  const isHoveredBottomRef = useRef(false);

  // IntersectionObserver — writes to ref, never triggers re-render
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Initialize bottom row offset + start single rAF loop (no deps = never restarts)
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollLeft = bottomRef.current.scrollWidth / 2;
    }

    let animationId: number;
    let lastTime = performance.now();
    const speed = 0.036; // Pixels per millisecond (~ 0.6 px/frame at 60fps)

    const scrollLoop = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      if (isVisibleRef.current) {
        const top = topRef.current;
        const bottom = bottomRef.current;

        // Top row: scroll left
        if (top && !isHoveredTopRef.current) {
          top.scrollLeft += speed * deltaTime;
          const max = top.scrollWidth / 2;
          if (top.scrollLeft >= max) top.scrollLeft -= max;
        }

        // Bottom row: scroll right
        if (bottom && !isHoveredBottomRef.current) {
          bottom.scrollLeft -= speed * deltaTime;
          const max = bottom.scrollWidth / 2;
          if (bottom.scrollLeft <= 0) bottom.scrollLeft += max;
        }
      }
      animationId = requestAnimationFrame(scrollLoop);
    };

    animationId = requestAnimationFrame(scrollLoop);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 border-t border-border-subtle bg-background relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
          <div className="section-number mx-auto mb-6">07 / Client Success</div>
          <h2 className="text-3xl md:text-5xl text-foreground font-semibold tracking-tight mb-4">Testimonials</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            A few words from our satisfied clients as they share their success stories and experiences partnering with Operant Labs.
          </p>
        </motion.div>
      </div>

      <div className="relative flex flex-col gap-6">
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1: Scrolling Left */}
        <div
          ref={topRef}
          onMouseEnter={() => { isHoveredTopRef.current = true; }}
          onMouseLeave={() => { isHoveredTopRef.current = false; }}
          style={{ willChange: 'scroll-position', WebkitTransform: 'translateZ(0)' }}
          className="flex gap-6 overflow-x-auto no-scrollbar"
        >
          {topRow.map((item, idx) => (
            <div key={`top-${idx}`} style={{ WebkitTransform: 'translateZ(0)' }} className="w-[320px] md:w-[450px] shrink-0">
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>

        {/* Row 2: Scrolling Right */}
        <div
          ref={bottomRef}
          onMouseEnter={() => { isHoveredBottomRef.current = true; }}
          onMouseLeave={() => { isHoveredBottomRef.current = false; }}
          style={{ willChange: 'scroll-position', WebkitTransform: 'translateZ(0)' }}
          className="flex gap-6 overflow-x-auto no-scrollbar"
        >
          {bottomRow.map((item, idx) => (
            <div key={`bottom-${idx}`} style={{ WebkitTransform: 'translateZ(0)' }} className="w-[320px] md:w-[450px] shrink-0">
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TestimonialCard = memo(function TestimonialCard({ item }: { item: any }) {
  const LogoIcon = item.logo;
  return (
    <div className="testimonial-card glass-card h-full p-8 flex flex-col group relative bg-surface hover:bg-card shadow-sm">
      <Quote className="absolute top-6 right-8 text-border-strong opacity-20 group-hover:text-electric-cyan group-hover:opacity-10 transition-[color,opacity] duration-500 w-24 h-24 -translate-y-4 translate-x-4 rotate-12" />

      <div className="flex items-center gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="fill-electric-cyan text-electric-cyan" />
        ))}
      </div>

      <p className="text-on-surface-variant text-[14px] md:text-[15px] leading-relaxed font-light mb-10 flex-grow relative z-10">
        &ldquo;{item.quote}&rdquo;
      </p>

      <div className="flex items-center justify-between mt-auto pt-6 border-t border-border-subtle relative z-10">
        <div className="flex items-center gap-4">
          <img
            src={item.avatar}
            alt={item.name}
            width={48}
            height={48}
            loading="lazy"
            decoding="async"
            className="w-12 h-12 rounded-full object-cover border border-border-strong grayscale group-hover:grayscale-0 transition-[filter] duration-500"
          />
          <div>
            <h4 className="text-foreground font-medium text-sm">{item.name}</h4>
            <p className="text-on-surface-variant text-[12px]">{item.title}</p>
          </div>
        </div>

        <div className="text-foreground/40 group-hover:text-electric-cyan transition-colors duration-300">
          <LogoIcon size={28} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
});