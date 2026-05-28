import { Hero } from "@/components/landing/Hero";
import { Solutions } from "@/components/landing/Solutions";
import { CoreBanking } from "@/components/landing/CoreBanking";
import { DigitalBanking } from "@/components/landing/DigitalBanking";
import { CB7Features } from "@/components/landing/CB7Features";
import { PaperlessCTA } from "@/components/landing/PaperlessCTA";
import { Insights } from "@/components/landing/Insights";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <CoreBanking />
      <CB7Features />
      <DigitalBanking />
      <Insights />
      <CaseStudies />
      <PaperlessCTA />
      <Footer />
    </>
  );
}
