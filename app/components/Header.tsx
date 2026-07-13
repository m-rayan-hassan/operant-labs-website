"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { 
  Menu, X, ChevronDown, ArrowRight, Code2, 
  Zap, Cpu, Cloud, LineChart, Rocket, LayoutGrid,
  Search, ShieldCheck, Activity, Users, FileSearch
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

// Enterprise capabilities for the Mega Menu
const capabilitiesList = [
  { name: "AI Strategy & Transformation", description: "Enterprise readiness & roadmapping", href: "/capabilities/ai-strategy", icon: Rocket },
  { name: "Technical AI Due Diligence", description: "Assessment for private capital", href: "/capabilities/ai-due-diligence", icon: FileSearch },
  { name: "AI Solution Architecture", description: "Secure, scalable system design", href: "/capabilities/ai-architecture", icon: LayoutGrid },
  { name: "Forward-Deployed Engineering", description: "Dedicated execution teams", href: "/capabilities/forward-deployed-engineering", icon: Users },
  { name: "Custom AI Systems", description: "Proprietary intelligent platforms", href: "/capabilities/custom-ai-systems", icon: Cpu },
  { name: "Intelligent Automation", description: "Streamline complex workflows", href: "/capabilities/intelligent-automation", icon: Zap },
  { name: "Data & Cloud Engineering", description: "Modern data infrastructure", href: "/capabilities/data-cloud-engineering", icon: Cloud },
  { name: "AI Governance", description: "Responsible & secure AI scaling", href: "/capabilities/ai-governance", icon: ShieldCheck },
  { name: "Managed AI Operations", description: "Continuous optimization & MLOps", href: "/capabilities/managed-ai-operations", icon: Activity },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Investors", href: "/investors" },
  { name: "Industries", href: "/industries" },
  { name: "How We Deliver", href: "/our-process" },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about-us" },
  { name: "Contact", href: "/contact-us" },
];

// Shared class for the animated hover-underline effect on nav links
const navLinkUnderline =
  "nav-link relative text-[12px] tracking-[0.05em] flex items-center after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-electric-cyan after:transition-all after:duration-300 hover:after:w-full";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCapabilitiesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setCapabilitiesOpen(false), 200);
  };

  return (
    <header className="fixed top-0 w-full z-50 pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div
        className={`relative flex justify-between items-center w-full max-w-7xl mx-auto backdrop-blur-md border rounded-full px-5 py-3 pointer-events-auto shadow-2xl transition-all duration-300 ${
          scrolled
            ? "bg-background/80 border-border-strong"
            : "bg-background/60 border-border-subtle"
        }`}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 cursor-pointer group shrink-0">
          <Image
            src="/logo.png"
            alt="Operant Labs Logo"
            width={40}
            height={40}
            priority
          />
          <span className="text-xl tracking-tight flex items-center">
            <span className="font-bold text-foreground">Operant</span>
            <span className="font-light text-on-surface-variant ml-0.5">Labs</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        {/* Switched to flex-1 and justify-center to prevent overlap, xl:flex to prevent crowding */}
        <nav className="hidden xl:flex flex-1 items-center justify-center gap-6 whitespace-nowrap px-8">
          {navLinks.slice(0, 1).map((link) => (
            <Link key={link.name} href={link.href} className={navLinkUnderline}>
              {link.name}
            </Link>
          ))}

          {/* Capabilities Mega Menu Dropdown */}
          <div
            className="static" // Made static so absolute positioning aligns to the main header container, not this small link
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`${navLinkUnderline} gap-1 cursor-pointer`}>
              Capabilities
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
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
                  // Positioned relative to the header perfectly centered
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-5 z-50 cursor-default w-full max-w-[980px]"
                >
                  <div className="w-full bg-surface/95 backdrop-blur-xl border border-border-strong rounded-2xl shadow-2xl flex overflow-hidden">
                    
                    {/* Left Pane - Overview Highlight */}
                    <div className="w-[30%] shrink-0 bg-surface-dim border-r border-border-subtle p-8 flex flex-col justify-between relative overflow-hidden group/pane">
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

                      <Link href="/capabilities" className="relative z-10 text-[11px] uppercase tracking-widest font-semibold text-electric-cyan flex items-center gap-2 group/link mt-8 w-fit">
                        View All Capabilities
                        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                    
                    {/* Right Pane - Grid of Capabilities (3x3) */}
                    <div className="w-[70%] p-6 grid grid-cols-3 gap-x-2 gap-y-2">
                      {capabilitiesList.map((capability) => (
                        <Link 
                          key={capability.name} 
                          href={capability.href} 
                          className="group flex flex-col gap-3 p-4 rounded-xl hover:bg-border-subtle transition-all duration-200"
                        >
                          <div className="w-9 h-9 rounded-full bg-background flex items-center justify-center border border-border-strong group-hover:border-electric-cyan/40 group-hover:bg-electric-cyan/5 transition-all shrink-0 shadow-sm">
                            <capability.icon size={16} className="text-foreground group-hover:text-electric-cyan transition-colors" />
                          </div>
                          <div>
                            <h4 className="text-[12px] font-semibold text-foreground mb-1 group-hover:text-electric-cyan transition-colors whitespace-normal leading-snug">
                              {capability.name}
                            </h4>
                            <p className="text-[11px] text-on-surface-variant font-light leading-relaxed whitespace-normal">
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

          {navLinks.slice(1).map((link) => (
            <Link key={link.name} href={link.href} className={navLinkUnderline}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button & Theme Toggle */}
        <div className="hidden xl:flex items-center gap-4 shrink-0">
          <ThemeToggle />
          <Link href="/contact-us" className="btn-solid text-[11px] px-6 py-2.5 rounded-full font-semibold tracking-[0.1em] uppercase whitespace-nowrap">
            Discuss an AI Transformation
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="xl:hidden flex items-center gap-3 shrink-0">
          <ThemeToggle />
          <button
            className="text-on-surface-variant p-2 hover:text-foreground transition-colors cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="xl:hidden mt-3 mx-auto w-full max-w-7xl bg-surface/95 backdrop-blur-xl border border-border-strong rounded-2xl p-6 pointer-events-auto shadow-2xl overflow-y-auto max-h-[calc(100vh-100px)]"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.slice(0, 1).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-on-surface-variant hover:text-foreground transition-colors text-sm tracking-wide font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="border-t border-border-strong pt-5 mt-2">
                <p className="text-[10px] text-electric-cyan uppercase tracking-[0.15em] mb-4 font-semibold">
                  Capabilities
                </p>
                <div className="flex flex-col gap-1">
                  {capabilitiesList.map((capability) => (
                    <Link
                      key={capability.name}
                      href={capability.href}
                      className="group flex items-center gap-3 py-2.5 text-xs text-on-surface-variant hover:text-foreground transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      <div className="w-7 h-7 rounded-md bg-border-subtle flex items-center justify-center shrink-0 border border-border-strong group-hover:border-electric-cyan/40">
                        <capability.icon size={12} className="text-foreground group-hover:text-electric-cyan transition-colors" />
                      </div>
                      {capability.name}
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-on-surface-variant hover:text-foreground transition-colors text-sm tracking-wide font-medium border-t border-border-strong pt-4 mt-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <Link href="/contact-us" className="btn-solid text-[11px] px-6 py-3.5 rounded-full font-semibold tracking-[0.1em] uppercase mt-4 w-full text-center block">
                Discuss an AI Transformation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}