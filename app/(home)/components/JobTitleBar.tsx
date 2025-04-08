// components/JobSectionHeader.tsx

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

interface JobSectionHeaderProps {
    title: string;
    iconSrc?: string;
    path?: string;
    viewBtn?: boolean;
}

const JobTitleBar: React.FC<JobSectionHeaderProps> = ({ title, iconSrc, path, viewBtn }) => {
    return (
        <div className="mb-4 flex h-12 items-center justify-between bg-[#DFDFF8] px-4 py-1 font-semibold text-lg md:text-[1.2rem]">
            <div className="flex items-center gap-2">
                {iconSrc && (
                    <img
                        src={iconSrc}
                        alt="icon"
                        className="w-7 h-7 rounded-full"
                        onError={(e) => (e.currentTarget.src = "/fallback_img.png")}
                    />
                )}
                {title}
            </div>
            {viewBtn && <Link href={path ?? '#'}>
                <div

                    className="!py-0 !pr-0 !bg-transparent !text-primary hover:text-primary_blue/50 font-semibold flex items-center gap-1 text-[1rem]"
                >
                    View All <ArrowRight className="ml-1 h-4 w-4" />
                </div>
            </Link>}
        </div>
    );
};

export default JobTitleBar;
