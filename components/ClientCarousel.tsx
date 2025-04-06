"use client"
import type React from "react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function ClientCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [direction, setDirection] = useState(0) // -1 for left, 1 for right
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
        if (isAnimating) return
        if (touchStart - touchEnd > 75) {
            // Swipe left
            setDirection(1)
            handleNext()
        }
        if (touchStart - touchEnd < -75) {
            // Swipe right
            setDirection(-1)
            handlePrev()
        }
    }

    const handlePrev = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setDirection(-1)
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? clients.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const handleNext = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setDirection(1)
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

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (!isAnimating) {
            interval = setInterval(() => {
                handleNext()
            }, 3000) // change slide every 3 seconds
        }
        return () => clearInterval(interval) // cleanup on unmount
    }, [currentIndex, isAnimating])

    // Animation complete handler
    const handleAnimationComplete = () => {
        setIsAnimating(false)
    }

    // Get visible clients
    const getVisibleClients = () => {
        const visibleClients = []
        // Create array with proper wraparound
        const allClientsWithWrap = [...clients, ...clients, ...clients] // Triple the array to handle wraparound
        const startIdx = clients.length + currentIndex // Start from the middle set

        for (let i = 0; i < slidesToShow; i++) {
            const index = (startIdx + i) % clients.length
            visibleClients.push({
                ...allClientsWithWrap[startIdx + i],
                index,
                originalIndex: (currentIndex + i) % clients.length
            })
        }
        return visibleClients
    }

    // Slide variants without opacity transitions
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
            position: "absolute",
            width: "100%",
        }),
        center: {
            x: 0,
            position: "relative",
            width: "100%",
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        exit: (direction: number) => ({
            x: direction < 0 ? "100%" : "-100%",
            position: "absolute",
            width: "100%",
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        })
    }

    return (
        <div className="w-full overflow-hidden bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl font-bold mb-10">Some of Our Clients</h2>
                <div className="relative">
                    <div
                        ref={carouselRef}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div style={{ position: 'relative', height: '320px' }} className="bg-white">
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    variants={slideVariants}
                                    onAnimationComplete={handleAnimationComplete}
                                    className="top-0 left-0 w-full absolute bg-white"
                                >
                                    <div className="flex gap-4">
                                        {getVisibleClients().map((client, index) => (
                                            <div key={`${currentIndex}-${index}`} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2">
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
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-6 gap-2">
                    {clients.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (index === currentIndex || isAnimating) return;
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                                setIsAnimating(true);
                            }}
                            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-[#0e2a4d]" : "bg-gray-300"}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}