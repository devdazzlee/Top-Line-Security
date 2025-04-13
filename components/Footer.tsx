"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function FooterSection() {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log("Email submitted:", email)
    }

    return (
        <footer className="bg-[#0c2249] text-white py-10 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Newsletter signup */}
                <div className="mb-12">
                    <h3 className="text-xl font-normal mb-4">Get offers and security advice</h3>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 md:w-[60%] w-full mx-auto sm:mx-0">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="flex-grow py-4 px-5 rounded-xl text-gray-500 text-lg bg-white "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button className="px-8 py-2 rounded-xl border-3 border-white transition-colors">
                            Submit
                        </button>
                    </form>

                    <p className="text-[#a0a7b8] mt-3 text-sm">
                        You may receive email offers from us in accordance with our{" "}
                        <Link href="/privacy-policy" className="text-[#a0a7b8] underline hover:text-white">
                            Privacy Promise
                        </Link>
                        .
                    </p>
                </div>

                {/* Footer links */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Company column */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy-policy" className="text-white hover:underline">
                                    Privacy Promise
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-white hover:underline">
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support column */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">Support</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/contact" className="text-white hover:underline">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <a href="mailto:sales@toplinesecuritygb.co.uk" className="text-white hover:underline">
                                    sales@toplinesecuritygb.co.uk
                                </a>
                            </li>
                            <li>
                                <a href="tel:02071268233" className="text-white hover:underline">
                                    020-7126-8233
                                </a>
                            </li>
                            <li>
                                <Link href="/testimonals" className="text-white hover:underline">
                                    Reviews
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Hikvision logo */}
                <div className="mt-12 flex justify-end">
                    <Image src={'/Images/HikVision.png'} alt="Hikvision logo" width={150} height={50} />
                </div>
            </div>
        </footer>
    )
}

