import NotFoundVector from '@/components/NotFoundVector';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface HotJobsProps {
    loading: boolean;
    data: {
        data: any;
    };
}

const HotJobs: React.FC<HotJobsProps> = ({ loading, data }) => {
    const addList = [
        '/assets/add1.jpg',
        '/assets/add2.jpg',
        '/assets/add3.jpg',
    ]
    return (
        <div className='grid md:grid-cols-4 gap-4'>
            <div className='md:col-span-3'>
                <div className="mb-4 h-12 flex bg-gray-100 px-4 py-1 items-center justify-between font-bold md:text-[1.4rem] text-lg">
                    <div >🔥 Hot Jobs</div>
                    {/* {data?.data.length > 9 && <Button className="!py-0 !text-gray-800 !pr-0 !bg-transparent">More {">>"}</Button>} */}
                </div>

                <div className="grid md:gap-4 gap-2 grid-cols-2 lg:grid-cols-3 ">
                    {loading
                        ? Array.from({ length: 16 }).map((_, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-start rounded-sm border p-4 md:flex-row"
                            >
                                <Skeleton className="mr-3 h-14 w-14 rounded-full" />
                                <div className="flex-grow">
                                    <Skeleton className="mb-2 h-5 w-24" />
                                    <Skeleton className="h-4 w-32" />
                                </div>
                            </div>
                        ))
                        : data?.data?.slice(0, 15)?.map((job: any) => (
                            <Link
                                href={`/jobs/${job.url}`}
                                key={job._id}
                                className="group flex justify-start flex-col md:flex-row w-full  items-start gap-2  overflow-hidden hover:bg-gray-50 rounded-lg border md:p-4 p-2 shadow-sm transition-all  hover:border-gray-300"
                            >
                                <div className="md:block md:w-auto flex w-full justify-center">
                                    <div className="h-16 w-16 m-auto ">
                                        {job?.company_info?.logo ? (
                                            <img
                                                className="h-full w-20 rounded 
                                                                               border-1 border-gray-300 bg-white object-contain p-2 border"
                                                src={job.company_info.logo}
                                                alt={job.company_info.name || "Company Logo"}
                                            />
                                        ) : (
                                            <div className="flex justify-center items-center h-full rounded border-2 border-gray-300 bg-white object-contain p-2 shadow-md">
                                                <span className="text-xl font-semibold text-gray-600">
                                                    {job?.company_info?.name?.charAt(0).toUpperCase() || "C"}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex-grow  gap-1 text-center md:text-start mx-auto">
                                    <h3 className="font-semibold text-sm capitalize group-hover:text-blue-500">

                                        {job.job_title}
                                    </h3>
                                    <p className="text-xs"> {job.company_info?.name}</p>
                                </div>


                            </Link>
                        ))}
                </div>

                {
                    !data?.data && <div className='md:h-[400px] h-[230px] flex items-center justify-center '>
                        <NotFoundVector />
                    </div>
                }

            </div>

            <div className='flex flex-col gap-2'>
                {
                    addList?.map((itm, i) => <Link
                        href={'#'}
                        key={i}
                    >
                        <Image
                            src={itm}
                            alt={'add'}
                            width={500}
                            height={500}
                            className="rounded"
                        />
                    </Link>)
                }
            </div>
        </div>
    );
};

export default HotJobs;