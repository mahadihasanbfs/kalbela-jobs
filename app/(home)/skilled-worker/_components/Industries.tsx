'use client';

import Link from "next/link";

const Industries = () => {
    // Example job categories with jobs
    const industriesData = [
        { name: 'Technology', totalCompanies: 300 },
        { name: 'Healthcare', totalCompanies: 150 },
        { name: 'Finance', totalCompanies: 100 },
        { name: 'Retail', totalCompanies: 120 },
        { name: 'Education', totalCompanies: 80 },
        { name: 'Energy', totalCompanies: 60 },
    ];

    const loading = false;

    if (loading) {
        return (
            <div className='h-[200px] w-full border bg-gray-50 rounded-lg flex flex-col gap-1 items-center justify-center py-20'>
                <span className="loader"></span>
                <p className="mt-12">Loading....</p>
            </div>
        );
    }
    if (industriesData.length === 0) {
        return <div>
            <img
                className='w-[240px] m-auto'
                src={'/icons/job_search.svg'}
                alt="search"
            />
            <h2 className="font-semibold text-center">No Industries Found</h2>
        </div>;
    }


    return (
        <div>
            <div className="grid lg:grid-cols-3 gap-4">
                {industriesData?.map((category, index) => (
                    <Link href={`#`} key={index}>
                        <div

                            className="flex justify-between items-center h-[60px] group hover:bg-primary hover:!text-white duration-200 bg-[#f2f2f2] ">
                            <div className="p-2 text-sm  w-[220px] ">{category.name.slice(0, 45)} {category.name.length > 45 && '...'} </div>
                            <div className="text-sm border-l border-gray-300 p-2  h-full flex items-center justify-center !w-[50px]">{category?.totalCompanies} </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Industries;
