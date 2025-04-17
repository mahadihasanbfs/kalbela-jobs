
"use client"
import Link from "next/link"
import { ArrowRight, Banknote, Bookmark, Calendar, CalendarCheck, Heart, MapPin } from "lucide-react"

import { formatDate } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { useUserData } from "@/utils/encript_decript"
import { toast } from "react-toastify"
import useApiForPost from "@/app/hooks/useApiForPost"
import { googleLogin } from "@/app/hooks/firebse"
import { useRouter } from "next/navigation"
import { RotateCw } from "lucide-react"
import Image from "next/image"
import { formatTimeAgo } from "@/lib/formatedTimeAgo"

interface JobcardLargeProps {
      job: any
}

const JobcardLarge: React.FC<JobcardLargeProps> = ({ job }) => {




      const [user] = useUserData()
      const { apiRequest } = useApiForPost()

      const router = useRouter()

      const save_jobs = async (job_id: any) => {
            if (!user) {
                  toast.warning("You need to login to save jobs")
                  router.push("/login")
                  return
            }
            const upload_data = {
                  user_id: user._id,
                  job_id,
            }
            if (!user._id) {
                  toast.info("You need to login to save jobs")
                  return
            }
            if (!job_id) {
                  toast.error("Something went wrong")
                  return
            }
            const { data, error } = await apiRequest<any>(
                  `api/v1/user/save-jobs`,
                  "POST",
                  upload_data
            )
            if (error) {
                  toast.error(error.message)
            } else {
                  toast.success(data.message)
            }
      }



      const formatLocation = () => {
            if (job?.location?.remote) return "Remote";

            const { country, district, division, location } = job?.location || {};

            return [
                  country,
                  Array.isArray(district) ? district.join(", ") : district,
                  Array.isArray(division) ? division.join(", ") : division,
                  location
            ]
                  .filter(Boolean)
                  .join(", ");
      };

      return (
            <div>
                  <div
                        // style={{
                        //       backgroundImage: `linear-gradient(181.07deg, rgb(239 245 255 / 86%) -53%, rgb(255 255 255) 24rem)`
                        // }}
                        className="md:block hidden bg-light-theme duration-300 rounded-xl border p-4 hover:shadow-lg hover:border-indigo-600  focus:outline-none focus:ring focus:ring-offset-2"
                        key={job._id}
                  >
                        <article>
                              <div
                                    className="relative border-gray-400 pb-2"
                              >
                                    <header>

                                          <div className="flex w-full justify-between items-center gap-4">
                                                <Link href={`/jobs/${job?.url}`} className="flex items-center gap-4 group">
                                                      <div className="max-w-64 md:max-w-xl">
                                                            <h2 className="hover:text-blue-800 text-lg font-bold text-gray-800">{job.job_title}</h2>

                                                            <Link href={`/companies${job?.company_info?.website}`} className="text-sm text-gray-500 hover:text-blue-800">
                                                                  <h3 className="my-0.5">{job.company_info?.name} </h3>
                                                            </Link>

                                                      </div>
                                                </Link>

                                                <div className="w-16 h-16 border md:w-20 md:h-20 rounded-xl overflow-hidden">
                                                      <Link href={`/companies/${job?.company_info?.website}`}>
                                                            <Image
                                                                  className="rounded-lg bg-gray-200 w-full h-full object-scale-down p-2 "
                                                                  src={job.company_info?.logo || '/fallback_img.png'}
                                                                  width={400}
                                                                  height={400}
                                                                  alt={`${job.company_info?.name} logo`}
                                                            />
                                                      </Link>
                                                </div>
                                          </div>


                                          <div className=" mt-4 hidden w-full gap-2 overflow-x-auto scrollbar-hide  lg:flex-wrap lg:overflow-x-visible">
                                                {job.skills?.map((skill: string, idx: number) => (
                                                      <span
                                                            key={idx}
                                                            className=" rounded whitespace-nowrap bg-gray-50 relative  border-gray-400 px-2 py-1 text-xs flex items-center gap-1"
                                                      >
                                                            <div className="bg-gray-600 !w-2 !h-2 rounded-full" />
                                                            {skill}
                                                      </span>
                                                ))}
                                          </div>


                                          <div className="grid grid-cols-3 gap-y-6">
                                                <div className="">
                                                      <label className="text-gray-500" htmlFor="salary">Salary</label>
                                                      <h1 className="font-semibold">
                                                            {job.salary_negotiable || job.negotiable_note
                                                                  ? "Negotiable"
                                                                  : `${job.salary_range?.min}${job.salary_range?.max ? ` - ${job.salary_range.max}` : ""} ${job.salary_range?.currency || ""} / month`}
                                                      </h1>
                                                </div>

                                                <div className="">
                                                      <label className="text-gray-500" htmlFor="salary">Location</label>
                                                      <h1 className="font-semibold">  {formatLocation()}</h1>
                                                </div>

                                                <div className="">
                                                      <label className="text-gray-500" htmlFor="salary">Job Type</label>
                                                      <h1 className="font-semibold">  {job?.job_type}</h1>
                                                </div>

                                                <div className="">
                                                      <label className="text-gray-500" htmlFor="salary">Duration</label>
                                                      <h1 className="font-semibold">  {formatTimeAgo(job?.expiry_date)}</h1>
                                                </div>

                                                <div className="">
                                                      <label className="text-gray-500" htmlFor="salary">Gender</label>
                                                      <h1 className="font-semibold">{job?.gender ?? 'N/A'}</h1>
                                                </div>

                                                {/* <div className="">
                                                      <label className="text-gray-500" htmlFor="salary">Salary</label>
                                                      <h1 className="font-semibold">34000 - 5000 BDT</h1>
                                                </div> */}

                                          </div>


                                          <div className="flex justify-end">
                                                <Link href={`/jobs/${job.url}`}>
                                                      <div className="flex gap-0 items-center !bg-primary !text-white px-6 justify-center text-center text-sm h-[35px]  rounded-full">Apply Now</div>
                                                </Link>
                                          </div>


                                          <div className="hidden md:mt-4 border-t pt-3 mt-3 items-center justify-between">
                                                <ul className=" md:flex hidden md:flex-row flex-col overflow-x-auto chat-bot md:items-center space-x-4 text-sm">
                                                      <li className="flex text-nowrap items-center gap-2 border-gray-500 pr-2 md:border-r">
                                                            <MapPin strokeWidth={1} size={22} className="text-gray-500" />
                                                            {formatLocation()}
                                                      </li>
                                                      <li className="flex text-nowrap items-center gap-2 border-gray-500 md:pr-2 md:border-r">
                                                            <Calendar strokeWidth={1} size={22} className="text-gray-500" />
                                                            {job?.job_type}
                                                      </li>
                                                      <li className="flex text-nowrap items-center gap-2 border-gray-500 md:pr-2  md:border-r">
                                                            <Banknote strokeWidth={1} size={22} className="text-gray-500" />
                                                            {job.salary_negotiable || job.negotiable_note
                                                                  ? "Negotiable"
                                                                  : `${job.salary_range?.min}${job.salary_range?.max ? ` - ${job.salary_range.max}` : ""} ${job.salary_range?.currency || ""} / month`}
                                                      </li>

                                                      <li className="flex text-nowrap items-center gap-2 border-gray-500 md:pr-2 ">
                                                            <div className="flex gap-0 items-center px-2 cursor-default justify-between h-[30px]  rounded-full">
                                                                  <div className="flex w-full gap-1 items-center justify-center">
                                                                        {/* <RotateCw strokeWidth={1.4} size={18} /> */}
                                                                        Duration : <span>
                                                                              {formatTimeAgo(job?.expiry_date)}
                                                                        </span></div>

                                                            </div>
                                                      </li>
                                                </ul>

                                                <Link href={`/jobs/${job.url}`}>
                                                      <div className="flex gap-0 items-center !bg-primary !text-white px-6 justify-center text-center text-sm h-[35px]  rounded-full">Apply Now</div>
                                                </Link>
                                          </div>

                                    </header>

                                    <p className="mt-2 text-xs">{job.postedDate}</p>
                              </div>
                              <div className="flex items-center gap-2 mt-3">




                                    {/* <div className="flex md:hidden md:text-md text-xs md:items-center gap-2">
                                    <div className="border md:text-sm h-[28px] flex items-center justify-center border-[#4383D6] text-[#4383D6] md:w-auto w-auto md:text-md text-xs px-3 md:py-0.2 rounded-full">
                                          Actively Hiring
                                    </div>
                              </div> */}
                              </div>
                        </article>
                  </div>

                  <div className="w-full md:hidden block rounded-3xl overflow-hidden shadow-sm duration-300 hover:shadow-lg shadow0full  bg-[#f7f7fd] border border-gray-100">
                        {/* Card main content */}
                        <div className="p-4 pb-4 relative">
                              {/* Top row with salary and bookmark */}


                              <h3 className="text-xl !font-[200] mb-2 text-[#001968] ">We are hiring</h3>
                              <h2 className="text-xl font-semibold text-gray-900 ">
                                    {job?.job_title}
                              </h2>

                              <div className="mt-3">
                                    <div className="flex text-gray-500 items-start gap-1 text-sm"><CalendarCheck size={20} strokeWidth={1} />    {formatTimeAgo(job?.expiry_date)} </div>

                                    <div className="flex items-start gap-1 text-sm mt-2 text-gray-500">
                                          <MapPin size={20} strokeWidth={1} />  {formatLocation()}
                                    </div>
                                    {/* 
                                    <button onClick={() => save_jobs(job?._id)} className="text-gray-500 hover:text-gray-700">
                                          <Bookmark className="w-5 h-5" />
                                    </button> */}
                              </div>


                        </div>

                        {/* Card footer */}
                        <div className="bg-white p-4 flex justify-between items-center">
                              <Link href={`/companies/${job?.company_info?.website}`} className="flex items-center gap-2 group">
                                    <div className="w-8 h-8 rounded-full bg-[#FF5A5F] flex items-start justify-center">
                                          <div className="w-9 h-8 border  rounded-lg overflow-hidden">
                                                <Image
                                                      className="rounded-lg bg-gray-200 w-full h-full object-scale-down "
                                                      src={job.company_info?.logo || '/fallback_img.png'}
                                                      width={400}
                                                      height={400}
                                                      alt={`${job.company_info?.name} logo`}
                                                />
                                          </div>
                                    </div>
                                    <div className="font-medium text-sm group-hover:!text-blue-500 text-gray-800  w-[140px]">
                                          {job.company_info?.name}
                                    </div>
                              </Link>
                              <Link href={`/jobs/${job?.url}`} className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-medium">View</Link>
                        </div>
                  </div>
            </div>
      )
}

export default JobcardLarge
