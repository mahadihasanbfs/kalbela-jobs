import Link from 'next/link'
import React from 'react'
import CustomTitle from './CustomTitle'

export default function OurFeature() {
  return (
    <div>
      <section className="py-10 bg-white sm:py-10 lg:py-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <CustomTitle title="Offering the best deal" position='center' />
            {/* <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
                            Lorem ipsum dolor sit amet, consectetur adipis elit
                        </p> */}
          </div>
          <div className="grid grid-cols-2 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-16 lg:px-16 pb-4 !pt-0">
            <Link href={'/search-details'} className="md:p-8 group lg:p-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide duration-200 group-hover:text-primary_blue group-hover:scale-[1.2]  text-gray-500 m-auto lucide-credit-card-icon lucide-credit-card"
              >
                <circle cx={11} cy={11} r={8} />
                <path d="m21 21-4.3-4.3" />
              </svg>

              <h3 className="mt-4 group-hover:text-primary_blue duration-200 text-xl font-bold text-gray-900 font-pj">
                Search Job
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Search, view apply to any jobs from anywhere.
              </p>
            </Link>
            <Link href={'/search-details'} className="md:p-8 group lg:p-8 md:border-l md:border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide duration-200 group-hover:text-primary_blue group-hover:scale-[1.2]  text-gray-500 m-auto lucide-credit-card-icon lucide-credit-card"
              >
                <path d="M12 12h.01" />
                <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                <rect width={20} height={14} x={2} y={6} rx={2} />
              </svg>

              <h3 className="mt-6 text-xl font-bold text-gray-900 group-hover:text-primary_blue duration- font-pj">Apply a Job</h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Apply to machine jobs from different sections.
              </p>
            </Link>
            <Link href={'/user/resume_builder'} className="md:p-8 group lg:p-8 md:border-l md:border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide duration-200 group-hover:text-primary_blue group-hover:scale-[1.2]  text-gray-500 m-auto lucide-credit-card-icon lucide-credit-card"
              >
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M15 18a3 3 0 1 0-6 0" />
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
                <circle cx={12} cy={13} r={2} />
              </svg>
              <h3 className="mt-6 text-xl font-bold text-gray-900 group-hover:text-primary_blue duration- font-pj">
                Resume Bank
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Find a suitable candidate from out large resume database.
              </p>
            </Link>
            <Link href={'/'} className="md:p-8 duration-200 group lg:p-8 md:border-t md:border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide duration-200 group-hover:text-primary_blue group-hover:scale-[1.2]  text-gray-500 m-auto lucide-credit-card-icon lucide-credit-card"
              >
                <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
              </svg>


              <h3 className="mt-6 duration-200 text-xl font-bold group-hover:text-primary_blue text-primary font-pj">
                Job Notification
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Get notify about new job posting matched jobs, and more.
              </p>
            </Link>
            <Link href={"/"} className="md:p-8 duration-200 group lg:p-8 md:border-l md:border-gray-200 md:border-t">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide duration-200 group-hover:text-primary_blue group-hover:scale-[1.2]  text-gray-500 m-auto lucide-credit-card-icon lucide-credit-card"
              >
                <rect width={20} height={14} x={2} y={5} rx={2} />
                <line x1={2} x2={22} y1={10} y2={10} />
              </svg>

              <h3 className="mt-6 text-xl font-bold duration-200 group-hover:text-primary_blue text-gray-900 font-pj">
                Easy Payment
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Very easy to make payment for your purchased services.
              </p>
            </Link>
            <Link href={"/contact"} className="md:p-8 group lg:p-8 md:border-l md:border-gray-200 md:border-t">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide duration-200 group-hover:text-primary_blue group-hover:scale-[1.2]  text-gray-500 m-auto lucide-credit-card-icon lucide-credit-card"
              >
                <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
              </svg>

              <h3 className="mt-6 group-hover:text-primary_blue duration- text-xl font-bold text-gray-900 font-pj">
                Happy Support
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                For any kind of assistance feel free to contact us.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
