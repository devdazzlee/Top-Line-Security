"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function AlarmSection() {
    const [activeTab, setActiveTab] = useState("Break-in")
    const [currentImage, setCurrentImage] = useState("/Images/Tab2/break-in (img).png")
    const [currentCameraImage, setCurrentCameraImage] = useState("/Images/break-in (cctv).png")
    const [fade, setFade] = useState(true)

    const backgroundImages: { [key: string]: string } = {
        "Break-in": "/Images/Tab2/break-in (img).png",
        "Outdoor": "/Images/Tab2/outdoor.png",
        "Deliveries": "/Images/Tab2/delivery.png",
    }

    const cameraImages: { [key: string]: string } = {
        "Break-in": "/Images/break-in (cctv).png",
        "Outdoor": "/Images/outdoor camera.png",
        "Deliveries": "/Images/delivery camera.png",
    }

    useEffect(() => {
        setFade(false)
        const timeout = setTimeout(() => {
            setCurrentImage(backgroundImages[activeTab])
            setCurrentCameraImage(cameraImages[activeTab])
            setFade(true)
        }, 200) // delay before image swap
        return () => clearTimeout(timeout)
    }, [activeTab])

    return (
        <div className="max-w-[1000px] mx-auto px-[20px] py-[10px] font-[Arial,sans-serif] my-6">
            <h2 className="text-center text-[36px] font-bold mb-[16px]">
                During an Alarm
            </h2>
            <p className="text-center text-[18px] max-w-[800px] mx-auto mb-[30px] leading-[1.5]">
                With the one-of-a-kind Pro Premium Monitoring Plan, our highly trained agents can act quickly in an emergency.
                Here is how.
            </p>
            {/* Tab buttons */}
            <div className="flex justify-center gap-[16px] mb-[24px]">
                <div className="flex flex-wrap justify-center gap-[10px] p-[10px]">
                    {["Break-in", "Outdoor", "Deliveries"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-[10px] px-[24px] rounded-[30px] border border-[#2196F3] text-[16px] font-medium cursor-pointer transition-all duration-300 ease-in-out flex-[1_1_auto] min-w-[100px] text-center ${activeTab === tab
                                ? "bg-[#2196F3] text-white"
                                : "bg-transparent text-[#2196F3]"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
            <div className="relative w-full flex justify-center">
                {/* Background Image with fade transition */}
                <div
                    className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
                >
                    <Image
                        className="mx-auto"
                        src={currentImage}
                        alt={`${activeTab} illustration`}
                        width={900}
                        height={600}
                    />
                </div>
                {/* CCTV Image that changes with tab */}
                <Image
                    className="
                        absolute 
                        bottom-[-40px] 
                        right-2 
                        w-[120px] 
                        sm:w-[160px] 
                        md:w-[300px] md:bottom-[-50px] md:right-10 
                        lg:w-[300px] lg:bottom-[-65px] lg:right-6
                    "
                    src={currentCameraImage}
                    alt="Camera"
                    width={400}
                    height={400}
                />
            </div>
        </div>
    )
}