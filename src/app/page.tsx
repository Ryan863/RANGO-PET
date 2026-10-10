import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSolution } from "@/components/ProblemSolution";
import { HowItWorks } from "@/components/HowItWorks";
import { MenuCalculator } from "@/components/MenuCalculator";
import { IngredientsSafety } from "@/components/IngredientsSafety";
import { DeliveryCoverage } from "@/components/DeliveryCoverage";
import { SocialCommunity } from "@/components/SocialCommunity";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121110] text-[#F7F5F0] selection:bg-[#F26522] selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProblemSolution />
        <HowItWorks />
        <MenuCalculator />
        <IngredientsSafety />
        <DeliveryCoverage />
        <SocialCommunity />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
