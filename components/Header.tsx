'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from 'lucide-react'; // You can use heroicons or lucide-react
import './Header.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="w-full header-background">
            <div className="container mx-auto flex items-center justify-between px-4 py-2">
                {/* Logo & Nav */}
                <div className="flex items-center space-x-4 md:space-x-8">
                    <Link href="/">
                        <div className="relative h-16 w-40">
                            <Image
                                src="/Images/newLogo.PNG"
                                alt="TOP LINE SECURITY"
                                width={120}
                                height={64}
                                className="object-contain"
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link href="/quote" className="text-white hover:text-gray-300 transition-colors">Get A Quote</Link>
                        <Link href="/testimonials" className="text-white hover:text-gray-300 transition-colors">Testimonials</Link>
                        <Link href="/about" className="text-white hover:text-gray-300 transition-colors">About Us</Link>
                        <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">Contact Us</Link>
                    </nav>
                </div>

                {/* Right Side */}
                <div className="flex items-center md:hidden">
                    {/* Hamburger Icon */}
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                <div className="hidden md:flex items-center">
                    <Link href="/contact" className="flex flex-col items-center text-white">
                        <Image
                            src="/Images/contact icon.png"
                            alt="Phone Icon"
                            width={100}
                            height={100}
                            className="object-contain"
                        />
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden header-background bg-opacity-80 px-4 pb-4">
                    <nav className="flex flex-col space-y-3 text-white">
                        <Link href="/quote" onClick={toggleMenu}>Get A Quote</Link>
                        <Link href="/testimonials" onClick={toggleMenu}>Testimonials</Link>
                        <Link href="/about" onClick={toggleMenu}>About Us</Link>
                        <Link href="/contact" onClick={toggleMenu}>Contact Us</Link>
                        <Link href="/contact" onClick={toggleMenu}>
                            <Image
                                src="/Images/contact icon.png"
                                alt="Phone Icon"
                                width={40}
                                height={40}
                                className="object-contain mt-2"
                            />
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
