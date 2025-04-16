'use client';
import useApiRequest from '@/app/hooks/useApiRequest';
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from '@/components/ui/tabs2';
import React from 'react';
import CustomTitle from './CustomTitle';
import Development from './Development';
import InternShipJob from './InternShipJob';
import SkilledJobs from './SkilledJobs';

const SpecialItemTab = () => {
    const { data: skilledJob, loading: skilledLoading, error: skilledError } = useApiRequest<any>(
        "jobs/skilled-jobs",
        "GET"
    )

    const tabs = [
        {
            value: "intern",
            label: "Domestic",
        },
        {
            value: "skilled",
            label: "Skilled",
        },
        {
            value: "expire",
            label: "Expire in 3 days",
        },
        {
            value: "unskilled",
            label: "Unskilled",
        },
        {
            value: "foreign",
            label: "Foreign",
        },
    ]
    return (
        <div className='py-8'>
            <CustomTitle title="Specialized Focus Jobs" position='center' />
            <Tabs2 defaultValue="intern" className="w-full">
                <TabsList2 className=" border  grid md:grid-cols-5 grid-cols-3 md:w-[680px] w-full m-auto gap-4">
                    {/* <TabsTrigger2 value="intern">Intern</TabsTrigger2>
                    <TabsTrigger2 value="skilledJob">Skilled Jobs</TabsTrigger2> */}
                    {tabs.map((tab) => (
                        <TabsTrigger2 key={tab.value} value={tab.value}>
                            {tab.label}
                        </TabsTrigger2>
                    ))}
                </TabsList2>
                <br />
                {/* intern */}
                <TabsContent2 value="intern">
                    <div className="lg:w-[1000px] m-auto">
                        <Development />
                    </div>
                </TabsContent2>

                {/* skilled */}
                <TabsContent2 value="skilled">
                    <SkilledJobs data={skilledJob?.data} loading={skilledLoading} error={skilledError} />.
                </TabsContent2>

                {/* expire */}
                <TabsContent2 value="expire">
                    <div className="lg:w-[1000px] m-auto">
                        <Development />
                    </div>
                </TabsContent2>

                {/* unskilled */}
                <TabsContent2 value="unskilled">
                    <div className="lg:w-[1000px] m-auto">
                        <Development />
                    </div>
                </TabsContent2>

                {/* foreign */}
                <TabsContent2 value="foreign">
                    <div className="lg:w-[1000px] m-auto">
                        <Development />
                    </div>
                </TabsContent2>
            </Tabs2>
        </div>
    );
};

export default SpecialItemTab;