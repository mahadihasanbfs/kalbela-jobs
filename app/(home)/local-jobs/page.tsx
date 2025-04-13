import React from 'react';
import SemiJobHeader from '../components/SemiJobHeader';
import SearchAction from '../search-details/components/SearchAction';
import JobTabs from './_components/JobTabs';
import LocalJobSearchAction from './_components/LocalJobSeachAction';
import { ProfessionalFeaturedJob } from './_components/ProfessionalFeaturedJob';
import { QuickLinks } from './_components/QuickLinks';

const WorldWideJobsPage = () => {
    return (
        <div>
            <div className="bg-gray-50 pb-8">
                <div
                    style={{
                        backgroundImage: "linear-gradient(30deg, #000000b7, #000000be), url(/company-cover-image.jpg)"
                    }}
                    className="bg-li md:h-[290px] h-[580px] md:pt-12 pt-4 backdrop-blur-md bg-cover object-cover">
                    <div className='mx-auto h-full w-full max-w-screen-3xl px-4 md:px-20 lg:px-6 2xl:max-w-screen-xl'>
                        <LocalJobSearchAction title='Jobs in Bangladesh' />
                    </div>
                </div>

                <div className='mx-auto h-full mt-[-40px] w-full max-w-screen-3xl px-4 md:px-20 lg:px-6 2xl:max-w-screen-xl relative '>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="md:col-span-3 bg-white p-4 shadow-md rounded">
                            <SemiJobHeader
                                title="Jobs in Bangladesh"
                                description="This section is for only Bangladeshi job seekers and employers. Here, the employers can post their jobs within Bangladesh and at the same time job seekers can search their desired jobs in any location within Bangladesh. " />
                            <JobTabs />

                            {/* Job Listings */}
                            <div className="mt-8">
                                <ProfessionalFeaturedJob />
                            </div>
                        </div>

                        {/* Sidebar - 1/4 width on desktop */}
                        <div className="md:col-span-1 bg-white p-4 shadow-md rounded">
                            <QuickLinks />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorldWideJobsPage;