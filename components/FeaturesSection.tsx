import { Home, Smartphone, ShieldCheck, Headset } from "lucide-react";

export default function FeaturesSection() {
    const features = [
        { icon: <Headset size={60} />, text: "Professional monitoring" },
        { icon: <Home size={60} />, text: "Professional installation" },
        { icon: <Smartphone size={60} />, text: "Complete control with the Topline Security® App" },
        { icon: <ShieldCheck size={60} />, text: "3 Years Warranty as standard" },
    ];
    return (
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 p-4 md:p-8">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center justify-center w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 bg-gray-100 !rounded-4xl shadow-sm p-5 text-center"
                >
                    {feature.icon}
                    <p className="mt-3 text-sm font-medium text-gray-700">{feature.text}</p>
                </div>
            ))}
        </div>
    )
}

