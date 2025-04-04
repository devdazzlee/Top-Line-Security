import Image from "next/image"

export const CustomerSupport = () => {
    return (
        <>
            <h1 className="text-center text-3xl md:text-4xl font-bold mb-2" >Find your perfect system with a security expert</h1>
            <Image src={'/Images/background 2.png'} alt="Background image" className="w-[80%]  mx-auto mb-8" width={900} height={300} />
        </>
    )


}