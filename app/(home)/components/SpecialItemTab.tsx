'use client';
import useApiRequest from '@/app/hooks/useApiRequest';
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from '@/components/ui/tabs2';
import React from 'react';
import InternShipJob from './InternShipJob';
import SkilledJobs from './SkilledJobs';

const SpecialItemTab = () => {
    const { data: internJob, loading: loadingIntern, error: errorIntern } = useApiRequest<any>(
        "jobs/internship ",
        "GET"
    )

    const { data: skilledJob, loading: skilledLoading, error: skilledError } = useApiRequest<any>(
        "jobs/skilled-jobs ",
        "GET"
    )
    return (
        <div className='py-8'>
            <Tabs2 defaultValue="intern" className="w-full">
                <TabsList2 className="bg-gray-100  border grid grid-cols-2 md:w-[600px] w-full m-auto">
                    <TabsTrigger2 value="intern">Intern</TabsTrigger2>
                    <TabsTrigger2 value="skilledJob">Skilled Jobs</TabsTrigger2>
                </TabsList2>
                <br />
                <TabsContent2 value="intern">
                    <InternShipJob data={internJob?.data} loading={loadingIntern} error={errorIntern} />
                </TabsContent2>
                <TabsContent2 value="skilledJob">
                    <SkilledJobs data={skilledJob?.data} loading={skilledLoading} error={skilledError} />.
                </TabsContent2>
            </Tabs2>
        </div>
    );
};

export default SpecialItemTab;
