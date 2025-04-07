interface BannerProps {
    desktopImageSrc: string;
    mobileImageSrc?: string;
    heading: string;
    textColor?: string; // now optional
}

export const Banner: React.FC<BannerProps> = ({
    desktopImageSrc,
    mobileImageSrc,
    heading,
    textColor = "text-white", // default value
}) => {
    return (
        <section className="relative w-full md:h-[600px] h-auto">
            <img
                src={desktopImageSrc}
                alt={heading}
                className="hidden md:block w-full h-full object-fit"
            />
            <img
                src={mobileImageSrc || desktopImageSrc}
                alt={`${heading} mobile`}
                className="block md:hidden w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center px-6">
                <h1 className={`${textColor} text-3xl md:text-5xl font-bold drop-shadow-lg`}>
                    {heading}
                </h1>
            </div>
        </section>
    );
};
