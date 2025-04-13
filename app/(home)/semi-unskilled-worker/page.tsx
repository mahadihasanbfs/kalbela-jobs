import React from 'react';
import SemiJobHeader from '../components/SemiJobHeader';
import JobTabs from './_components/JobTabs';
import { QuickLinks } from './_components/QuickLinks';
import SemiUnskilledSearchAction from './_components/SemiUnskilledSearchAction';
import { UnskilledFeaturedJob } from './_components/UnskilledFeaturedJob';

const WorldWideJobsPage = () => {
    return (
        <div>
            <div
                style={{
                    backgroundImage: "linear-gradient(30deg, #00000097, #000016cc), url(/company-cover-image.jpg)"
                }}
                className="bg-li md:h-[240px] h-[400px] flex items-center justify-center backdrop-blur-md bg-cover object-cover">
                <div className='mx-auto h-full mt-[-60px] w-full max-w-screen-3xl px-4 md:px-20 lg:px-6 2xl:max-w-screen-xl flex items-center justify-center'>
                    <SemiUnskilledSearchAction title='Semi & Unskilled workers' />
                </div>
            </div>
            <div className="bg-gray-50 relative py-8 ">
                <div className='mx-auto h-full mt-[-60px] w-full max-w-screen-3xl px-4 md:px-20 lg:px-6 2xl:max-w-screen-xl'>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="md:col-span-3 bg-white p-4 shadow-md rounded">
                            <SemiJobHeader title="Semi & Unskilled workers" description=" This is an useful global job portal for Semi & Un-Skilled workers. By submitting biodata, anyone can enhance the opportunity to find his/her desired jobs in both local and global communities. Local and International employers can search applicants' biodata from our database for hiring workers according to their needs. Jobs in this category may not require licensing, certification, but some of the jobs may require some sort of experience(s). Employers can search their desired employees from any district, upazilla, union and village of Bangladesh. We encourage you to submit your biodata in this section and enhance your chances to get hired." />
                            <JobTabs />

                            {/* Job Listings */}
                            <div className="mt-8">
                                <UnskilledFeaturedJob />
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