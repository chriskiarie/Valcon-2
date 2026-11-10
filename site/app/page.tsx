import ClosingCta from "@/components/home/ClosingCta";
import Gallery from "@/components/home/Gallery";
import HomeIntro from "@/components/home/HomeIntro";
import ServicesStrip from "@/components/home/ServicesStrip";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <Gallery />
      <ServicesStrip />
      <ClosingCta />
    </>
  );
}
