'use client';

import NotFoundVector from '@/components/NotFoundVector';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import JobTitleBar from './JobTitleBar';

interface GovJobProps {
  loading: boolean;
  data: {
    jobs: any[];
  };
  error: any;
}

const GovJob: React.FC<GovJobProps> = ({ loading, data, error }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const jobs = data?.jobs || [];
  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = jobs.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="pb-8">
      <div className="md:col-span-3">
        <JobTitleBar
          title="Government Jobs"
          iconSrc="https://image.kalbelajobs.com/api/v1/image/679674886283397bf670bc7d.png"
          viewBtn={true}
          path="/govt-jobs"
        />
        <div className="grid md:gap-4 gap-2 grid-cols-2 lg:grid-cols-3">
          {loading
            ? new Array(itemsPerPage).fill(null).map((_, index) => (
              <div key={index} className="flex flex-col items-start rounded-sm border p-4 md:flex-row">
                <Skeleton className="mr-3 h-14 w-14 rounded-full" />
                <div className="flex-grow">
                  <Skeleton className="mb-2 h-5 w-24" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            ))
            : visibleItems.length > 0 ? (
              visibleItems.map((job: any) => (
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
            ) : (
              <></>
            )}
        </div>

        {!loading && (error || visibleItems.length === 0) && (
          <div className="md:h-[320px] h-[230px] flex items-center justify-center">
            <NotFoundVector title='Government Job Not Available' />
          </div>
        )}

        {/* Pagination Buttons */}
        {!error || visibleItems.length !== 0 && <div className="flex items-center justify-center mt-6 gap-4">
          <Button
            size={"sm"}
            className="bg-gray-200 duration-200 text-primary_blue hover:text-white border border-primary_blue hover:bg-primary rounded"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <ArrowLeft size={16} className="mr-1" />
            Previous
          </Button>
          <Button
            size={"sm"}
            className="bg-gray-200 duration-200 text-primary_blue hover:text-white border border-primary_blue hover:bg-primary rounded"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Show More
            <ArrowRight size={16} className="ml-1" />
          </Button>
        </div>}
      </div>
    </div>
  );
};

export default GovJob;
