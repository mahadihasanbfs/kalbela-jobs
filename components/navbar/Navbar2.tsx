'use client'

import { useUserData } from "@/utils/encript_decript";
import { ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { ThemeToggle } from "../ThemeToggle";
import { Skeleton } from "../ui/skeleton";
import UserMegaMenuDropdown from "./UserMegaMenuDropdown";
import UserNav from "./UserNav";

const Navbar2 = () => {
    const pathname = usePathname();
    const { theme } = useTheme();
    const [user] = useUserData();
    const isHomePage = pathname === "/";

    const router = useRouter();

    const [hideLogo, setHideLogo] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(true);
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                setIsAuthenticated(!!user);
            } catch (error) {
                console.error("Error fetching user data:", error);
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    useEffect(() => {
        if (isScrolled) {
            const timeout = setTimeout(() => {
                setHideLogo(true);
            }, 100);

            return () => clearTimeout(timeout);
        } else {
            setHideLogo(false);
        }
    }, [isScrolled]);

    const links = [
        { name: "Home", href: "/", isDropdown: false },
        { name: "E-Learning", href: "/e-learning", isDropdown: false },
        { name: "Jobseeker", href: "/jobseeker", isDropdown: false },
        { name: "Employer", href: "/employer", isDropdown: false },
        {
            name: "Services",
            href: "#",
            isDropdown: true,
            dropdownItems: [
                { name: "CV Writing", href: "/services/cv-writing" },
                { name: "Resume Writing", href: "/services/resume-writing" },
                { name: "Portfolio", href: "/services/portfolio" },
            ],
        },
        { name: "Training", href: "/training", isDropdown: false },
        { name: "Contact Us", href: "/contact", isDropdown: false },
    ];

    return (
        <nav
            className={`${isScrolled
                ? " bg-white/75 backdrop-blur-lg border-b dark:bg-black"
                : isHomePage
                    ? "bg-transparent"
                    : "dark:bg-[#121a2d]"
                } shadow-none lg:py-2 md:py-1 py-1  !border-[#cbcacae4]`}
        >
            <MaxWidthWrapper className="flex h-[64px] items-center justify-between">
                <Link href="/">
                    <img
                        className={`
            mx-auto h-auto w-32 md:w-48 transition-all duration-300 ease-in-out
            ${!isScrolled ? "md:translate-y-6 md:opacity-0" : "md:translate-y-0 md:opacity-100"}
            ${!hideLogo ? "md:hidden" : "md:block"}
        `}
                        src={theme === "dark" ? "/logo_dark.png" : "/icons/logo.svg"}
                        alt="logo"
                    />
                </Link>


                <div
                    className={`md:flex hidden border-primary_blue items-center justify-between gap-4 lg:gap-6 transition-all duration-300 ease-in-out ${!isScrolled ? "w-full" : "w-[900px]"
                        }`}
                >



                    <ul className="lg:flex hidden items-center gap-6 text-[1.130rem]">
                        {links.map((link, index) => {
                            const isActive = pathname === link.href;

                            return (
                                <li
                                    key={index}
                                    className="relative "
                                    onMouseEnter={() => link.isDropdown && setOpenDropdown(index)}
                                    onMouseLeave={() => link.isDropdown && setOpenDropdown(null)}
                                >
                                    <Link href={link.href}>
                                        <div
                                            className={`flex items-center font-regular duration-300 ${isActive
                                                ? "text-primary font-semibold relative after:bg-primary after:h-1 after:rounded-lg after:w-full after:absolute after:top-12 after:left-0"
                                                : "text-gray-800 dark:text-gray-200"
                                                }`}
                                        >
                                            {link.name} {link.isDropdown && <ChevronDown className="ml-1" strokeWidth={1.25} />}
                                        </div>
                                    </Link>

                                    {link.isDropdown && openDropdown === index && (
                                        <ul className="absolute left-0 -mt-2 shadow-lg overflow-hidden w-48 ">
                                            <div className="bg-white dark:bg-primary shadow-lg rounded-md mt-4 overflow-hidden">
                                                {link.dropdownItems?.map((item, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link href={item.href}>
                                                            <div className="px-4 py-1.5 !text-[1rem] text-primary dark:text-gray-200 duration-300 hover:text-white hover:bg-primary dark:hover:bg-gray-700">
                                                                {item.name}
                                                            </div>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </div>
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                    <ul className="lg:flex hidden items-center gap-6 text-[1.130rem]">
                        <li>
                            {/* {!user
                                ? <div className="font-regular duration-300 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                                    <Link
                                        className=" bg-primary_blue hover:bg-primary text-white rounded text-sm px-4 py-3  hover:text-gray-100 duration-300 pr-3 border-primary"
                                        href="/login"
                                    >
                                        Login | Register
                                    </Link>
                                   
                                </div>

                                : <UserNav loading={loading} user={user} />} */}

                            {!user && !loading && (
                                <UserMegaMenuDropdown />
                            )}
                        </li>
                        {<li>
                            <ThemeToggle />
                        </li>}
                    </ul>
                </div>

                <div className="items-center lg:hidden flex gap-3">
                    <div>
                        <ThemeToggle />
                    </div>
                    {loading ? <Skeleton className="h-8 w-8 rounded-full" /> : <UserNav loading={loading} user={user} />}

                </div>

            </MaxWidthWrapper>
        </nav>
    );
};

export default Navbar2;
