'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, Clock, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { MobileDialog, MobileDialogContent, MobileMobileDialogTrigger } from './ui/mobileDialog';

const BottomSearch: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { theme } = useTheme();
    const router = useRouter();

    const [searchHistory, setSearchHistory] = useState<string[]>([]);
    const [filteredSearchHistory, setFilteredSearchHistory] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [location, setLocation] = useState("");
    const [filteredSkills, setFilteredSkills] = useState<string[]>([]);
    const [showSkillDropdown, setShowSkillDropdown] = useState(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [mounted, setMounted] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null); // Ref for the input element

    // Ensure all hooks execute before any conditional returns
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        const history = Cookies.get("search_history");
        if (history) {
            const parsedHistory = JSON.parse(history);
            setSearchHistory(parsedHistory);
            setFilteredSearchHistory(parsedHistory);
        }
    }, []);

    const fetchSkills = async (query: string) => {
        try {
            const response = await fetch(`${process.env.NEXT_APP_BASE_URL}/api/v1/jobs/get-suggestions?search=${query}`);
            const result = await response.json();
            if (!result.error && result.data) {
                const skills = result.data.map((item: { search: string }) => item.search);
                setFilteredSkills(skills);
            }
        } catch (error) {
            console.error("Error fetching skills:", error);
        }
    };

    const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        if (value) {
            fetchSkills(value);
            setShowSkillDropdown(true);
        } else {
            setFilteredSkills([]);
            setShowSkillDropdown(false);
        }

        const filteredHistory = searchHistory.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredSearchHistory(filteredHistory);
    };

    const handleSearch = () => {
        if (!searchQuery) return;

        const queryParams = new URLSearchParams({
            query: searchQuery,
            location: location || "",
        }).toString();

        const previousSearches: string[] = Cookies.get("search_history")
            ? JSON.parse(Cookies.get("search_history") as string)
            : [];

        if (!previousSearches.includes(searchQuery)) {
            previousSearches.unshift(searchQuery);
        }
        const updatedSearches = previousSearches.slice(0, 5);
        Cookies.set("search_history", JSON.stringify(updatedSearches), { expires: 7 });

        router.push(`/search-details?${queryParams}`);
    };

    const removeFromHistory = (itemToRemove: string, e: React.MouseEvent) => {
        e.stopPropagation();
        const updatedHistory = searchHistory.filter((item) => item !== itemToRemove);
        setSearchHistory(updatedHistory);
        setFilteredSearchHistory(
            updatedHistory.filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
        );
        Cookies.set("search_history", JSON.stringify(updatedHistory), { expires: 7 });
    };

    const openModal = () => {
        setIsModalOpen(true);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsOpen(false);
    };

    const highlightMatch = (text: string, query: string) => {
        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return parts.map((part, index) => (
            <span key={index} className={part.toLowerCase() === query.toLowerCase() ? 'bg-yellow-300' : ''}>
                {part}
            </span>
        ));
    };

    const clearSearch = () => {
        setSearchQuery('');
        setShowSkillDropdown(false);
        inputRef.current?.focus();
    };

    if (!mounted) {
        return (
            <button className="group ml-3 mt-[10px] inline-flex h-10 w-10 flex-col items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 dark:text-black">
                <Search />
            </button>
        );
    }

    return (
        <div>
            <MobileDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <MobileMobileDialogTrigger asChild>
                    <div className="flex items-center justify-center mt-[10px]">
                        <button onClick={openModal}>
                            <div
                                data-tooltip-target="tooltip-wallet"
                                className={cn(
                                    "group inline-flex h-10 w-10 flex-col items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 dark:text-black"
                                )}
                            >
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Search />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Search</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </button>
                    </div>
                </MobileMobileDialogTrigger>
                <MobileDialogContent className="sm:max-w-[425px]">
                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "100%", opacity: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="px-2 font-semibold text-xl font-mono">Search</div>
                        <div className="mt-4 !max-h-full overflow-y-auto h-[60vh]">
                            <div className={`rounded-full  md:h-[60px] h-[50px] border md:p-2.5 py-1 shadow-lg shadow-gray-100 items-center border-gray-300 bg-[#ffffff] `}>
                                <div className="flex mt-0.5 items-center gap-2">
                                    <form className='flex items-center w-full' onSubmit={(e) => {
                                        e.preventDefault();
                                        handleSearch()
                                    }}>
                                        <div onClick={() => setShowSkillDropdown(!showSkillDropdown)} className={`flex w-full items-center space-x-2 ${showSkillDropdown ? "" : "cursor-not-allowed"}`}>
                                            <div className=" flex w-full items-center gap-2">
                                                <Search className="size-6 focus-within:!hidden ml-3 text-gray-500 dark:text-slate-200" />
                                                <Input
                                                    ref={inputRef}
                                                    type="text"
                                                    value={searchQuery}
                                                    onChange={handleSkillChange}
                                                    placeholder="Search By Keyword"
                                                    className="!px-1  !placeholder:font-medium w-full border-none font-medium placeholder-gray-500 shadow-none outline-none focus-visible:ring-0 dark:placeholder-slate-200"
                                                />
                                                {searchQuery && (
                                                    <X
                                                        className="text-gray-500 cursor-pointer"
                                                        onClick={clearSearch}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </form>
                                    <div className="flex gap-2 w-[20%] justify-end items-center">
                                        <Button onClick={handleSearch} size={"sm"} className='mr-2 bg-gray-600  text-white bg-primary !rounded-full w-8 h-8'>
                                            <Search />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                {showSkillDropdown && (filteredSkills.length > 0 || filteredSearchHistory.length > 0)
                                    ? (
                                        <ul
                                            className={cn(
                                                " max-h-72 w-full overflow-y-auto  ",
                                                {
                                                    "border-gray-700 ": theme === "dark",
                                                    "": theme !== "dark",
                                                },
                                            )}
                                            style={{ scrollbarWidth: "thin" }}
                                        >
                                            {filteredSearchHistory.length > 0 && (
                                                <>
                                                    {filteredSearchHistory.map((item: string) => (
                                                        <li
                                                            key={`history-${item}`}
                                                            onClick={() => {
                                                                setSearchQuery(item)
                                                                router.push(`/search-details?${item}`)
                                                                setShowSkillDropdown(false)

                                                            }}
                                                            className="group m-1 flex items-start border justify-between cursor-pointer p-1.5 capitalize rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                                                        >
                                                            <div className="flex items-center gap-2">
                                                                <Clock className="h-4 w-4 text-[#001968]" />
                                                                <div>
                                                                    <span className="text-[#001968]">{highlightMatch(item, searchQuery)}</span>
                                                                </div>
                                                            </div>
                                                            <button
                                                                onClick={(e) => removeFromHistory(item, e)}
                                                                className="hidden group-hover:block p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                                                            >
                                                                <X className="h-4 w-4 text-gray-400" />
                                                            </button>
                                                        </li>
                                                    ))}
                                                    {filteredSkills.filter((skill: any) => !filteredSearchHistory.includes(skill)).length > 0 && <Separator className="my-2" />}
                                                </>
                                            )}
                                            {filteredSkills.filter((skill: any) => !filteredSearchHistory.includes(skill)).map((skill: any) => (
                                                <li
                                                    key={`skill-${skill}`}
                                                    onClick={() => {
                                                        setSearchQuery(skill)
                                                        router.push(`/search-details?${skill}`)
                                                        setShowSkillDropdown(false)
                                                    }}
                                                    className="m-1 flex items-start rounded gap-2 cursor-pointer p-1.5 capitalize hover:bg-gray-100 dark:hover:bg-gray-700"
                                                >
                                                    <div>
                                                        <Search className="h-4 w-4 text-gray-400" />
                                                    </div>
                                                    <div>
                                                        <p>{highlightMatch(skill, searchQuery)}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    )
                                    : <div className="">
                                        <Image
                                            className='w-[300px] m-auto'
                                            src={'/icons/job_search.svg'}
                                            width={500}
                                            height={500}
                                            alt="search"
                                        />
                                    </div>
                                }
                            </div>
                        </div>
                    </motion.div>
                </MobileDialogContent>
            </MobileDialog>
        </div>
    );
};

export default BottomSearch;