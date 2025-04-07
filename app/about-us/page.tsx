"use client";


import { CustomerSupport } from "@/components/CustomerSupport";
import FooterSection from "@/components/Footer";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSections";
import { Poppins } from "next/font/google";
import { Banner } from "@/components/AboutBanner";


const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

export default function AboutPage() {
    return (
        <div className={`${poppins.className}`}>
            <Header />
            <Banner
                desktopImageSrc="/Images/About-us-Dektop.Png"
                mobileImageSrc="/Images/About-us-Mobile.png"
                heading="About us"
            />
            <AboutSection />
            <CustomerSupport />
            <FooterSection />
        </div>
    );
}
