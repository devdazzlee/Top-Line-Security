import Image from "next/image";
export default function FeaturesSection() {
    return (
        <div className="max-w-6xl mx-auto "> 
            <Image   className='mx-auto my-12' src={'/Images/info-icons.png'} alt="Information icons" width={1000} height={900} />
        </div>
    )
}

