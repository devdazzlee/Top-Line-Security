"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

export function SecurityWizard1({ modalOpen, setModalOpen }: { modalOpen: boolean, setModalOpen: (open: boolean) => void }) {
    const [open, setOpen] = useState(true)
    console.log("🚀 ~ SecurityWizard ~ open:", open)
    const [step, setStep] = useState(1)
    const [selectedProperty, setSelectedProperty] = useState<string | null>(null)
    const [selected, setSelected] = useState<string[]>([]);
    const [hasMultipleLocations, setHasMultipleLocations] = useState(false)
    const router = useRouter();
    // Get total steps based on property type
    const getTotalSteps = () => {
        if (selectedProperty === "apartment") return 8
        if (selectedProperty === "house") return 9
        if (selectedProperty === "business") return 4
        return 7
    }

    const totalSteps = getTotalSteps()
    const progress = Math.round((step / totalSteps) * 100)

    const handlePropertySelect = (property: string) => {
        setSelectedProperty(property)
        setStep(2)
    }
    const handleMultipleLocations = () => {
        setHasMultipleLocations(true)
        handleNext()
    }
    const handleNext = () => {
        if (step < totalSteps) {
            setStep(step + 1)
        } else {
            // Handle form submission
            setOpen(false)
            setStep(1)
            setSelectedProperty(null)
        }
    }
    const options = [
        {
            id: 'break-ins',
            label: 'Doorbell Intercom',
            image: '/Images/Steps/Burglary.jpg',
        },
        {
            id: 'fire',
            label: 'Fire & smoke',
            image: '/Images/Steps/Fire.jpg',
        },
        {
            id: 'pipes',
            label: 'Frozen pipes',
            image: '/Images/Steps/Fire.jpg'

        },
        {
            id: 'water',
            label: 'Water leaks',
            image: '/Images/Steps/Frozen_pipes.jpg'

        },
        {
            id: 'package',
            label: 'Package theft',
            image: '/Images/Steps/Leaks.jpg'
        },
        {
            id: 'ambulance',
            label: 'Ambulance',
            image: '/Images/Steps/Package_Theft.jpg'
        },
        {
            id: 'outdoor',
            label: 'Outdoor video',
            image: '/Images/Steps/Medical.jpg'
        },
        {
            id: 'indoor',
            label: 'Indoor video',
            image: '/Images/Steps/Indoor_Footage.jpg'
        },
    ];
    const toggleOption = (id: string) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };
    const handleDialogClose = () => {
        // Reset states when dialog is closed
        setStep(1)
        setSelectedProperty(null)
        setSelected([])
        setHasMultipleLocations(false)
        setModalOpen(false)  // Close the dialog
    }
    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1)
        }
    }
    const locationBack = () => {
        setHasMultipleLocations(false)
        handleBack()
    }
    const handleSubmit = () => {
        // Handle form submission
        setOpen(false)
        setStep(1)
        setSelectedProperty(null)
        setModalOpen(false) // Close the dialog
    }
    const handleClick = () => {
        console.log("Redirecting...");
        router.push("/"); // Redirect to home page
        setOpen(false)
        setStep(1)
        setSelectedProperty(null)
        setModalOpen(false) // Close the dialog
    };
    // Render the appropriate content based on property type and step
    const renderContent = () => {
        // Initial property selection screen
        if (step === 1) {
            return (
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-center mb-6">What kind of property are you <br /> protecting?</h2>
                    <div className="grid grid-cols-2 gap-4 w-full max-w-sm mb-4 ">

                        <div className="col-span-1">
                            <div className="border-2 border-blue-500 rounded-lg overflow-hidden mb-2">
                                <Image
                                    src="/Images/Steps/Business.jpg"
                                    alt="Apartment"
                                    width={150}
                                    height={150}
                                    className="mx-auto object-contain"
                                />
                            </div>
                            <Button className="w-full bg-blue-500" onClick={() => handlePropertySelect("business")}>
                                Business
                            </Button>
                        </div>
                    </div>

                </div>
            )
        }

        // House flow
        if (selectedProperty === "house") {
            switch (step) {
                case 2:
                    return (
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-bold text-center mb-4">
                                Great! You could be eligible to save up to 15% on your home insurance policy.
                            </h2>
                            <div className="my-8">
                                <Image
                                    src="/Images/Steps/Savings.jpg"
                                    alt="Savings"
                                    width={200}
                                    height={200}
                                    className="mx-auto"
                                />
                            </div>
                            <Button className="w-full max-w-md bg-blue-500" onClick={handleNext}>
                                Next
                            </Button>
                            <div className="mt-6 flex items-center justify-center">
                                <Button variant="link" onClick={handleBack} className="flex items-center text-gray-500">
                                    <ChevronLeft className="h-4 w-4 mr-1" />
                                    Back
                                </Button>
                            </div>
                        </div>

                    )
                case 3:
                    return (
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-bold text-center mb-4">
                                We have got two setup options.
                                <br />
                                Which do you prefer?
                            </h2>
                            <p className="text-center text-sm mb-6">
                                Tip: No matter which option you choose, live expert assistance via phone call is available to ensure
                                your system is installed correctly.
                            </p>
                            <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-4">
                                {/* <div className="col-span-1">
                                    <div className="border rounded-lg overflow-hidden mb-2">
                                        <Image
                                            src="/Images/Steps/Self_Install.jpg"
                                            alt="Self Install"
                                            width={200}
                                            height={150}
                                            className="w-full object-contain"
                                        />
                                    </div>
                                    <Button className="w-full bg-blue-500" onClick={handleNext}>
                                        Self install
                                    </Button>
                                </div> */}
                                <div className="col-span-1">
                                    <div className="border rounded-lg overflow-hidden mb-2">
                                        <Image
                                            src="/Images/Steps/Pro_Install.jpg"
                                            alt="Pro Install"
                                            width={200}
                                            height={150}
                                            className="w-full object-contain"
                                        />
                                    </div>
                                    <Button className="w-full bg-blue-500" onClick={handleNext}>
                                        Pro install
                                    </Button>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-center">
                                <Button variant="link" onClick={handleBack} className="flex items-center text-gray-500">
                                    <ChevronLeft className="h-4 w-4 mr-1" />
                                    Back
                                </Button>
                            </div>
                        </div>
                    )
                case 4:
                    return (
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-bold text-center mb-4">What size is your house?</h2>
                            <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-4">
                                <div className="col-span-1">
                                    <div className="border rounded-lg overflow-hidden mb-2">
                                        <Image
                                            src="/Images/Steps/Small_House.jpg"
                                            alt="Small House"
                                            width={120}
                                            height={120}
                                            className="w-full object-contain"
                                        />
                                    </div>
                                    <p className="text-center text-xs mb-1">
                                        Less than 1,000 sq. ft.
                                        <br />
                                        (Typically 1-2 bedrooms)
                                    </p>
                                    <Button className="w-full bg-blue-500" onClick={handleNext}>
                                        Small
                                    </Button>
                                </div>
                                <div className="col-span-1">
                                    <div className="border rounded-lg overflow-hidden mb-2">
                                        <Image
                                            src="/Images/Steps/Medium_House.jpg"
                                            alt="Medium House"
                                            width={120}
                                            height={120}
                                            className="w-full object-contain"
                                        />
                                    </div>
                                    <p className="text-center text-xs mb-1">
                                        1,000-2,000 sq. ft.
                                        <br />
                                        (Typically 2-3 bedrooms)
                                    </p>
                                    <Button className="w-full bg-blue-500" onClick={handleNext}>
                                        Medium
                                    </Button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                                <div className="col-span-1">
                                    <div className="border rounded-lg overflow-hidden mb-2">
                                        <Image
                                            src="/Images/Steps/Large_House.jpg"
                                            alt="Large House"
                                            width={120}
                                            height={120}
                                            className="w-full object-contain"
                                        />
                                    </div>
                                    <p className="text-center text-xs mb-1">
                                        2,000-3,000 sq. ft.
                                        <br />
                                        (Typically 3-4 bedrooms)
                                    </p>
                                    <Button className="w-full bg-blue-500" onClick={handleNext}>
                                        Large
                                    </Button>
                                </div>
                                <div className="col-span-1">
                                    <div className="border rounded-lg overflow-hidden mb-2">
                                        <Image
                                            src="/Images/Steps/Extra_Large_House.jpg"
                                            alt="Extra Large House"
                                            width={120}
                                            height={120}
                                            className="w-full object-contain"
                                        />
                                    </div>
                                    <p className="text-center text-xs mb-1">
                                        More than 3,000 sq. ft.
                                        <br />
                                        (Typically 4+ bedrooms)
                                    </p>
                                    <Button className="w-full bg-blue-500" onClick={handleNext}>
                                        Extra Large
                                    </Button>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-center">
                                <Button variant="link" onClick={handleBack} className="flex items-center text-gray-500">
                                    <ChevronLeft className="h-4 w-4 mr-1" />
                                    Back
                                </Button>
                            </div>
                        </div>
                    )
                case 5:
                    return (
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-bold text-center mb-4">How many entry doors do you need to protect?</h2>
                            <p className="text-center text-sm mb-6">
                                Tip: If you have an attached garage, include the door leading to it.
                            </p>
                            <div className="my-4">
                                <Image
                                    src="/Images/Steps/Front_door.jpg"
                                    alt="Door"
                                    width={120}
                                    height={120}
                                    className="mx-auto"
                                />
                            </div>
                            <div className="w-full max-w-md mb-6">
                                <Label htmlFor="doors" className="mb-2 block">
                                    How many doors?*
                                </Label>
                                <Select defaultValue="1">
                                    <SelectTrigger id="doors" className="w-full">
                                        <SelectValue placeholder="Select number of doors" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">1</SelectItem>
                                        <SelectItem value="2">2</SelectItem>
                                        <SelectItem value="3">3</SelectItem>
                                        <SelectItem value="4">4</SelectItem>
                                        <SelectItem value="5+">5+</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button className="w-full max-w-md bg-blue-500" onClick={handleNext}>
                                Next
                            </Button>
                            <div className="mt-6 flex items-center justify-center">
                                <Button variant="link" onClick={handleBack} className="flex items-center text-gray-500">
                                    <ChevronLeft className="h-4 w-4 mr-1" />
                                    Back
                                </Button>
                            </div>
                        </div>
                    )
                case 6:
                    return (
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-bold text-center mb-4">
                                What additional protections are you looking for?
                            </h2>
                            <p className="text-center text-sm mb-4">Select all that apply</p>

                            <div className="grid grid-cols-3  w-full max-w-md mb-6">
                                {options.map(({ id, label, image }) => {
                                    const isSelected = selected.includes(id);
                                    return (
                                        <button
                                            key={id}
                                            onClick={() => toggleOption(id)}
                                            className={`flex flex-col items-center p-2  transition-all border ${isSelected
                                                ? 'border-blue-600 bg-blue-50'
                                                : 'border-gray-300 hover:border-gray-400'
                                                }`}
                                        >
                                            <div className="mb-2 w-20 h-20 relative">
                                                <Image
                                                    src={image}
                                                    alt={label}
                                                    layout="fill"
                                                    objectFit="contain"
                                                    className={isSelected ? 'opacity-90' : ''}
                                                />
                                            </div>
                                            <span
                                                className={`text-xs font-medium ${isSelected ? 'text-blue-600' : 'text-gray-800'
                                                    }`}
                                            >
                                                {label}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            <button
                                className="w-full max-w-md bg-blue-500 text-white py-2 rounded"
                                onClick={handleNext}
                            >
                                Next
                            </button>

                            <div className="mt-6 flex items-center justify-center">
                                <button
                                    onClick={handleBack}
                                    className="flex items-center text-gray-500"
                                >
                                    <svg
                                        className="h-4 w-4 mr-1"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Back
                                </button>
                            </div>
                        </div>
                    )
                case 7:
                    return (
                        <div className="flex flex-col items-center ">
                            <h2 className="text-2xl font-bold text-center mb-6">
                                Are you interested in 24/7 professional monitoring?
                            </h2>
                            <div className="my-4">
                                <Image
                                    src="/Images/Steps/Security_Level.jpg"
                                    alt="Professional Monitoring"
                                    width={120}
                                    height={120}
                                    className="mx-auto"
                                />
                            </div>
                            <div className="w-full max-w-md space-y-3">
                                <Button className="bg-blue-500 w-full" onClick={handleNext}>
                                    No, I plan to monitor the system myself with the app
                                </Button>
                                <Button className="bg-blue-500 w-full" onClick={handleNext}>
                                    Not sure yet
                                </Button>
                                <Button className="bg-blue-500 w-full" onClick={handleNext}>
                                    Yes
                                </Button>
                            </div>
                            <div className="mt-6 flex items-center justify-center">
                                <Button variant="link" onClick={handleBack} className="flex items-center text-gray-500">
                                    <ChevronLeft className="h-4 w-4 mr-1" />
                                    Back
                                </Button>
                            </div>
                        </div>
                    )
                case 8:
                    return (
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-bold text-center mb-2">Your system recommendation is ready to view</h2>
                            <p className="text-center text-sm mb-6">
                                We will also send the full specs straight to your inbox, and keep you posted on the latest news and deals
                                from SimpliSafe.
                            </p>
                            <div className="my-4">
                                <Image
                                    src="/Images/Steps/System_Reveal_1.jpg"
                                    alt="Package"
                                    width={100}
                                    height={100}
                                    className="mx-auto"
                                />
                            </div>
                            <div className="w-full max-w-md space-y-4 mb-4">
                                <div>
                                    <Label htmlFor="firstName" className="mb-1 block">
                                        First Name*
                                    </Label>
                                    <Input id="firstName" placeholder="Enter your first name" />
                                </div>
                                <div>
                                    <Label htmlFor="email" className="mb-1 block">
                                        Email*
                                    </Label>
                                    <Input id="email" type="email" placeholder="Enter your email" />
                                </div>
                            </div>
                            <Button className="w-full max-w-md bg-blue-500" onClick={handleNext}>
                                Next
                            </Button>
                            <p className="text-xs text-center mt-2">By clicking 'Next' you accept our Privacy Policy.</p>
                            <div className="mt-6 flex items-center justify-center">
                                <Button variant="link" onClick={handleBack} className="flex items-center text-gray-500 ">
                                    <ChevronLeft className="h-4 w-4 mr-1" />
                                    Back
                                </Button>
                            </div>
                        </div>
                    )
                case 9:
                    return (
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-bold text-center mb-2">Great! Let's see your recommended system.</h2>
                            <p className="text-center text-sm mb-6">
                                Share your mobile number if you'd like us to text you with a link to this system.
                            </p>
                            <div className="my-4">
                                <Image
                                    src="/Images/Steps/System_Reveal_1.jpg"
                                    alt="Mobile"
                                    width={100}
                                    height={100}
                                    className="mx-auto"
                                />
                            </div>
                            <div className="w-full max-w-md space-y-4 mb-4">
                                <div>
                                    <Label htmlFor="phone" className="mb-1 block">
                                        Phone Number
                                    </Label>
                                    <Input id="phone" placeholder="Enter your phone number" />
                                </div>
                            </div>
                            <Button className="w-full max-w-md mb-2 bg-blue-500" onClick={handleSubmit}>
                                Submit
                            </Button>
                            <Button className="w-full max-w-md" variant="outline" onClick={handleSubmit}>
                                Skip and view recommendation
                            </Button>
                            <p className="text-xs text-center mt-4 max-w-md">
                                By adding your phone number and clicking 'Text my recommendation' you agree to receive marketing phone
                                calls or text messages, and accept the details in our Privacy Policy. You can opt-out any time by
                                responding STOP. Standard message and data rates may apply.
                            </p>
                            <div className="mt-6 flex items-center justify-center">
                                <Button variant="link" onClick={handleBack} className="flex items-center text-gray-500">
                                    <ChevronLeft className="h-4 w-4 mr-1" />
                                    Back
                                </Button>
                            </div>
                        </div>
                    )
                default:
                    return null
            }
        }

        // Apartment flow
        if (selectedProperty === "apartment") {
            switch (step) {
                case 2:
                    return (
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-bold text-center mb-4">
                                We've got two setup options.
                                <br />
                                Which do you prefer?
                            </h2>
                            <p className="text-center text-sm mb-6">
                                Tip: No matter which option you choose, live expert assistance via phone call is available to ensure
                                your system is installed correctly.
                            </p>
                            <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-4">
                                <div className="col-span-1">
                                    <div className="border rounded-lg overflow-hidden mb-2">
                                        <Image
                                            src="/Images/Steps/Self_Install.jpg"
                                            alt="Self Install"
                                            width={200}
                                            height={150}
                                            className="w-full object-contain"
                                        />
                                    </div>
                                    <Button className="w-full bg-blue-500" onClick={handleNext}>
                                        Self install
                                    </Button>
                                </div>
                                <div className="col-span-1">
                                    <div className="border rounded-lg overflow-hidden mb-2">
                                        <Image
                                            src="/Images/Steps/Pro_Install.jpg"
                                            alt="Pro Install"
                                            width={200}
                                            height={150}
                                            className="w-full object-contain"
                                        />
                                    </div>
                                    <Button className="w-full bg-blue-500" onClick={handleNext}>
                                        Pro install
                                    </Button>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-center">
                                <Button variant="link" onClick={handleBack} className="flex items-center text-gray-500">
                                    <ChevronLeft className="h-4 w-4 mr-1" />
                                    Back
                                </Button>
                            </div>
                        </div>
                    )
                case 3:
                    return (
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-bold text-center mb-6">What size is your apartment?</h2>
                            <div className="w-full max-w-md mb-4">
                                <div className="mb-4">
                                    <Image
                                        src="/Images/Steps/Floorplan.jpg"
                                        alt="Apartment Floor Plan"
                                        width={200}
                                        height={200}
                                        className="mx-auto"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <Button className="w-full bg-blue-500" onClick={handleNext}>
                                        Small
                                    </Button>
                                    <p className="text-center text-xs">Less than 1,000 sq. ft. (Typically 1-2 bedrooms)</p>

                                    <Button className="w-full bg-blue-500" onClick={handleNext}>
                                        Medium
                                    </Button>
                                    <p className="text-center text-xs">1,000-2,000 sq. ft. (Typically 2-3 bedrooms)</p>

                                    <Button className="w-full bg-blue-500" onClick={handleNext}>
                                        Large
                                    </Button>
                                    <p className="text-center text-xs">More than 2,000 sq. ft. (Typically 3+ bedrooms)</p>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-center">
                                <Button variant="link" onClick={handleBack} className="flex items-center text-gray-500">
                                    <ChevronLeft className="h-4 w-4 mr-1" />
                                    Back
                                </Button>
                            </div>
                        </div>
                    )
                case 4:
                    return (
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-bold text-center mb-4">How many entry doors do you need to protect?</h2>
                            <p className="text-center text-sm mb-6">
                                Tip: If you have an attached garage, include the door leading to it.
                            </p>
                            <div className="my-4">
                                <Image
                                    src="/Images/Steps/Front_door.jpg"
                                    alt="Door"
                                    width={120}
                                    height={120}
                                    className="mx-auto"
                                />
                            </div>
                            <div className="w-full max-w-md mb-6">
                                <Label htmlFor="doors" className="mb-2 block">
                                    How many doors?*
                                </Label>
                                <Select defaultValue="1">
                                    <SelectTrigger id="doors" className="w-full">
                                        <SelectValue placeholder="Select number of doors" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">1</SelectItem>
                                        <SelectItem value="2">2</SelectItem>
                                        <SelectItem value="3">3</SelectItem>
                                        <SelectItem value="4">4</SelectItem>
                                        <SelectItem value="5+">5+</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button className="w-full max-w-md bg-blue-500" onClick={handleNext}>
                                Next
                            </Button>
                            <div className="mt-6 flex items-center justify-center">
                                <Button variant="link" onClick={handleBack} className="flex items-center text-gray-500">
                                    <ChevronLeft className="h-4 w-4 mr-1" />
                                    Back
                                </Button>
                            </div>
                        </div>
                    )
                case 5:
                    return (
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-bold text-center mb-4">
                                What additional protections are you looking for?
                            </h2>
                            <p className="text-center text-sm mb-4">Select all that apply</p>

                            <div className="grid grid-cols-3  w-full max-w-md mb-6">
                                {options.map(({ id, label, image }) => {
                                    const isSelected = selected.includes(id);
                                    return (
                                        <button
                                            key={id}
                                            onClick={() => toggleOption(id)}
                                            className={`flex flex-col items-center p-2  transition-all border ${isSelected
                                                ? 'border-blue-600 bg-blue-50'
                                                : 'border-gray-300 hover:border-gray-400'
                                                }`}
                                        >
                                            <div className="mb-2 w-20 h-20 relative">
                                                <Image
                                                    src={image}
                                                    alt={label}
                                                    layout="fill"
                                                    objectFit="contain"
                                                    className={isSelected ? 'opacity-90' : ''}
                                                />
                                            </div>
                                            <span
                                                className={`text-xs font-medium ${isSelected ? 'text-blue-600' : 'text-gray-800'
                                                    }`}
                                            >
                                                {label}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            <button
                                className="w-full max-w-md bg-blue-500 text-white py-2 rounded"
                                onClick={handleNext}
                            >
                                Next
                            </button>

                            <div className="mt-6 flex items-center justify-center">
                                <button
                                    onClick={handleBack}
                                    className="flex items-center text-gray-500"
                                >
                                    <svg
                                        className="h-4 w-4 mr-1"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Back
                                </button>
                            </div>
                        </div>
                    )
                case 6:
                    return (
                        <div className="flex flex-col items-center ">
                            <h2 className="text-2xl font-bold text-center mb-6">
                                Are you interested in 24/7 professional monitoring?
                            </h2>
                            <div className="my-4">
                                <Image
                                    src="/Images/Steps/Security_Level.jpg"
                                    alt="Professional Monitoring"
                                    width={120}
                                    height={120}
                                    className="mx-auto"
                                />
                            </div>
                            <div className="w-full max-w-md space-y-3">
                                <Button className="bg-blue-500 w-full" onClick={handleNext}>
                                    No, I plan to monitor the system myself with the app
                                </Button>
                                <Button className="bg-blue-500 w-full" onClick={handleNext}>
                                    Not sure yet
                                </Button>
                                <Button className="bg-blue-500 w-full" onClick={handleNext}>
                                    Yes
                                </Button>
                            </div>
                            <div className="mt-6 flex items-center justify-center">
                                <Button variant="link" onClick={handleBack} className="flex items-center text-gray-500">
                                    <ChevronLeft className="h-4 w-4 mr-1" />
                                    Back
                                </Button>
                            </div>
                        </div>
                    )
                case 7:
                    return (
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-bold text-center mb-2">Your system recommendation is ready to view</h2>
                            <p className="text-center text-sm mb-6">
                                We'll also send the full specs straight to your inbox, and keep you posted on the latest news and deals
                                from SimpliSafe.
                            </p>
                            <div className="my-4">
                                <Image
                                    src="/Images/Steps/System_Reveal_1.jpg"
                                    alt="Package"
                                    width={100}
                                    height={100}
                                    className="mx-auto"
                                />
                            </div>
                            <div className="w-full max-w-md space-y-4 mb-4">
                                <div>
                                    <Label htmlFor="firstName" className="mb-1 block">
                                        First Name*
                                    </Label>
                                    <Input id="firstName" placeholder="Enter your first name" />
                                </div>
                                <div>
                                    <Label htmlFor="email" className="mb-1 block">
                                        Email*
                                    </Label>
                                    <Input id="email" type="email" placeholder="Enter your email" />
                                </div>
                            </div>
                            <Button className="w-full max-w-md bg-blue-500" onClick={handleNext}>
                                Next
                            </Button>
                            <p className="text-xs text-center mt-2">By clicking 'Next' you accept our Privacy Policy.</p>
                            <div className="mt-6 flex items-center justify-center">
                                <Button variant="link" onClick={handleBack} className="flex items-center text-gray-500 ">
                                    <ChevronLeft className="h-4 w-4 mr-1" />
                                    Back
                                </Button>
                            </div>
                        </div>
                    )
                case 8:
                    return (
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-bold text-center mb-2">Great! Let's see your recommended system.</h2>
                            <p className="text-center text-sm mb-6">
                                Share your mobile number if you'd like us to text you with a link to this system.
                            </p>
                            <div className="my-4">
                                <Image
                                    src="/Images/Steps/System_Reveal_1.jpg"
                                    alt="Mobile"
                                    width={100}
                                    height={100}
                                    className="mx-auto"
                                />
                            </div>
                            <div className="w-full max-w-md space-y-4 mb-4">
                                <div>
                                    <Label htmlFor="phone" className="mb-1 block">
                                        Phone Number
                                    </Label>
                                    <Input id="phone" placeholder="Enter your phone number" />
                                </div>
                            </div>
                            <Button className="w-full max-w-md mb-2 bg-blue-500" onClick={handleSubmit}>
                                Submit
                            </Button>
                            <Button className="w-full max-w-md" variant="outline" onClick={handleNext}>
                                Skip and view recommendation
                            </Button>
                            <p className="text-xs text-center mt-4 max-w-md">
                                By adding your phone number and clicking 'Text my recommendation' you agree to receive marketing phone
                                calls or text messages, and accept the details in our Privacy Policy. You can opt-out any time by
                                responding STOP. Standard message and data rates may apply.
                            </p>
                            <div className="mt-6 flex items-center justify-center">
                                <Button variant="link" onClick={handleBack} className="flex items-center text-gray-500">
                                    <ChevronLeft className="h-4 w-4 mr-1" />
                                    Back
                                </Button>
                            </div>
                        </div>
                    )
                default:
                    return null
            }
        }

        if (selectedProperty === "business") {
            switch (step) {
                case 2:
                    return (
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-bold text-center mb-6">How many locations does your business have?</h2>
                            <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-4">
                                <div className="col-span-1">
                                    <div className="border-3 border-blue-500 rounded-lg  mb-2">
                                        <Image
                                            src="/Images/Steps/BusinessLocation.jpg"
                                            alt="1-4 Locations"
                                            width={150}
                                            height={150}
                                            className="mx-auto object-contain"
                                        />
                                    </div>
                                    <Button className="w-full bg-blue-500" onClick={handleNext}>
                                        1-4 locations
                                    </Button>
                                </div>
                                <div className="col-span-1">
                                    <div className="border-3 border-blue-500 rounded-lg overflow-hidden mb-2">
                                        <Image
                                            src="/Images/Steps/Business-5locations.jpg"
                                            alt="5+ Locations"
                                            width={150}
                                            height={150}
                                            className="mx-auto object-contain"
                                        />
                                    </div>
                                    <Button className="w-full bg-blue-500" onClick={handleMultipleLocations}>
                                        5+ locations
                                    </Button>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-center">
                                <Button variant="link" onClick={handleBack} className="flex items-center text-gray-500">
                                    <ChevronLeft className="h-4 w-4 mr-1" />
                                    Back
                                </Button>
                            </div>
                        </div>
                    )
                case 3:
                    if (hasMultipleLocations) {
                        return (
                            <div className="flex flex-col items-center justify-center max-w-md mx-auto p-6 text-center">
                                <h1 className="text-2xl font-bold text-[#0a2351] mb-6 max-w-xs">
                                    Talk to our experts who specialize in multi-location businesses
                                </h1>

                                <div className="relative w-full h-48 mb-6">

                                    {/* Characters */}
                                    <Image
                                        src="/Images/Steps/Business_Site.jpg"
                                        alt="Business experts illustration"
                                        width={200}
                                        height={280}
                                        className="mx-auto"
                                    />
                                </div>

                                <button
                                    onClick={handleClick}
                                    className="w-full bg-[#0d6efd] text-white py-3 px-4 rounded-md font-medium hover:bg-[#0b5ed7] transition-colors mb-10"
                                >
                                    Visit our business site
                                </button>

                                <Button variant="link" onClick={locationBack} className="flex items-center text-gray-500">
                                    <ChevronLeft className="h-4 w-4 mr-1" />
                                    Back
                                </Button>
                            </div>
                        )
                    } else {
                        return (
                            <div className="flex flex-col items-center">
                                <h2 className="text-2xl font-bold text-center mb-6">What kind of business are you protecting?</h2>
                                <div className="w-full max-w-md space-y-3 mb-6">
                                    <Button className="w-full bg-blue-500" onClick={handleNext}>
                                        Retail store
                                    </Button>
                                    <Button className="w-full bg-blue-500" onClick={handleNext}>
                                        Restaurant
                                    </Button>
                                    <Button className="w-full bg-blue-500" onClick={handleNext}>
                                        Office
                                    </Button>
                                    <Button className="w-full bg-blue-500" onClick={handleNext}>
                                        Something else
                                    </Button>
                                </div>
                                <div className="mt-6 flex items-center justify-center">
                                    <Button variant="link" onClick={handleBack} className="flex items-center text-gray-500">
                                        <ChevronLeft className="h-4 w-4 mr-1" />
                                        Back
                                    </Button>
                                </div>
                            </div>
                        )
                    }
                case 4:
                    return (
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-bold text-center mb-2">Your system recommendation is ready to view</h2>
                            <p className="text-center text-sm mb-6">
                                We'll also send the full specs straight to your inbox, and keep you posted on the latest news and deals
                                from SimpliSafe.
                            </p>
                            <div className="my-4">
                                <Image
                                    src="/Images/Steps/System_Reveal_1.jpg"
                                    alt="Package"
                                    width={100}
                                    height={100}
                                    className="mx-auto"
                                />
                            </div>
                            <div className="w-full max-w-md space-y-4 mb-4">
                                <div>
                                    <Label htmlFor="firstName" className="mb-1 block">
                                        First Name*
                                    </Label>
                                    <Input id="firstName" placeholder="Enter your first name" />
                                </div>
                                <div>
                                    <Label htmlFor="email" className="mb-1 block">
                                        Email*
                                    </Label>
                                    <Input id="email" type="email" placeholder="Enter your email" />
                                </div>
                            </div>
                            <Button className="w-full max-w-md bg-blue-500" onClick={handleSubmit}>
                                Next
                            </Button>
                            <p className="text-xs text-center mt-2">By clicking 'Next' you accept our Privacy Policy.</p>
                            <div className="mt-6 flex items-center justify-center">
                                <Button variant="link" onClick={handleBack} className="flex items-center text-gray-500 ">
                                    <ChevronLeft className="h-4 w-4 mr-1" />
                                    Back
                                </Button>
                            </div>
                        </div>
                    )
                default:
                    return null
            }
        }

        return null
    }

    return (
        <Dialog open={modalOpen} onOpenChange={(open) => {
            if (!open) handleDialogClose();
            setModalOpen(open)
        }}>

            <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden">
                <div className="relative h-[90vh] overflow-y-auto">
                    {/* Progress bar */}
                    <div className="w-full h-2 bg-gray-200">
                        <div
                            className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Content */}
                    <div className="p-6 h-[90vh] flex justify-center items-center">{renderContent()}</div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

