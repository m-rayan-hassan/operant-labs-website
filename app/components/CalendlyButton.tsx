"use client";

import { useEffect, useCallback } from "react";

// Extend Window to include Calendly
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface CalendlyButtonProps {
  /** The Calendly scheduling URL, e.g. "https://calendly.com/your-org/strategy-session" */
  url?: string;
  /** Button text */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * A client-side Calendly popup button.
 * - No SSR or backend required (works on StackCP static hosting).
 * - Loads the Calendly widget script once, reuses across multiple instances.
 * - Falls back to opening the Calendly URL in a new tab if the script fails to load.
 */
export default function CalendlyButton({
  url = "https://calendly.com/operantlabs/strategy-session",
  children,
  className = "",
}: CalendlyButtonProps) {
  // Load Calendly widget CSS + JS once
  useEffect(() => {
    // CSS
    if (!document.querySelector('link[href*="calendly"]')) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    // JS
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const handleClick = useCallback(() => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    } else {
      // Fallback: open in a new tab if the script hasn't loaded
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }, [url]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}
