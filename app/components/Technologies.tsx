"use client";

import { useEffect, useRef } from "react";
import {
  // Frontend & Core
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  // Backend & Languages
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiRust,
  SiGo,
  SiGraphql,
  SiPrisma,
  // Cloud & Infrastructure
  SiGooglecloud,
  SiCloudflare,
  SiVercel,
  // DevOps
  SiDocker,
  SiKubernetes,
  SiTerraform,
  // Data & Message Brokers
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiRedis,
  SiApachekafka,
  // AI & Machine Learning
  SiTensorflow,
  SiPytorch,
  SiHuggingface,
  SiScikitlearn,
  SiKeras,
  SiJupyter,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { TbBrandAzure, TbBrandOpenai } from "react-icons/tb";
import type { IconType } from "react-icons";

type Tech = {
  name: string;
  Icon: IconType;
  color: string;
};

const technologies: Tech[] = [
  // AI & Machine Learning
  { name: "OpenAI", Icon: TbBrandOpenai, color: "#10A37F" },
  { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
  { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
  { name: "Hugging Face", Icon: SiHuggingface, color: "#FFD21E" },
  { name: "Scikit-Learn", Icon: SiScikitlearn, color: "#F7931E" },
  { name: "Keras", Icon: SiKeras, color: "#D00000" },
  { name: "Jupyter", Icon: SiJupyter, color: "#F37626" },

  // Cloud & DevOps
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "Google Cloud", Icon: SiGooglecloud, color: "#4285F4" },
  { name: "Azure", Icon: TbBrandAzure, color: "#0089D6" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
  { name: "Terraform", Icon: SiTerraform, color: "#7B42BC" },
  { name: "Cloudflare", Icon: SiCloudflare, color: "#F6821F" },
  { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },

  // Databases & Data
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { name: "Redis", Icon: SiRedis, color: "#DC382D" },
  { name: "Kafka", Icon: SiApachekafka, color: "#FFFFFF" },

  // Modern Stack & Languages
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Rust", Icon: SiRust, color: "#FFFFFF" },
  { name: "Go", Icon: SiGo, color: "#00ADD8" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#539E43" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
  { name: "Prisma", Icon: SiPrisma, color: "#FFFFFF" },
];

function TechPill({ tech }: { tech: Tech }) {
  const { name, Icon, color } = tech;
  return (
    <span className="tech-pill mx-3 px-5 py-2.5 border border-border-subtle rounded-full text-[11px] text-foreground/50 uppercase tracking-widest cursor-default bg-card hover:text-foreground hover:border-border-strong transition-[color,border-color] duration-300 flex items-center gap-2.5 shrink-0 group/pill">
      <Icon
        size={14}
        style={{ color }}
        className="opacity-70 group-hover/pill:opacity-100 transition-opacity"
      />
      {name}
    </span>
  );
}

export default function Technologies() {
  // Duplicate for seamless infinite loop
  const items = [...technologies, ...technologies];

  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // All mutable flags stored in refs — ZERO re-renders
  const isVisibleRef = useRef(false);
  const isHoveredRef = useRef(false);

  // IntersectionObserver — writes to ref, never triggers re-render
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { rootMargin: "200px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Single rAF loop with [] deps — never restarts
  useEffect(() => {
    let animationId: number;
    let lastTime = performance.now();
    const speed = 0.03; // Pixels per millisecond (~ 0.5 px/frame at 60fps)

    const scrollLoop = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      if (scrollRef.current && isVisibleRef.current && !isHoveredRef.current) {
        scrollRef.current.scrollLeft += speed * deltaTime;

        const maxScroll = scrollRef.current.scrollWidth / 2;
        if (scrollRef.current.scrollLeft >= maxScroll) {
          scrollRef.current.scrollLeft -= maxScroll;
        }
      }
      animationId = requestAnimationFrame(scrollLoop);
    };

    animationId = requestAnimationFrame(scrollLoop);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 border-t border-border-subtle relative z-10 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 text-center">
        <p className="text-[10px] text-foreground/40 uppercase tracking-[0.2em] font-medium">
          Powered By Modern Stack
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden w-full">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-background to-transparent z-10" />

        <div
          ref={scrollRef}
          onMouseEnter={() => {
            isHoveredRef.current = true;
          }}
          onMouseLeave={() => {
            isHoveredRef.current = false;
          }}
          style={{
            willChange: "scroll-position",
            WebkitTransform: "translateZ(0)",
          }}
          className="flex items-center overflow-x-auto no-scrollbar w-full"
        >
          {items.map((tech, i) => (
            <TechPill key={`${tech.name}-${i}`} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
