'use client';
import useApiRequest from '@/app/hooks/useApiRequest';
import ApplyModal from '@/components/ApplyModal';
import SecondaryBtn from '@/components/SecondaryBtn';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const RelatedCompanyJob = ({ user, company, save_jobs }: { user: any, company: any, save_jobs: any }) => {
    const { data, loading, error } = useApiRequest<any>(`jobs/organization-jobs?slug=${company}`, "GET")

    const jobs = data?.data?.jobs;
    // console.log("job data :  : : :", jobs);

    if (loading) {
        return (
            <h1 className='mt-3 text-center'> Loading.......</h1>
        )
    }


    return (
        <div className='mt-12 border-t'>
            <h1 className="text-xl mt-3 font-semibold">Similar Company Job</h1>
            <div className="mt-3 grid lg:grid-cols-1 md:grid-cols- grid-cols-1 gap-4 ">
                {
                    jobs && jobs.length > 0
                        ?
                        jobs?.slice(0, 2)?.map((jobPost: any) => <Card
                            className="p-4 transition-shadow hover:shadow-md"
                        >

                            <CardContent className="p-0">
                                <Link href={`/jobs/${jobPost?.url}`} className="flex items-center gap-2 mb-2">
                                    <h3 className="mb-2 hover:text-primary_blue duration-200 text-lg font-semibold">
                                        {jobPost?.job_title}
                                    </h3>
                                </Link>
                                <div className="mb-2 flex flex-wrap  gap-2 overflow-x-auto scrollbar-hide whitespace-nowrap ">
                                    {jobPost?.skills?.map((skill: string, index: number) => (
                                        <Badge key={index} variant="outline" className="text-xs whitespace-nowrap">
                                            {skill}
                                        </Badge>
                                    ))}
                                    <Badge variant="outline" className="text-xs bg-gray-100">
                                        {jobPost?.job_type}
                                    </Badge>
                                </div>
                                <div className="mb-2 text-sm text-muted-foreground">
                                    {jobPost?.salary_negotiable || jobPost?.negotiable_note &&
                                        <p>  Salary:  {jobPost?.salary_negotiable || jobPost?.negotiable_note
                                            ? "Negotiable"
                                            : `${jobPost?.salary_range?.min}${jobPost?.salary_range?.max ? ` - ${jobPost?.salary_range.max}` : ""} ${jobPost?.salary_range?.currency || ""}`} | </p>
                                    }
                                    Deadline:{" "} {formatDate(jobPost?.expiry_date || new Date())}
                                </div>
                                <p className="mb-4 text-sm" dangerouslySetInnerHTML={{ __html: jobPost?.description }}></p>

                                <div className="flex items-center gap-4 pt-4">
                                    <div className="w-full">
                                        <ApplyModal
                                            slug={jobPost?.url}
                                            company={jobPost?.company_info?.company_id}
                                            user={user}
                                        />
                                    </div>
                                    <SecondaryBtn
                                        className="px-10 w-5/6  py-2"
                                        onClick={() => save_jobs(jobPost?._id)}
                                    >
                                        Save
                                    </SecondaryBtn>
                                </div>

                            </CardContent>
                        </Card>)
                        :
                        <div className="py-8 bg-gray-100 rounded-md">
                            <Image
                                className="mx-auto opacity-30"
                                src="/icons/no-job.png"
                                alt="No Data Found"
                                width={150}
                                height={150}
                            />
                            <h4 className="font-medium text-center mt-2 text-gray-400">
                                No Job Found
                            </h4>
                        </div>
                }
            </div>

            {
                jobs && jobs.length > 2 &&
                <Link
                    href={`/jobs`}
                    className="text-blue-700 hover:text-primary duration-300 text-sm mt-6 flex items-center gap-1 ">
                    See All <ArrowRight size={16} />
                </Link>
            }
            <br />
        </div>
    );
};

export default RelatedCompanyJob;