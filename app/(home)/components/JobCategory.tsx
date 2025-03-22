'use client';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';

const jobCategories = [
    {
        id: 0,
        title: "Jobs by Category",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-layout-list"
        >
            <rect width={7} height={7} x={3} y={3} rx={1} />
            <rect width={7} height={7} x={3} y={14} rx={1} />
            <path d="M14 4h7" />
            <path d="M14 9h7" />
            <path d="M14 15h7" />
            <path d="M14 20h7" />
        </svg>,
        menu: [
            {
                title: 'Software & IT',
                links: [
                    {
                        id: 0,
                        title: "Marketing",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Finance",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Human Resources",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Consulting",
                        href: "#"
                    },
                ]
            },
            {
                title: 'Networking',
                links: [
                    {
                        id: 0,
                        title: "Marketing",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Finance",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Human Resources",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Consulting",
                        href: "#"
                    },
                ]
            }
        ]
    },
    {
        id: 1,
        title: "Job by Location",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-map-pin-house"
        >
            <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
            <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
            <path d="M18 22v-3" />
            <circle cx={10} cy={10} r={3} />
        </svg>
        ,
        menu: [
            {
                title: 'Medical',
                links: [
                    {
                        id: 0,
                        title: "Marketing",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Finance",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Human Resources",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Consulting",
                        href: "#"
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Government Jobs",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-landmark"
        >
            <line x1={3} x2={21} y1={22} y2={22} />
            <line x1={6} x2={6} y1={18} y2={11} />
            <line x1={10} x2={10} y1={18} y2={11} />
            <line x1={14} x2={14} y1={18} y2={11} />
            <line x1={18} x2={18} y1={18} y2={11} />
            <polygon points="12 2 20 7 4 7" />
        </svg>
        ,
        menu: [
            {
                title: 'Management',
                links: [
                    {
                        id: 0,
                        title: "Marketing",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Finance",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Human Resources",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Consulting",
                        href: "#"
                    },
                ]
            },
            {
                title: 'Sales',
                links: [
                    {
                        id: 0,
                        title: "Marketing",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Finance",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Human Resources",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Consulting",
                        href: "#"
                    },
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Job by Section",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-layout-template"
        >
            <rect width={18} height={7} x={3} y={3} rx={1} />
            <rect width={9} height={7} x={3} y={14} rx={1} />
            <rect width={5} height={7} x={16} y={14} rx={1} />
        </svg>

        ,
        menu: [
            {
                title: 'Management',
                links: [
                    {
                        id: 0,
                        title: "Marketing",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Finance",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Human Resources",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Consulting",
                        href: "#"
                    },
                ]
            },
            {
                title: 'Sales',
                links: [
                    {
                        id: 0,
                        title: "Marketing",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Finance",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Human Resources",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Consulting",
                        href: "#"
                    },
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Job by Division",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-copy-slash"
        >
            <line x1={12} x2={18} y1={18} y2={12} />
            <rect width={14} height={14} x={8} y={8} rx={2} ry={2} />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
        ,
        menu: [
            {
                title: 'Management',
                links: [
                    {
                        id: 0,
                        title: "Marketing",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Finance",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Human Resources",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Consulting",
                        href: "#"
                    },
                ]
            },
            {
                title: 'Sales',
                links: [
                    {
                        id: 0,
                        title: "Marketing",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Finance",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Human Resources",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Consulting",
                        href: "#"
                    },
                ]
            }
        ]
    },
    {
        id: 5,
        title: "More Links",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-link"
        >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>

        ,
        menu: [
            {
                title: 'Management',
                links: [
                    {
                        id: 0,
                        title: "Marketing",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Finance",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Human Resources",
                        href: "#"
                    },
                    {
                        id: 1,
                        title: "Consulting",
                        href: "#"
                    },
                ]
            }
        ]
    },
];

const JobCategory = () => {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    return (
        <div className='bg-gray-100 mt-10 relative z-50'>
            <MaxWidthWrapper>
                <ul className="md:flex hidden items-center gap-6 relative ">
                    {jobCategories.map((category) => (
                        <li
                            key={category.id}
                            className="relative group"
                            onMouseEnter={() => setOpenDropdown(category.id)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <button className={`${openDropdown === category.id ? '!bg-white' : ''} h-[45px] flex items-center gap-2 cursor-pointer py-2 px-4`}>
                                <div className="">
                                    {category?.icon}
                                </div>
                                <span className="font-semibold">{category.title}</span>
                                <ChevronDown size={16} />
                            </button>

                            {/* Animated Mega Menu */}
                            <AnimatePresence>
                                {openDropdown === category.id && (
                                    <motion.div
                                        initial={{ y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute left-0 top-full mt-0">
                                        <div
                                            className=" bg-white shadow-xl border rounded-lg p-4 mt-2 gap-4"
                                            style={{
                                                display: 'grid',
                                                gridTemplateColumns: `repeat(${category.menu.length}, auto)`,
                                                minWidth: 'auto'
                                            }}
                                        >
                                            {category.menu.map((submenu: any, subIndex: any) => (
                                                <div key={subIndex} className='min-w-[200px] p-2'>
                                                    <h4 className="font-semibold text-md mb-1">{submenu.title}</h4>
                                                    <ul>
                                                        {submenu.links.map((link: any, i: any) => (
                                                            <li key={i} className="text-gray-700 hover:text-blue-500 cursor-pointer py-1">
                                                                {link?.title}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                    ))}
                </ul>

                <div className="md:hidden block gap-2 my-2">
                    <Accordion type="single" collapsible>
                        {jobCategories.map((category, index) => (
                            <AccordionItem key={category?.id} value={`category-${index}`}>
                                <AccordionTrigger className="flex items-center justify-between p-4 bg-white border-b">
                                    <div className="flex items-center">
                                        {category.icon}
                                        <span className="ml-2">{category?.title}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="p-4 bg-gray-50">
                                    <ul className="!space-y-4">
                                        {category.menu.map((submenu, index) => (
                                            <li key={index}>
                                                <strong>{submenu.title}</strong>
                                                <ul>
                                                    {submenu.links.map((link: any, idx: any) => (
                                                        <li key={idx} className="ml-4 mb-2 !text-[18px]">
                                                            <Link href={link?.href}>{link?.title}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

            </MaxWidthWrapper>
        </div>
    );
};

export default JobCategory;
