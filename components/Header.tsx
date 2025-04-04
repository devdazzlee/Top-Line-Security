import Image from "next/image"
import Link from "next/link"
import './Header.css'

export default function Header() {
    return (
        <header className="w-full header-background">
            <div className="container mx-auto flex items-center justify-between px-4 py-2">
                <div className="flex items-center space-x-8">
                    {/* Logo */}
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

                    {/* Nav Links aligned left beside logo */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link href="/quote" className="text-white hover:text-gray-300 transition-colors">
                            Get A Quote
                        </Link>
                        <Link href="/testimonials" className="text-white hover:text-gray-300 transition-colors">
                            Testimonials
                        </Link>
                        <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
                            About Us
                        </Link>
                        <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
                            Contact Us
                        </Link>
                    </nav>
                </div>

                {/* Contact Icon aligned right */}
                <div className="flex items-center">
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
        </header>
    )
}
