import { HeroSection } from "@/components/hero-section";
import { VisionSection } from "@/components/vision-section";
import { FeaturesSection } from "@/components/features-section";
import Testimonials from "@/components/testimonials";
import { SocialProofSection } from "@/components/social-proof-section";
import { ProductServiceListing } from "@/components/product-service-listing";
import { AboutSection } from "@/components/about-section";
import { WorkshopCTA } from "@/components/workshop-cta";
import { FinalCTA } from "@/components/final-cta";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VisionSection />
      <FeaturesSection />
      <ProductServiceListing />
      <WorkshopCTA />
      <SocialProofSection />
      <AboutSection />
      <FinalCTA />
    </div>
  );
}
