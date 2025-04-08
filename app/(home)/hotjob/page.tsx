'use client';
import useApiRequest from '@/app/hooks/useApiRequest';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import NotFoundVector from '@/components/NotFoundVector';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import JobSearchForm from '../search-details/components/JobSearchForm';

const HotJobPage: React.FC = () => {
    const {
        data,
        loading,
        error,
    } = useApiRequest<any>("jobs/get-featured-jobs", "GET");


    if (loading) {
        return (
            <div className='h-[70vh] flex items-center justify-center py-20'>
                <div className="flex flex-col items-center justify-center">
                    <img
                        className="h-16 w-16"
                        src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
                        alt="Loading"
                    />
                    <h4 className="text-primary_blue mt-3 font-semibold text-center">Loading Jobs</h4>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className='h-[70vh] flex items-center justify-center py-20'>
                <div className="flex flex-col items-center justify-center">
                    <img
                        src="/icons/no-job.png"
                        alt="Error"
                        className="w-40 h-40 mb-4"
                        onError={(e) => e.currentTarget.src = "/fallback_img.png"}
                    />
                    <h2 className="text-xl font-bold text-red-500">Oops! Something went wrong</h2>
                    <p className="text-gray-600 mt-2 text-center">
                        We couldn’t fetch the featured jobs at the moment. Please try again later.
                    </p>
                </div>
            </div>
        );
    }



    return (
        <MaxWidthWrapper className='pb-16'>
            <div
                style={{
                    backgroundImage: `linear-gradient(5deg, #00000098, #0000008e), url("https://images.unsplash.com/photo-1533478784933-5fdbddc8ea7c?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
                }}
                className="md:h-[360px] h-auto rounded w-full bg-cover object-cover bg-center">
                <JobSearchForm title='Hot Jobs' />
            </div>
            <br />
            <div>
                {/* Job Listing Section */}
                <div>
                    <div className="grid md:gap-4 gap-2 grid-cols-2 lg:grid-cols-3">
                        {data?.data?.slice(0, 300)?.map((job: any) => (
                            <Link
                                href={`/jobs/${job.url}`}
                                key={job._id}
                                className="group flex justify-start flex-col md:flex-row w-full items-start gap-2 overflow-hidden hover:bg-gray-50 rounded-lg border md:p-4 p-2 shadow-sm transition-all hover:border-gray-300"
                            >
                                <div className="md:block md:w-auto flex w-full justify-center">
                                    <div className="h-16 w-16 m-auto ">
                                        {job?.company_info?.logo ? (
                                            <img
                                                className="h-full w-20 rounded border-1 border-gray-300 bg-white object-contain p-2 border"
                                                src={job.company_info.logo}
                                                alt={job.company_info.name || "Company Logo"}
                                                onError={(e) => e.currentTarget.src = '/fallback_img.png'}
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

                                <div className="flex-grow gap-1 text-center md:text-start mx-auto">
                                    <h3 className="font-semibold text-sm capitalize group-hover:text-blue-500">
                                        {job.job_title}
                                    </h3>
                                    <p className="text-xs">{job.company_info?.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {!data?.data && (
                        <div className='md:h-[400px] h-[230px] flex items-center justify-center'>
                            <NotFoundVector />
                        </div>
                    )}

                </div>

                {/* Sticky Ad Section */}
                {/* <div className='sticky top-4 h-fit'>
                    <div className='flex flex-col gap-2'>
                        {addList.map((itm, i) => (
                            <Link href={'#'} key={i}>
                                <Image
                                    src={itm}
                                    alt="add"
                                    width={500}
                                    height={500}
                                    className="rounded"
                                    onError={(e) => e.currentTarget.src = '/fallback_img.png'}
                                />
                            </Link>
                        ))}
                    </div>
                </div> */}
            </div>
        </MaxWidthWrapper>
    );
};

export default HotJobPage;


