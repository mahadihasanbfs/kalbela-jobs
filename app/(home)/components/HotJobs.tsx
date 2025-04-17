'use client';

import useApiRequest from '@/app/hooks/useApiRequest';
import { usePaginatedFetch } from '@/app/hooks/usePaginationFetch';
import NotFoundVector from '@/components/NotFoundVector';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/Pagination';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import JobCard2 from './JobCard2';
import JobTitleBar from './JobTitleBar';
import PaginationController from './PaginationController';


const HotJobs: React.FC = () => {
  // const {
  //   data: jobs,
  //   loading,
  //   error,
  //   currentPage,
  //   totalPages,
  //   nextPage,
  //   prevPage,
  // } = usePaginatedFetch(`/`)

  const [page, setPage] = useState(1);
  const limit = 15;

  const { data, loading, error } = useApiRequest<any>(
    `jobs/get-featured-jobs?page=${page}&limit=${limit}`,
    'GET'
  );

  console.log('clg', data);
  const jobs = data?.data?.jobs || [];
  const totalPages = data?.data?.total_pages || 1;

  if (loading) {
    return (
      <div className="pb-8">
        <div className="md:col-span-3">
          <JobTitleBar title="🔥 Hot Jobs" viewBtn={true} path="/hotjob" />
          <div className="grid md:gap-4 gap-2 grid-cols-2 lg:grid-cols-3">
            {
              new Array(15).fill(null).map((_, index) => (
                <div key={index} className="flex flex-col items-start rounded-sm border p-4 md:flex-row">
                  <Skeleton className="mr-3 h-14 w-14 rounded-full" />
                  <div className="flex-grow">
                    <Skeleton className="mb-2 h-5 w-24" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="pb-8">
        <div className="md:col-span-3">
          <JobTitleBar title="🔥 Hot Jobs" viewBtn={true} path="/hotjob" />

          <div className="md:h-[500px] h-[230px] border flex items-center justify-center">
            <NotFoundVector />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pb-4">
      <div className="md:col-span-3">
        <JobTitleBar title="🔥 Hot Jobs" viewBtn={true} path="/hotjob" />
        <div className="grid md:gap-4 gap-2 grid-cols-2 lg:grid-cols-3">
          {
            jobs?.map((job: any) => (
              <JobCard2 key={job?._id} job={job} />
            ))
          }
        </div>

        {/* Pagination Buttons */}
        {(
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

export default HotJobs;
