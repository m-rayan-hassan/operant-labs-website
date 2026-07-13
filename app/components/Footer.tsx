"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Investors", href: "/investors" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact-us" },
];

const capabilitiesLinks = [
  { label: "AI Strategy & Transformation", href: "/capabilities/ai-strategy" },
  { label: "Technical AI Due Diligence", href: "/capabilities/ai-due-diligence" },
  { label: "AI Solution Architecture", href: "/capabilities/ai-architecture" },
  { label: "Forward-Deployed Engineering", href: "/capabilities/forward-deployed-engineering" },
  { label: "Custom AI Systems", href: "/capabilities/custom-ai-systems" },
  { label: "Intelligent Automation", href: "/capabilities/intelligent-automation" },
  { label: "Data & Cloud Engineering", href: "/capabilities/data-cloud-engineering" },
  { label: "AI Governance", href: "/capabilities/ai-governance" },
  { label: "Managed AI Operations", href: "/capabilities/managed-ai-operations" },
];

const resourceLinks = [
  { label: "Industries We Serve", href: "/industries" },
  { label: "How We Deliver", href: "/our-process" },
  { label: "Insights", href: "/insights" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 overflow-hidden border-t border-border-subtle bg-surface-dim">
      {/* Background Glow Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-electric-cyan/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        {/* Main Unified Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-10">
          {/* Column 1: Brand & Contact Info with Socials */}
          <div className="xl:col-span-1 space-y-10">
            <div>
              <Link href="/" className="inline-flex items-center gap-2.5 group">
                <Image
                  src="/logo.png"
                  alt="Operant Labs Logo"
                  width={64}
                  height={64}
                />
                <span className="text-2xl tracking-tight flex items-center">
                  <span className="font-bold text-foreground">Operant</span>
                  <span className="font-light text-on-surface-variant ml-0.5">
                    Labs
                  </span>
                </span>
              </Link>
            </div>

            {/* Contact Info & Socials */}
            <div className="space-y-6">
              <div>
                <h4 className="text-[11px] font-semibold uppercase tracking-widest text-foreground mb-4">
                  Contact Info
                </h4>
                <ul className="space-y-4 text-[13px] font-light text-on-surface-variant">
                  <li className="flex items-start gap-3">
                    <Mail
                      size={14}
                      className="mt-0.5 shrink-0 text-foreground"
                    />
                    <a
                      href="mailto:info@operantlabs.io"
                      className="transition-colors hover:text-foreground"
                    >
                      info@operantlabs.io
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone
                      size={14}
                      className="mt-0.5 shrink-0 text-foreground"
                    />
                    <a
                      href="tel:+923100004256"
                      className="transition-colors hover:text-foreground"
                    >
                      +92 310 0004256
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone
                      size={14}
                      className="mt-0.5 shrink-0 text-foreground"
                    />
                    <a
                      href="tel:+447723346951"
                      className="transition-colors hover:text-foreground"
                    >
                      +44 7723 346951
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock3
                      size={14}
                      className="mt-0.5 shrink-0 text-foreground"
                    />
                    <span>Monday to Friday, 9:00 AM to 6:00 PM</span>
                  </li>
                </ul>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-border-subtle border border-border-strong flex items-center justify-center text-foreground hover:bg-border-strong hover:text-electric-cyan transition-colors"
                >
                  <svg
                    className="w-[14px] h-[14px] fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.98h4.56V24H.22V8.98zM8.22 8.98h4.37v2.05h.06c.61-1.16 2.12-2.38 4.36-2.38 4.66 0 5.52 3.06 5.52 7.04V24h-4.56v-6.8c0-1.62-.03-3.71-2.26-3.71-2.27 0-2.62 1.77-2.62 3.6V24H8.22V8.98z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Company Links & Our Offices */}
          <div className="space-y-10">
            <div>
              <h4 className="text-foreground text-[11px] uppercase tracking-widest font-semibold mb-6">
                Company
              </h4>
              <ul className="space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-on-surface-variant text-[13px] hover:text-foreground transition-colors font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Offices */}
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-widest text-foreground mb-6">
                Our Offices
              </h4>
              <ul className="space-y-6 text-[13px] font-light leading-relaxed text-on-surface-variant">
                <li>
                  <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-foreground">
                    <MapPin size={14} />
                    UK Office
                  </div>
                  <p>
                    Office 1212, 182 to 184 High Street, North Area 1/1, East
                    Ham, London, United Kingdom
                  </p>
                </li>
                <li>
                  <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-foreground">
                    <MapPin size={14} />
                    Pakistan Office
                  </div>
                  <p>
                    Gate No. 4, National Aerospace Science and Technology Park,
                    Industrial Innovative Enclave, Alpha 17, Rawalpindi,
                    Pakistan
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Capabilities Links */}
          <div>
            <h4 className="text-foreground text-[11px] uppercase tracking-widest font-semibold mb-6">
              Capabilities
            </h4>
            <ul className="space-y-4">
              {capabilitiesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-on-surface-variant text-[13px] hover:text-foreground transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources & Legal Links */}
          <div className="space-y-10">
            <div>
              <h4 className="text-foreground text-[11px] uppercase tracking-widest font-semibold mb-6">
                Resources
              </h4>
              <ul className="space-y-4">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-on-surface-variant text-[13px] hover:text-foreground transition-colors font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-foreground text-[11px] uppercase tracking-widest font-semibold mb-6">
                Legal
              </h4>
              <ul className="space-y-4">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-on-surface-variant text-[13px] hover:text-foreground transition-colors font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-16 border-t border-border-subtle pt-8">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
            <div />
            <p className="text-center text-[11px] font-light tracking-wide text-foreground/50">
              © {currentYear} Operant Labs. All rights reserved.
            </p>
            <div className="hidden md:block" />
          </div>
        </div>
      </div>
    </footer>
  );
}
