'use client';
import useApiRequest from "@/app/hooks/useApiRequest"
import Image from "next/image"
import Link from "next/link";

export function WorldWideJobList() {
    const { data, loading, error } = useApiRequest<any>(
        "jobs/get-featured-jobs",
        "GET"
    )


    return (
        <>
            <h2 className="bg-primary_gray px-2 py-1.5 text-sm font-semibold">Worldwide Jobs from Kalbela Jobs Foreign Employers</h2>
            {
                loading ?
                    <div className="flex items-center pt-[10%] text-center justify-center">
                        Loading Jobs...
                    </div>
                    :
                    <div className="grid grid-cols-1 sm:grid-cols-3 mt-3 gap-4">
                        {data?.data?.jobs?.map((company: any, index: number) => (
                            <div key={index} className={`border border-gray-200 px-2 py-2 `}>
                                <div className="flex items-center justify-between gap-3">
                                    <div>
                                        <Link href={`/jobs/${company?.url}`}>
                                            <h3 className="text-sm font-medium text-primary">{company?.company_info?.name.slice(0, 45)} {company?.company_info?.name.length > 45 && '...'}</h3>
                                        </Link>
                                        <Link href={`/jobs/${company?.url}`}>
                                            <p className="text-xs mt- text-gray-600">{company?.job_title.slice(0, 40)} {company?.job_title.length > 40 && '...'} </p>
                                        </Link>
                                    </div>
                                    <Link href={`/jobs/${company?.url}`}>
                                        <img
                                            src={company?.company_info?.logo || "/placeholder.svg"}
                                            alt={company?.job_title.slice(0, 45)}
                                            width={90}
                                            height={90}
                                            onError={(e) => (e.currentTarget.src = "/fallback_img.png")}
                                            className="border border-gray-300 w-[60px] h-[60px] object-scale-down rounded"
                                        />
                                    </Link>
                                </div>
                            </div>
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
