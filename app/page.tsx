

import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";
import HeroImageSection from "@/components/HeroImageSection";
import CapturedSection from "@/components/CapturedSection";
import PetsSection from "@/components/PetsSection";
import AboutSection from "@/components/AboutSection";
import { ReviewSection } from "@/components/ReviewSection";


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroImageSection />
        <HeroSection />
        <AboutSection />
        <CapturedSection />
        <PetsSection />
        <ReviewSection />
        <ContactSection />
      </main>
    </div>
  );
}
