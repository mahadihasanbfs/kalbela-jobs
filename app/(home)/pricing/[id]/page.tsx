import { Fragment } from "react"
import { Metadata } from "next"

import FeaturedJobs from "./components/FeaturedJobs"
import Govt_jobs from "./components/Govt_jobs"
import HeroSection from "./components/HeroSection"
import InterviewQuestions from "./components/InterviewQuestions"
import JobType from "./components/JobType"
import Job_type_tag from "./components/Job_type_tag"
import NesLetter from "./components/NesLetter"
import Testimonial from "./components/Testimonial"
import TopCompanies from "./components/TopCompanies"
import VerticalMarquee from "./components/VerticalMarquee"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import StaticsBar from "./components/StaticsBar"
import Sponsors from "./components/Sponsors"
import JobCategory from "./components/JobCategory"
import JobCategory2 from "./components/JobCategory2"
import OurFeature from "./components/OurFeature"
import VideoGallery from "./components/VideoGellary"
import Pricing from "./components/Pricing"
import DownloadOurMobileApp from "./components/DownloadOurMobileApp"
import ShortAdd from "./components/ShortAdd"
import Link from "next/link"
import SpecialItemTab from "./components/SpecialItemTab"
import DevelopmentAlert from "./components/DevelopmentAlert"
import Tenders from "./components/Tenders"
import HotJobs from "./components/HotJobs"
import InternShipJob from "./components/InternShipJob"

export const metadata: Metadata = {
      title: "Kalbela Jobs || Find Your Dream Job Today",
      description:
            "Discover top jobs and career opportunities on Kalbela Jobs. Explore featured jobs, top companies, and expert interview tips to boost your career.",
      keywords: [
            "jobs",
            "job portal",
            "career opportunities",
            "Kalbela",
            "featured jobs",
            "top companies",
            "interview tips",
      ],
      icons: {
            icon: "/favicon.ico",
      },
}

const HomePage = () => {
      return (
            <Fragment>
                  <div className=" ">
                        <div className="">
                              <HeroSection />
                              {/* <Job_type_tag /> */}
                              {/* <JobType /> */}
                        </div>
                        <img
                              alt="map"
                              className="md:hidden border-6 border-[green] block opacity-[0.2] absolute left-0 -top-[100px] w-full h-[280px]  object-cover scale-[1.3] z-4"
                              src="/assets/map.svg" />

                        <div className="pointer-events-none absolute right-0 border-6 border-[red] top-0 lg:block md:hidden w-full">
                              <VerticalMarquee />
                        </div>
                  </div>
                  <div
                  // style={{
                  //       backgroundImage: `linear-gradient(180deg, #ffffffef, #ffffffef), url(/jobbg.jpeg)`,
                  //       backgroundAttachment: "fixed",
                  // }}
                  >
                        <MaxWidthWrapper className="md:!px-6 !px-3">
                              <div
                                    style={{
                                          boxShadow: "rgb(0 0 0 / 4%) 0px -20px 20px 0px",
                                    }}
                                    className="relative bg-gradient-to-t from-[#ff1c1c00] to-[#ffffff] px-4 md:p-6 p-4 rounded-xl z-50">
                                    <div>
                                          <JobCategory2 />
                                          <ShortAdd />
                                          <StaticsBar />
                                    </div>

                                    <div className="py-0 ">
                                          <div className=" opacity-100 rounded-[38px] bg-gradient-to-tl from-[#ffffff21] to-[#fff]">
                                                <FeaturedJobs />
                                          </div>
                                    </div>
                              </div>
                              <div
                              // className='bg-cover'
                              // style={{
                              // backgroundImage: `linear-gradient(180deg, #ffffffef, #ffffffef), url(/jobbg.jpeg)`,
                              // }}
                              >
                                    <InternShipJob />
                                    <Tenders />
                              </div>
                              <SpecialItemTab />
                              <OurFeature />
                              <VideoGallery />
                              <Pricing />
                        </MaxWidthWrapper>
                        <div className="bg-gradient-to-t from-[transparent] to-[#cfe1ffa4] absolute top-0 left-0 right-0 md:h-[450px] h-[290px] w-full" />
                        <TopCompanies />
                        {/* <InterviewQuestions /> */}
                        <Testimonial />
                        <Sponsors />
                        <DownloadOurMobileApp />
                        <NesLetter />
                        <DevelopmentAlert />
                  </div>
            </Fragment>
      )
}

export default HomePage