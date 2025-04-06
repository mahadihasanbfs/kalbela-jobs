"use client";
import React, { useState, useEffect } from "react";
import Marquee from "@/components/Marquee";
import Image from "next/image";

const Sponsors: React.FC = () => {
  const brands = [
    {
      title: "LIVE JOBS",
      value: 60,
      link: "/search-details",
      icon: "/brands/brand1.png",
    },
    {
      title: "VACANCIES",
      value: 200,
      link: "/search-details",
      icon: "/brands/brand2.png",
    },
    {
      title: "COMPANIES",
      value: 99,
      link: "/",
      icon: "/brands/brand3.png",
    },
    {
      title: "FRESHERS JOBS",
      value: 50,
      link: "/search-details?job_type=Internship",
      icon: "/brands/brand4.png",
    },
    {
      title: "GOVT JOBS",
      value: 30,
      link: "/govt-jobs",
      icon: "/brands/brand5.png",
    },
    {
      title: "TOP INDUSTRIES",
      value: 20,
      link: "/",
      icon: "/brands/brand6.png",
    },
    {
      title: "brand 6",
      value: 20,
      link: "/",
      icon: "/brands/brand7.png",
    },
  ];

  const [counts, setCounts] = useState(brands?.map(() => 0));

  useEffect(() => {
    brands?.forEach((stat, index) => {
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
        <Marquee speed={20} pauseOnHover className="[--duration:30s]">
          {brands?.map((itm, index) => (
            <div key={index} className="md:w-[130px] w-[80px] px-2">
              <Image
                src={itm.icon}
                alt={itm.title}
                width={80}
                height={80}
                className="md:w-20 md:h-20 w-16 h-16 object-contain mx-auto"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Sponsors;
