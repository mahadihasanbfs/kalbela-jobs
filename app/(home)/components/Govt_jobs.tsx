'use client';

import useApiRequest from '@/app/hooks/useApiRequest';
import { usePaginatedFetch } from '@/app/hooks/usePaginationFetch';
import NotFoundVector from '@/components/NotFoundVector';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
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
    `jobs/get-all-govt-jobs?page=${page}&limit=${limit}`,
    'GET'
  );

  const jobs = data?.data?.jobs || [];
  const totalPages = data?.data?.pagination?.totalPages || 1;

  return (
    <div className='bg-cover'
      style={{
        backgroundImage: `linear-gradient(180deg, #ffffffef, #ffffffef), url(/jobbg.jpeg)`,
      }}
    >
      <div className="md:col-span-3">
        <JobTitleBar
          title="Government Jobs"
          iconSrc="https://image.kalbelajobs.com/api/v1/image/679674886283397bf670bc7d.png"
          viewBtn={true}
          path="/govt-jobs"
        />
        {
          loading
            ?
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
            :
            <div className="grid md:px-4 px-0  md:h-[300px] md:gap-4 gap-2 grid-cols-2 lg:grid-cols-3">
              {
                jobs?.map((job: any) => (
                  <div key={job._id}>
                    <JobCard2 job={job} />
                  </div>
                ))
              }
            </div>
        }



        {error && (
          <div className="md:h-[400px] h-[230px] flex items-center justify-center">
            <NotFoundVector />
          </div>
        )}

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
