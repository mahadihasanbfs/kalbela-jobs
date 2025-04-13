'use client';
import useApiRequest from "@/app/hooks/useApiRequest"
import Image from "next/image"
import Link from "next/link";
import JobCard from "../../components/JobCard";

export function UnskilledFeaturedJob() {
    const { data, loading, error } = useApiRequest<any>(
        "jobs/get-featured-jobs",
        "GET"
    )


    return (
        <>
            <h2 className="bg-primary_gray px-2 py-1.5 text-sm font-semibold">Featured Job
            </h2>
            {
                loading ?
                    <div className='h-[200px] w-full border bg-gray-50 rounded-lg flex flex-col gap-1 items-center justify-center py-20'>
                        <span className="loader"></span>
                        <p className="mt-12">Loading...</p>
                    </div>
                    :
                    <div className="grid grid-cols-1 sm:grid-cols-3 mt-3 gap-4">
                        {data?.data?.jobs?.map((company: any, index: number) => (
                            <JobCard key={index} data={company} />
                        ))}
                    </div>
            }
            {
                error && <div className="bg-red-100 border text-center justify-center flex items-center border-red-400 text-red-700 px-4 py-6 rounded mb-4">
                    Soothing went wrong!!!
                </div>
            }
        </>
    )
}
