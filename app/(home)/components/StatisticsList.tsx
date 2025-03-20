"use client";
import React, { useState, useEffect } from "react";
import Marquee from "@/components/Marquee";
import Image from "next/image";

const StatisticsList: React.FC = () => {
    const statistics = [
        {
            title: "LIVE JOBS",
            value: 60,
            link: "/search-details",
            icon: "/icons/live.png",
        },
        {
            title: "VACANCIES",
            value: 200,
            link: "/search-details",
            icon: "/icons/vacancy.png",
        },
        {
            title: "COMPANIES",
            value: 99,
            link: "/",
            icon: "/icons/company.png",
        },
        {
            title: "FRESHERS JOBS",
            value: 50,
            link: "/search-details?job_type=Internship",
            icon: "/icons/frashers.png",
        },
        {
            title: "GOVT JOBS",
            value: 30,
            link: "/govt-jobs",
            icon: "/icons/gov.png",
        },
        {
            title: "TOP INDUSTRIES",
            value: 20,
            link: "/",
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
                                    <div key={index} className="flex w-[160px] !h-full bg-transparent gap-2 items-center">
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
                        </div>

                        <div className="w-full md:flex hidden grid-cols-1 bg-transparent h-full px-6 justify-center items-center gap-2">
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
