"use client";

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Python",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "MongoDB",
  "TensorFlow",
];

export default function Technologies() {
  return (
    <section className="py-12 border-t border-border-subtle relative z-10 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 text-center">
        <p className="text-[10px] text-foreground/40 uppercase tracking-[0.2em] font-medium">
          Powered By Modern Stack
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden w-full group">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>

        <div className="animate-marquee whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
          {/* Double the list for seamless scrolling */}
          {[...technologies, ...technologies, ...technologies].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="mx-4 px-6 py-2.5 border border-border-subtle rounded-full font-technical-data text-[11px] text-foreground/50 uppercase tracking-widest cursor-default bg-card hover:text-electric-cyan hover:border-border-strong transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
