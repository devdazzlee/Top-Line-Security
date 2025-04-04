"use client"

import { useState } from "react"
import Image from "next/image"

export default function AlarmSection() {
    const [activeTab, setActiveTab] = useState("Break-in")

    return (
        <div
            style={{
                maxWidth: "1000px",
                margin: "0 auto",
                padding: "10px 20px",
                fontFamily: "Arial, sans-serif",
            }}
            className="!my-6 !mx-auto"
        >
            <h2
                style={{
                    textAlign: "center",
                    fontSize: "36px",
                    fontWeight: "bold",
                    marginBottom: "16px",
                }}
            >
                During an Alarm
            </h2>

            <p
                style={{
                    textAlign: "center",
                    fontSize: "18px",
                    maxWidth: "800px",
                    margin: "0 auto 30px",
                    lineHeight: "1.5",
                }}
            >
                With the one-of-a-kind Pro Premium Monitoring Plan, our highly trained agents can act quickly in an emergency.
                Here's how.
            </p>

            {/* Tab buttons */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "16px",
                    marginBottom: "24px",
                }}
            >
                {["Break-in", "Outdoor", "Deliveries"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            padding: "10px 24px",
                            borderRadius: "30px",
                            border: "1px solid #2196F3",
                            backgroundColor: activeTab === tab ? "#2196F3" : "transparent",
                            color: activeTab === tab ? "white" : "#2196F3",
                            fontSize: "16px",
                            fontWeight: "500",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="relative w-full flex justify-center">
                {/* Background Image */}
                <Image
                    className="mx-auto"
                    src={'/Images/break-in (img).png'}
                    alt="Break-in illustration"
                    width={900}
                    height={600}
                />

                {/* CCTV Image */}
                <Image
                    className="
      absolute 
      bottom-[-40px] 
      right-2 
      w-[120px] 
      sm:w-[160px] 
      md:w-[300px] md:bottom-[-50px] md:right-10 
      lg:w-[400px] lg:bottom-[-65px] lg:right-6
    "
                    src={'/Images/break-in (cctv).png'}
                    alt="Camera"
                    width={400}
                    height={400}
                />
            </div>


        </div>
    )
}

