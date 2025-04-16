'use client';
import useApiRequest from '@/app/hooks/useApiRequest';
import NotFoundVector from '@/components/NotFoundVector';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import React, { useState } from 'react';
import JobCard2 from './JobCard2';
import JobTitleBar from './JobTitleBar';
import PaginationController from './PaginationController';

const Tenders: React.FC = () => {
  const [page, setPage] = useState(1);
  const limit = 6;

  const { data, loading, error } = useApiRequest<any>(
    `jobs/get-featured-jobs?page=${page}&limit=${limit}`,
    'GET'
  );

  const jobs = data?.data?.jobs || [];
  const totalPages = data?.data?.pagination?.totalPages || 1;

  return (
    <div>
      <div>
        <JobTitleBar title="🔥 Tenders" viewBtn={false} />

        <div className="grid md:gap-4 gap-2 grid-cols-2 lg:grid-cols-4">
          {loading ? (
            new Array(8).fill('.').map((_, index) => (
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
          ) : error ? (
            <div className="md:h-[400px] h-[230px] flex items-center justify-center">
              <NotFoundVector />
            </div>
          ) : (
            jobs?.slice(0, 8)?.map((job: any) => (
              <JobCard2 key={job?._id} job={job} />
            ))
          )}
        </div>

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

export default Tenders;
