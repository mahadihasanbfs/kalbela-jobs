import NotFoundVector from '@/components/NotFoundVector';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import React from 'react';


interface TendersProps {
    data: { data: any[] };
    loading: boolean;
}

const Tenders: React.FC<TendersProps> = ({ data, loading }) => {
    return (
        <div>
            <div>
                <div className="mb-4 h-12 flex bg-gray-100 px-4 py-1 items-center justify-between font-bold md:text-[1.4rem] text-lg">
                    <div >🔥 Tenders</div>
                    {/* {data?.data.length > 9 && <Button className="!py-0 !text-gray-800 !pr-0 !bg-transparent">More {">>"}</Button>} */}
                </div>

                <div className="grid md:gap-4 gap-2 grid-cols-2 lg:grid-cols-4 ">
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
                        : data?.data?.slice(0, 8)?.map((job: any) => (
                            <Link
                                href={`/jobs/${job.url}`}
                                key={job._id}
                                className="group flex justify-start flex-col md:flex-row w-full  items-start gap-2  overflow-hidden hover:bg-gray-50 rounded-lg border md:p-4 p-2 shadow-sm transition-all  hover:border-gray-300"
                            >
                                <div className="md:block md:w-auto flex w-full justify-center">
                                    <div className="h-16 w-16 m-auto ">
                                        {job?.company_info?.logo ? (
                                            <img
                                                className="h-full w-20 rounded border border-gray-300 bg-white object-contain p-2 "
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
        </div>
    );
};

export default Tenders;