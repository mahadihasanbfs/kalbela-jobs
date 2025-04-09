import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';
import SearchAction from '../search-details/components/SearchAction';
import HeaderContent from './_components/HeaderContent';
import JobCategories from './_components/JobCategories';
import { QuickLinks } from './_components/QuickLinks';
import { WorldWideJobList } from './_components/WorldWideJobList';

const WorldWideJobsPage = () => {
    return (
        <div>
            <div
                style={{
                    backgroundImage: "linear-gradient(30deg, #000000d4, #000016e2), url(/company-cover-image.jpg)"
                }}
                className="bg-li backdrop-blur-md bg-cover object-cover">
                <MaxWidthWrapper>
                    <SearchAction />
                </MaxWidthWrapper>
            </div>
            <div className="bg-gray-50 py-8">
                <MaxWidthWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="md:col-span-3 bg-white p-4 shadow-md rounded">
                            <HeaderContent />
                            <JobCategories />

                            {/* Job Listings */}
                            <div className="mt-8">
                                <WorldWideJobList />
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