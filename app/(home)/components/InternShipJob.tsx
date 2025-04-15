import NotFoundVector from '@/components/NotFoundVector';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import React from 'react';
import JobCard2 from './JobCard2';
import JobTitleBar from './JobTitleBar';

interface InternShipJobProps {
  data: { jobs: any[] };
  loading: boolean;
  error: any;
}

const InternShipJob: React.FC<InternShipJobProps> = ({ data, loading, error }) => {
  const jobs = data?.jobs || [];

  return (
    <div>
      <div className=''>
        {/* <JobTitleBar title="🔥 Internship" viewBtn={false} /> */}

        <div className="grid md:gap-4 gap-2 grid-cols-2 lg:grid-cols-4">
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
                <JobCard2 key={job._id} job={job} />
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

export default InternShipJob;
