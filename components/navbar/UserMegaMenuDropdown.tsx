import { useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Briefcase, BriefcaseIcon, ChevronDown, LogIn, User, Users } from "lucide-react"

import { cn } from "@/lib/utils"
import useApiRequest from "@/app/hooks/useApiRequest"

import PrimaryBtn from "../PrimaryBtn"
import SecondaryBtn from "../SecondaryBtn"
import { Button } from "../ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Label } from "../ui/label"
import { Input } from "../ui/input"

export default function UserMegaMenuDropdown() {
    const router = useRouter()
    const [activeDropdown, setActiveDropdown] = useState<"user" | "employer" | null>(null)
    const closeTimeoutRef = useRef<any>(null)

    const handleMouseEnter = (dropdown: "user" | "employer") => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current)
            closeTimeoutRef.current = null
        }
        setActiveDropdown(dropdown)
    }

    const handleMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(null)
        }, 300)
    }

    const handleRedirect = (role: "user" | "employer", action: string) => {
        const routes = {
            user: {
                login: "/login",
                register: "/registration",
                help: "/help-center",
            },
            employer: {
                login: "https://app.kalbelajobs.com/admin",
                register: "https://app.kalbelajobs.com/sign-up",
                help: "#",
            },
        }
        // @ts-ignore
        router.push(routes[role][action])
    }

    return (
        <section className="hidden text-gray-900 dark:text-slate-200 lg:block">
            <nav className="flex justify-center gap-4">
                <div
                    className="relative inline-flex"
                    onMouseEnter={() => handleMouseEnter("user")}
                    onMouseLeave={handleMouseLeave}
                >
                    <div>
                        <SecondaryBtn className="!bg-primary !text-white flex items-center gap-2 px-4 py-2">
                            Login/Signup
                            <ChevronDown
                                className={`h-2.5 w-2.5 transform transition-transform ${activeDropdown === "user" ? "rotate-180" : ""
                                    }`}
                            />
                        </SecondaryBtn>
                    </div>
                    {/* activeDropdown !== "user" &&  */}
                    {(activeDropdown === "user" &&
                        <div
                            id="user-dropdown"
                            className="absolute border top-full right-0 mt-2 w-[400px] 
  rounded-sm bg-white shadow-lg shadow-gray-200 
  transition-opacity duration-300 dark:bg-slate-700 
  whitespace-normal break-words overflow-y-auto max-h-[400px] "
                        >




                            <div className="grid grid-cols-2 px-4 py-3 text-[0.9rem] border-b  ">
                                <h1 className="ml-2 flex items-center gap-2">
                                    Job Seekers
                                </h1>
                                <h1 className="ml-2 flex items-center gap-2">
                                    Employee
                                </h1>
                            </div>

                            <div className="grid grid-cols-2 gap-2 p-2 ">
                                <div className="flex flex-col justify-center items-center p-2 bg-gray-100 rounded-md">
                                    <div className="flex flex-col items-center justify-center gap-1 mb-2 text-gray-500">
                                        <BriefcaseIcon size={45} strokeWidth={1} />
                                        <h4 className="font-semibold text-sm">Job Seekers</h4>
                                    </div>
                                    <ul className="space-y-1 flex !items-center !justify-center gap-1 !text-xs">
                                        <li>
                                            <Button
                                                size={"sm"}
                                                className="!w-[70px] !text-sm flex justify-center mt-1 border border-primary_blue hover:!bg-primary_blue gap-1 !bg-primary !text-white duration-300 " onClick={() => handleRedirect("user", "login")}>
                                                {/* <LogIn strokeWidth={2} /> */}
                                                Login
                                            </Button>
                                        </li>
                                        <li className="px-[1px] text-sm">OR</li>
                                        <li>
                                            <Button
                                                size={"sm"}
                                                className="!w-[70px] !text-sm flex justify-center border border-primary_blue hover:!bg-primary_blue gap-1 !bg-primary !text-white duration-300 "
                                                onClick={() => handleRedirect("user", "register")}>
                                                {/* <User strokeWidth={2} /> */}
                                                Register
                                            </Button>
                                        </li>
                                        <li className="hidden">
                                            <Button className="!w-full flex justify-start gap-3 hover:!bg-primary hover:!text-white !bg-transparent duration-300 !text-black" onClick={() => handleRedirect("user", "help")}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-headset"
                                                >
                                                    <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                                                    <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                                                </svg>

                                                Help Center</Button>
                                        </li>
                                    </ul>


                                    {/* <Button onClick={() => handleRedirect("user", "register")}>Register</Button> */}
                                    {/* <Button onClick={() => handleRedirect("user", "help")}>Help Center</Button> */}
                                </div>



                                <div className="flex flex-col justify-center items-center p-2 bg-gray-100 rounded-md">
                                    <div className="flex flex-col items-center justify-center gap-1 mb-2 text-gray-500">
                                        <User size={45} strokeWidth={1} />
                                        <h4 className="font-semibold text-sm">Employer</h4>
                                    </div>
                                    <ul className="space-y-1 flex !items-center !justify-center gap-1 !text-xs">
                                        <li>
                                            <Button
                                                size={"sm"}
                                                className="!w-[70px] !text-sm flex justify-center mt-1 border border-primary_blue hover:!bg-primary_blue gap-1 !bg-primary !text-white duration-300 " onClick={() => handleRedirect("employer", "login")}>
                                                {/* <LogIn strokeWidth={2} /> */}
                                                Login
                                            </Button>
                                        </li>
                                        <li className="px-[1px] text-sm">OR</li>
                                        <li>
                                            <Button
                                                size={"sm"}
                                                className="!w-[70px] !text-sm flex justify-center border border-primary_blue hover:!bg-primary_blue gap-1 !bg-primary !text-white duration-300 "
                                                onClick={() => handleRedirect("employer", "register")}>
                                                {/* <User strokeWidth={2} /> */}
                                                Register
                                            </Button>
                                        </li>
                                        <li className="hidden">
                                            <Button className="!w-full flex justify-start gap-3 hover:!bg-primary hover:!text-white !bg-transparent duration-300 !text-black" onClick={() => handleRedirect("user", "help")}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-headset"
                                                >
                                                    <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                                                    <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                                                </svg>

                                                Help Center</Button>
                                        </li>
                                    </ul>


                                    {/* <Button onClick={() => handleRedirect("user", "register")}>Register</Button> */}

                                </div>
                            </div>

                            <div className="px-2 pb-2">
                                <Link
                                    href={'#'}
                                    className="!w-full rounded py-2 !text-sm flex justify-center mt-1  hover:!text-white hover:!bg-primary_blue gap-1 !bg-gray-200 !text-black duration-300 "
                                >
                                    Help Center
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </section>
    )
}
