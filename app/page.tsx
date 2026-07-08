import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import WhatWeDo from "./components/WhatWeDo";
import ServicesOverview from "./components/ServicesOverview";
import CaseStudies from "./components/CaseStudies";
import IndustriesSnapshot from "./components/IndustriesSnapshot";
import OurProcess from "./components/OurProcess";
import WhyChooseUs from "./components/WhyChooseUs";
import Technologies from "./components/Technologies";
import Insights from "./components/Insights";
import FaqTeaser from "./components/FaqTeaser";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import WorldMap from "./components/WorldMap";
import Partners from "./components/Partners";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-24 pb-0 relative z-10">
        <Hero />
        <TrustStrip />
        <WhatWeDo />
        <ServicesOverview />
        <CaseStudies />
        <IndustriesSnapshot />
        <OurProcess />
        <WhyChooseUs />
        <Testimonials />
        <Partners />
        <Technologies />
        <Insights />
        <FaqTeaser />
        <FinalCta />
        <WorldMap />
      </main>
      <Footer />
    </>
  );
}
