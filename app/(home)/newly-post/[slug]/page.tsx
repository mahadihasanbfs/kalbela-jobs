'use client';
import useApiRequest from '@/app/hooks/useApiRequest';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import NoVacancies from '../../search-details/components/NoVacancies';
import { QuickLinks } from '../../world-wide-job/_components/QuickLinks';
import { Banknote, Briefcase, MapPin } from 'lucide-react';
import { formatTimeAgo } from '@/lib/formatedTimeAgo';
import { differenceInDays, format, parseISO } from 'date-fns';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/Pagination';
;

function formatExpiryDate(dateString: string): JSX.Element {
    const date = parseISO(dateString);
    const formattedDate = format(date, 'EEEE, MMMM d, yyyy');
    const daysLeft = differenceInDays(date, new Date());

    return (
        <div className='flex md:flex-col flex-row'>
            <p>{formattedDate}</p>
            <p>({daysLeft} day{daysLeft !== 1 ? 's' : ''} left)</p>
        </div>
    );
}

const NewlyPostPage = () => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 6;

    const { data, loading, error } = useApiRequest<any>(
        `jobs/new-jobs?limit=${limit}&page=${currentPage}`,
        'GET'
    );

    const goBack = () => {
        router.back();
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    const totalCount = data?.data?.pagination?.total || 0;
    const totalPages = Math.ceil(totalCount / limit);

    console.log("data :  : ", data);
    return (
        <div className='bg-gray-50'>
            <MaxWidthWrapper className='py-8'>
                <div className='grid md:grid-cols-4 gap-8'>
                    <div className='md:col-span-3'>
                        <Button onClick={goBack}>Back</Button>
                        <div className='space-y-4 mt-3'>
                            {data?.data?.jobs?.length > 0 ? (
                                <>
                                    {data.data.jobs.map((job: any, index: number) => {
                                        const formatLocation = () => {
                                            if (job?.location?.country === 'Remote') return 'Remote';

                                            const { country, division, location } = job?.location || {};

                                            return [country, Array.isArray(division) ? division.join(', ') : division, location]
                                                .filter(Boolean)
                                                .join(', ');
                                        };

                                        return (
                                            <div
                                                className='relative bg-white duration-200 hover:shadow-md border border-gray-200 mb-4'
                                                key={index}
                                            >
                                                <div className='md:p-8 p-3'>
                                                    <header className='flex gap-6'>
                                                        <div className='w-16 h-16 border md:w-20 md:h-20 rounded-xl overflow-hidden'>
                                                            <Link
                                                                className='border flex items-center justify-center border-gray-200 rounded-md w-full h-full p-1'
                                                                href={`/companies/${job?.company_info?.website}`}
                                                            >
                                                                <img
                                                                    className='rounded-md w-full h-full object-scale-down'
                                                                    src={job?.company_info?.logo || '/fallback_img.png'}
                                                                    alt={`${job.company_info?.name} logo`}
                                                                />
                                                            </Link>
                                                        </div>

                                                        <div>
                                                            <Link href={`/jobs/${job?.url}`}>
                                                                <h4 className='text-primary_blue text-lg'>{job?.job_title}</h4>
                                                            </Link>

                                                            <Link
                                                                href={`/companies/${job?.company_info?.website}`}
                                                                className='text-sm text-gray-500 hover:text-blue-800'
                                                            >
                                                                <h3 className='my-0.5'>{job?.company_info?.name}</h3>
                                                            </Link>
                                                        </div>

                                                        <div className='md:flex hidden text-sm absolute right-0 top-0 border-gray-300 rounded-bl-md text-gray-500 !border-l border-b p-2 gap-2 items-center'>
                                                            {formatExpiryDate(job?.expiry_date)}
                                                        </div>
                                                    </header>

                                                    <main>
                                                        <ul className='mt-3 flex flex-wrap md:gap-6 gap-3'>
                                                            <li className='flex gap-2 items-center'>
                                                                <MapPin size={20} />
                                                                {formatLocation()}
                                                            </li>

                                                            <li className='flex gap-2 items-center'>
                                                                <Briefcase size={20} />
                                                                {job?.job_type}
                                                            </li>

                                                            <li className='flex gap-2 items-center'>
                                                                <Banknote size={20} />
                                                                {job.salary_negotiable ? 'Negotiable' : 'Salary not specified'}
                                                            </li>
                                                        </ul>
                                                    </main>
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <br />
                                    {totalPages > 1 && (
                                        <Pagination className="mt-6">
                                            <PaginationContent>
                                                {/* Previous Button */}
                                                <PaginationItem>
                                                    <PaginationPrevious
                                                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                                        className={currentPage === 1 ? 'pointer-events-none cursor-not-allowed opacity-50' : ''}
                                                    />
                                                </PaginationItem>

                                                {/* Page Numbers */}
                                                {[...Array(totalPages)].map((_, index) => {
                                                    const page = index + 1
                                                    return (
                                                        <PaginationItem key={page}>
                                                            <PaginationLink
                                                                isActive={page === currentPage}
                                                                onClick={() => setCurrentPage(page)}
                                                                className={page === currentPage ? '!bg-primary !text-white' : ''}
                                                            >
                                                                {page}
                                                            </PaginationLink>
                                                        </PaginationItem>
                                                    )
                                                })}

                                                {/* Next Button */}
                                                <PaginationItem>
                                                    <PaginationNext
                                                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                                        className={currentPage === totalPages ? 'pointer-events-none cursor-not-allowed opacity-50' : ''}
                                                    />
                                                </PaginationItem>
                                            </PaginationContent>
                                        </Pagination>
                                    )}

                                </>
                            ) : (
                                <div className='flex min-h-[60vh] items-center justify-center'>
                                    <NoVacancies />
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <QuickLinks />
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default NewlyPostPage;
