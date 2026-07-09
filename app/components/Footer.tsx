"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact-us" },
];

const servicesLinks = [
  { label: "Custom Software Development", href: "/services/custom-software" },
  { label: "Intelligent Business Automation", href: "/services/business-automation" },
  { label: "AI Solutions", href: "/services/ai-solutions" },
  { label: "Cloud & DevOps Solutions", href: "/services/cloud-devops" },
  { label: "Data Analytics & Business Intelligence", href: "/services/data-analytics" },
  { label: "Technology Advisory & Digital Transformation", href: "/services/technology-advisory" },
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
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 group"
              >
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
                    <Mail size={14} className="mt-0.5 shrink-0 text-foreground" />
                    <a
                      href="mailto:info@operantlabs.io"
                      className="transition-colors hover:text-foreground"
                    >
                      info@operantlabs.io
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone size={14} className="mt-0.5 shrink-0 text-foreground" />
                    <a
                      href="tel:+447723346951"
                      className="transition-colors hover:text-foreground"
                    >
                      +44 7723 346951
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageCircle
                      size={14}
                      className="mt-0.5 shrink-0 text-foreground"
                    />
                    <a
                      href="https://wa.me/447723346951"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-foreground"
                    >
                      WhatsApp: +44 7723 346951
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock3 size={14} className="mt-0.5 shrink-0 text-foreground" />
                    <span>Monday to Friday, 9:00 AM to 6:00 PM</span>
                  </li>
                </ul>
              </div>

              {/* Social Icons (Moved here) */}
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
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-border-subtle border border-border-strong flex items-center justify-center text-foreground hover:bg-border-strong hover:text-electric-cyan transition-colors"
                >
                  <svg
                    className="w-[14px] h-[14px] fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M7 0h10a7 7 0 0 1 7 7v10a7 7 0 0 1-7 7H7a7 7 0 0 1-7-7V7a7 7 0 0 1 7-7zm0 2a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5H7zm5 3.75A6.25 6.25 0 1 1 5.75 12 6.26 6.26 0 0 1 12 5.75zm0 2A4.25 4.25 0 1 0 16.25 12 4.25 4.25 0 0 0 12 7.75zm6.5-3a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18.5 4.75z" />
                  </svg>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-8 h-8 rounded-full bg-border-subtle border border-border-strong flex items-center justify-center text-foreground hover:bg-border-strong hover:text-electric-cyan transition-colors"
                >
                  <svg
                    className="w-[14px] h-[14px] fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.12.82-.26.82-.58v-2.2c-3.34.73-4.04-1.4-4.04-1.4-.54-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.06 1.83 2.8 1.3 3.49.99.1-.77.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.33 3.3 1.23.96-.27 1.98-.4 3-.4 1.02 0 2.04.13 3 .4 2.29-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/447723346951"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-8 h-8 rounded-full bg-border-subtle border border-border-strong flex items-center justify-center text-foreground hover:bg-border-strong hover:text-electric-cyan transition-colors"
                >
                  <MessageCircle size={14} />
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

            {/* Our Offices (Moved here) */}
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
                    Office 1212, 182 to 184 High Street, North Area 1/1, East Ham,
                    London, United Kingdom
                  </p>
                </li>
                <li>
                  <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-foreground">
                    <MapPin size={14} />
                    Pakistan Office
                  </div>
                  <p>
                    Gate No. 4, National Aerospace Science and Technology Park,
                    Industrial Innovative Enclave, Alpha 17, Rawalpindi, Pakistan
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Services Links */}
          <div>
            <h4 className="text-foreground text-[11px] uppercase tracking-widest font-semibold mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {servicesLinks.map((link) => (
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

          {/* Column 4: Resources Links */}
          <div>
            <h4 className="text-foreground text-[11px] uppercase tracking-widest font-semibold mb-6">
              Resources
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Industries We Serve", href: "/industries" },
                { label: "Our Process", href: "/our-process" },
              ].map((link) => (
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