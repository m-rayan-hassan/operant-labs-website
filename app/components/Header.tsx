"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Zap,
  Cpu,
  Cloud,
  Rocket,
  LayoutGrid,
  ShieldCheck,
  Activity,
  Users,
  FileSearch,
  Landmark,
  Shield,
  HeartPulse,
  Scale,
  Gavel,
  Factory,
  Truck,
  ShoppingBag,
  GraduationCap,
  Building,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

// Enterprise capabilities for the Mega Menu
const capabilitiesList = [
  {
    name: "AI Strategy & Transformation",
    description: "Enterprise readiness & roadmapping",
    href: "/capabilities/ai-strategy",
    icon: Rocket,
  },
  {
    name: "Technical AI Due Diligence",
    description: "Assessment for private capital",
    href: "/capabilities/ai-due-diligence",
    icon: FileSearch,
  },
  {
    name: "AI Solution Architecture",
    description: "Secure, scalable system design",
    href: "/capabilities/ai-architecture",
    icon: LayoutGrid,
  },
  {
    name: "Forward-Deployed Engineering",
    description: "Dedicated execution teams",
    href: "/capabilities/forward-deployed-engineering",
    icon: Users,
  },
  {
    name: "Custom AI Systems",
    description: "Proprietary intelligent platforms",
    href: "/capabilities/custom-ai-systems",
    icon: Cpu,
  },
  {
    name: "Intelligent Automation",
    description: "Streamline complex workflows",
    href: "/capabilities/intelligent-automation",
    icon: Zap,
  },
  {
    name: "Data & Cloud Engineering",
    description: "Modern data infrastructure",
    href: "/capabilities/data-cloud-engineering",
    icon: Cloud,
  },
  {
    name: "AI Governance",
    description: "Responsible & secure AI scaling",
    href: "/capabilities/ai-governance",
    icon: ShieldCheck,
  },
  {
    name: "Managed AI Operations",
    description: "Continuous optimization & MLOps",
    href: "/capabilities/managed-ai-operations",
    icon: Activity,
  },
];

// Industries for the Mega Menu
const industriesList = [
  {
    name: "Government",
    description: "Secure, scalable infrastructure for public sector modernization.",
    href: "/industries",
    icon: Landmark,
  },
  {
    name: "Defense",
    description: "Mission-critical systems and advanced threat intelligence.",
    href: "/industries",
    icon: Shield,
  },
  {
    name: "Healthcare",
    description: "AI-driven diagnostics and HIPAA-compliant data systems.",
    href: "/industries",
    icon: HeartPulse,
  },
  {
    name: "Financial Services",
    description: "High-frequency trading and fintech security architectures.",
    href: "/industries",
    icon: Scale,
  },
  {
    name: "Legal",
    description: "Automated contract analysis and secure case management.",
    href: "/industries",
    icon: Gavel,
  },
  {
    name: "Manufacturing",
    description: "IoT integration, automation, and supply chain optimization.",
    href: "/industries",
    icon: Factory,
  },
  {
    name: "Logistics",
    description: "Real-time fleet routing and predictive inventory management.",
    href: "/industries",
    icon: Truck,
  },
  {
    name: "Retail",
    description: "Omnichannel experiences and personalized recommendation engines.",
    href: "/industries",
    icon: ShoppingBag,
  },
  {
    name: "Education",
    description: "Virtual learning environments and student analytics dashboards.",
    href: "/industries",
    icon: GraduationCap,
  },
  {
    name: "Startups & SMEs",
    description: "Agile MVP development and highly scalable cloud architectures.",
    href: "/industries",
    icon: Rocket,
  },
  {
    name: "Enterprise",
    description: "Large-scale digital transformation and legacy modernization.",
    href: "/industries",
    icon: Building,
  },
];

// Re-scaled sizes for optimum readability. Md (tablet) is 11px, expanding up to 14px on xl desktop
const navLinkUnderline =
  "nav-link relative text-[14px] md:text-[11px] lg:text-[13px] xl:text-[14px] font-medium md:tracking-tight lg:tracking-normal flex items-center justify-center leading-none py-1.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-electric-cyan after:transition-all after:duration-300 hover:after:w-full";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // Dropdown states
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  
  const capDropdownRef = useRef<HTMLDivElement>(null);
  const indDropdownRef = useRef<HTMLDivElement>(null);
  const capTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const indTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrolledRef = useRef(false);
  const scrollRafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRafRef.current !== null) return;

      scrollRafRef.current = window.requestAnimationFrame(() => {
        scrollRafRef.current = null;
        const nextScrolled = window.scrollY > 20;

        if (scrolledRef.current !== nextScrolled) {
          scrolledRef.current = nextScrolled;
          setScrolled(nextScrolled);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollRafRef.current !== null) {
        window.cancelAnimationFrame(scrollRafRef.current);
      }
    };
  }, []);

  // Handlers for Capabilities Menu
  const handleCapMouseEnter = () => {
    if (capTimeoutRef.current) clearTimeout(capTimeoutRef.current);
    if (indTimeoutRef.current) clearTimeout(indTimeoutRef.current);
    setIndustriesOpen(false);
    setCapabilitiesOpen(true);
  };
  const handleCapMouseLeave = () => {
    capTimeoutRef.current = setTimeout(() => setCapabilitiesOpen(false), 200);
  };

  // Handlers for Industries Menu
  const handleIndMouseEnter = () => {
    if (indTimeoutRef.current) clearTimeout(indTimeoutRef.current);
    if (capTimeoutRef.current) clearTimeout(capTimeoutRef.current);
    setCapabilitiesOpen(false);
    setIndustriesOpen(true);
  };
  const handleIndMouseLeave = () => {
    indTimeoutRef.current = setTimeout(() => setIndustriesOpen(false), 200);
  };

  return (
    <header className="fixed top-0 w-full z-50 pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div
        className={`relative flex justify-between items-center w-full max-w-7xl mx-auto backdrop-blur-md border rounded-full px-4 md:px-2.5 lg:px-4 xl:px-6 py-2.5 lg:py-3 pointer-events-auto shadow-2xl transition-all duration-300 ${
          scrolled
            ? "bg-background/80 border-border-strong"
            : "bg-background/60 border-border-subtle"
        }`}
      >
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 md:gap-1 lg:gap-2.5 cursor-pointer group shrink-0"
        >
          <Image
            src="/logo.png"
            alt="Operant Labs Logo"
            width={40}
            height={40}
            priority
            className="shrink-0 w-8 h-8 md:w-7 md:h-7 lg:w-9 lg:h-9"
          />
          <span className="text-[18px] md:text-[16px] lg:text-[20px] tracking-tight flex items-center -ml-[6px] lg:-ml-[8px] -mt-[1px]">
            <span className="font-bold text-foreground">Operant</span>
            <span className="font-light text-on-surface-variant ml-0.5">Labs</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-1.5 lg:gap-4 xl:gap-6 whitespace-nowrap px-1 min-w-0">
          <Link href="/" className={navLinkUnderline}>Home</Link>

          {/* Capabilities Mega Menu Dropdown */}
          <div
            className="static flex items-center h-full"
            ref={capDropdownRef}
            onMouseEnter={handleCapMouseEnter}
            onMouseLeave={handleCapMouseLeave}
          >
            <button className={`${navLinkUnderline} gap-1 cursor-pointer`}>
              Capabilities
              <ChevronDown
                size={14}
                className={`w-3 h-3 lg:w-3.5 lg:h-3.5 transition-transform duration-200 ${
                  capabilitiesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {capabilitiesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-5 z-50 cursor-default w-[95vw] lg:w-full max-w-[980px]"
                >
                  <div className="w-full bg-surface/95 backdrop-blur-xl border border-border-strong rounded-2xl shadow-2xl flex overflow-hidden">
                    <div className="w-[35%] lg:w-[30%] shrink-0 bg-surface-dim border-r border-border-subtle p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden group/pane">
                      <div className="absolute -top-12 -left-12 w-40 h-40 bg-electric-cyan/10 rounded-full blur-3xl transition-all duration-700 group-hover/pane:bg-electric-cyan/20"></div>

                      <div className="relative z-10">
                        <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center border border-border-subtle mb-6 shadow-sm">
                          <Cpu size={18} className="text-foreground" />
                        </div>
                        <h3 className="text-sm font-semibold text-foreground mb-3 tracking-wide whitespace-normal">
                          Our Capabilities
                        </h3>
                        <p className="text-xs text-on-surface-variant leading-relaxed font-light whitespace-normal">
                          We help enterprises and portfolio companies assess, architect, and execute AI transformations at scale.
                        </p>
                      </div>

                      <Link
                        href="/capabilities"
                        className="relative z-10 text-[11px] uppercase tracking-widest font-semibold text-electric-cyan flex items-center gap-2 group/link mt-8 w-fit"
                      >
                        View All Capabilities
                        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    <div className="w-[65%] lg:w-[70%] p-4 lg:p-6 grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3">
                      {capabilitiesList.map((capability) => (
                        <Link
                          key={capability.name}
                          href={capability.href}
                          className="group flex flex-col gap-2.5 p-3.5 lg:p-4 rounded-xl hover:bg-border-subtle transition-all duration-200"
                        >
                          <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-background flex items-center justify-center border border-border-strong group-hover:border-electric-cyan/40 group-hover:bg-electric-cyan/5 transition-all shrink-0 shadow-sm">
                            <capability.icon size={15} className="text-foreground group-hover:text-electric-cyan transition-colors" />
                          </div>
                          <div>
                            <h4 className="text-[13px] font-semibold text-foreground mb-1 group-hover:text-electric-cyan transition-colors whitespace-normal leading-snug">
                              {capability.name}
                            </h4>
                            <p className="text-[11px] lg:text-[12px] text-on-surface-variant font-light leading-relaxed whitespace-normal">
                              {capability.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/investors" className={navLinkUnderline}>Investors</Link>

          {/* Industries Mega Menu Dropdown */}
          <div
            className="static flex items-center h-full"
            ref={indDropdownRef}
            onMouseEnter={handleIndMouseEnter}
            onMouseLeave={handleIndMouseLeave}
          >
            <button className={`${navLinkUnderline} gap-1 cursor-pointer`}>
              Industries
              <ChevronDown
                size={14}
                className={`w-3 h-3 lg:w-3.5 lg:h-3.5 transition-transform duration-200 ${
                  industriesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {industriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-5 z-50 cursor-default w-[95vw] lg:w-full max-w-[980px]"
                >
                  <div className="w-full bg-surface/95 backdrop-blur-xl border border-border-strong rounded-2xl shadow-2xl flex overflow-hidden">
                    <div className="w-[35%] lg:w-[30%] shrink-0 bg-surface-dim border-r border-border-subtle p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden group/pane">
                      <div className="absolute -top-12 -left-12 w-40 h-40 bg-electric-cyan/10 rounded-full blur-3xl transition-all duration-700 group-hover/pane:bg-electric-cyan/20"></div>

                      <div className="relative z-10">
                        <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center border border-border-subtle mb-6 shadow-sm">
                          <Building size={18} className="text-foreground" />
                        </div>
                        <h3 className="text-sm font-semibold text-foreground mb-3 tracking-wide whitespace-normal">
                          Industries We Serve
                        </h3>
                        <p className="text-xs text-on-surface-variant leading-relaxed font-light whitespace-normal">
                          Tailored AI solutions engineered to solve complex operational challenges across key sectors.
                        </p>
                      </div>

                      <Link
                        href="/industries"
                        className="relative z-10 text-[11px] uppercase tracking-widest font-semibold text-electric-cyan flex items-center gap-2 group/link mt-8 w-fit"
                      >
                        View All Industries
                        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    <div className="w-[65%] lg:w-[70%] p-4 lg:p-6 grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3 max-h-[60vh] overflow-y-auto custom-scrollbar">
                      {industriesList.map((industry) => (
                        <Link
                          key={industry.name}
                          href={industry.href}
                          className="group flex flex-col gap-2.5 p-3.5 lg:p-4 rounded-xl hover:bg-border-subtle transition-all duration-200"
                        >
                          <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-background flex items-center justify-center border border-border-strong group-hover:border-electric-cyan/40 group-hover:bg-electric-cyan/5 transition-all shrink-0 shadow-sm">
                            <industry.icon size={15} className="text-foreground group-hover:text-electric-cyan transition-colors" />
                          </div>
                          <div>
                            <h4 className="text-[13px] font-semibold text-foreground mb-1 group-hover:text-electric-cyan transition-colors whitespace-normal leading-snug">
                              {industry.name}
                            </h4>
                            <p className="text-[11px] lg:text-[12px] text-on-surface-variant font-light leading-relaxed whitespace-normal">
                              {industry.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/our-process" className={navLinkUnderline}>How We Deliver</Link>
          <Link href="/insights" className={navLinkUnderline}>Insights</Link>
          <Link href="/about-us" className={navLinkUnderline}>About</Link>
          <Link href="/contact-us" className={navLinkUnderline}>Contact</Link>
        </nav>

        {/* CTA Button & Theme Toggle */}
        <div className="hidden md:flex items-center gap-1.5 lg:gap-3 xl:gap-4 shrink-0">
          <ThemeToggle />
          <Link
            href="/contact-us"
            className="btn-solid text-[10px] lg:text-[12px] xl:text-[13px] px-3.5 lg:px-5 xl:px-6 py-2 lg:py-2.5 rounded-full font-bold tracking-[0.05em] lg:tracking-[0.1em] uppercase whitespace-nowrap flex items-center justify-center leading-none"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3 shrink-0">
          <ThemeToggle />
          <button
            className="text-on-surface-variant p-2 hover:text-foreground transition-colors cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-3 mx-auto w-full bg-surface/95 backdrop-blur-xl border border-border-strong rounded-2xl p-6 pointer-events-auto shadow-2xl overflow-y-auto max-h-[calc(100vh-100px)] custom-scrollbar"
          >
            <nav className="flex flex-col gap-5">
              <Link href="/" className="text-on-surface-variant hover:text-foreground transition-colors text-base tracking-wide font-medium" onClick={() => setMobileOpen(false)}>Home</Link>
              
              <div className="border-t border-border-strong pt-5">
                <p className="text-xs text-electric-cyan uppercase tracking-[0.15em] mb-4 font-semibold">
                  Capabilities
                </p>
                <div className="flex flex-col gap-2">
                  {capabilitiesList.map((capability) => (
                    <Link key={capability.name} href={capability.href} className="group flex items-center gap-3 py-2 text-sm text-on-surface-variant hover:text-foreground transition-colors" onClick={() => setMobileOpen(false)}>
                      <div className="w-8 h-8 rounded-md bg-border-subtle flex items-center justify-center shrink-0 border border-border-strong group-hover:border-electric-cyan/40">
                        <capability.icon size={14} className="text-foreground group-hover:text-electric-cyan transition-colors" />
                      </div>
                      {capability.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/investors" className="text-on-surface-variant hover:text-foreground transition-colors text-base tracking-wide font-medium border-t border-border-strong pt-5" onClick={() => setMobileOpen(false)}>Investors</Link>

              <div className="border-t border-border-strong pt-5">
                <p className="text-xs text-electric-cyan uppercase tracking-[0.15em] mb-4 font-semibold">
                  Industries
                </p>
                <div className="flex flex-col gap-2">
                  {industriesList.map((industry) => (
                    <Link key={industry.name} href={industry.href} className="group flex items-center gap-3 py-2 text-sm text-on-surface-variant hover:text-foreground transition-colors" onClick={() => setMobileOpen(false)}>
                      <div className="w-8 h-8 rounded-md bg-border-subtle flex items-center justify-center shrink-0 border border-border-strong group-hover:border-electric-cyan/40">
                        <industry.icon size={14} className="text-foreground group-hover:text-electric-cyan transition-colors" />
                      </div>
                      {industry.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-5 border-t border-border-strong pt-5">
                <Link href="/our-process" className="text-on-surface-variant hover:text-foreground transition-colors text-base tracking-wide font-medium" onClick={() => setMobileOpen(false)}>How We Deliver</Link>
                <Link href="/insights" className="text-on-surface-variant hover:text-foreground transition-colors text-base tracking-wide font-medium" onClick={() => setMobileOpen(false)}>Insights</Link>
                <Link href="/about-us" className="text-on-surface-variant hover:text-foreground transition-colors text-base tracking-wide font-medium" onClick={() => setMobileOpen(false)}>About</Link>
                <Link href="/contact-us" className="text-on-surface-variant hover:text-foreground transition-colors text-base tracking-wide font-medium" onClick={() => setMobileOpen(false)}>Contact</Link>
              </div>

              <Link
                href="/contact-us"
                className="btn-solid text-sm px-6 py-4 rounded-full font-bold tracking-[0.1em] uppercase mt-4 w-full text-center block leading-none"
              >
                Let's Talk
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}