
'use client';

import { Banner } from "@/components/AboutBanner";
import FooterSection from "@/components/Footer";
import Header from "@/components/Header";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Testimonials() {
    return (
        <div>
            <Header />
            <Banner
                desktopImageSrc="/Images/Testimonal.png"
                mobileImageSrc="/Images/Testimonal.png"
                heading="About us"
                textColor="text-testimonialGray"
            />
            <TestimonialsSection />
            <FooterSection />
        </div>
    );
}