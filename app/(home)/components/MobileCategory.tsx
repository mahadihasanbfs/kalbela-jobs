import { Accordion2, AccordionContent2, AccordionItem2, AccordionTrigger2 } from "@/components/ui/accordion2";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, ChevronRight, Link2, MapPin } from "lucide-react";
import Link from "next/link";
import JobByCategoryModal from "./JobByCategoryModal";

const MobileCategory = ({
    jobByCategory,
    jobByLocation,
    jobByIndustry,
    governmentJobs,
    jobBySection,
    moreLinks,
    categoryData
}: {
    jobByCategory: any,
    jobByLocation: any,
    jobByIndustry: any,
    governmentJobs: any,
    jobBySection: any,
    moreLinks: any,
    categoryData: any,
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
                    <DialogContent className="sm:max-w-[425px] h-[70vh] overflow-y-auto">
                        <ul className="mt-3">
                            {
                                jobByIndustry?.map((itm: any, i: number) => <li key={i}>
                                    <Link className="font-medium hover:text-primary_blue py-1 rounded duration-200 flex items-start gap-1" href="#">
                                        <span>
                                            <ChevronRight className="h-4 w-4 shrink-0 mt-1 transition-transform duration-200" />
                                        </span>
                                        <span>
                                            {itm}
                                        </span>
                                    </Link>
                                </li>)
                            }
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
                        <Accordion2 onClick={(e) => e.stopPropagation()} type="single" collapsible className="w-full grid grid-cols-1 gap-3">
                            {governmentJobs?.map((item: any, index: number) => <AccordionItem2 key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger2>{item?.category}</AccordionTrigger2>
                                <AccordionContent2>
                                    <ul className="list-inside space-y-1">
                                        {
                                            item?.subCategories?.map((subCategory: any, i: number) => <li className="hover:text-primary_blue duration-150 hover:ml-2" key={i}>
                                                <Link href="#" key={i} className="ml-6 flex gap-2">
                                                    <span>
                                                        <ArrowRight
                                                            size={16}
                                                            strokeWidth={1.4} absoluteStrokeWidth />
                                                    </span>
                                                    <span>
                                                        {subCategory}
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
                    <DialogContent className="sm:max-w-[425px] h-[70vh] overflow-y-auto">
                        <Accordion2 onClick={(e) => e.stopPropagation()} type="single" collapsible className="w-full grid grid-cols-1 gap-3">
                            {jobBySection?.map((item: any, index: number) => <AccordionItem2 key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger2>{item?.section}</AccordionTrigger2>
                                <AccordionContent2>
                                    <ul className="list-inside space-y-1">
                                        {
                                            item?.subCategories?.map((itm: any, i: number) => <li className="hover:text-primary_blue duration-150 hover:ml-2" key={i}>
                                                <Link href="#" key={i} className="ml-6 flex gap-2">
                                                    <span>
                                                        <ArrowRight
                                                            size={16}
                                                            strokeWidth={1.4} absoluteStrokeWidth />
                                                    </span>
                                                    <span>
                                                        {itm}
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