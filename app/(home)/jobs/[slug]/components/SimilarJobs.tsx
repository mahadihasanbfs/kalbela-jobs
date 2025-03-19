import SecondaryBtn from "@/components/SecondaryBtn";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';

const SimilarJobslG = ({ jobs, save_jobs }: { jobs: any, save_jobs: any }) => {
    return (
        <div className="hidden lg:block">
            <CardTitle className="my-5 text-2xl font-bold">
                Similar Jobs
            </CardTitle>


            <Swiper
                // ref={swiperRef}
                spaceBetween={10}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="grid grid-cols-2 gap-4 pb-4"
            >


                {Array.isArray(jobs) && jobs?.map((jobPost: any) => (
                    <SwiperSlide key={jobPost?._id} className="pb-2 px-2">
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

                                {/* <SecondaryBtn
                                    onClick={() => save_jobs(jobPost?._id)}
                                    className="w-full !bg-primary hover:!bg-primary/80 !text-white rounded py-2"
                                >
                                    Save Job
                                </SecondaryBtn> */}
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

const SimilarJobsSM = ({ jobs, save_jobs }: { jobs: any, save_jobs: any }) => {
    return (
        <div className="my-12 md:hidden block">
            <CardTitle className="mb-5 text-2xl font-bold">
                Similar Jobs
            </CardTitle>
            <div className="grid gap-4 grid-cols-1 ">
                {/* is array */}
                {Array.isArray(jobs) && jobs?.map((jobPost: any) => (
                    <Card
                        key={jobPost?._id}
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

                            <SecondaryBtn
                                onClick={() => save_jobs(jobPost?._id)}
                                className="w-full"
                            >
                                Save Job
                            </SecondaryBtn>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}




export { SimilarJobslG, SimilarJobsSM };