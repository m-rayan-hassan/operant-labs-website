"use client";

import { motion } from "motion/react";

const locations = [
  {
    city: "Silicon Valley",
    country: "USA",
    top: "32%",
    // Increased to push the pin East (right) out of the ocean and onto land
    left: "22%",
    delay: 0,
  },
  {
    city: "London",
    country: "United Kingdom",
    top: "23%",
    // Left as is (assuming this one was centered correctly for you)
    left: "47.5%",
    delay: 0.2,
  },
  {
    city: "Rawalpindi",
    country: "Pakistan",
    top: "36%",
    // Decreased to push the pin West (left), moving it out of India
    left: "63%",
    delay: 0.4,
  },
];

export default function WorldMap() {
  return (
    <section className="py-16 md:py-20 bg-background relative overflow-hidden border-t border-border-subtle z-10">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] bg-electric-cyan/5 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-number mx-auto mb-6">08 / Global Reach</div>
          <h2 className="text-3xl md:text-5xl text-foreground font-semibold tracking-tight">
            Our Global Presence
          </h2>
        </motion.div>
      </div>

      {/* Map Container - Allows horizontal scroll on mobile so it doesn't get impossibly tiny */}
      <div className="w-full overflow-x-auto no-scrollbar relative z-10 cursor-grab active:cursor-grabbing pb-4 pt-6">
        <div className="w-250 md:w-full max-w-6xl mx-auto aspect-[2.2/1] relative">
          {/* 
            The Dot Matrix Map using CSS Masking 
            UPDATED: Brighter dots, larger radius, and 100% opacity for maximum visibility
          */}
          <div
            className="absolute inset-0 opacity-100 pointer-events-none"
            style={{
              // Brighter cyan color with a slightly larger 1.5px dot size for crisp visibility
              backgroundImage:
                "radial-gradient(circle, rgba(0, 240, 255, 0.7) 1.5px, transparent 1.5px)",
              backgroundSize: "8px 8px", // Density of the dot grid
              WebkitMaskImage:
                "url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')",
              WebkitMaskSize: "contain",
              WebkitMaskPosition: "center",
              WebkitMaskRepeat: "no-repeat",
              maskImage:
                "url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')",
              maskSize: "contain",
              maskPosition: "center",
              maskRepeat: "no-repeat",
              clipPath: "inset(0 0 18% 0)",
            }}
          />

          {/* Render glowing location markers */}
          {locations.map((loc) => (
            <LocationMarker key={loc.city} {...loc} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Sub-component for the glowing map pins
function LocationMarker({ city, country, top, left, delay }: any) {
  return (
    <motion.div
      className="absolute z-20 pointer-events-none"
      style={{ top, left }}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
    >
      {/* Tooltip Card */}
      <div className="absolute bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 px-4 py-2.5 border border-electric-cyan/80 bg-background/95 backdrop-blur-md rounded-lg flex flex-col items-start min-w-35 shadow-[0_0_20px_rgba(0,240,255,0.25)] pointer-events-auto">
        <span className="text-foreground font-semibold text-[15px] leading-tight mb-1">
          {city}
        </span>
        <span className="text-electric-cyan text-[12px] leading-tight font-medium">
          {country}
        </span>
      </div>

      {/* Vertical Connecting Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1.5px] h-10 md:h-14 bg-linear-to-b from-electric-cyan to-transparent opacity-90" />

      {/* Target Glowing Dot (Centered exactly on the coordinates) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        {/* Massive outer pulse */}
        <div className="absolute w-14 h-14 border border-electric-cyan/40 rounded-full animate-[ping_3s_ease-out_infinite]" />
        {/* Inner tighter pulse */}
        <div className="absolute w-6 h-6 border-2 border-electric-cyan/80 rounded-full animate-[pulse_2s_ease-out_infinite]" />
        {/* Solid core */}
        <div className="w-2.5 h-2.5 bg-electric-cyan rounded-full shadow-[0_0_15px_#00F0FF]" />
      </div>
    </motion.div>
  );
}
