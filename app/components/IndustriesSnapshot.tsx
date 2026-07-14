"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
  Shield, // Added Shield icon for Defense
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const industries = [
  {
    icon: Landmark,
    name: "Government",
    desc: "Secure, scalable infrastructure for public sector modernization and citizen services.",
    img: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=800&auto=format&fit=crop",
    href: "/industries",
  },
  {
    icon: Shield,
    name: "Defense",
    desc: "Mission-critical systems, secure communications, and advanced threat intelligence.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2J5UP_tMGXeNK6--l04L4O5pmTxpmk8DI4lp-TkM7Q&s=10",
    href: "/industries",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    desc: "AI-driven diagnostics and HIPAA-compliant patient data management systems.",
    img: "https://images.unsplash.com/photo-1767716134786-92b647b12846?q=80&w=800&auto=format&fit=crop",
    href: "/industries",
  },
  {
    icon: Scale,
    name: "Financial Services",
    desc: "High-frequency trading platforms and robust fintech security architectures.",
    img: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=800&auto=format&fit=crop",
    href: "/industries",
  },
  {
    icon: Gavel,
    name: "Legal",
    desc: "Automated contract analysis and secure, immutable case management tools.",
    img: "https://media.licdn.com/dms/image/v2/D4E12AQElsqP5sAif5A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1685009669416?e=2147483647&v=beta&t=gHg2IIGxZBk09-3VuwGiLMftezCR8ZlZcUWUVnS06LA",
    href: "/industries",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    desc: "IoT integration, automation, and supply chain optimization systems.",
    img: "https://images.unsplash.com/photo-1513257805917-a0da1146eb15?q=80&w=800&auto=format&fit=crop",
    href: "/industries",
  },
  {
    icon: Truck,
    name: "Logistics",
    desc: "Real-time fleet routing and AI-powered predictive inventory management.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    href: "/industries",
  },
  {
    icon: ShoppingBag,
    name: "Retail",
    desc: "Omnichannel experiences and highly personalized recommendation engines.",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    href: "/industries",
  },
  {
    icon: GraduationCap,
    name: "Education",
    desc: "Virtual learning environments and comprehensive student analytics dashboards.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    href: "/industries",
  },
  {
    icon: Rocket,
    name: "Startups & SMEs",
    desc: "Agile MVP development and highly scalable cloud architectures.",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    href: "/industries",
  },
  {
    icon: Building,
    name: "Enterprise",
    desc: "Large-scale digital transformation and legacy system modernization.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    href: "/industries",
  },
];

const doubledIndustries = [...industries, ...industries, ...industries];

export default function IndustriesSnapshot() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    let animationId: number;
    let lastTime = performance.now();
    const speed = 0.06;

    const element = carouselRef.current;
    if (!element) return;

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { rootMargin: "200px 0px", threshold: 0.05 },
    );
    visibilityObserver.observe(element);

    const scrollLoop = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      if (
        carouselRef.current &&
        isVisibleRef.current &&
        !isHoveredRef.current &&
        !isDraggingRef.current
      ) {
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
    return () => {
      cancelAnimationFrame(animationId);
      visibilityObserver.disconnect();
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    if (carouselRef.current) {
      startXRef.current = e.pageX - carouselRef.current.offsetLeft;
      scrollLeftRef.current = carouselRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
    isHoveredRef.current = false;
  };
  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 2.5;
    carouselRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const scroll = (dir: "left" | "right") => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: dir === "left" ? -350 : 350,
        behavior: "smooth",
      });
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
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-border-subtle hover:bg-surface hover:text-foreground transition-colors group bg-card"
              aria-label="Scroll left"
            >
              <ChevronLeft
                size={16}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
            </button>
            <span className="hidden md:inline-block px-4 py-2 rounded-full border border-border-subtle bg-surface/50 text-[11px] uppercase tracking-widest cursor-default">
              Drag to explore
            </span>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-border-subtle hover:bg-surface hover:text-foreground transition-colors group bg-card"
              aria-label="Scroll right"
            >
              <ChevronRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
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
        <div className="absolute top-0 bottom-0 left-0 w-8 md:w-24 bg-gradient-to-r from-surface-dim to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-8 md:w-24 bg-gradient-to-l from-surface-dim to-transparent z-10 pointer-events-none" />

        <div
          ref={carouselRef}
          onMouseEnter={() => {
            isHoveredRef.current = true;
          }}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{
            willChange: "scroll-position",
            WebkitTransform: "translateZ(0)",
          }}
          className="flex gap-6 py-4 px-6 lg:px-8 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none"
        >
          {doubledIndustries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <div
                key={`${industry.name}-${i}`}
                style={{
                  willChange: "transform",
                  WebkitTransform: "translateZ(0)",
                }}
                className="w-[280px] md:w-[340px] shrink-0 glass-card group overflow-hidden relative flex flex-col pointer-events-none md:pointer-events-auto shadow-sm"
              >
                <div className="h-[160px] md:h-[200px] w-full relative overflow-hidden bg-card">
                  <Image
                    src={industry.img}
                    alt={industry.name}
                    fill
                    sizes="(max-width: 768px) 280px, 340px"
                    draggable={false}
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute bottom-4 left-6 p-2 rounded-lg bg-card/90 border border-border-subtle group-hover:border-border-strong transition-colors duration-300">
                    <Icon
                      className="text-foreground group-hover:text-electric-cyan transition-colors"
                      size={20}
                    />
                  </div>
                </div>
                <div className="p-6 pt-4 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                    {industry.desc}
                  </p>
                  <div className="mt-auto pt-4 border-t border-border-subtle/50">
                    <Link
                      href={industry.href}
                      className="inline-flex items-center text-[11px] uppercase tracking-widest text-foreground/60 group-hover:text-electric-cyan transition-colors gap-2 font-semibold"
                    >
                      View Industry
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1.5 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

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
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
