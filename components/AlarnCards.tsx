import { BellRing, Headphones, Shield, UserCheck } from "lucide-react";

export const AlarmCards = () => {
    const steps = [
        {
            icon: <BellRing size={40} />,
            text: "When a burglar alarm is triggered, the siren sounds."
        },
        {
            icon: <Headphones size={40} />,
            text: "The security team will call you directly to inform you of what has happened with your alarm and check you're ok."
        },
        {
            icon: <Shield size={40} />,
            text: "The team checks cameras to visually verify an incident and will request police response."
        },
        {
            icon: <UserCheck size={40} />,
            text: "If an incident can't be visually verified, the monitoring centre will dispatch one of their guards to the property."
        },
    ];
    return (
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 p-4 md:p-8 ">
            {steps.map((step, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center justify-center w-60 h-40 sm:w-72 sm:h-44  md:h-48  lg:h-52 bg-[#0D2240] text-white rounded-2xl shadow-md p-5 text-center"
                >
                    {step.icon}
                    <p className="mt-3 text-sm md:text-base font-medium">{step.text}</p>
                </div>
            ))}
        </div>
    );
};