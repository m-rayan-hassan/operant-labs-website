"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-dim pt-20 pb-8 border-t border-border-subtle relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-6 group">
              <Image
                src="/logo.png"
                alt="Operant Labs Logo"
                width={40}
                height={40}
                className="h-8 w-auto dark:invert-0 invert transition-transform duration-300 group-hover:scale-105"
              />
              {/* Added Company Name with Contrast matching the Header */}
              <span className="text-xl tracking-tight flex items-center">
                <span className="font-bold text-foreground">Operant</span>
                <span className="font-light text-on-surface-variant ml-0.5">Labs</span>
              </span>
            </Link>
            <p className="text-on-surface-variant text-[13px] font-light leading-relaxed mb-8 max-w-sm">
              Engineering intelligent technology solutions that drive measurable business impact.
            </p>
            
            <form className="relative max-w-sm group">
              <input 
                type="email" 
                placeholder="Subscribe to our engineering journal" 
                className="w-full bg-background border border-border-strong rounded-full py-3 px-5 text-[12px] text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-electric-cyan/50 transition-colors"
              />
              <button 
                type="submit"
                className="absolute right-1 top-1 bottom-1 w-10 flex items-center justify-center bg-card rounded-full border border-border-subtle hover:border-border-strong hover:bg-border-subtle transition-colors cursor-pointer"
              >
                <ArrowRight size={14} className="text-foreground" />
              </button>
            </form>
          </div>

          {/* Spacer for grid alignment */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Links Columns */}
          <div className="lg:col-span-2 col-span-1">
            <h4 className="text-foreground text-[11px] uppercase tracking-widest font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Why Choose Us', 'Careers', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-on-surface-variant text-[13px] hover:text-foreground transition-colors font-light">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 col-span-1">
            <h4 className="text-foreground text-[11px] uppercase tracking-widest font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                'Custom Software Development', 
                'Intelligent Business Automation', 
                'AI Solutions', 
                'Cloud & DevOps Solutions'
              ].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-on-surface-variant text-[13px] hover:text-foreground transition-colors font-light">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2 col-span-1">
            <h4 className="text-foreground text-[11px] uppercase tracking-widest font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-on-surface-variant text-[13px] hover:text-foreground transition-colors font-light">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-foreground/40 font-light tracking-wide">
            © {currentYear} Operant Labs. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a href="#" className="w-8 h-8 rounded-full bg-border-subtle border border-border-strong flex items-center justify-center text-foreground hover:bg-border-strong hover:text-electric-cyan transition-colors" aria-label="LinkedIn">
              <svg className="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"/>
              </svg>
            </a>
            {/* Twitter / X */}
            <a href="#" className="w-8 h-8 rounded-full bg-border-subtle border border-border-strong flex items-center justify-center text-foreground hover:bg-border-strong hover:text-electric-cyan transition-colors" aria-label="Twitter">
              <svg className="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* GitHub */}
            <a href="#" className="w-8 h-8 rounded-full bg-border-subtle border border-border-strong flex items-center justify-center text-foreground hover:bg-border-strong hover:text-electric-cyan transition-colors" aria-label="GitHub">
              <svg className="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}