import Link from "next/link"

export default function CTASection() {
    return (
        <section className="w-full py-12">
            <div className="container mx-auto px-4 ">
                <div className="rounded-4xl overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: 'url("/Images/background 1.png")' }} 
                >
                    <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-25  ">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                            <Link
                                href="#quiz"
                                className="bg-[#1a8ad4] text-white font-semibold py-3 px-8 rounded-md text-lg hover:bg-[#1579be] transition-colors"
                            >
                                Take our Quiz
                            </Link>
                            <Link
                                href="#products"
                                className="bg-transparent text-white font-semibold py-3 px-8 rounded-md text-lg border-2 border-white hover:bg-white/10 transition-colors"
                            >
                                Explore Products
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

