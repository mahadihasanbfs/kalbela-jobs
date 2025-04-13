import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';
import SemiJobHeader from '../components/SemiJobHeader';
import SearchAction from '../search-details/components/SearchAction';
import HeaderContent from './_components/HeaderContent';
import JobTabs from './_components/JobTabs';
import { QuickLinks } from './_components/QuickLinks';
import { WorldWideJobList } from './_components/WorldWideJobList';

const WorldWideJobsPage = () => {
    return (
        <div>
            <div
                style={{
                    backgroundImage: "linear-gradient(30deg, #00000097, #000016cc), url(/company-cover-image.jpg)"
                }}
                className=" bg-li py-6 backdrop-blur-md bg-cover object-cover">
                <div className='mx-auto h-full w-full max-w-screen-3xl px-4 md:px-20 lg:px-6 2xl:max-w-screen-xl'>
                    <SearchAction title='World Wide Jobs' />
                </div>
            </div>
            <div className="bg-gray-50 py-8">
                <div className='mx-auto h-full  w-full max-w-screen-3xl px-4 md:px-20 lg:px-6 2xl:max-w-screen-xl'>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="md:col-span-3 bg-white p-4 shadow-md rounded">
                            <SemiJobHeader
                                title="Worldwide Jobs from Kalbela/Foreign Employers"
                                description=" In this customized search panel, anyone can search their desired job which posted by NRB-PBO & Foreign employers around the world. Here, jobs are offered to NRB-PBO Professionals, Skilled, Semi & Un-skilled workers by NRB-PBO & Foreign employers worldwide. From our customized and advanced job searching panel, applicants' can find their suitable jobs according to their demand within the country they live or any popular cities within their local community. The customized search panel will help you narrow down your desired location to find jobs. This section is very useful for those applicants who want their job to a specific location." />
                            <JobTabs />

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
                </div>
            </div>
        </div>
    );
};

export default WorldWideJobsPage;