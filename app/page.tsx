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
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
export default function Home() {
  return (
    <div className={`${poppins.className}`} >
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
    </div>
  );
}
