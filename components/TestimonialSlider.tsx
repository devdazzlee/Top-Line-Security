"use client"

import { useState, useEffect, useRef, type TouchEvent } from "react"

export default function TestimonialSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const sliderRef = useRef<HTMLDivElement>(null)

    const testimonials = [
        {
            stars: 5,
            text: "Topline fitted my alarm and cctv. They did a brilliant job, works perfectly and explained how to use the systems very well. Krish fitted the system quickly and neatly. Top security services compared to the ADT system I had before. Thank you Krish for your outstanding work!",
            author: "Sahini Rajah",
        },
        {
            stars: 5,
            text: "Excellent service from start to finish. The team was professional, punctual and thorough with the installation. The cameras provide crystal clear footage and the app is very user-friendly. Would highly recommend to anyone looking for home security.",
            author: "Michael Thompson",
        },
        {
            stars: 5,
            text: "I've been using their security system for over a year now and couldn't be happier. The customer support is responsive whenever I have questions, and the system has already proven its worth when we had an attempted break-in. The intruders were deterred immediately!",
            author: "Jennifer Williams",
        },
        {
            stars: 4,
            text: "Very satisfied with the installation process and quality of equipment. The technician took time to walk me through all the features and made sure I was comfortable using the system before leaving. Only giving 4 stars because the app occasionally has minor glitches.",
            author: "David Chen",
        },
    ]

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    }

    // Handle touch events for swiping
    const handleTouchStart = (e: TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e: TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            // Swipe left
            nextSlide()
        }

        if (touchStart - touchEnd < -50) {
            // Swipe right
            prevSlide()
        }
    }

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000) // Change slide every 5 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">What People Think About Us?</h2>

            <div
                className="relative"
                ref={sliderRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="w-full flex-shrink-0 px-4">
                                <div className="bg-[#3d8094] text-white p-8 rounded-2xl">
                                    <div className="flex mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-6 h-6 text-yellow-400 fill-yellow-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="mb-4">{testimonial.text}</p>
                                    <p className="font-medium">-{testimonial.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`mx-1 w-2 h-2 rounded-full ${currentIndex === index ? "bg-[#3D8094]" : "bg-gray-300"}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

