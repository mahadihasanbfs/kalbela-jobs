"use client"

import { useState } from "react"
import { Star, User, Search, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import useApiRequest from "@/app/hooks/useApiRequest"
import { useRouter } from "next/navigation"
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select"

const Page = () => {
      const [openPopover, setOpenPopover] = useState<string | null>(null)
      const { data, loading } = useApiRequest<any>("jobs/get-all-org-jobs", "GET")
      const [searchTerm, setSearchTerm] = useState("")
      const router = useRouter()

      const get_org_all_jobs = (jobs: any) => jobs.reduce((acc: number, job: any) => acc + job.vacancy, 0)

      const filteredData = data?.data?.filter((org: any) => org.name.toLowerCase().includes(searchTerm.toLowerCase()))

      const handleJobSelect = (orgId: string, jobId: string) => {
            router.push(`/govt-jobs/${jobId}`)
      }

      return (
            <div className="min-h-screen bg-light-theme  dark:bg-dark-theme py-8">
                  <div className="container mx-auto px-4">
                        <h1 className="mb-8 text-center text-3xl font-bold">
                              <img
                                    src="https://image.kalbelajobs.com/api/v1/image/679674886283397bf670bc7d.png"
                                    alt="Government Jobs"
                                    className="mr-2 inline-block h-8 w-8"
                              />
                              Government Jobs
                        </h1>

                        <div className="mb-6 flex items-center justify-between">
                              <div className="relative bg-gray-50 rounded-md w-full max-w-md">
                                    <Input
                                          type="text"
                                          placeholder="Search organizations..."
                                          value={searchTerm}
                                          onChange={(e) => setSearchTerm(e.target.value)}
                                          className="pl-10 pr-4"
                                    />
                                    <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                              </div>
                              <p className="text-sm text-gray-600">
                                    Showing {filteredData?.length || 0} of {data?.data?.length || 0} organizations
                              </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                              {loading
                                    ? Array.from({ length: 16 }).map((_, index) => (
                                          <div key={index} className="flex flex-col rounded-lg border bg-white p-4 shadow-sm">
                                                <div className="flex items-center gap-4">
                                                      <Skeleton className="h-16 w-16 rounded-full" />
                                                      <div className="flex-1">
                                                            <Skeleton className="mb-2 h-5 w-32" />
                                                            <Skeleton className="h-4 w-24" />
                                                      </div>
                                                </div>
                                                <Skeleton className="mt-4 h-10 w-full" />
                                          </div>
                                    ))
                                    : filteredData?.map((org: any) => (
                                          <div
                                                key={org._id}
                                                className="flex flex-col justify-between rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md"
                                          >
                                                <div className="flex items-start gap-4">
                                                      <Avatar className="h-16 w-16 rounded-lg border bg-gray-100 p-2 transition-transform group-hover:scale-110">
                                                            <AvatarImage src={org.logo} alt={org.name} className="object-contain" />
                                                            <AvatarFallback>{org.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                                      </Avatar>
                                                      <div className="flex-1">
                                                            <h3 className="font-semibold capitalize leading-tight line-clamp-2">{org.name}</h3>
                                                            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-600">
                                                                  <span className="flex items-center">
                                                                        <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                                        {org.job_count} Openings
                                                                  </span>
                                                                  <span className="flex items-center">
                                                                        <User className="mr-1 h-4 w-4 text-blue-500" />
                                                                        {get_org_all_jobs(org.jobs)} Vacancies
                                                                  </span>
                                                            </div>
                                                      </div>
                                                </div>

                                                {/* Popover for job selection */}
                                                <div className="group relative">
                                                      <Select>
                                                            <SelectTrigger className="mt-4 w-full">
                                                                  <SelectValue placeholder="View Jobs" />
                                                            </SelectTrigger>
                                                      </Select>
                                                      <div
                                                            className="w-full absolute top-[3.6rem] left-0 p-2 border bg-white rounded-md shadow-lg hidden group-hover:block"
                                                      >
                                                            {org.jobs.length > 0 ? (
                                                                  org.jobs.map((job: any) => (
                                                                        <div
                                                                              key={job._id}
                                                                              onClick={() => handleJobSelect(org._id, job._id)}
                                                                              className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer rounded-md"
                                                                        >
                                                                              {job.title}
                                                                        </div>
                                                                  ))
                                                            ) : (
                                                                  <p className="text-gray-500 text-sm text-center">No jobs available</p>
                                                            )}
                                                      </div>
                                                </div>
                                          </div>
                                    ))}
                        </div>
                  </div>
            </div >
      )
}

export default Page
