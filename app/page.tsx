"use client";

import AlarmSection from "@/components/AlarmSection";
import { AlarmCards } from "@/components/AlarnCards";
import ClientCarousel from "@/components/ClientCarousel";
import CTASection from "@/components/CTASection";
import { CustomerSupport } from "@/components/CustomerSupport";
import FeaturesSection from "@/components/FeaturesSection";
import FooterSection from "@/components/Footer";
import Header from "@/components/Header";
import SecurityTabs from "@/components/security-tabs";
import { SecurityWizard } from "@/components/security-wizard";
import SecurityComparison from "@/components/SecurityComparison";
import SecuritySection from "@/components/SecuritySection";
import SecuritySelection from "@/components/SecuritySelection";
import TestimonialSlider from "@/components/TestimonialSlider";
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <div className={`${poppins.className}`} >
      <Header />
      <SecurityWizard modalOpen={open} setModalOpen={setOpen} />
      <SecuritySection setModalOpen={setOpen} />
      <FeaturesSection />
      <SecuritySelection modalOpen={open} setModalOpen={setOpen} />
      <SecurityComparison />
      <AlarmSection />
      <AlarmCards />
      <SecurityTabs />
      <TestimonialSlider />
      <ClientCarousel />
      <CTASection setModalOpen={setOpen} />
      <CustomerSupport />
      <FooterSection />
    </div>
  );
}
