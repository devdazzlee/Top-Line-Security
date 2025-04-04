import AlarmSection from "@/components/AlarmSection";
import { AlarmCards } from "@/components/AlarnCards";
import ClientCarousel from "@/components/ClientCarousel";
import CTASection from "@/components/CTASection";
import { CustomerSupport } from "@/components/CustomerSupport";
import FeaturesSection from "@/components/FeaturesSection";
import FooterSection from "@/components/Footer";
import Header from "@/components/Header";
import SecurityTabs from "@/components/security-tabs";
import SecurityComparison from "@/components/SecurityComparison";
import SecuritySection from "@/components/SecuritySection";
import SecuritySelection from "@/components/SecuritySelection";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <>
      <Header />
      <SecuritySection />
      <FeaturesSection />
      <SecuritySelection />
      <SecurityComparison />
      <AlarmSection />
      <AlarmCards />
      <SecurityTabs />
      <TestimonialSlider />
      <ClientCarousel />
      <CTASection />
      <CustomerSupport />
      <FooterSection />
    </>
  );
}
