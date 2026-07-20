import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import WhoWeServe from "./components/WhoWeServe";
import WhatWeDo from "./components/WhatWeDo";
import ServicesOverview from "./components/ServicesOverview";
import CaseStudies from "./components/CaseStudies";
import EngagementModels from "./components/EngagementModels";
import EngagementModelsShowcase from "./components/EngagementModelsShowcase";
import IndustriesSnapshot from "./components/IndustriesSnapshot";
import MethodologyDiagram from "./components/MethodologyDiagram";
import OurProcess from "./components/OurProcess";
import WhyChooseUs from "./components/WhyChooseUs";
import StrategyToExecution from "./components/StrategyToExecution";
import GovernanceStrip from "./components/GovernanceStrip";
import Technologies from "./components/Technologies";
import Insights from "./components/Insights";
import FaqTeaser from "./components/FaqTeaser";
import FinalCta from "./components/FinalCta";

import Testimonials from "./components/Testimonials";
import WorldMap from "./components/WorldMap";
import Partners from "./components/Partners";

export default function Home() {
  return (
    <>
      <main className="flex-grow pt-24 pb-0 relative z-10">
        <Hero />
        <TrustStrip />
        <WhoWeServe />
        <WhatWeDo />
        <ServicesOverview />
        <CaseStudies />
        <EngagementModels />
        <EngagementModelsShowcase />
        <IndustriesSnapshot />
        <MethodologyDiagram />
        <WhyChooseUs />
        <StrategyToExecution />
        <GovernanceStrip />
        <OurProcess />
        <Testimonials />  
        <Technologies />
        <Insights />
        <FaqTeaser />
        <FinalCta />
        <WorldMap />
      </main>
    </>
  );
}
