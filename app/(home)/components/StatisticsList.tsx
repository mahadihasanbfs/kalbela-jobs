import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import autoplay styles

import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module
import StatisticsChartCard from "./StatisticsChartCard";
import { Activity, Award, Briefcase, Building, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

const StatisticsList: React.FC = () => {
    const statistics = [
        { title: "LIVE JOBS", value: "60+", icon: Activity, link: "/search-details" },
        { title: "VACANCIES", value: "200+", icon: Briefcase, link: "/search-details" },
        { title: "COMPANIES", value: "99+", icon: Building, link: "/" },
        { title: "FRESHERS JOBS", value: "50+", icon: Users, link: "/search-details?job_type=Internship" },
        { title: "GOVT JOBS", value: "30+", icon: TrendingUp, link: "/govt-jobs" },
        { title: "TOP INDUSTRIES", value: "20+", icon: Award, link: "/" },

        { title: "LIVE JOBS", value: "60+", icon: Activity, link: "/search-details" },
        { title: "VACANCIES", value: "200+", icon: Briefcase, link: "/search-details" },
        { title: "COMPANIES", value: "99+", icon: Building, link: "/" },
        { title: "FRESHERS JOBS", value: "50+", icon: Users, link: "/search-details?job_type=Internship" },
        { title: "GOVT JOBS", value: "30+", icon: TrendingUp, link: "/govt-jobs" },
        { title: "TOP INDUSTRIES", value: "20+", icon: Award, link: "/" },
    ]

    return (
        <div className="flex justify-center ">
            <div className=" lg:max-w-[720px] md:max-w-[720px] max-w-[320px] overflow-hidden m-auto ">
                {statistics &&
                    <Swiper
                        navigation={false}
                        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay every 3s
                        modules={[Navigation, Autoplay]}
                        className="mySwiper"
                        breakpoints={{
                            320: { slidesPerView: 2, spaceBetween: 2 }, // Small devices (Mobile)
                            768: { slidesPerView: 4, spaceBetween: 2 }, // Medium devices (Tablet)
                            1024: { slidesPerView: 4, spaceBetween: 2 }, // Large devices (Desktop)
                        }}>

                        {statistics.map((stat) => (<SwiperSlide key={stat?.title} className="!px-2">
                            <Link href={stat.link} className="flex items-center">
                                <div className="mr-3 rounded-full bg-primary z-[35] p-2 lg:p-3">
                                    <stat.icon className="h-4 w-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-primary dark:text-slate-200">{stat.title}</p>
                                    <p className="text-sm font-bold text-gray-400 dark:text-slate-300">{stat.value}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                }

                {/* <Swiper
                    navigation={false}
                    // autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay every 3s
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 2 }, // Small devices (Mobile)
                        768: { slidesPerView: 1, spaceBetween: 2 }, // Medium devices (Tablet)
                        1024: { slidesPerView: 3, spaceBetween: 2 }, // Large devices (Desktop)
                    }}
                >
                    <SwiperSlide className="!px-2">
                        <StatisticsChartCard />
                    </SwiperSlide>
                    <SwiperSlide className="!px-2">
                        <StatisticsChartCard />
                    </SwiperSlide>
                    <SwiperSlide className="!px-2">
                        <StatisticsChartCard />
                    </SwiperSlide>
                    <SwiperSlide className="!px-2">
                        <StatisticsChartCard />
                    </SwiperSlide>
                    <SwiperSlide className="!px-2">
                        <StatisticsChartCard />
                    </SwiperSlide>
                </Swiper> */}
            </div>
        </div>
    );
};

export default StatisticsList;








// const statistics = [
//     {
//         title: "LIVE JOBS",
//         value: 60,
//         link: "/search-details",
//         icon: "/icons/live.png",
//     },
//     {
//         title: "VACANCIES",
//         value: 200,
//         link: "/search-details",
//         icon: "/icons/vacancy.png",
//     },
//     {
//         title: "COMPANIES",
//         value: 99,
//         link: "/",
//         icon: "/icons/company.png",
//     },
//     {
//         title: "FRESHERS JOBS",
//         value: 50,
//         link: "/search-details?job_type=Internship",
//         icon: "/icons/frashers.png",
//     },
//     {
//         title: "GOVT JOBS",
//         value: 30,
//         link: "/govt-jobs",
//         icon: "/icons/gov.png",
//     },
//     {
//         title: "TOP INDUSTRIES",
//         value: 20,
//         link: "/",
//         icon: "/icons/industry.png",
//     },
// ];

// const [counts, setCounts] = useState(statistics.map(() => 0));

// useEffect(() => {
//     statistics.forEach((stat, index) => {
//         let start = 0;
//         const end = stat.value;
//         const duration = 2000;
//         const stepTime = Math.max(Math.floor(duration / end), 10);

//         const timer = setInterval(() => {
//             start += 1;
//             setCounts((prev) => {
//                 const newCounts = [...prev];
//                 newCounts[index] = start;
//                 return newCounts;
//             });

//             if (start >= end) clearInterval(timer);
//         }, stepTime);
//     });
// }, []);

// <div className="flex items-center justify-between w-full h-full bg-transparent overflow-hidden">
//     <div className="w-full flex items-center justify-center gap-6 bg-transparent h-full">
//         {statistics.length > 5 ? (
//             <div>
//                 <div className="md:hidden bock ">
//                     <Marquee speed={30} pauseOnHover className="[--duration:30s]">
//                         {statistics.map((itm, index) => (
//                             <div key={index} className="flex w-[160px] !h-full bg-transparent gap-2 items-center">
//                                 <div className="md:w-14 w-8 md:h-14 h-8 rounded-xl flex items-center justify-center">
//                                     <Image
//                                         src={itm.icon}
//                                         className="w-full h-full"
//                                         alt={itm.title}
//                                         width={100}
//                                         height={100}
//                                     />
//                                 </div>
//                                 <div>
//                                     <div className="md:space-y-2 w-full">
//                                         <h1 className="font-semibold md:text-xl text-white">{counts[index]}+</h1>
//                                         <p className="text-gray-100 md:text-sm text-xs">{itm.title}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </Marquee>
//                 </div>

//                 <div className="md:flex hidden items-center ">
//                     {statistics.map((itm, index) => (
//                         <div key={index} className="flex text-center justify-center w-[210px] !h-full bg-transparent gap-2 items-center">
//                             <div>
//                                 <div className="md:space-y-2 w-full">
//                                     <h1 className="font-semibold md:text-xl text-white">{counts[index]}+</h1>
//                                     <p className="text-gray-100 md:text-sm text-xs">{itm.title}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         ) : (
//             <Marquee speed={20} pauseOnHover className="[--duration:30s]">
//                 {statistics.map((itm, index) => (
//                     <div key={index} className="flex w-[210px] !h-full bg-transparent gap-2 items-center">
//                         <div className="md:w-14 w-8 md:h-14 h-8 rounded-xl flex items-center justify-center">
//                             <Image
//                                 src={itm.icon}
//                                 className="w-full h-full"
//                                 alt={itm.title}
//                                 width={100}
//                                 height={100}
//                             />
//                         </div>
//                         <div>
//                             <div className="md:space-y-2 w-full">
//                                 <h1 className="font-semibold md:text-xl text-white">{counts[index]}+</h1>
//                                 <p className="text-gray-100 md:text-sm text-xs">{itm.title}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </Marquee>
//         )}
//     </div>
// </div>