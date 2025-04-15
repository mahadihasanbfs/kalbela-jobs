'use client';
import useApiRequest from "@/app/hooks/useApiRequest";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Accordion2, AccordionContent2, AccordionItem2, AccordionTrigger2 } from "@/components/ui/accordion2";
import { ArrowBigRight, ArrowRight, ArrowUpRight, ChevronRight, Factory, Link2, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MobileCategory from "./MobileCategory";
import { reducer } from '../../../hooks/use-toast';
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const JobCategory2 = () => {
    const [openMenu, setOpenMenu] = useState<'category' | 'job_industry' | 'gov_job' | 'job_by_section' | 'job_by_location' | 'more_links' | null>(null);
    const router = useRouter();


    const jobByCategory = [
        'Accounting/Finance (10)', 'Design/Creative & Art (8)', 'Secretary/Receptionist (3)',
        'Commercial/Logistics (5)', 'Engineering (7)', 'IT & Telecommunication (9)',
        'Marketing/Sales (6)', 'Medical/Pharma (4)', 'Education/Training (2)',
        'Garments/Textile (1)', 'Customer Support/Call Center (1)',
        'Media/Advertising/Event Mgt. (1)', 'Research/Consultancy (1)', 'Security/Support Service (1)'
    ];

    const jobByIndustry = [
        'Technology/Software Development (12)',
        'Healthcare/Medical (10)',
        'Education/Training (8)',
        'Finance/Banking (9)',
        'Retail/E-commerce (7)',
        'Manufacturing/Production (6)',
        'Construction/Real Estate (5)',
        'Transportation/Logistics (4)',
        'Media/Entertainment (3)',
        'Hospitality/Tourism (2)'
    ];

    const governmentJobs = [
        {
            category: "Administrative & Ministerial Jobs",
            subCategories: [
                "BCS Administration (Cadre Services)",
                "Ministry Jobs (Finance, Education, Health, etc.)",
                "Public Service Commission (PSC) Jobs"
            ]
        },
        {
            category: "Defence & Law Enforcement Jobs",
            subCategories: [
                "Bangladesh Army",
                "Bangladesh Navy",
                "Bangladesh Air Force",
                "Bangladesh Police (RAB, CID, SB, etc.)",
                "Border Guard Bangladesh (BGB)",
                "Bangladesh Ansar & VDP",
                "Bangladesh Coast Guard"
            ]
        },
        {
            category: "Banking & Financial Sector Jobs",
            subCategories: [
                "Government Bank Jobs (Bangladesh Bank, Sonali Bank, etc.)",
                "Bangladesh Securities and Exchange Commission (BSEC)",
                "Insurance Sector (Sadharan Bima, Jiban Bima)"
            ]
        },
        {
            category: "Education & Research Jobs",
            subCategories: [
                "Public University Jobs (Dhaka University, BUET, etc.)",
                "Public College & School Jobs",
                "Bangladesh Technical Education Board (BTEB)",
                "Bangladesh Agricultural Research Council (BARC)",
                "Bangladesh Council of Scientific and Industrial Research (BCSIR)"
            ]
        },
        {
            category: "Health & Medical Jobs",
            subCategories: [
                "Government Hospitals & Health Centers",
                "Directorate General of Health Services (DGHS)",
                "Bangladesh Medical Research Council (BMRC)"
            ]
        },
        {
            category: "Engineering & Technical Jobs",
            subCategories: [
                "Public Works Department (PWD)",
                "Bangladesh Power Development Board (BPDB)",
                "Bangladesh Water Development Board (BWDB)",
                "Bangladesh Railway",
                "Bangladesh Telecommunications Company Limited (BTCL)"
            ]
        },
        {
            category: "Transport & Communication Jobs",
            subCategories: [
                "Bangladesh Railway",
                "Bangladesh Road Transport Corporation (BRTC)",
                "Bangladesh Shipping Corporation (BSC)",
                "Bangladesh Civil Aviation Authority (CAAB)"
            ]
        },
        {
            category: "Legal & Judiciary Jobs",
            subCategories: [
                "Bangladesh Judicial Service",
                "Attorney General’s Office",
                "Anti-Corruption Commission (ACC)"
            ]
        },
        {
            category: "Agricultural & Fisheries Jobs",
            subCategories: [
                "Ministry of Agriculture",
                "Department of Fisheries",
                "Bangladesh Agricultural Development Corporation (BADC)"
            ]
        },
        {
            category: "Environmental & Forest Jobs",
            subCategories: [
                "Bangladesh Forest Department",
                "Department of Environment (DOE)",
                "Bangladesh Meteorological Department (BMD)"
            ]
        },
        {
            category: "Media & Information Jobs",
            subCategories: [
                "Bangladesh Betar (Radio Bangladesh)",
                "Bangladesh Television (BTV)",
                "Press Information Department (PID)",
                "Department of Films and Publications (DFP)"
            ]
        },
        {
            category: "Local Government Jobs",
            subCategories: [
                "City Corporation & Municipality Jobs",
                "Union Parishad Jobs"
            ]
        },
        {
            category: "Public Utility & Service Jobs",
            subCategories: [
                "Bangladesh Rural Electrification Board (BREB)",
                "Dhaka WASA & Other WASAs",
                "Titas Gas Transmission & Distribution Company"
            ]
        },
        {
            category: "ICT & Digital Services Jobs",
            subCategories: [
                "Bangladesh Computer Council (BCC)",
                "A2I (Access to Information)"
            ]
        }
    ];

    const jobBySection = [
        {
            section: "Engineering",
            subCategories: [
                "Software Engineering",
                "Mechanical Engineering",
                "Electrical Engineering",
                "Civil Engineering",
                "Chemical Engineering"
            ]
        },
        {
            section: "Design",
            subCategories: [
                "UI/UX Design",
                "Graphic Design",
                "Web Design",
                "Product Design"
            ]
        },
        {
            section: "Marketing",
            subCategories: [
                "Digital Marketing",
                "SEO Specialist",
                "Content Marketing",
                "Social Media Manager",
                "PPC Specialist"
            ]
        },
        {
            section: "Sales",
            subCategories: [
                "Sales Representative",
                "Sales Manager",
                "Business Development Manager",
                "Account Executive"
            ]
        },
        {
            section: "Human Resources",
            subCategories: [
                "HR Manager",
                "Recruiter",
                "HR Assistant",
                "Talent Acquisition Specialist"
            ]
        },
        {
            section: "Customer Support",
            subCategories: [
                "Customer Service Representative",
                "Customer Success Manager",
                "Technical Support Specialist"
            ]
        },
        {
            section: "Operations",
            subCategories: [
                "Operations Manager",
                "Supply Chain Manager",
                "Logistics Coordinator"
            ]
        },
        {
            section: "Finance",
            subCategories: [
                "Financial Analyst",
                "Accountant",
                "Auditor",
                "Tax Specialist"
            ]
        }
    ];

    const jobByLocation = [
        {
            location: "Bangladesh",
            jobs: [
                "Software Engineer",
                "Graphic Designer",
                "Business Analyst",
                "Sales Executive",
                "Marketing Specialist",
                "Frontend Developer",
                "Backend Developer",
                "Project Manager",
                "Content Writer",
                "Mobile App Developer"
            ]
        },
        {
            location: "New York",
            jobs: [
                "Software Engineer",
                "Product Manager",
                "UX Designer",
                "Marketing Specialist",
                "Sales Representative"
            ]
        },
        {
            location: "San Francisco",
            jobs: [
                "Full Stack Developer",
                "Data Scientist",
                "DevOps Engineer",
                "Product Designer",
                "Sales Executive"
            ]
        },
        {
            location: "Los Angeles",
            jobs: [
                "Graphic Designer",
                "Content Writer",
                "Business Analyst",
                "HR Manager",
                "Customer Success Manager"
            ]
        },
        {
            location: "Chicago",
            jobs: [
                "Software Engineer",
                "QA Tester",
                "Project Manager",
                "Marketing Coordinator",
                "Account Executive"
            ]
        },
        {
            location: "Austin",
            jobs: [
                "Backend Developer",
                "Data Analyst",
                "Cloud Engineer",
                "Product Owner",
                "Business Development Manager"
            ]
        },
        {
            location: "London",
            jobs: [
                "Frontend Developer",
                "SEO Specialist",
                "Digital Marketing Manager",
                "Sales Director",
                "Customer Service Representative"
            ]
        },
        {
            location: "Berlin",
            jobs: [
                "Product Designer",
                "Mobile App Developer",
                "Software Architect",
                "Recruiter",
                "Data Analyst"
            ]
        },
        {
            location: "Tokyo",
            jobs: [
                "UI/UX Designer",
                "Embedded Systems Engineer",
                "Machine Learning Engineer",
                "Community Manager",
                "Operations Coordinator"
            ]
        }
    ];

    const moreLinks = [
        'Portfolio',
        'CV Maker',
        'Job Search',
        'Career Tips',
        'Job Alerts',
        'Company Profiles',
        'Salary Insights',
    ];

    //============ Category ============//
    const { data: categoryData, loading: categoryLoading, error: categoryError } = useApiRequest<any>(
        "category/top-five",
        "GET"
    )

    //============ industry ============//
    const { data: industry, loading: industryLoading, error: industriesError } = useApiRequest<any>(
        "config/get-job-by-industry",
        "GET"
    )

    //============ government ============//
    const { data: gov_job, loading: govLoading, error: govError } = useApiRequest<any>(
        "jobs/get-all-org-jobs",
        "GET"
    )

    const handleMouseEnter = (menu: 'category' | 'job_industry' | 'gov_job' | 'job_by_section' | 'job_by_location' | 'more_links') => {
        setOpenMenu(menu);
    };

    const handleMouseLeave = () => {
        setOpenMenu(null);
    };

    const handleClick = (menu: 'category' | 'job_industry' | 'gov_job' | 'job_by_section' | 'job_by_location' | 'more_links') => {
        setOpenMenu(prev => (prev === menu ? null : menu));
    };

    //============ Category ============//
    const functionalCategory = categoryData?.data?.filter((itm: any) => itm?.megaCategory === 'Functional') ?? [];

    const industrialCategory = categoryData?.data?.filter((itm: any) => itm?.megaCategory === 'Industrial') ?? [];

    const specialCategory = categoryData?.data?.filter((itm: any) => itm?.megaCategory === 'Special Skills Job') ?? [];

    //============ Industry ============//





    console.log("=======>>>>>>>", gov_job);
    const handleSearch = (searchQuery: string) => {
        if (!searchQuery) return

        const queryParams = new URLSearchParams({
            query: searchQuery,
        }).toString()

        // Retrieve previous searches from cookies
        const previousSearches: string[] = Cookies.get("search_history")
            ? JSON.parse(Cookies.get("search_history") as string)
            : []

        // Add new search to the front of the array (Last-In, First-Out)
        if (!previousSearches.includes(searchQuery)) {
            previousSearches.unshift(searchQuery)
        }
        const updatedSearches = previousSearches.slice(0, 5)

        // Update cookies with the new search history
        Cookies.set("search_history", JSON.stringify(updatedSearches), { expires: 7 })

        router.push(`/search-details?${queryParams}`)
    }

    return (
        <div className="relative z-20 opacity-100">
            <div className="lg:block hidden rounded-md border bg-gray-100">
                <MaxWidthWrapper className="!py-0 !px-0 relative ">
                    <div className="grid lg:grid-cols-6 md:grid-cols-3  w-full justify-between items-center gap-2">
                        {/* Job By Category */}
                        <div
                            className={`relative border-t-4  hover:bg-white ${openMenu === 'category' ? 'bg-white border-primary_blue text-primary_blue' : 'border-transparent'}`}
                            onMouseEnter={() => handleMouseEnter('category')}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClick('category')}
                        >
                            <div className="py-4 px-3 font-semibold hover:text-primary_blue flex items-center text-md text-primary duration-300 cursor-pointer gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-list">
                                    <rect width={7} height={7} x={3} y={3} rx={1} />
                                    <rect width={7} height={7} x={3} y={14} rx={1} />
                                    <path d="M14 4h7" />
                                    <path d="M14 9h7" />
                                    <path d="M14 15h7" />
                                    <path d="M14 20h7" />
                                </svg>
                                Job By Category
                            </div>
                        </div>

                        {/*  Job by industry */}
                        <div
                            className={`relative border-t-4 hover:bg-white ${openMenu === 'job_industry' ? 'bg-white   border-primary_blue text-primary_blue' : 'border-transparent'}`}
                            onMouseEnter={() => handleMouseEnter('job_industry')}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClick('job_industry')}
                        >
                            <div className="py-4 px-3 font-semibold flex hover:text-primary_blue items-center text-md text-primary  duration-300 cursor-pointer gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={26}
                                    height={26}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={1.6}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-factory-icon lucide-factory"
                                >
                                    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                                    <path d="M17 18h1" />
                                    <path d="M12 18h1" />
                                    <path d="M7 18h1" />
                                </svg>
                                Job by Industry
                            </div>
                        </div>

                        {/*  government jobs */}
                        <div
                            className={`relative border-t-4 hover:bg-white ${openMenu === 'gov_job' ? 'bg-white border-primary_blue text-primary_blue' : 'border-transparent'}`}
                            onMouseEnter={() => handleMouseEnter('gov_job')}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClick('gov_job')}
                        >
                            <div className="py-4 px-3 font-semibold hover:text-primary_blue flex items-center text-md text-primary duration-300 cursor-pointer gap-2">
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
                                Government Jobs
                            </div>
                            {(openMenu == 'gov_job' &&
                                <div className="!py-0 text-black w-[420px] absolute left-0 right-0 top-14 max-h-[400px] shadow-xl rounded-b-xl overflow-y-auto scrollbar-">
                                    <div
                                        className="border p-6 bg-white rounded-b-xl shadow-b-xl"
                                        onMouseEnter={() => handleMouseEnter('gov_job')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <ul className=" gap-2">
                                            <li className="">
                                                <h4 className="font-semibold pb-2 mb-4 border-b">Government Jobs ({gov_job?.data.length})</h4>

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
                                                    gov_job?.data?.map((itm: any, i: number) => (
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
                                    </div>
                                </div>
                            )}
                        </div>


                        {/* jobs by section */}
                        <div
                            className={`relative  border-t-4  hover:bg-white ${openMenu === 'job_by_section' ? 'bg-white border-primary_blue text-primary_blue' : 'border-transparent'}`}
                            onMouseEnter={() => handleMouseEnter('job_by_section')}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClick('job_by_section')}
                        >
                            <div className="py-4 px-3 font-semibold hover:text-primary_blue flex items-center text-md text-primary duration-300 cursor-pointer gap-2">
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
                                Job By Section
                            </div>
                            {(openMenu == 'job_by_section' &&
                                <div className="!py-0 text-black w-[420px] absolute left-0 right-0 top-14 max-h-[400px] shadow-xl rounded-b-xl overflow-y-auto scrollbar-">
                                    <div
                                        className="border p-4 shadow-lg bg-white"
                                        onMouseEnter={() => handleMouseEnter('job_by_section')}
                                        onMouseLeave={handleMouseLeave}
                                    >

                                        <Accordion2 onClick={(e) => e.stopPropagation()} type="single" collapsible className="w-full grid grid-cols-1 gap-3">
                                            {jobBySection?.map((item, index) => <AccordionItem2 key={index} value={`item-${index + 1}`}>
                                                <AccordionTrigger2>{item?.section}</AccordionTrigger2>
                                                <AccordionContent2>
                                                    <ul className="list-inside space-y-1">
                                                        {
                                                            item?.subCategories?.map((subCategory, i) => <li className="hover:text-primary_blue duration-150 hover:ml-2" key={i}>
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
                                    </div>
                                </div>
                            )}
                        </div>


                        {/* jobs by location */}
                        <div
                            className={`relative  border-t-4  hover:bg-white ${openMenu === 'job_by_location' ? 'bg-white border-primary_blue text-primary_blue' : 'border-transparent'}`}
                            onMouseEnter={() => handleMouseEnter('job_by_location')}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClick('job_by_location')}
                        >
                            <div className="py-4 px-3 hover:text-primary_blue flex items-center text-md text-primary font-semibold duration-300 cursor-pointer gap-2">
                                <MapPin size={26} strokeWidth={1} />
                                Job By Location
                            </div>
                            {(openMenu == 'job_by_location' &&
                                <div className="!py-0 text-black w-[420px] absolute left-0 right-0 top-14 max-h-[400px] shadow-xl rounded-b-xl overflow-y-auto scrollbar-">
                                    <div
                                        className="border p-4 shadow-lg bg-white"
                                        onMouseEnter={() => handleMouseEnter('job_by_location')}
                                        onMouseLeave={handleMouseLeave}
                                    >

                                        <Accordion2 onClick={(e) => e.stopPropagation()} type="single" collapsible className="w-full grid grid-cols-1 gap-3">
                                            {jobByLocation?.map((item, index) => <AccordionItem2 key={index} value={`item-${index + 1}`}>
                                                <AccordionTrigger2>{item?.location}</AccordionTrigger2>
                                                <AccordionContent2>
                                                    <ul className="list-inside space-y-1">
                                                        {
                                                            item?.jobs?.map((job, i) => <li className="hover:text-primary_blue duration-150 hover:ml-2" key={i}>
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
                                    </div>
                                </div>
                            )}
                        </div>


                        {/* moreLinks */}
                        <div
                            className={`relative bg-transparent border-t-4 hover:bg-white ${openMenu === 'more_links' ? 'bg-white   border-primary_blue text-primary_blue' : 'border-transparent'}`}
                            onMouseEnter={() => handleMouseEnter('more_links')}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClick('more_links')}
                        >
                            <div className="py-4 px-3 hover:text-primary_blue flex items-center text-md text-primary font-semibold duration-300 cursor-pointer gap-2">
                                <Link2 size={26} strokeWidth={1.4} absoluteStrokeWidth />
                                More Links
                            </div>
                            {(openMenu == 'more_links' &&
                                <div className="!py-0  w-[420px] absolute left-[-184px] top-14 max-h-[400px] overflow-y-auto shadow-xl rounded-b-xl scrollbar-">
                                    <div
                                        className="border p-4 shadow-lg bg-white"
                                        onMouseEnter={() => handleMouseEnter('more_links')}
                                        onMouseLeave={handleMouseLeave}
                                    >

                                        <ul className="list-inside space-y-4">
                                            {
                                                moreLinks?.map((items: any, i: any) => <li className="hover:text-primary_blue duration-150 hover:ml-2" key={i}>
                                                    <Link href="#" key={i} className="ml-6 flex gap-2">
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


                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>


            <MobileCategory
                jobByCategory={jobByCategory}
                categoryData={[
                    categoryLoading,
                    functionalCategory,
                    industrialCategory,
                    specialCategory
                ]}
                jobByIndustry={industry}
                governmentJobs={gov_job}
                govLoading={govLoading}
                jobByLocation={jobByLocation}
                jobBySection={jobBySection}
                moreLinks={moreLinks}
            />
            {/* Job By Category Dropdown */}
            {openMenu === 'category' && (
                <MaxWidthWrapper className="!py-0 !px-0 absolute left-0 right-0 top-14">
                    <div
                        className="border-xl border rounded-b-lg p-0 shadow-2xl bg-white"
                        onMouseEnter={() => handleMouseEnter('category')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <ul className="grid md:grid-cols-3 gap-2">
                            <li className=" border-r  p-6">
                                <h4 className="font-semibold ">Functional ({functionalCategory[0]?.categories.length})</h4>

                                {categoryLoading
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
                                    ))}
                            </li>

                            <li className="border-r p-6">
                                <h4 className="font-semibold ">Industrial ({industrialCategory[0]?.categories.length})</h4>

                                {categoryLoading
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
                                    ))}
                            </li>

                            <li className="border-r p-6">
                                <h4 className="font-semibold ">Special ({specialCategory[0]?.categories.length})</h4>

                                {categoryLoading
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
                                    specialCategory[0]?.categories?.map((itm: any, i: number) => (
                                        <div key={i}>
                                            <Link className="group hover:border-primary_blue  hover:text-primary_blue py-1 rounded duration-200 text-md flex items-center gap-1" href={`/search-details?${itm?.name}`}>
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
                                    ))}
                            </li>
                        </ul>
                    </div>
                </MaxWidthWrapper>
            )}

            {/* industry Jobs Dropdown */}
            {openMenu === 'job_industry' && (
                <MaxWidthWrapper className="!py-0 !px-0 absolute left-0 right-0 top-14">
                    <div
                        className="border p-6  rounded-b-lg shadow-2xl bg-white"
                        onMouseEnter={() => handleMouseEnter('job_industry')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h2 className="font-semibold border-b mb-3 pb-2">Industries ({industry?.data.length})</h2>
                        <ul className="grid md:grid-cols-3 gap-2">
                            {industry?.data?.map((itm: any, i: number) => (
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
                    </div>
                </MaxWidthWrapper>
            )}

        </div>
    );
};

export default JobCategory2;
