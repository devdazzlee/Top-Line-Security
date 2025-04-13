import Image from "next/image"
import Link from "next/link"

export default function TestimonialsSection() {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-center text-4xl font-bold mb-12">See what people think about our services</h2>

                <div className="flex flex-col md:flex-row justify-center gap-8">
                    {/* Google Reviews Card */}
                    <div className="rounded-3xl overflow-hidden bg-[#3d8094] text-white p-6 flex flex-col items-center max-w-md">
                        <div className="bg-white rounded-2xl p-6 mb-4 w-full flex justify-center">
                            <Image
                                src="/Images/Google_Logo.webp"
                                alt="Google Logo"
                                width={300}
                                height={300}
                                className="h-24 w-auto"
                            />
                        </div>

                        <div className="flex mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={star} className="w-10 h-10 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>

                        <h3 className="text-5xl font-bold mb-1">5 out of 5</h3>
                        <p className="text-xl mb-8">Upto 11 Reviews</p>

                        <Link href="https://www.google.com/search?client=safari&sca_esv=60fc72c6afa20bbd&hl=en-pk&cs=0&sxsrf=AHTn8zpReaJSgAETTQyKk44yZDGpxYtVcw:1744418025358&q=toplinesecuritygb+london+reviews&uds=ABqPDvzv3WnFvHWS8ObA9z33UojeWND6vJriDx-sb4xo4YRKWzJjy53jKbSvd-UxzNKEkdFhyaLWBKFaBGLtv1ks8MBGjKVQxoH-3t4WKoMMHBAiE-Ll0YZTdma9efa2IqvyOTDoHNogwII_4Xhp60C6x4GJJN-VR2nJGOnWG6RsO9ZD7yqq-2lq_x3iRhya52iboWnAg89zXppO-8nTovVCaRQNnUdfTr5-uamoD7WVYpLNEoF16-QsCbovKogAhfqW-z2_rk61Dx-fZU4bZPg25FmvXoDj77pi9KWJx_Vz7WVuH4dkJeF-asW-nB_hZ_hM8_QfodbwEa59J6faGx5hxVwW__qM1exzy9rMPDiOY6hdhO-Z6vFw_0RO2QNDIcJ12e5TM6wCGC4ionK9gO7EorR6EHM3b1JDhOiGu7uM49fRGjuI7PD4u03AoSNC6utsbMClBR1m&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzWIv5hEPKc9rZ1BBFrbLeB7kZrZ0m2AUIxyW4BbPXgwYlvbRSPWdSufZBI_SOrhZ1g8zn_DPyvFC196GWYxV7YBlIS2ine17XxE1Gq-C_yG_hdDleg%3D%3D&sa=X&ved=2ahUKEwjc3fbFn9GMAxVLTqQEHX5OCxwQk8gLegQIJBAB&ictx=1&biw=393&bih=659&dpr=3" className="text-2xl font-medium hover:underline">
                            Read Our Reviews
                        </Link>
                    </div>

                    {/* Trustpilot Reviews Card */}
                    <div className="rounded-3xl overflow-hidden bg-[#3d8094] text-white p-6 flex flex-col items-center max-w-md">
                        <div className="bg-white rounded-2xl p-6 mb-4 w-full flex justify-center">
                            <Image
                                src="/Images/Trustpilot.png"
                                alt="Trustpilot Logo"
                                width={600}
                                height={300}
                                className="h-24 w-auto"
                            />
                        </div>

                        <div className="flex mb-2">
                            {[1, 2, 3, 4].map((star) => (
                                <svg key={star} className="w-10 h-10 text-green-500 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                            <svg className="w-10 h-10 text-green-500 fill-current" viewBox="0 0 24 24">
                                <path
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                    fill="url(#half-green)"
                                />
                                <defs>
                                    <linearGradient id="half-green" x1="0" x2="1" y1="0" y2="0">
                                        <stop offset="50%" stopColor="#22c55e" />
                                        <stop offset="50%" stopColor="#cbd5e1" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <h3 className="text-5xl font-bold mb-1">4.5 out of 5</h3>
                        <p className="text-xl mb-8">Upto 16 Reviews</p>

                        <Link href="https://www.trustpilot.com/review/toplinesecuritygb.co.uk" className="text-2xl font-medium hover:underline">
                            Read Our Reviews
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

