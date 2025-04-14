"use client"

import React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import useApiRequest from "@/app/hooks/useApiRequest"
import InternShipJob from "./InternShipJob"
import SkilledJobs from "./SkilledJobs"
import Tenders from "./Tenders"
import HotJobs from "./HotJobs"
import useJobsSearch from "@/app/hooks/useJobSearch"
import Image from "next/image"
import GovJob from "./Govt_jobs"

const FeaturedJobs: React.FC = () => {
      const { data, loading, error } = useApiRequest<any>(
            "jobs/get-featured-jobs",
            "GET"
      )

      const { data: gov_job, loading: gov_load, error: gov_err } = useApiRequest<any>(
            "jobs/get-all-govt-jobs",
            "GET"
      )



      const { data: tendersJob, loading: tendersLoading, error: tendersError } = useApiRequest<any>(
            "jobs/get-featured-jobs ",
            "GET"
      )


      return (
            <section>
                  <div className="space-y-6 col-span-2">
                        <div className="grid md:grid-cols-4 gap-4">
                              <div className="md:col-span-3">
                                    <HotJobs loading={loading} data={data?.data} error={error} />
                                    <GovJob loading={gov_load} data={gov_job} error={gov_err} />
                              </div>

                              <div className="flex flex-col gap-2">
                                    {/* <Image
                                          src="https://i.ibb.co.com/mrZ8DzSW/banner3.jpg"
                                          alt="ad"
                                          width={500}
                                          height={500}
                                          className="rounded border"
                                          onError={(e) => (e.currentTarget.src = "/fallback_img.png")}
                                    /> */}
                                    <img
                                          src="/assets/banner3.png"
                                          alt="ad"
                                          // width={500}
                                          // height={500}
                                          className="rounded border"
                                    // onError={(e) => (e.currentTarget.src = "/fallback_img.png")}
                                    />

                                    <iframe
                                          className="w-full aspect-video rounded border"
                                          src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent('https://www.facebook.com/watch/?v=1142566183333827')}&autoplay=1&mute=1&show_text=false&width=500`}
                                          width="500"
                                          style={{ border: "none", overflow: "hidden" }}
                                          scrolling="no"
                                          frameBorder="0"
                                          allow="autoplay; encrypted-media"
                                          allowFullScreen
                                    />

                                    <Image
                                          src="/assets/add2.jpg"
                                          alt="ad"
                                          width={500}
                                          height={500}
                                          className="rounded border"
                                          onError={(e) => (e.currentTarget.src = "/fallback_img.png")}
                                    />

                                    <Image
                                          src="/assets/add1.jpg"
                                          alt="ad"
                                          width={500}
                                          height={500}
                                          className="rounded border"
                                          onError={(e) => (e.currentTarget.src = "/fallback_img.png")}
                                    />

                              </div>
                        </div>
                        <Tenders data={tendersJob?.data} loading={tendersLoading} error={tendersError} />
                  </div>
            </section>
      )
}

export default FeaturedJobs;