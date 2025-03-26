"use client"

import React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import useApiRequest from "@/app/hooks/useApiRequest"
import Govt_jobs from "./Govt_jobs"
import { Button } from "@/components/ui/button"
import InternShipJob from "./InternShipJob"
import SkilledJobs from "./SkilledJobs"
import Tenders from "./Tenders"
import HotJobs from "./HotJobs"

const FeaturedJobs: React.FC = () => {
      const { data, loading, error } = useApiRequest<any>(
            "jobs/get-featured-jobs",
            "GET"
      )

      console.log("data from featured jobs", data)

      return (
            <section>
                  <div className="space-y-6 col-span-2">
                        <HotJobs loading={loading} data={data} />
                        <Govt_jobs />
                        <InternShipJob data={data} loading={loading} />
                        <SkilledJobs data={data} loading={loading} />
                        <Tenders data={data} loading={loading} />
                  </div>
            </section >
      )
}

export default FeaturedJobs
