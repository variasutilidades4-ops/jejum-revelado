import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import WhatYouGet from "@/components/WhatYouGet";
import Offer from "@/components/Offer";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Benefits />
      <Testimonials />
      {/* <WhatYouGet /> */}
      <Offer />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default Index;
