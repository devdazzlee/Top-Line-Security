import Image from "next/image";

interface SecuritySectionProps {
        setModalOpen: (isOpen: boolean) => void;
}

export default function SecuritySection({ setModalOpen }: SecuritySectionProps) {
        return (
                <div className="flex flex-col md:flex-row w-full relative ">
                        {/* Background image with inner shadow */}
                        <div className="absolute inset-0 w-full h-full">
                                {/* Desktop Image */}
                                <Image
                                        src="/Images/background.png"
                                        alt="Background"
                                        fill
                                        className="object-cover hidden md:block"
                                        priority
                                />
                                <Image
                                        src="/Images/mobilebannerbg.png"
                                        alt="Background Mobile"
                                        fill
                                        className="object-cover block md:hidden"
                                        priority
                                />
                        </div>


                        {/* Left content section */}
                        <div className="relative text-white p-8 md:p-16 md:w-1/2 flex flex-col justify-center z-10">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-black">
                                        24/7 Security You
                                        <br />
                                        Can Trust
                                </h2>
                                

                                <div className="space-y-4 text-lg">
                                        <p className="hidden sm:block text-black">
                                                Topline security offers the highest-quality security cameras and
                                                alarm, at a price that is feasible for everyone.
                                                The system we provide is comprehensive protection for your entire
                                                home or business, utilising sensors throughout the premises,
                                                including doors, windows, and rooms.
                                                This security system is backed by high-definition indoor and
                                                outdoor cameras, as well as hazard detectors.
                                                Our system is backed by 24/7 monitoring and emergency response
                                                support, should the need arise.


                                        </p>
                                </div>

                             <div className="relative sm:mt-8 bottom-4 sm:bottom-0 mt-0 space-y-4">

                                        <button
                                                onClick={() => setModalOpen(true)}
                                                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
                                        >
                                                Get Started
                                        </button>
                                </div>
                        </div>
                </div>
        );
}
