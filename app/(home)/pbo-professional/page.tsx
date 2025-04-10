import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';
import SearchAction from '../search-details/components/SearchAction';
import HeaderContent from './_components/HeaderContent';
import JobTabs from './_components/JobTabs';
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
                    className="bg-li md:h-[270px] h-[490px] md:pt-12 pt-4 backdrop-blur-md bg-cover object-cover">
                    <MaxWidthWrapper>
                        <SearchAction title='PBO Professionals' />
                    </MaxWidthWrapper>
                </div>

                <MaxWidthWrapper className='relative -mt-10'>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="md:col-span-3 bg-white p-4 shadow-md rounded">
                            <HeaderContent />
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
                </MaxWidthWrapper>
            </div>
        </div>
    );
};

export default WorldWideJobsPage;