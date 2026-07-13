"use client";

import { memo, useRef, useState, useEffect } from "react";
import { motion, useAnimationControls, useMotionValue } from "motion/react";
import { Star, Quote, Building2, Landmark, TrendingUp, ArrowRight } from "lucide-react";

const partners = [
  { 
    quote: "Operant Labs played a pivotal role in the JEEL innovation program. Their technical depth in architecting secure, scalable financial ecosystems allowed us to accelerate our digital transformation journey with absolute confidence.", 
    name: "Ahmed Al-Enazi", 
    title: "Senior Lead, JEEL (Riyadh Bank)", 
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop", 
    logo: Landmark,
    link: "#"
  },
  { 
    quote: "The technical due diligence and engineering strategy provided by Operant Labs for our portfolio has been exceptional. They provide the high-level clarity required for complex asset management and enterprise scaling.", 
    name: "Executive Director", 
    title: "Braymont Asset Group", 
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop", 
    logo: Building2,
    link: "https://braymontassetgroup.com/"
  },
  { 
    quote: "Working with Operant Labs transformed our technical roadmap. Their ability to bridge the gap between growth-stage capital requirements and robust engineering execution is a massive advantage for our partners.", 
    name: "Managing Partner", 
    title: "Orion Grow Capital", 
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop", 
    logo: TrendingUp,
    link: "#"
  },
];

// Duplicate for infinite scroll feel
const allItems = [...partners, ...partners, ...partners];

export default function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimationControls();
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic
  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: "-50%",
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  return (
    <section className="py-24 md:py-32 border-t border-border-subtle bg-background relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="text-left">
          <div className="section-number-left mb-6">Strategic Advisory</div>
          <h2 className="text-3xl md:text-5xl text-foreground font-semibold tracking-tight mb-4">Trusted by Industry Leaders</h2>
          <p className="text-on-surface-variant max-w-2xl font-light text-lg">
          </p>
        </div>
      </div>

      <div className="relative cursor-grab active:cursor-grabbing">
        {/* Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        <motion.div
          ref={containerRef}
          className="flex gap-8 w-max px-4"
          drag="x"
          dragConstraints={{ left: -2000, right: 0 }}
          style={{ x }}
          animate={controls}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onDragStart={() => setIsHovered(true)}
        >
          {allItems.map((item, idx) => (
            <div key={`${item.title}-${idx}`} className="w-[350px] md:w-[500px] shrink-0">
              <TestimonialCard item={item} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const TestimonialCard = memo(function TestimonialCard({ item }: { item: any }) {
  const LogoIcon = item.logo;
  return (
    <div className="testimonial-card glass-card h-full p-10 flex flex-col group relative bg-surface/30 hover:bg-card transition-all duration-700 border border-border-subtle hover:border-border-strong rounded-2xl select-none">
      <Quote className="absolute top-8 right-10 text-electric-cyan opacity-[0.03] w-20 h-20 -translate-y-2 pointer-events-none group-hover:opacity-[0.08] transition-opacity" />

      <div className="flex items-center gap-1 mb-8">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="fill-electric-cyan text-electric-cyan" />
        ))}
      </div>

      <p className="text-on-surface-variant text-[15px] md:text-[17px] leading-relaxed font-light mb-12 flex-grow italic tracking-wide">
        &ldquo;{item.quote}&rdquo;
      </p>

      <div className="flex items-center justify-between mt-auto pt-8 border-t border-border-subtle">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 shrink-0">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-full h-full rounded-full object-cover border border-border-strong grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-background border border-border-subtle rounded-full flex items-center justify-center shadow-sm">
              <LogoIcon size={12} className="text-electric-cyan" />
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-foreground font-semibold text-sm tracking-tight">{item.name}</h4>
            <p className="text-on-surface-variant text-[10px] uppercase tracking-[0.15em] font-bold opacity-60">{item.title}</p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
           <div className="text-foreground/10 group-hover:text-electric-cyan/40 transition-colors">
              <LogoIcon size={32} strokeWidth={1} />
           </div>
           {item.link !== "#" && (
             <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[9px] uppercase tracking-widest text-electric-cyan font-bold flex items-center gap-1 hover:underline pointer-events-auto"
             >
               Visit Site <ArrowRight size={10} />
             </a>
           )}
        </div>
      </div>
    </div>
  );
});