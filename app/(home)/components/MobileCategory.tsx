import { Accordion2, AccordionContent2, AccordionItem2, AccordionTrigger2 } from "@/components/ui/accordion2";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, ArrowUpRight, ChevronRight, Link2, MapPin } from "lucide-react";
import Link from "next/link";
import Development from "./Development";
import JobByCategoryModal from "./JobByCategoryModal";

const MobileCategory = ({
    jobByCategory,
    jobByLocation,
    jobByIndustry,
    governmentJobs,
    jobBySection,
    moreLinks,
    categoryData,
    govLoading
}: {
    jobByCategory: any,
    jobByLocation: any,
    jobByIndustry: any,
    governmentJobs: any,
    jobBySection: any,
    moreLinks: any,
    categoryData: any,
    govLoading: boolean
}) => {

    return (
        <div className="lg:hidden block mb-4 !relative !z-[3000] ">
            <div className="grid grid-cols-3 gap-3 !p-0">
                {/* job by category */}
                <JobByCategoryModal categoryData={categoryData} />


                {/* job by industry */}
                <Dialog>
                    <DialogTrigger asChild>
                        <button
                            className={`relative bg-gray-100 hover:bg-white rounded-md border`}
                        >
                            <div className="p-2  hover:text-primary_blue flex flex-col items-center justify-center text-xs text-center text-primary duration-300 cursor-pointer gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={26}
                                    height={26}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-factory-icon lucide-factory"
                                >
                                    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                                    <path d="M17 18h1" />
                                    <path d="M12 18h1" />
                                    <path d="M7 18h1" />
                                </svg>

                                Job By Industry
                            </div>
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] h-[70vh] ">
                        <h2 className="font-semibold border-b mb-3 pb-2">Industries ({jobByIndustry?.data.length})</h2>
                        <ul className="grid md:grid-cols-3 gap-2 w-full h-full overflow-y-auto">
                            {jobByIndustry?.data?.map((itm: any, i: number) => (
                                <li key={i}>
                                    <Link className=" hover:text-primary_blue py-1 rounded duration-200 flex text-md items-center gap-1"
                                        href={`/search-details?${itm?.industry}`}>
                                        <span>
                                            <ArrowUpRight
                                                size={20} strokeWidth={1.2}
                                                className="text-primary shrink-0 transition-transform duration-200"
                                            />
                                        </span>
                                        <span>
                                            {itm?.industry} ({itm?.job_count})
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </DialogContent>
                </Dialog>


                {/* government jobs */}
                <Dialog>
                    <DialogTrigger asChild>
                        <button
                            className={`relative bg-gray-100 hover:bg-white rounded-md border`}
                        >
                            <div className="p-2  hover:text-primary_blue flex flex-col items-center justify-center text-xs text-center text-primary duration-300 cursor-pointer gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={26}
                                    height={26}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-landmark-icon lucide-landmark"
                                >
                                    <line x1={3} x2={21} y1={22} y2={22} />
                                    <line x1={6} x2={6} y1={18} y2={11} />
                                    <line x1={10} x2={10} y1={18} y2={11} />
                                    <line x1={14} x2={14} y1={18} y2={11} />
                                    <line x1={18} x2={18} y1={18} y2={11} />
                                    <polygon points="12 2 20 7 4 7" />
                                </svg>

                                Government Job
                            </div>
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] h-[70vh] overflow-y-auto">
                        <ul className=" gap-2">
                            <li className="">
                                <h4 className="font-semibold pb-2 mb-4 border-b">Government Jobs ({governmentJobs?.data.length})</h4>

                                {govLoading
                                    ?
                                    <ul className="space-y-3 animate-pulse">
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <li
                                                key={index}
                                                className="h-5 bg-gray-200 dark:bg-neutral-700 rounded w-3/4"
                                            />
                                        ))}
                                    </ul>
                                    :
                                    governmentJobs?.data?.map((itm: any, i: number) => (
                                        <div key={i}>
                                            <Link className="group p-1 border hover;border-gray-200 hover:bg-gray-50 hover:text-primary_blue py-1  rounded duration-200 text-md flex items-center gap-1" href={`/search-details?${itm?.name}`}>
                                                {/* <span>
                                                    <ArrowBigRight size={16} strokeWidth={1.6} />
                                                </span> */}
                                                <div className="flex w-full grid-cols-4 gap-2">
                                                    <div className="border bg-gray-50  group-hover:border-primary_blue duration-200 w-12 h-10 overflow-hidden rounded-md flex gap-2">
                                                        <img
                                                            src={itm?.logo ? itm?.logo : '/fallback_img.png'}
                                                            className="w-full h-full object-scale-down" />
                                                    </div>
                                                    <div className="col-span-3">
                                                        <h1 className="font-medium text-sm full">{itm?.name} ({itm?.jobCount})</h1>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                            </li>
                        </ul>
                    </DialogContent>
                </Dialog>

                {/* job by section */}
                <Dialog>
                    <DialogTrigger asChild>
                        <button
                            className={`relative bg-gray-100 hover:bg-white rounded-md border`}
                        >
                            <div className="p-2  hover:text-primary_blue flex flex-col items-center justify-center text-xs text-center text-primary duration-300 cursor-pointer gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={26}
                                    height={26}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={1}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-repeat2-icon lucide-repeat-2"
                                >
                                    <path d="m2 9 3-3 3 3" />
                                    <path d="M13 18H7a2 2 0 0 1-2-2V6" />
                                    <path d="m22 15-3 3-3-3" />
                                    <path d="M11 6h6a2 2 0 0 1 2 2v10" />
                                </svg>

                                Job by Section
                            </div>
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] overflow-hidden h-[70vh] overflow-y-auto">
                        <div className="mt-8">
                            <Development height={'h-[300px]'} />
                        </div>
                    </DialogContent>
                </Dialog>


                {/* job by location */}
                <Dialog>
                    <DialogTrigger asChild>
                        <button
                            className={`relative bg-gray-100 hover:bg-white rounded-md border`}
                        >
                            <div className="p-2  hover:text-primary_blue flex flex-col items-center justify-center text-xs text-center text-primary duration-300 cursor-pointer gap-2">
                                <MapPin size={26} strokeWidth={1} />
                                Job by Location
                            </div>
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] h-[70vh] overflow-y-auto">
                        <Accordion2 onClick={(e) => e.stopPropagation()} type="single" collapsible className="w-full grid grid-cols-1 gap-3">
                            {jobByLocation?.map((item: any, index: any) => <AccordionItem2 key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger2>{item?.location}</AccordionTrigger2>
                                <AccordionContent2>
                                    <ul className="list-inside space-y-1">
                                        {
                                            item?.jobs?.map((job: any, i: any) => <li className="hover:text-primary_blue duration-150 hover:ml-2" key={i}>
                                                <Link href="#" key={i} className="ml-6 flex gap-2">
                                                    <span>
                                                        <ArrowRight
                                                            size={16}
                                                            strokeWidth={1.4} absoluteStrokeWidth />
                                                    </span>
                                                    <span>
                                                        {job}
                                                    </span>
                                                </Link>
                                            </li>)
                                        }
                                    </ul>
                                </AccordionContent2>
                            </AccordionItem2>)}
                        </Accordion2>
                    </DialogContent>
                </Dialog>



                {/* job by location */}
                <Dialog>
                    <DialogTrigger asChild>
                        <button
                            className={`relative bg-gray-100 hover:bg-white rounded-md border`}
                        >
                            <div className="p-2  hover:text-primary_blue flex flex-col items-center justify-center text-xs text-center text-primary duration-300 cursor-pointer gap-2">
                                <Link2 size={26} strokeWidth={1.4} absoluteStrokeWidth />
                                More Links
                            </div>
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] h-[70vh] overflow-y-auto">
                        <ul className="list-inside space-y-1">
                            {
                                moreLinks?.map((items: any, i: any) => <li className="hover:text-primary_blue duration-150 hover:ml-2" key={i}>
                                    <Link href="#" key={i} className=" flex gap-2">
                                        <span>
                                            <Link2
                                                size={16}
                                                strokeWidth={1.4} absoluteStrokeWidth />
                                        </span>
                                        <span>
                                            {items}
                                        </span>
                                    </Link>
                                </li>)
                            }
                        </ul>

                    </DialogContent>
                </Dialog>


            </div>
        </div >
    );
};

export default MobileCategory;