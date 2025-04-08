import NotFoundVector from '@/components/NotFoundVector';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import JobTitleBar from './JobTitleBar';

interface HotJobsProps {
  loading: boolean;
  data: {
    data: any;
  };
  error: any;
}

const HotJobs: React.FC<HotJobsProps> = ({ loading, data, error }) => {
  // State to keep track of how many items to display
  const [visibleItems, setVisibleItems] = useState(15);

  const replaceMoreData = () => {
    // Show the next 3 items when "Show More" is clicked
    if (visibleItems + 15 <= data?.data.length) {
      setVisibleItems(visibleItems + 15);
    }
  };

  const backPrevData = () => {
    // Hide all items when "Show Less" is clicked (set to show only 3 items again)
    setVisibleItems(15);
  };

  return (
    <div className="pb-8">
      <div className="md:col-span-3">
        <JobTitleBar title="🔥 Hot Jobs" viewBtn={true} path="/hotjob" />

        <div className="grid md:gap-4 gap-2 grid-cols-2 lg:grid-cols-3">
          {loading
            ? new Array(15).fill(' ').map((_, index) => (
              <div key={index} className="flex flex-col items-start rounded-sm border p-4 md:flex-row">
                <Skeleton className="mr-3 h-14 w-14 rounded-full" />
                <div className="flex-grow">
                  <Skeleton className="mb-2 h-5 w-24" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            ))
            : data?.data.slice(visibleItems - 15, visibleItems).map((job: any) => (
              <Link
                href={`/jobs/${job.url}`}
                key={job._id}
                className="group flex justify-start flex-col md:flex-row w-full items-start gap-2 overflow-hidden hover:bg-gray-50 rounded-lg border md:p-4 p-2 shadow-sm transition-all hover:border-gray-300"
              >
                <div className="md:block md:w-auto flex w-full justify-center">
                  <div className="h-16 w-16 m-auto">
                    {job?.company_info?.logo ? (
                      <img
                        className="h-full w-20 rounded border-1 border-gray-300 bg-white object-contain p-2 border"
                        src={job.company_info.logo}
                        alt={job.company_info.name || 'Company Logo'}
                        onError={(e) => (e.currentTarget.src = '/fallback_img.png')}
                      />
                    ) : (
                      <div className="flex justify-center items-center h-full rounded border-2 border-gray-300 bg-white object-contain p-2 shadow-md">
                        <span className="text-xl font-semibold text-gray-600">
                          {job?.company_info?.name?.charAt(0).toUpperCase() || 'C'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex-grow gap-1 text-center md:text-start mx-auto">
                  <h3 className="font-semibold text-sm capitalize group-hover:text-blue-500">{job.job_title}</h3>
                  <p className="text-xs">{job.company_info?.name}</p>
                </div>
              </Link>
            ))}
        </div>

        {error && (
          <div className="md:h-[400px] h-[230px] flex items-center justify-center">
            <NotFoundVector />
          </div>
        )}

        {visibleItems > 15 &&
          <div className="flex items-center justify-center mt-8 gap-4 ">
            <Button
              className='bg-gray-200 duration-200 text-primary_blue hover:text-white border border-primary_blue hover:bg-primary rounded '
              onClick={backPrevData}>
              <ArrowLeft size={16} /> Show Less
            </Button>
            <Button
              className='bg-gray-200 duration-200 text-primary_blue hover:text-white border border-primary_blue hover:bg-primary rounded '
              onClick={replaceMoreData}>
              Show More <ArrowRight size={16} />
            </Button>
          </div>
        }
      </div>
    </div>
  );
};

export default HotJobs;
