import NotFoundVector from '@/components/NotFoundVector';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import React from 'react';
import JobTitleBar from './JobTitleBar';

interface SkilledJobsProps {
  data: { jobs: any };
  loading: boolean;
  error: any;
}

const SkilledJobs: React.FC<SkilledJobsProps> = ({ data, loading, error }) => {
  const jobs = data?.jobs || [];
  <div>
    <div>
      <JobTitleBar title="🔥 Skilled Jobs" viewBtn={false} />

      <div className="grid  md:gap-4 gap-2 grid-cols-2 lg:grid-cols-4">
        {loading
          ? new Array(8).fill('.').map((_, index) => (
            <div key={index} className="flex flex-col items-start rounded-sm border p-4 md:flex-row">
              <Skeleton className="mr-3 h-14 w-14 rounded-full" />
              <div className="flex-grow">
                <Skeleton className="mb-2 h-5 w-24" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
          ))
          : jobs.length > 0
            ? jobs.slice(0, 8)?.map((job: any) => (
              <Link
                href={`/jobs/${job.url}`}
                key={job._id}
                className="group flex justify-start flex-col md:flex-row w-full items-start gap-2 overflow-hidden hover:bg-gray-50 rounded-lg border md:p-4 p-2 shadow-sm transition-all hover:border-gray-300"
              >
                <div className="md:block md:w-auto flex w-full justify-center">
                  <div className="h-16 w-16 m-auto">
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
                    {job.job_title}
                  </h3>
                  <p className="text-xs">{job.company_info?.name}</p>
                </div>
              </Link>
            ))
            : null}

        {/* Show error or no data message when loading is finished */}
      </div>
      {!loading && (error || jobs.length === 0) && (
        <div className="md:h-[400px] border m-auto w-full h-[230px] flex items-center justify-center">
          <NotFoundVector title="Internship Jobs Not Available" />
        </div>
      )}
    </div>
  </div>
  return (
    <div>
      <div>
        <JobTitleBar title="🔥 Internship" viewBtn={false} />

        <div className="grid  md:gap-4 gap-2 grid-cols-2 lg:grid-cols-4">
          {loading
            ? new Array(8).fill('.').map((_, index) => (
              <div key={index} className="flex flex-col items-start rounded-sm border p-4 md:flex-row">
                <Skeleton className="mr-3 h-14 w-14 rounded-full" />
                <div className="flex-grow">
                  <Skeleton className="mb-2 h-5 w-24" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            ))
            : jobs.length > 0
              ? jobs.slice(0, 8)?.map((job: any) => (
                <Link
                  href={`/jobs/${job.url}`}
                  key={job._id}
                  className="group flex justify-start flex-col md:flex-row w-full items-start gap-2 overflow-hidden hover:bg-gray-50 rounded-lg border md:p-4 p-2 shadow-sm transition-all hover:border-gray-300"
                >
                  <div className="md:block md:w-auto flex w-full justify-center">
                    <div className="h-16 w-16 m-auto">
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
                      {job.job_title}
                    </h3>
                    <p className="text-xs">{job.company_info?.name}</p>
                  </div>
                </Link>
              ))
              : null}

          {/* Show error or no data message when loading is finished */}
        </div>
        {!loading && (error || jobs.length === 0) && (
          <div className="md:h-[400px] border m-auto w-full h-[230px] flex items-center justify-center">
            <NotFoundVector title="Internship Jobs Not Available" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SkilledJobs;
