

import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";
import HeroImageSection from "@/components/HeroImageSection";
import CapturedSection from "@/components/CapturedSection";
import AboutSection from "@/components/AboutSection";
import { ReviewSection } from "@/components/ReviewSection";
import LandscapeSection from "@/components/LandscapeSection";
import MacroSection from "@/components/MacroSection";
import PetsSection from "@/components/PetsSection";


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroImageSection />
        <HeroSection />
        <AboutSection />
        <CapturedSection />
        <LandscapeSection />
        <MacroSection />
        <PetsSection />
        <ReviewSection />
        <ContactSection />
      </main>
    </div>
  );
}
