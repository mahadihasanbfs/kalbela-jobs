'use client'

import { Fragment, useEffect, useState } from "react"
import Link from "next/link"
import { Briefcase, LogIn, User, UserPlus, Users } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuGroup,
      DropdownMenuItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import PrimaryBtn from "../PrimaryBtn"
import SecondaryBtn from "../SecondaryBtn"
import { logout } from "@/utils/encript_decript"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import { toast } from "@/hooks/use-toast"
import { MobileDialog, MobileDialogContent, MobileMobileDialogTrigger } from "../ui/mobileDialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { cn } from "@/lib/utils"
import LoginForm from "@/app/(auth)/components/LoginForm"

const BottomNavProfile = ({ user }: { user: any }) => {
      const router = useRouter()
      const [alignment, setAlignment] = useState("start");
      const [isClient, setIsClient] = useState(false);

      useEffect(() => {
            const handleResize = () => {
                  setAlignment(window.innerWidth >= 1024 ? "end" : "start");
            };

            // Check if running in the browser (client side)
            setIsClient(true);

            window.addEventListener("resize", handleResize);
            handleResize(); // Set initial alignment
            return () => window.removeEventListener("resize", handleResize);
      }, []);

      const handleLogout = () => {
            logout()

            setTimeout(() => {
                  const get_user = Cookies.get("kalbelajobs_user");
                  if (!get_user) {
                        toast({
                              title: "Successfully logged out",
                        })
                        router.push('/login');
                  }
            }, 500);
      }

      if (!isClient) return (
            <button>
                  <div
                        data-tooltip-target="tooltip-wallet"
                        className={cn(
                              "group inline-flex h-10 w-10 flex-col items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 dark:text-black",
                        )}
                  >
                        <User className="h-5 w-5" />
                  </div>
            </button>
      );
      return (<div>

            <MobileDialog>
                  <MobileMobileDialogTrigger asChild>
                        <div className="flex items-center justify-center mt-[">
                              <button>
                                    <div
                                          data-tooltip-target="tooltip-wallet"
                                          className={cn(
                                                "group inline-flex h-10 w-10 flex-col items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 dark:text-black",
                                          )}
                                    >
                                          <TooltipProvider>
                                                <Tooltip>
                                                      <TooltipTrigger>
                                                            <User className="h-5 w-5" />
                                                      </TooltipTrigger>
                                                      <TooltipContent>
                                                            <p>Profile</p>
                                                      </TooltipContent>
                                                </Tooltip>
                                          </TooltipProvider>
                                    </div>
                              </button>
                        </div>
                  </MobileMobileDialogTrigger>
                  <MobileDialogContent className="sm:max-w-[425px]">
                        <div className="px-2 font-semibold text-xl font-mono">
                              {/* {!user ? 'Login' : 'Profile'} */}
                        </div>
                        <div className=" !max-h-full overflow-y-auto h-[65vh]">
                              <LoginForm />
                        </div>
                  </MobileDialogContent>
            </MobileDialog>
      </div>);
}

export default BottomNavProfile;
