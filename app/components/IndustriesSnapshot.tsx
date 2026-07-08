"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Landmark,
  HeartPulse,
  Truck,
  ShoppingBag,
  Factory,
  Scale,
  GraduationCap,
  Rocket,
  Building,
  Gavel,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const industries = [
  {
    icon: Landmark,
    name: "Government",
    desc: "Secure, scalable infrastructure for public sector modernization and citizen services.",
    img: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    desc: "AI-driven diagnostics and HIPAA-compliant patient data management systems.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    icon: Scale,
    name: "Financial Services",
    desc: "High-frequency trading platforms and robust fintech security architectures.",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    icon: Gavel,
    name: "Legal",
    desc: "Automated contract analysis and secure, immutable case management tools.",
    img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    desc: "IoT integration, automation, and supply chain optimization systems.",
    img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    icon: Truck,
    name: "Logistics",
    desc: "Real-time fleet routing and AI-powered predictive inventory management.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    icon: ShoppingBag,
    name: "Retail",
    desc: "Omnichannel experiences and highly personalized recommendation engines.",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    icon: GraduationCap,
    name: "Education",
    desc: "Virtual learning environments and comprehensive student analytics dashboards.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    icon: Rocket,
    name: "Startups & SMEs",
    desc: "Agile MVP development and highly scalable cloud architectures.",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    icon: Building,
    name: "Enterprise",
    desc: "Large-scale digital transformation and legacy system modernization.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
];

// Tripled array for an infinite scrolling effect without blank spaces on wide screens
const doubledIndustries = [...industries, ...industries, ...industries];

export default function IndustriesSnapshot() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // Highly Optimized Frame-Independent Scrolling (Prevents Lag)
  useEffect(() => {
    let animationId: number;
    let lastTime = performance.now();
    const speed = 0.06; // Pixels per millisecond

    const scrollLoop = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      if (carouselRef.current && !isHovered && !isDragging) {
        carouselRef.current.scrollLeft += speed * deltaTime;

        const maxScroll = carouselRef.current.scrollWidth / 3;
        if (carouselRef.current.scrollLeft >= maxScroll * 2) {
          carouselRef.current.scrollLeft -= maxScroll;
        } else if (carouselRef.current.scrollLeft <= 0) {
          carouselRef.current.scrollLeft += maxScroll;
        }
      }
      animationId = requestAnimationFrame(scrollLoop);
    };

    animationId = requestAnimationFrame(scrollLoop);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (carouselRef.current) {
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeftState(carouselRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => { setIsDragging(false); setIsHovered(false); };
  const handleMouseUp = () => { setIsDragging(false); };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2.5; 
    carouselRef.current.scrollLeft = scrollLeftState - walk;
  };

  const scroll = (dir: "left" | "right") => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir === "left" ? -350 : 350, behavior: "smooth" });
    }
  };

  return (
    <section
      id="industries"
      className="py-24 md:py-32 border-t border-border-subtle bg-surface-dim relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="section-number-left mb-6">04 / Sectors</div>
          <h2 className="text-3xl md:text-5xl text-foreground font-semibold tracking-tight">
            Industries We Serve
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4 text-sm text-on-surface-variant"
        >
          {/* Arrow Controls & Drag Label */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-border-subtle hover:bg-surface hover:text-foreground transition-colors group bg-card"
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <span className="hidden md:inline-block px-4 py-2 rounded-full border border-border-subtle bg-surface/50 text-[11px] uppercase tracking-widest cursor-default">
              Drag to explore
            </span>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-border-subtle hover:bg-surface hover:text-foreground transition-colors group bg-card"
              aria-label="Scroll right"
            >
              <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        {/* Fade gradients to smoothly mask the edges */}
        <div className="absolute top-0 bottom-0 left-0 w-8 md:w-24 bg-gradient-to-r from-surface-dim to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-8 md:w-24 bg-gradient-to-l from-surface-dim to-transparent z-10 pointer-events-none" />

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ willChange: 'scroll-position', WebkitTransform: 'translateZ(0)' }}
          className="flex gap-6 py-4 px-6 lg:px-8 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none"
        >
          {doubledIndustries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <div
                key={`${industry.name}-${i}`}
                style={{ willChange: 'transform', WebkitTransform: 'translateZ(0)' }}
                className="w-[280px] md:w-[340px] shrink-0 glass-card group overflow-hidden relative flex flex-col pointer-events-none md:pointer-events-auto shadow-sm"
              >
                {/* Card Image Header */}
                <div className="h-[160px] md:h-[200px] w-full relative overflow-hidden bg-card">
                  <img
                    src={industry.img}
                    alt={industry.name}
                    draggable={false}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                  />
                  {/* Gradient overlay to seamlessly blend into the card body */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                  {/* Icon floating on the image */}
                  <div className="absolute bottom-4 left-6 p-2 rounded-lg bg-card/90 border border-border-subtle group-hover:border-border-strong transition-colors duration-300">
                    <Icon
                      className="text-foreground group-hover:text-electric-cyan transition-colors"
                      size={20}
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 pt-4 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                    {industry.desc}
                  </p>
                  
                  {/* View Industry CTA Button (Inside Card) */}
                  <div className="mt-auto pt-4 border-t border-border-subtle/50">
                    <Link href={industry.href} className="inline-flex items-center text-[11px] uppercase tracking-widest text-foreground/60 group-hover:text-electric-cyan transition-colors gap-2 font-semibold">
                      View Industry
                      <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Main View All Industries Button (Below Slider) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/industries"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-border-strong text-[11px] uppercase tracking-widest font-semibold text-foreground hover:bg-card-hover hover:border-foreground transition-all duration-300 group bg-card shadow-sm"
          >
            View All Industries
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}