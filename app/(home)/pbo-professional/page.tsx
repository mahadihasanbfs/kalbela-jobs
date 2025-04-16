import React from 'react';
import SemiJobHeader from '../components/SemiJobHeader';
import SearchAction from '../search-details/components/SearchAction';
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
                    <div className='mx-auto h-full w-full max-w-screen-3xl px-4 md:px-20 lg:px-6 2xl:max-w-screen-xl'>
                        <SearchAction title='PBO Professionals' />
                    </div>
                </div>

                <div className='mx-auto h-full mt-[-40px] w-full max-w-screen-3xl px-4 md:px-20 lg:px-6 2xl:max-w-screen-xl relative '>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="md:col-span-3 bg-white p-4 shadow-md rounded">
                            <SemiJobHeader
                                title="KALBELA / PBO Professional Jobs"
                                description="In this customized search panel, anyone can search their desired job which posted by NRB-PBO & Foreign employers around the world. Here, jobs are offered to NRB-PBO Professionals, Skilled, Semi & Un-skilled workers by NRB-PBO & Foreign employers worldwide. From our customized and advanced job searching panel, applicants' can find their suitable jobs according to their demand within the country they live or any popular cities within their local community. The customized search panel will help you narrow down your desired location to find jobs. This section is very useful for those applicants who want their job to a specific location." />
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