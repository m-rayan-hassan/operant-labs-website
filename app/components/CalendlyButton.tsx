import Link from "next/link";
import React from "react";

interface CalendlyButtonProps {
  /** The Calendly scheduling URL (no longer used since we route to /schedule) */
  url?: string;
  /** Button text */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * A wrapper that mimics the old Calendly popup button API but now simply 
 * routes the user to the dedicated /schedule page containing the inline widget.
 */
export default function CalendlyButton({
  children,
  className = "",
}: CalendlyButtonProps) {
  return (
    <Link href="/schedule" className={className}>
      {children}
    </Link>
  );
}
