import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import MethodPresentation from "@/components/MethodPresentation";
import Benefits from "@/components/Benefits";
import BonusSection from "@/components/BonusSection";
import Testimonials from "@/components/Testimonials";
import OfferSection from "@/components/OfferSection";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PainPoints />
      <MethodPresentation />
      <Benefits />
      <BonusSection />
      <Testimonials />
      <OfferSection />
      <Guarantee />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default Index;
