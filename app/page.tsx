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
import { SecurityWizard1 } from "@/components/security-wizard1";
import { SecurityWizard2 } from "@/components/security-wizard2";
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
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  return (
    <div className={`${poppins.className}`} >
      <Header setModalOpen={setOpen} />
      <SecurityWizard modalOpen={open} setModalOpen={setOpen} />
      <SecuritySection setModalOpen={setOpen} />
      <FeaturesSection />
      <SecuritySelection modalOpen1={open1} setModalOpen1={setOpen1} modalOpen2={open2}  setModalOpen2={setOpen2}   />
      <SecurityWizard1 modalOpen={open1} setModalOpen={setOpen1} />
      <SecurityWizard2 modalOpen={open2} setModalOpen={setOpen2}  />
      <SecurityComparison />
      <AlarmSection />
      <AlarmCards />
      <SecurityTabs />
      <TestimonialSlider />
      <ClientCarousel />
      <CTASection setModalOpen={setOpen} />
      <CustomerSupport />
      <FooterSection />
      <a
        href="https://wa.me/447931776309"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          width="32px"
          height="32px"
        >
          <path d="M16 0C7.164 0 0 7.164 0 16c0 2.84.744 5.547 2.164 7.953L0 32l8.297-2.164C10.707 31.256 13.414 32 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.867c-2.34 0-4.664-.617-6.664-1.781l-.477-.273-4.914 1.277 1.312-4.797-.309-.492C3.934 21.07 3.2 18.57 3.2 16 3.2 8.832 8.832 3.2 16 3.2s12.8 5.632 12.8 12.8-5.632 12.8-12.8 12.8z" />
          <path d="M24.25 19.32c-.34-.17-2.02-1-2.34-1.12-.32-.12-.55-.17-.78.17-.23.34-.9 1.12-1.1 1.34-.2.23-.4.26-.74.09-.34-.17-1.43-.53-2.72-1.7-1.01-.9-1.7-2.01-1.9-2.35-.2-.34-.02-.53.15-.7.15-.15.34-.4.51-.6.17-.2.23-.34.34-.56.11-.22.06-.42-.03-.59-.09-.17-.78-1.87-1.07-2.57-.28-.68-.57-.59-.78-.6l-.66-.01c-.23 0-.59.09-.9.43-.31.34-1.18 1.16-1.18 2.82s1.21 3.27 1.38 3.5c.17.23 2.39 3.64 5.8 5.1 3.41 1.46 3.41.97 4.03.91.62-.06 2.02-.82 2.31-1.61.28-.79.28-1.46.2-1.61-.08-.14-.31-.22-.65-.39z" />
        </svg>
      </a>

    </div>
  );
}
