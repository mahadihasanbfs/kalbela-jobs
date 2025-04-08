"use client";
import React, { useState, useEffect } from "react";
import Marquee from "@/components/Marquee";
import Image from "next/image";

const StatisticsList: React.FC = () => {
    const statistics = [
        {
            title: "Posted Jobs",
            value: 860,
            link: "#",
            icon: "/icons/live.png",
        },
        {
            title: "Employer",
            value: 205,
            link: "#",
            icon: "/icons/vacancy.png",
        },
        {
            title: "Training",
            value: 20,
            link: "#",
            icon: "/icons/company.png",
        },
        {
            title: "Job Placements",
            value: 380,
            link: "#",
            icon: "/icons/frashers.png",
        },
        {
            title: "Entrepreneur Proposals",
            value: 40,
            link: "#",
            icon: "/icons/gov.png",
        },
        {
            title: "Tenders",
            value: 60,
            link: "#",
            icon: "/icons/industry.png",
        },
    ];

    const [counts, setCounts] = useState(statistics.map(() => 0));

    useEffect(() => {
        statistics.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const stepTime = Math.max(Math.floor(duration / end), 10);

            const timer = setInterval(() => {
                start += 1;
                setCounts(prev => {
                    const newCounts = [...prev];
                    newCounts[index] = start;
                    return newCounts;
                });

                if (start >= end) clearInterval(timer);
            }, stepTime);
        });
    }, []);

    return (
        <div className="flex items-center justify-center w-full h-full bg-transparent overflow-hidden">
            <div className="w-full flex items-center gap-6 bg-transparent h-full">
                {statistics.length > 5 ? (
                    <div>
                        <div className="md:hidden bock">
                            <Marquee speed={30} pauseOnHover className="[--duration:30s]">
                                {statistics.map((itm, index) => (
                                    <div key={index} className="flex justify-center  min-w-[110px] !h-full bg-transparent gap-2 items-center">
                                        {/* <div className="md:w-14 w-8 md:h-14 h-8 rounded-xl flex items-center justify-center">
                                            <Image
                                                src={itm.icon}
                                                className="w-full h-full"
                                                alt={itm.title}
                                                width={100}
                                                height={100}
                                            />
                                        </div> */}
                                        <div>
                                            <div className="md:space-y-1 text-center w-full">
                                                {/* <h1 className="font-semibold md:text-xl text-black">{counts[index]}+</h1> */}
                                                <h1 className="font-semibold md:text-xl text-black">{counts[index]}+</h1>
                                                <p className="text-gray-800 md:text-sm text-xs">{itm.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Marquee>
                        </div>

                        <div className="w-full md:flex hidden grid-cols-1 bg-transparent h-full px-6 justify-center items-center gap-2">
                            {statistics.map((itm, index) => (
                                <div key={index} className="flex w-[210px]  justify-center !h-full bg-transparent gap-2 items-center">
                                    {/* <div className="md:w-14 w-8 md:h-14 h-8 rounded-xl flex items-center justify-center">
                                        <Image
                                            src={itm.icon}
                                            className="w-full h-full"
                                            alt={itm.title}
                                            width={100}
                                            height={100}
                                        />
                                    </div> */}
                                    <div>
                                        <div className="md:space-y-1 text-center w-full">
                                            <h1 className="font-semibold md:text-xl text-black">{counts[index]}+</h1>
                                            <p className="text-gray-800 md:text-sm text-xs">{itm.title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <Marquee speed={20} pauseOnHover className="[--duration:30s]">
                        {statistics.map((itm, index) => (
                            <div key={index} className="flex w-[210px] !h-full bg-transparent gap-2 items-center">
                                <div className="md:w-14 w-8 md:h-14 h-8 rounded-xl flex items-center justify-center">
                                    <Image
                                        src={itm.icon}
                                        className="w-full h-full"
                                        alt={itm.title}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div>
                                    <div className="md:space-y-2 w-full">
                                        <h1 className="font-semibold md:text-xl text-white">{counts[index]}+</h1>
                                        <p className="text-gray-100 md:text-sm text-xs">{itm.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                )}
            </div>
        </div>
    );
};

export default StatisticsList;