"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export default function ClientCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const carouselRef = useRef<HTMLDivElement>(null)

    const clients = [
        {
            name: "BP",
            logo: "/Images/Testimonial/bp-logo.png",
        },
        {
            name: "Morrisons",
            logo: "/Images/Testimonial/Morrisons-Logo.png",
        },
        {
            name: "Texaco",
            logo: "/Images/Testimonial/texaco.png",
        },
        {
            name: "Post Office",
            logo: "/Images/Testimonial/Post_Officepng.png",
        },
        // Add more clients as needed
    ]

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) {
            // Swipe left
            handleNext()
        }

        if (touchStart - touchEnd < -75) {
            // Swipe right
            handlePrev()
        }
    }

    const handlePrev = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? clients.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const handleNext = () => {
        const isLastSlide = currentIndex === clients.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    // Calculate how many slides to show based on viewport width
    const [slidesToShow, setSlidesToShow] = useState(4)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesToShow(1)
            } else if (window.innerWidth < 768) {
                setSlidesToShow(2)
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(3)
            } else {
                setSlidesToShow(4)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // Get visible clients
    const getVisibleClients = () => {
        const visibleClients = []
        for (let i = 0; i < slidesToShow; i++) {
            const index = (currentIndex + i) % clients.length
            visibleClients.push(clients[index])
        }
        return visibleClients
    }

    return (
        <div className="w-full bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl font-bold mb-10">Some of Our Clients</h2>

                <div className="relative">
                    <div
                        className="flex items-center justify-between"
                        ref={carouselRef}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div className="w-full">
                            <div className="flex transition-transform duration-300 ease-in-out gap-4">
                                {getVisibleClients().map((client, index) => (
                                    <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2">
                                        <div className="bg-[#0e2a4d] rounded-4xl p-6 flex flex-col items-center justify-center h-80">
                                            <h3 className="text-white text-xl font-bold mb-4">{client.name}</h3>
                                            <div className="relative w-32 h-32">
                                                <Image
                                                    src={client.logo || "/placeholder.svg"}
                                                    alt={`${client.name} logo`}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-6 gap-2">
                    {clients.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-[#0e2a4d]" : "bg-gray-300"}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

