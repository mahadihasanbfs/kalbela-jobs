import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Link from 'next/link';
import React from 'react';
import Industries from '../local-jobs/_components/Industries';

const JobByCategoryModal = ({ categoryData }: any) => {
    console.log("categoryData : ", categoryData);

    let loading = categoryData[0]
    const functionalCategory = categoryData.length ? categoryData[1] : {};
    const industrialCategory = categoryData.length ? categoryData[2] : {};
    const special = categoryData.length ? categoryData[3] : {};

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <button
                        className={`relative bg-gray-100 hover:bg-white rounded-md border`}
                    >
                        <div className="p-2  hover:text-primary_blue flex flex-col items-center justify-center text-xs text-center text-primary duration-300 cursor-pointer gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-list">
                                <rect width={7} height={7} x={3} y={3} rx={1} />
                                <rect width={7} height={7} x={3} y={14} rx={1} />
                                <path d="M14 4h7" />
                                <path d="M14 9h7" />
                                <path d="M14 15h7" />
                                <path d="M14 20h7" />
                            </svg>

                            Job by Category
                        </div>
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] h-[70vh] overflow-y-auto">
                    <ul className="grid md:grid-cols-3 gap-2 h-full overflow-y-auto">
                        {<li className="">
                            <h4 className="font-semibold mt-2 border-b mb-2 pb-1 ">Functional</h4>
                            {
                                (categoryData[0] ?
                                    <>loading....</>
                                    :
                                    <div>

                                        {
                                            functionalCategory[0]?.categories?.map((itm: any, i: number) => (
                                                <div key={i}>
                                                    <Link className="group hover:text-primary_blue py-1 rounded duration-200 text-md flex items-center gap-1" href={`/search-details?${itm?.name}`}>
                                                        {/* <span>
                                                    <ArrowBigRight size={16} strokeWidth={1.6} />
                                                </span> */}
                                                        <span className="border group-hover:border-primary_blue duration-200 w-10 h-10 overflow-hidden rounded-md">
                                                            <img
                                                                src={itm?.image ? itm?.image : '/fallback_img.png'}
                                                                className="w-full h-full object-scale-down" />
                                                        </span>
                                                        <div>
                                                            <h1 className="font-medium text-sm">{itm?.name} ({itm?.jobCount})</h1>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </li>}

                        {industrialCategory.length && <li className="">
                            <h4 className="font-semibold mt-2 border-b mb-2 pb-1 ">Industrial</h4>
                            {
                                <div>

                                    {
                                        industrialCategory[0]?.categories?.map((itm: any, i: number) => (
                                            <div key={i}>
                                                <Link className="group hover:text-primary_blue py-1 rounded duration-200 text-md flex items-center gap-1" href={`/search-details?${itm?.name}`}>
                                                    {/* <span>
                                                    <ArrowBigRight size={16} strokeWidth={1.6} />
                                                </span> */}
                                                    <span className="border group-hover:border-primary_blue duration-200 w-10 h-10 overflow-hidden rounded-md">
                                                        <img
                                                            src={itm?.image ? itm?.image : '/fallback_img.png'}
                                                            className="w-full h-full object-scale-down" />
                                                    </span>
                                                    <div>
                                                        <h1 className="font-medium text-sm">{itm?.name} ({itm?.jobCount})</h1>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            }
                        </li>}

                        {special.length && <li className="">
                            <h4 className="font-semibold mt-2 border-b mb-2 pb-1 ">Special</h4>
                            {
                                <div>

                                    {
                                        special[0]?.categories?.map((itm: any, i: number) => (
                                            <div key={i}>
                                                <Link className="group hover:text-primary_blue py-1 rounded duration-200 text-md flex items-center gap-1" href={`/search-details?${itm?.name}`}>
                                                    {/* <span>
                                                    <ArrowBigRight size={16} strokeWidth={1.6} />
                                                </span> */}
                                                    <span className="border group-hover:border-primary_blue duration-200 w-10 h-10 overflow-hidden rounded-md">
                                                        <img
                                                            src={itm?.image ? itm?.image : '/fallback_img.png'}
                                                            className="w-full h-full object-scale-down" />
                                                    </span>
                                                    <div>
                                                        <h1 className="font-medium text-sm">{itm?.name} ({itm?.jobCount})</h1>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            }
                        </li>}

                    </ul>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default JobByCategoryModal;