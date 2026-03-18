import ScrollAnimation from "@/components/ScrollAnimation";
import HeroSection from "@/components/HeroSection";
import BrandMarquee from "@/components/BrandMarquee";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import GalleryStrip from "@/components/GalleryStrip";
import AboutPreview from "@/components/AboutPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <>
      <ScrollAnimation />
      <HeroSection />
      <BrandMarquee />
      <ServicesSection />
      <BeforeAfterSlider />
      <GalleryStrip />
      <AboutPreview />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
