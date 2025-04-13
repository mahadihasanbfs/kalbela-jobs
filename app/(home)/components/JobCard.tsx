'use client';

import Link from 'next/link';

interface JobCardProps {
    data: any;
}

const JobCard = ({ data }: JobCardProps) => {
    return (
        <div className="border border-gray-200 px-2 py-2">
            <div className="flex items-center justify-between gap-3">
                <div>
                    <Link href={`/jobs/${data?.url}`}>
                        <h3 className="text-sm font-medium text-primary">
                            {data?.company_info?.name.slice(0, 45)}
                            {data?.company_info?.name.length > 45 && '...'}
                        </h3>
                    </Link>
                    <Link href={`/jobs/${data?.url}`}>
                        <p className="text-xs mt-1 text-gray-600">
                            {data?.job_title.slice(0, 40)}
                            {data?.job_title.length > 40 && '...'}
                        </p>
                    </Link>
                </div>
                <Link href={`/jobs/${data?.url}`}>
                    <img
                        src={data?.company_info?.logo || "/placeholder.svg"}
                        alt={data?.job_title.slice(0, 45)}
                        width={90}
                        height={90}
                        onError={(e) => (e.currentTarget.src = "/fallback_img.png")}
                        className="border border-gray-300 w-[60px] h-[60px] object-scale-down rounded"
                    />
                </Link>
            </div>
        </div>
    );
};

export default JobCard;
