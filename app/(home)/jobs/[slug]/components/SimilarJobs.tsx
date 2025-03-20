import SecondaryBtn from "@/components/SecondaryBtn";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import Link from "next/link";
import { link } from "fs";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import { ArrowRight } from "lucide-react";
import ApplyModal from "@/components/ApplyModal";


const SimilarJobslG = ({ user, jobs, save_jobs }: { user: any, jobs: any, save_jobs: any }) => {
    return (
        <div className="hidden lg:block mt-3 mb-20 border-t">
            <CardTitle className="my-5 text-2xl font-bold">
                Similar Jobs
            </CardTitle>

            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                pagination={{
                    dynamicBullets: true,
                    clickable: true, // Allows clicking on pagination bullets
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {Array.isArray(jobs) && jobs?.map((jobPost: any) => (
                    <SwiperSlide className="mb-10 rounded-lg border shadow hover:shadow-lg duration-300" key={jobPost?._id}>
                        <Card className="p-4 !shadow-none !border-none transition-shadow hover:shadow-md">
                            <CardContent className="p-0">
                                <h3 className="mb-2 text-lg font-semibold">
                                    {jobPost?.job_title}
                                </h3>
                                <div className="mb-2 flex flex-wrap gap-2 overflow-x-auto scrollbar-hide whitespace-nowrap">
                                    {jobPost?.skills?.slice(0, 4)?.map((skill: string, index: number) => (
                                        <Badge key={index} variant="outline" className="text-xs text-white bg-primary whitespace-nowrap">
                                            {skill}
                                        </Badge>
                                    ))}
                                    <Badge variant="outline" className="text-xs bg-gray-100">
                                        {jobPost?.job_type}
                                    </Badge>
                                </div>
                                <p className="mb-2 text-sm text-muted-foreground">
                                    Salary: {jobPost?.salary_negotiable || jobPost?.negotiable_note
                                        ? "Negotiable"
                                        : `${jobPost?.salary_range?.min}${jobPost?.salary_range?.max ? ` - ${jobPost?.salary_range.max}` : ""} ${jobPost?.salary_range?.currency || ""}`} | Deadline:{" "}
                                    {formatDate(jobPost?.expiry_date || new Date())}
                                </p>
                                <p className="mb-4 text-sm" dangerouslySetInnerHTML={{ __html: jobPost?.description }}></p>


                                <div className="flex items-center gap-4 pt-4">
                                    <div className="w-full">
                                        <ApplyModal
                                            slug={jobPost?.url}
                                            company={jobPost?.company_info?.company_id}
                                            user={user}
                                        />
                                    </div>
                                    <SecondaryBtn
                                        className="px-10 w-5/6  py-2"
                                        onClick={() => save_jobs(jobPost?._id)}
                                    >
                                        Save
                                    </SecondaryBtn>
                                </div>

                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* 
            {
                jobs?.length > 4 &&
                <Link className="mt-8 flex items-center gap-2 !bg-primary text-white rounded py-2 justify-center w-[110px] text-sm m-auto" href={`#`}>See All <ArrowRight strokeWidth={1} /></Link>
            } */}
        </div>
    );
};

const SimilarJobsSM = ({ user, jobs, save_jobs }: { user: any, jobs: any, save_jobs: any }) => {
    return (
        <div className="md:my-12 border-t pt-3  my-3 md:hidden block">
            <CardTitle className="mb-5 text-2xl font-bold">
                Similar Jobs
            </CardTitle>
            <div className="grid gap-4 grid-cols-1 ">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper w-[320px]"
                >
                    {Array.isArray(jobs) && jobs?.map((jobPost: any) => (
                        <SwiperSlide className="mb-6 rounded-lg  shadow hover:shadow-lg duration-300" key={jobPost?._id}>
                            <Card
                                className="p-4 transition-shadow hover:shadow-md"
                            >

                                <CardContent className="p-0">
                                    <h3 className="mb-2 text-lg font-semibold">
                                        {jobPost?.job_title}
                                    </h3>
                                    <div className="mb-2 flex  gap-2 overflow-x-auto scrollbar-hide whitespace-nowrap ">
                                        {jobPost?.skills?.map((skill: string, index: number) => (
                                            <Badge key={index} variant="outline" className="text-xs whitespace-nowrap">
                                                {skill}
                                            </Badge>
                                        ))}
                                        <Badge variant="outline" className="text-xs bg-gray-100">
                                            {jobPost?.job_type}
                                        </Badge>
                                    </div>
                                    <p className="mb-2 text-sm text-muted-foreground">
                                        Salary:  {jobPost?.salary_negotiable || jobPost?.negotiable_note
                                            ? "Negotiable"
                                            : `${jobPost?.salary_range?.min}${jobPost?.salary_range?.max ? ` - ${jobPost?.salary_range.max}` : ""} ${jobPost?.salary_range?.currency || ""}`} | Deadline:{" "}
                                        {formatDate(jobPost?.expiry_date || new Date())}
                                    </p>
                                    <p className="mb-4 text-sm" dangerouslySetInnerHTML={{ __html: jobPost?.description }}></p>

                                    <div className="flex items-center gap-4 pt-4">
                                        <div className="w-full">
                                            <ApplyModal
                                                slug={jobPost?.url}
                                                company={jobPost?.company_info?.company_id}
                                                user={user}
                                            />
                                        </div>
                                        <SecondaryBtn
                                            className="px-10 w-5/6  py-2"
                                            onClick={() => save_jobs(jobPost?._id)}
                                        >
                                            Save
                                        </SecondaryBtn>
                                    </div>

                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* is array */}

            </div>
        </div>
    )
}




export { SimilarJobslG, SimilarJobsSM };