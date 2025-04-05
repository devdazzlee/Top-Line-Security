"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"


export default function SecurityTabs() {
  const [activeTab, setActiveTab] = useState("camera")

  const tabs = [
    {
      id: "camera",
      label: "Camera",
      title: "Indoor and outdoor CCTV",
      image: "/Images/Tabs/camera screenshot.png",
      features: [
        "Easily accessible on multiple devices including phones.",
        "Easy download of incident footage",
        "Clear HD quality",
        "Available for 30 days",
      ],
      addOns: ["Security team to contact you with footage of incident"],
    },
    {
      id: "doorbell",
      label: "Doorbell",
      title: "Smart Doorbell System",
      image: "/Images/Tabs/doorbell.png",
      features: [
        "Two-way audio communication",
        "Motion-activated alerts",
        "HD video quality",
        "Night vision capability",
      ],
      addOns: ["Cloud storage for continuous recording"],
    },
    {
      id: "intercom",
      label: "Intercom",
      title: "Building Intercom System",
      image: "/Images/Tabs/intercom.png",
      features: [
        "Connect with visitors at entrance",
        "Remote door unlock feature",
        "Video verification of visitors",
        "Mobile app integration",
      ],
      addOns: ["Multi-unit management for buildings"],
    },
    {
      id: "alarms",
      label: "Alarms",
      title: "Security Alarm Solutions",
      image: "/Images/Tabs/alarm.png",
      features: [
        "24/7 monitoring capabilities",
        "Instant notifications on your devices",
        "Multiple sensor options available",
        "Battery backup during power outages",
      ],
      addOns: ["Professional monitoring service"],
    },
  ]


  return (
    <div className="flex flex-col md:flex-row overflow-hidden rounded-4xl max-w-6xl mx-auto my-12">
      <div className="w-full md:w-5/12 bg-gray-100 p-6 flex items-center justify-center">
        <div className="relative max-w-[500px]">
          <Image
            src={tabs.find(tab => tab.id === activeTab)?.image || "/Images/default.png"}
            alt={tabs.find(tab => tab.id === activeTab)?.title || "Security system"}
            width={500}
            height={600}
            className="object-contain"
          />
        </div>
      </div>

      <div className=" md:mx-0  mx-2   md:w-7/12 bg-[#0c2350] text-white p-2 md:p-6">
        <div className="flex border-b border-[#1c3a6e]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-2  md:px-4 py-3 text-md md:text-lg  font-medium relative",
                activeTab === tab.id ? "text-white" : "text-white/70 hover:text-white/90",
              )}
            >
              {tab.label}
              {activeTab === tab.id && <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500"></div>}
            </button>
          ))}
        </div>

        <div className="py-8">
          {tabs.map((tab) => (
            <div key={tab.id} className={activeTab === tab.id ? "block" : "hidden"}>
              <h2 className="text-2xl font-bold mb-6">{tab.title}</h2>

              <ul className="space-y-2 mb-8">
                {tab.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <h3 className="font-medium mb-2">Optional add ons</h3>
                <ul className="space-y-2">
                  {tab.addOns.map((addon, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>{addon}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

