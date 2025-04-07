"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Star, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import useApiRequest from "@/app/hooks/useApiRequest"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import NotFoundVector from "@/components/NotFoundVector"

const Page = () => {
  const { data, loading, error } = useApiRequest<any>("jobs/get-all-org-jobs", "GET")
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()

  const get_org_all_jobs = (jobs: any) => {
    return jobs.reduce((acc: number, job: any) => acc + job.vacancy, 0)
  }

  const filteredData = data?.data?.filter((org: any) => org.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const addList = [
    '/assets/add1.jpg',
    '/assets/add2.jpg',
    '/assets/add3.jpg',
  ]
  return (
    <div className="grid md:grid-cols-4 gap-4">
      <div className="md:col-span-3 w-full mt-2 lg:mt-0 ">
        <div className="mb-4 flex h-12 bg-gray-100 px-4 py-1 items-center justify-between font-semibold md:text-[1.2rem] text-lg">
          <div className="flex items-center gap-2">
            <img
              src="https://image.kalbelajobs.com/api/v1/image/679674886283397bf670bc7d.png"
              alt="Government Jobs"
              className="w-7 h-7 rounded-full"
              onError={(e) => e.currentTarget.src = '/fallback_img.png'}
            />
            Government Jobs
          </div>
          {/* {data?.data.length > 9 && <Button className="!py-0 !text-gray-800 !pr-0 !bg-transparent">More {">>"}</Button>} */}
          <Button className="!py-0 !text-primary hover:text-primary_blue !pr-0 !bg-transparent">View All <ArrowRight /></Button>
        </div>

        <section className=" relative w-full">
          <div className="grid md:gap-4 gap-2 grid-cols-2 lg:grid-cols-3 max-h-[500px] overflow-y-auto pt-2">
            {loading
              ? Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="flex flex-col rounded-lg border p-4 shadow-sm">
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
              : data?.data?.slice(0, 9)
                ?.map((org: any) => (
                  <Link
                    href={`/govt-jobs/${org?.jobs[0]?._id}`}
                    key={org._id}
                    className="flex group flex-col justify-between rounded-lg hover:bg-gray-50 border md:p-4 p-2 shadow-sm transition-all hover:shadow-md hover:border-gray-300"
                  >
                    <div className="flex md:flex-row flex-col justify-center md:justify-start items-start gap-4">
                      <Avatar className="size-12 rounded-lg">
                        <AvatarImage
                          src={org.logo}
                          alt={org.name}
                          className="rounded-lg border bg-white object-contain p-1"
                          onError={(e) => e.currentTarget.src = '/fallback_img.png'}
                        />
                        <AvatarFallback>{org.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div className="md:flex-0.5 md:text-start text-start">
                        <h3 className="font-semibold text-sm capitalize group-hover:text-blue-500">
                          {org.name.slice(0, 40)} {org.name.length > 40 && "..."}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                          <p className="flex items-center text-xs text-gray-600">
                            <Star className="mr-1 w-3 h-3 fill-yellow-400 text-yellow-400" />
                            Openings: {org.job_count}
                          </p>
                          <p className="flex items-center text-xs text-gray-600">
                            <User className="mr-1 w-3 h-3 text-blue-500" />
                            Vacancy: {get_org_all_jobs(org.jobs)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
          <br />
          {data?.data.length > 3 && <Link
            href="/govt-jobs"
            className="flex items-center justify-center bg-primary text-white py-2 px-4 rounded mt-4 w-[130px] m-auto">
            View All
          </Link>}
        </section>

        {
          !data?.data && <div className='h-[400px] flex items-center justify-center '>
            <NotFoundVector />
          </div>
        }
      </div>

      <div className='flex flex-col gap-2'>
        {
          addList?.slice(0, 15)?.map((itm, i) => <Link
            href={'#'}
            key={i}>
            <Image
              src={itm}
              alt={'add'}
              width={500}
              height={500}
              className="rounded"
              onError={(e) => e.currentTarget.src = '/fallback_img.png'}
            />
          </Link>)
        }
      </div>
    </div>
  )
}

export default Page
