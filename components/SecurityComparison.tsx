import Image from "next/image"
import React from "react"

export default function SecurityComparison() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-center text-[30px] font-bold mb-8">
                The Topline Security<sup>®</sup> difference
            </h2>

            <div className="bg-[#f5f5f5] rounded-[24px] px-10 py-6">
                <div className="grid grid-cols-[1fr_auto_auto] gap-x-4">
                    {/* Header row */}
                    <div></div>
                    <div className="text-center mb-4">
                        <Image
                            src={'/Images/newLogo.png'}
                            width={100}
                            height={50}
                            alt="Topline Security Logo"
                            className="mx-auto mb-2"
                        />
                    </div>
                    <div className="flex items-center justify-center mb-8 text-[#0F2A43] font-extrabold text-center">
                        Tradition Security System
                    </div>

                    {/* Feature rows */}
                    {features.map((feature, index) => (
                        <React.Fragment key={index}>
                            <div className="py-4 border-t border-[#e5e5e5] text-[#0F2A43]">
                                {feature.name}
                                {feature.asterisk && <span>*</span>}
                            </div>
                            <div className="py-4 border-t border-[#e5e5e5] flex justify-center">
                                <CheckIcon filled={true} />
                            </div>
                            <div className="py-4 border-t border-[#e5e5e5] flex justify-center">
                                <CheckIcon filled={feature.traditionalHas} />
                            </div>
                        </React.Fragment>
                    ))}
                </div>

                <div className="text-xs text-[#888888] mt-4">
                    *Requires Pro Premium plan.
                </div>
            </div>
        </div>
    )
}

// Feature data
const features = [
    { name: "Whole home protection", traditionalHas: true, asterisk: false },
    { name: "Mobile app control", traditionalHas: true, asterisk: false },
    { name: "Smart home integration", traditionalHas: true, asterisk: true },
    { name: "24/7 professional monitoring", traditionalHas: false, asterisk: false },
    { name: "Pro Premium Monitoring for police and private guard response", traditionalHas: false, asterisk: false },
    { name: "Agents automatically verify alarms, access footage & contact you", traditionalHas: false, asterisk: true },
    { name: "Up to 24-hour battery backup, Wi-Fi and cellular connection", traditionalHas: false, asterisk: false },
    { name: "Integrated privacy shutter on all indoor cameras", traditionalHas: false, asterisk: false },
    { name: "Lifetime warranty and 20% discount on hardware for subscribers", traditionalHas: false, asterisk: true },
    { name: "No contracts or hidden fees. Cancel anytime.", traditionalHas: false, asterisk: false },
]

// Check icon component
function CheckIcon({ filled }: { filled: boolean }) {
    return (
        <div className={`rounded-full w-6 h-6 flex items-center justify-center ${filled ? "bg-black" : "bg-[#cccccc]"}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    )
}
