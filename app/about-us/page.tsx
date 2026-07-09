import React from 'react';
import Image from 'next/image';
import Header from "../components/Header";
import Footer from "../components/Footer";
// Ensure the filename matches exactly (including the space)
import BusinessAutomationImg from './Untitled design.png';

const AboutPage = () => {
  const expertise = [
    {
      title: "Custom Software Development",
      desc: "Secure and scalable software built around how your business actually works.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Artificial Intelligence Solutions",
      desc: "Intelligent systems that automate work and sharpen decisions with precision.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Business Process Automation",
      desc: "Streamlined, connected workflows that bridge departments and eliminate friction.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGn16FMnoIyoXWrD8RxlMKKTcb_CZFI3NmS75DuAzvDg&s=10",
    },
    {
      title: "Cloud & DevOps",
      desc: "Resilient infrastructure and faster, safer delivery pipelines for modern scale.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Data Analytics & BI",
      desc: "Turning raw data into actionable insights that leaders can act on immediately.",
      image: "https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?q=80&w=1255&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Technology Advisory",
      desc: "Informed technology investment and digital strategy aligned with business goals.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <div className="bg-background text-foreground min-h-screen font-sans selection:bg-electric-cyan selection:text-black dark">
      <Header />
      
      <main className="flex-grow pt-20 relative z-10">
        
        {/* ── HERO SECTION: Image with Top-Left Text ── */}
        <section className="relative w-full h-[550px] md:h-[650px] overflow-hidden">
          <Image
            src={BusinessAutomationImg}
            alt="Business Automation"
            fill
            className="w-full h-full object-cover"
            priority
          />
          {/* Gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
          
          {/* Top-Left Content Overlay */}
          <div className="absolute inset-0 z-20">
            <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-start pt-32 md:pt-44">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-electric-cyan"></div>
                <span className="text-electric-cyan font-medium tracking-[0.3em] uppercase text-[10px]">Innovation Architecture</span>
              </div>

              <h1 className="text-6xl md:text-5xl italic text-white tracking-tighter mb-6">
                About Us
              </h1>
              
              <p className="text-xl md:text-3xl text-white/90 max-w-2xl leading-tight font-light tracking-tight mb-6">
                Building Technology Around Business, <br />
                <span className="text-electric-cyan italic">Not the Other Way Around.</span>
              </p>
              
              <p className="text-base md:text-lg text-white/50 max-w-xl leading-relaxed">
                Operant Labs is a technology consulting and innovation company specialising in 
                software development, intelligent automation, and AI solutions.
              </p>
            </div>
          </div>
        </section>

        {/* ── OUR STORY ── */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-4">
              <span className="text-foreground-variant tracking-widest uppercase text-[11px] block mb-4">The Origin</span>
              <h2 className="text-4xl font-bold tracking-tight">Our Story</h2>
            </div>
            <div className="md:col-span-8 space-y-8 text-xl text-foreground-variant leading-relaxed font-light">
              <p>
                Operant Labs was founded to bridge the gap between business strategy and technology execution. We specialize in practical, scalable solutions aligned with real goals—not complex systems that fail to deliver.
              </p>
              <p>
                We work as a strategic partner through discovery, planning, development, deployment, and long term support, for startups, growing businesses, and enterprises alike.
              </p>
            </div>
          </div>
        </section>

        {/* ── EXPERTISE GRID ── */}
        <section className="py-24 px-6 bg-surface/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col mb-20 text-left">
              <span className="text-electric-cyan tracking-[0.4em] uppercase text-[10px] mb-4">Capabilities</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Expertise</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {expertise.map((item, idx) => (
                <div key={idx} className="group flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-8 border border-white/5">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
                    <h3 className="text-lg font-bold tracking-tight uppercase group-hover:text-electric-cyan transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-foreground-variant leading-relaxed text-sm pl-5 border-l border-white/10">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PHILOSOPHY ── */}
        <section className="py-40 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_50%_50%,rgba(0,240,255,0.03)_0%,transparent_100%)]"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="text-foreground-variant tracking-widest uppercase text-[22px] block mb-8 font-bold">Philosophy</span>
            <h2 className="text-3xl md:text-5xl font-medium leading-[1.3] tracking-tight italic">
              Technology should <span className="text-electric-cyan">empower</span> businesses, <span className="opacity-50">not complicate them.</span>
            </h2>
          </div>
        </section>

        {/* ── COMMITMENT & PARTNERSHIP ── */}
        <section className="py-32 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-px bg-white/5">
            <div className="bg-background p-16 lg:pr-20">
              <span className="text-electric-cyan tracking-[0.3em] uppercase text-[10px] block mb-6">Our Commitment</span>
              <h3 className="text-3xl font-bold mb-8 tracking-tight">Lasting Value</h3>
              <p className="text-foreground-variant leading-relaxed text-lg font-light">
                Every project begins with listening. We take the time to understand your long term vision, ensuring what we build is secure, scalable, and reliable.
              </p>
            </div>
            <div className="bg-background p-16 lg:pl-20">
              <span className="text-electric-cyan tracking-[0.3em] uppercase text-[10px] block mb-6">Strategic Partnership</span>
              <h3 className="text-3xl font-bold mb-8 tracking-tight">Shared Success</h3>
              <p className="text-foreground-variant leading-relaxed text-lg font-light">
                Organizations choose Operant Labs because they want a technology partner who understands business, building long term relationships based on trust.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;