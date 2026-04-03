import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import WhatYouLearn from "@/components/landing/WhatYouLearn";
import MasterclassStructure from "@/components/landing/MasterclassStructure";
import MentorSection from "@/components/landing/MentorSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhatYouLearn />
        <MasterclassStructure />
        <MentorSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
