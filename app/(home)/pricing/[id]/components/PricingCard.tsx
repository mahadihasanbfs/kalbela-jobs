"use client";

import { useState } from "react";

const data = [
    {
        id: 0,
        duration: "6 months",
        options: [
            { id: "RB8", resume: 3000, bdt: 7500 },
            { id: "RB9", resume: 5000, bdt: 12500 },
            { id: "RB10", resume: 7500, bdt: 18000 },
            { id: "RB11", resume: 10000, bdt: 23000 },
        ],
        vat: '5%'
    },
    {
        id: 1,
        duration: "6 months",
        options: [
            { id: "RB8", resume: 3000, bdt: 7500 },
            { id: "RB9", resume: 5000, bdt: 12500 },
            { id: "RB10", resume: 7500, bdt: 18000 },
            { id: "RB11", resume: 10000, bdt: 23000 },
        ],
        vat: '5%'
    },
    {
        id: 2,
        duration: "6 months",
        options: [
            { id: "RB8", resume: 3000, bdt: 7500 },
            { id: "RB9", resume: 5000, bdt: 12500 },
            { id: "RB10", resume: 7500, bdt: 18000 },
            { id: "RB11", resume: 10000, bdt: 23000 },
        ],
        vat: '5%'
    },
    {
        id: 3,
        duration: "12 months",
        options: [
            { id: "RB8", resume: 3000, bdt: 7500 },
            { id: "RB9", resume: 5000, bdt: 12500 },
            { id: "RB10", resume: 7500, bdt: 18000 },
            { id: "RB11", resume: 10000, bdt: 23000 },
        ],
        vat: '5%'
    },
];

export default function PricingCardsGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-6 md:px-4">
            {data.map((item) => (
                <PricingCard key={item.id} cardData={item} />
            ))}
        </div>
    );
}

function PricingCard({ cardData }: { cardData: any }) {
    const [selectedPlan, setSelectedPlan] = useState("RB8");

    const handleSubmitPlan = (data: any) => {
        // 
    }

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden duration-300 md:hover:scale-[1.1]">
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-primary_blue to-primary py-8 px-4 text-center text-white rounded-t-lg relative">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-primary_blue to-primary rounded-t-full"
                    style={{ height: "200%", top: "-100%" }}
                ></div>
                <div className="relative">
                    <div className="text-5xl font-bold">{cardData.duration.split(" ")[0]}</div>
                    <div className="text-xl">{cardData.duration.split(" ")[1]}</div>
                </div>
            </div>

            {/* Table header */}
            <div className="grid grid-cols-3 px-4 py-3 border-b text-gray-700">
                <div className="font-medium">ID</div>
                <div className="font-medium text-center">Resume</div>
                <div className="font-medium text-center">BDT</div>
            </div>

            {/* Plan options */}
            <div className="px-4">
                {cardData.options.map((plan: any) => (
                    <label
                        htmlFor={`${cardData.id}-${plan.id}`}
                        key={plan.id}
                        className="grid grid-cols-3 py-3 border-b hover:bg-gray-50 duration-200 cursor-pointer items-center">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id={`${cardData.id}-${plan.id}`}
                                name={`plan-${cardData.id}`}
                                value={plan.id}
                                checked={selectedPlan === plan.id}
                                onChange={() => setSelectedPlan(plan.id)}
                                className="w-4 h-4 accent-primary_blue  text-blue-400 focus:ring-red-600 border-gray-300"
                            />

                            <span className="ml-2 text-gray-700">
                                {plan.id}
                            </span>
                        </div>
                        <div className="text-center text-gray-700">{plan.resume}</div>
                        <div className="text-center text-gray-700">{plan.bdt}</div>
                    </label>
                ))}
            </div>

            {/* VAT note */}
            <div className="px-4 py-3 text-xs text-gray-500 text-center">*VAT {cardData.vat} will be added</div>

            {/* Buy button */}
            <div className="px-4 pb-6 pt-2">
                <button
                    onClick={() => handleSubmitPlan({
                        id: cardData?.id,
                        duration: cardData?.duration,
                        vat: cardData?.vat,
                    })}
                    className="w-full py-3 bg-gradient-to-r from-primary_blue to-primary  text-white font-medium rounded-lg hover:from-primary hover:to-black transition-colors">
                    Buy Now
                </button>
            </div>
        </div>
    );
}
