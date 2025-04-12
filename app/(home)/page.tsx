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
                  <div className="z-50 ">
                        <div className="relative z-10">
                              <HeroSection />
                              {/* <Job_type_tag /> */}
                              {/* <JobType /> */}
                        </div>

                        <img
                              alt="map"
                              className="md:block hidden absolute top-[-99px] opacity-[0.5] left-0 right-0 h-[370px] scale-[]"
                              src="/assets/map.svg " />
                        {/* /assets/map.svg */}
                        {/* 
                        <div
                              style={{
                                    backgroundImage: "url(/assets/map.svg)"
                              }}
                              className="absolute top-0 left-0 right-0 h-[340px] object-fill w-full bg-start" /> */}

                        <div className="pointer-events-none absolute right-0 top-0 lg:block md:hidden w-full">
                              <VerticalMarquee />
                        </div>
                  </div>
                  <br /><br />
                  <MaxWidthWrapper>
                        <JobCategory2 />
                        <ShortAdd />
                        <StaticsBar />
                  </MaxWidthWrapper>
                  <br />
                  <MaxWidthWrapper className="py-0 md:py-2 ">
                        <div className=" opacity-100 rounded-[38px] bg-gradient-to-tl from-[#ffffff21] to-[#fff]">
                              <FeaturedJobs />
                        </div>
                  </MaxWidthWrapper>
                  <OurFeature />
                  <VideoGallery />
                  <Pricing />
                  <div className="bg-gradient-to-t from-[transparent] to-[#cfe1ffa4] absolute top-0 left-0 right-0 md:h-[450px] h-[290px] w-full" />
                  <TopCompanies />
                  {/* <InterviewQuestions /> */}
                  <Testimonial />
                  <Sponsors />
                  <DownloadOurMobileApp />
                  <NesLetter />
            </Fragment>
      )
}

export default HomePage
