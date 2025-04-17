'use client';

import useApiRequest from '@/app/hooks/useApiRequest';
import { usePaginatedFetch } from '@/app/hooks/usePaginationFetch';
import NotFoundVector from '@/components/NotFoundVector';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { divIcon } from 'leaflet';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import JobCard2 from './JobCard2';
import JobTitleBar from './JobTitleBar';
import PaginationController from './PaginationController';


const GovJob: React.FC = () => {
  const [page, setPage] = useState(1);
  const limit = 6;

  const { data, loading, error } = useApiRequest<any>(
    `jobs/get-all-org-jobs?page=${page}&limit=${limit}`,
    'GET'
  );

  const jobs = data?.data || [];
  const totalPages = data?.data?.total_pages || 1;

  if (loading) {
    return (
      <div className='bg-cover'
        style={{
          backgroundImage: `linear-gradient(180deg, #ffffffef, #ffffffef), url(/jobbg.jpeg)`,
        }}
      >
        <div className="md:col-span-3 border flex flex-col justify-center">
          <JobTitleBar
            title="Government Jobs"
            iconSrc="https://image.kalbelajobs.com/api/v1/image/679674886283397bf670bc7d.png"
            viewBtn={true}
            path="/govt-jobs"
          />
          <div className="md:h-[300px]">
            <div className="grid px-2 md:h-[200px] grid-cols-3 md:gap-4 gap-2">
              {
                new Array(6).fill('.').map((_, index) => (
                  <div key={index}>
                    <div className="group flex bg-white justify-start flex-col md:flex-row w-full items-start gap-2 overflow-hidden rounded-lg border md:p-4 p-2 shadow-sm">
                      <div className="md:block md:w-auto flex w-full justify-center">
                        <div className="h-16 w-16 m-auto">
                          <div className="h-full w-20 rounded border border-gray-300 bg-gray-200 animate-pulse" />
                        </div>
                      </div>

                      <div className="flex-grow gap-1 text-center ml-4 md:text-start mx-auto">
                        <div className="h-4 w-40 bg-gray-200 rounded-md animate-pulse mb-2" />
                        <div className="h-3 w-24 bg-gray-200 rounded-md animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='bg-cover'
        style={{
          backgroundImage: `linear-gradient(180deg, #ffffffef, #ffffffef), url(/jobbg.jpeg)`,
        }}
      >
        <div className="md:col-span-3 border flex flex-col justify-center">
          <JobTitleBar
            title="Government Jobs"
            iconSrc="https://image.kalbelajobs.com/api/v1/image/679674886283397bf670bc7d.png"
            viewBtn={true}
            path="/govt-jobs"
          />
          <div className=' md:h-[440px] flex items-center  justify-center'> <NotFoundVector /></div>
        </div>
      </div>
    )
  }
  console.log('job', data);
  return (
    <div className='bg-cover'
      style={{
        backgroundImage: `linear-gradient(180deg, #ffffffef, #ffffffef), url(/jobbg.jpeg)`,
      }}
    >
      <div className="md:col-span-3 md:border flex pb-4 flex-col justify-center">
        <JobTitleBar
          title="Government Jobs"
          iconSrc="https://image.kalbelajobs.com/api/v1/image/679674886283397bf670bc7d.png"
          viewBtn={true}
          path="/govt-jobs"
        />

        <div className="">
          {jobs.length > 0 && <div className="grid md:px-4 md:h-[300px] px-0 f-full md:gap-4 gap-2 grid-cols-2 lg:grid-cols-3">
            {
              jobs?.map((job: any) => (
                <Link
                  key={job._id}
                  href={`${job?.org_website}`}
                  className="group relative flex bg-white justify-start flex-col md:flex-row w-full items-start gap-2 overflow-hidden hover:bg-gray-50 rounded border md:p-3 h-[100px] p-2 shadow-sm transition-all hover:border-gray-300"
                >
                  <div className="md:block md:w-auto flex w-full justify-center">
                    <div className="h-16 w-16 m-auto bg-white">
                      {job?.logo ? (
                        <img
                          className="h-full w-20 rounded border border-gray-300 bg-white object-contain p-2"
                          src={job.logo}
                          alt={job.name || 'Company Logo'}
                          onError={(e) => (e.currentTarget.src = '/fallback_img.png')}
                        />
                      ) : (
                        <div className="flex justify-center items-center h-full rounded border-2 border-gray-300 bg-white p-2 shadow-md">
                          <span className="text-xl font-semibold text-gray-600">
                            {job?.name?.charAt(0).toUpperCase() || 'C'}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-grow gap-1 text-center md:text-start mx-auto">
                    <h3 className="font-semibold text-sm capitalize group-hover:text-blue-500">
                      <h3 className="font-semibold text-sm capitalize group-hover:text-blue-500">
                        {job?.name?.length > 65
                          ? job?.name.slice(0, 65) + "..."
                          : job?.name}
                      </h3>

                    </h3>
                    <p className="text-xs">{job?.org_website}</p>
                  </div>
                </Link>
              ))
            }
          </div>}
        </div>

        {/* Pagination Buttons */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center pb-6">
            <PaginationController
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </div>
        )}

      </div>
    </div>
  );
};

export default GovJob;
