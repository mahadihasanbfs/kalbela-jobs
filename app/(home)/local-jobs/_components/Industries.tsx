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
