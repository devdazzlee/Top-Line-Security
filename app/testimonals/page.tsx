
'use client';

import { Banner } from "@/components/AboutBanner";
import FooterSection from "@/components/Footer";
import Header from "@/components/Header";
import TestimonialsSection from "@/components/TestimonialsSection";
import { useState } from "react";

export default function Testimonials() {
    const [open, setOpen] = useState(false)
    console.log("🚀 ~ Testimonials ~ open:", open)
    return (
        <div>
            {/* <Header setModalOpen={setOpen} />
            <Banner
                desktopImageSrc="/Images/Testimonal.png"
                mobileImageSrc="/Images/Testimonal.png"
                heading="Testimonals"
                textColor="text-testimonialGray"
            />
            <TestimonialsSection />
            <FooterSection /> */}
        </div>
    );
}