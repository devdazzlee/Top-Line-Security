import Image from "next/image"

export default function SecuritySelection({ setModalOpen1, modalOpen1, setModalOpen2, modalOpen2 }: { setModalOpen1: (open: boolean) => void, modalOpen1: boolean, setModalOpen2: (open: boolean) => void, modalOpen2: boolean }) {

    const modalCall = () => {
        setModalOpen1(true)
    }

    const resedientialCall = () => {
        setModalOpen2(true)
    }


    console.log("🚀 ~ SecuritySelection ~ modalOpen1:", modalOpen1)
    return (
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-[#3a7e8c]">
            <div className="flex flex-col md:flex-row">
                {/* Left Panel */}
                <div className="bg-white p-8 rounded-3xl m-4 md:w-1/2">
                    <h2 className="text-3xl font-bold text-[#1d3e4a] mb-8 text-center">
                        Which Property are
                        <br />
                        you protecting?
                    </h2>

                    <div className="flex justify-center gap-8">
                        {/* Residential Option */}
                        <div className="flex flex-col items-center">
                            <div className="border-2 border-[#2b8cb4] rounded-3xl p-4 mb-4 w-36 h-36 flex items-center justify-center">
                                <Image src="/Images/Property/Property1.png" alt="Residential" width={100} height={100} className="object-contain" />
                            </div>
                            <button
                                onClick={resedientialCall}
                                className="bg-[#2b8cb4] text-white font-semibold py-3 px-8 rounded-md w-full text-center"
                            >
                                Residential
                            </button>
                        </div>

                        {/* Commercial Option */}
                        <div className="flex flex-col items-center">
                            <div className="border-2 border-[#2b8cb4] rounded-3xl p-4 mb-4 w-36 h-36 flex items-center justify-center">
                                <Image src="/Images/Property/Property2.png" alt="Commercial" width={100} height={100} className="object-contain" />
                            </div>
                            <button
                                onClick={modalCall}
                                className="bg-[#2b8cb4] text-white font-semibold py-3 px-8 rounded-md w-full text-center"
                            >
                                Commercial
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Panel */}
                <div className="p-8 md:w-1/2 flex flex-col">
                    <div className="mb-8">
                        <h2 className="text-4xl font-bold text-[#e0e0e0] mb-4">Need Help Choosing?</h2>
                        <p className="text-xl text-[#d0d0d0]">
                            Everyone has unique security needs. Answer a few questions, and we will suggest a system tailored to you.
                        </p>
                    </div>

                    <div className="mt-auto">
                        <Image src="/Images/Property/Property3.png" alt="Cozy living room" width={400} height={300} className="object-contain" />
                    </div>
                </div>
            </div>
        </div>
    )
}

