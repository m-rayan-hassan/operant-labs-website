"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const services = [
  { name: "Custom Software Development", href: "#" },
  { name: "Intelligent Business Automation", href: "#" },
  { name: "AI Solutions", href: "#" },
  { name: "Cloud & DevOps Solutions", href: "#" },
  { name: "Data Analytics & Business Intelligence", href: "#" },
  { name: "Technology Advisory & Digital Transformation", href: "#" },
];

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Industries", href: "#" },
  { name: "Our Process", href: "#process" },
  { name: "Careers", href: "#" },
  { name: "Contact Us", href: "#" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 200);
  };

  return (
    <header className="fixed top-0 w-full z-50 pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div
        className={`flex justify-between items-center max-w-7xl mx-auto backdrop-blur-md border rounded-full px-6 py-3 pointer-events-auto shadow-2xl transition-all duration-300 ${
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
            className="h-8 w-auto dark:invert-0 invert transition-transform duration-300 group-hover:scale-105"
            priority
          />
          {/* Added Company Name with Contrast */}
          <span className="text-xl tracking-tight flex items-center">
            <span className="font-bold text-foreground">Operant</span>
            <span className="font-light text-on-surface-variant ml-0.5">Labs</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 gap-8">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="nav-link text-[12px] tracking-[0.05em]"
            >
              {link.name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="nav-link text-[12px] tracking-[0.05em] flex items-center gap-1">
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 mt-4 w-72 bg-surface/95 backdrop-blur-xl border border-border-strong rounded-lg shadow-2xl z-50 py-2"
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2.5 text-xs text-on-surface-variant hover:text-foreground hover:bg-border-subtle transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="nav-link text-[12px] tracking-[0.05em]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <button className="btn-solid text-[11px] px-6 py-2.5 rounded-full font-semibold tracking-[0.1em] uppercase">
            Book a Consultation
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="text-on-surface-variant p-2 hover:text-foreground transition-colors"
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
            className="lg:hidden mt-2 mx-auto max-w-7xl bg-surface/95 backdrop-blur-xl border border-border-strong rounded-2xl p-6 pointer-events-auto shadow-2xl"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-on-surface-variant hover:text-foreground transition-colors text-sm tracking-wide"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-border-strong pt-4">
                <p className="text-[10px] text-electric-cyan uppercase tracking-[0.15em] mb-3 font-medium">
                  Services
                </p>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block py-2 text-xs text-on-surface-variant hover:text-foreground transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <button className="btn-solid text-[11px] px-6 py-3 rounded-full font-semibold tracking-[0.1em] uppercase mt-4 w-full">
                Book a Consultation
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}