import Link from 'next/link';
import React from 'react';

const JobCard2 = ({ job }: any) => {

    return (
        <Link
            href={`/jobs/${job.url}`}
            key={job._id}
            className="group relative flex bg-white justify-start flex-col md:flex-row w-full items-start gap-2 overflow-hidden hover:bg-gray-50 rounded border md:p-3 p-2 shadow-sm transition-all hover:border-gray-300"
        >
            <div className="md:block md:w-auto flex w-full justify-center">
                <div className="h-16 w-16 m-auto bg-white">
                    {job?.company_info?.logo ? (
                        <img
                            className="h-full w-20 rounded border border-gray-300 bg-white object-contain p-2"
                            src={job.company_info.logo}
                            alt={job.company_info.name || 'Company Logo'}
                            onError={(e) => (e.currentTarget.src = '/fallback_img.png')}
                        />
                    ) : (
                        <div className="flex justify-center items-center h-full rounded border-2 border-gray-300 bg-white p-2 shadow-md">
                            <span className="text-xl font-semibold text-gray-600">
                                {job?.company_info?.name?.charAt(0).toUpperCase() || 'C'}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex-grow gap-1 text-center md:text-start mx-auto">
                <h3 className="font-semibold text-sm capitalize group-hover:text-blue-500">
                    <h3 className="font-semibold text-sm capitalize group-hover:text-blue-500">
                        {job?.job_title?.length > 65
                            ? job?.job_title.slice(0, 65) + "..."
                            : job?.job_title}
                    </h3>

                </h3>
                <p className="text-xs">{job.company_info?.name}</p>
            </div>
        </Link>
    );
};

export default JobCard2;