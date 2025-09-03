

import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";
import MyImageSection from "../components/MyImageSection";
import HeroImageSection from "@/components/HeroImageSection";
import CapturedSection from "@/components/CapturedSection";
import PetsSection from "@/components/PetsSection";


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroImageSection />
        <HeroSection />
        {/* <MyImageSection /> */}
        <CapturedSection />
        <PetsSection />
        <ContactSection />
      </main>
    </div>
  );
}
