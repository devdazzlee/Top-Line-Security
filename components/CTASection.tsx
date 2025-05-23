interface CTASectionProps {
        setModalOpen: (isOpen: boolean) => void;
}

export default function CTASection({ setModalOpen }: CTASectionProps) {
        return (
                <section className="w-full py-12">
                        <div className="container mx-auto px-4 ">
                                <div className="rounded-4xl overflow-hidden bg-cover bg-center"
                                        style={{ backgroundImage: 'url("/Images/background 1.png")' }}
                                >
                                        <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-24">
                                                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                                                        {/* <button
                                                                onClick={() => setModalOpen(true)}
                                                                className="bg-[#1a8ad4] text-white font-semibold py-3 px-8 rounded-md text-lg hover:bg-[#1579be] transition-colors"
                                                        >
                                                                Take our Quiz
                                                        </button> */}

                                                </div>

                                        </div>
                                </div>
                        </div>
                </section>
        )
}

