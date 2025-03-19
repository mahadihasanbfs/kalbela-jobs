'use client';
import useApiRequest from '@/app/hooks/useApiRequest';
import SecondaryBtn from '@/components/SecondaryBtn';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';

const RelatedCompanyJob = ({ company, save_jobs }: { company: any, save_jobs: any }) => {
    const { data, loading, error } = useApiRequest<any>(`jobs/organization-jobs?slug=${company}`, "GET")

    const jobs = data?.data?.jobs;
    console.log("job data :  : : :", jobs);

    if (loading) {
        return (
            <h1 className='mt-3 text-center'> Loading.......</h1>
        )
    }


    return (
        <div>
            <h1 className="text-xl font-semibold">Related Company Job</h1>
            <div className="mt-3 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4 ">
                {
                    jobs?.map((jobPost: any) => <Card
                        className="p-4 transition-shadow hover:shadow-md"
                    >

                        <CardContent className="p-0">
                            <h3 className="mb-2 text-lg font-semibold">
                                {jobPost?.job_title}
                            </h3>
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

                            <SecondaryBtn
                                onClick={() => save_jobs(jobPost?._id)}
                                className="w-full !bg-primary hover:!bg-primary/80 !text-white rounded py-2"
                            >
                                Save Job
                            </SecondaryBtn>
                        </CardContent>
                    </Card>)
                }
            </div>

            {
                jobs && jobs.length > 2 && <Link href={`/jobs/${company}`} className="text-primary text-sm mt-3 block">See All</Link>
            }
        </div>
    );
};

export default RelatedCompanyJob;