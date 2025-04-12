import PageBanner from '@/components/PageBanner';
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import React from 'react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const page = () => {
  return (
    <div>
      <PageBanner image='/about_us.jpg' title='In Shortly About Us' description='Let us help shape your business. Kick back while we handle the details.' />

      {/* About Us Section */}
      <MaxWidthWrapper className="mb-16 max-w-7xl" >
        <h1 className="text-3xl font-bold text-center my-10">ABOUT US</h1>
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="flex justify-center md:col-span-4">
            <Image
              src="/about-us-1.png"
              alt="About Us Keyboard"
              width={400}
              height={300}
              className="rounded-lg shadow-md object-cover w-full h-full"
            />
          </div>
          <div className="space-y-4 md:col-span-8">
            <p className="text-gray-700">
              Kalbelajobs.com is the first Bangladeshi global job portal in the international job market. Our unique job
              portal and its pioneering ideas are designed in such a way that it will change the ways of our thinking
              regarding any job/site. Kalbelajobs.com is the only platform where a jobseeker or employer or student or
              learner or trainer or freelancer from all background can regularly visit to keep in touch with the global
              job market. This is the place where you have the opportunity to know each other better, which also
              indicates that Kalbela Jobs Limited provides varieties of services. Kalbela Jobs also identifies the opportunities
              to formulate and implement effective policies for the economic development of Bangladesh. Besides offering
              all types of jobs beyond political boundaries.
            </p>
            <p className="text-gray-700">
              Kalbela Jobs Limited is an ISO 9001:2015 certified company which is a product of MARS Solutions Limited.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Our Purpose Section */}

      <MaxWidthWrapper className="mb-16 bg-[url('/about-shadow.png')] bg-repeat"  >
        <div className='max-w-7xl mx-auto py-8 md:pb-16'>
          <h2 className="text-2xl font-bold mb-6">OUR PURPOSE</h2>
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="order-2 md:order-1 md:col-span-8">
              <p className="text-gray-700">
                To establish a platform for creating a bridge between local and international job market for Kalbela/PBO
                (Non-resident Bangladeshi or People of Bangladeshi Origin) and Local talents.
              </p>
            </div>
            <div className="flex justify-center order-1 md:order-2 md:col-span-4">
              <Image
                src="/about-us-2.png"
                alt="Purpose Sign"
                width={400}
                height={250}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Mission Section */}
      <MaxWidthWrapper className="mb-16 max-w-7xl" >
        <h2 className="text-2xl font-bold mb-6">MISSION</h2>
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="flex justify-center md:col-span-4">
            <Image
              src="/about-us-3.png"
              alt="Our Mission"
              width={400}
              height={250}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className='md:col-span-8'>
            <p className="text-gray-700">
              To establish a platform for creating a bridge between local and international job market for Kalbela/PBO
              (Non-resident Bangladeshi or People of Bangladeshi Origin) and Local talents.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Why Kalbela Jobs Section */}
      <MaxWidthWrapper className="mb-16 bg-[url('/about-shadow.png')] bg-repeat"  >
        <div className='max-w-7xl mx-auto py-8 md:pb-16'>
          <h2 className="text-2xl font-bold mb-6">WHY Kalbela JOBS?</h2>
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="space-y-4 md:col-span-8">
              <p className="text-gray-700">
                Our advanced technology and infrastructure guarantees the best service for our customers. Our user
                friendly and organized website makes things easy to use for both employers and jobseekers.
              </p>
              <p className="text-gray-700">
                For jobseekers, jobs are regularly posted to our website by Kalbela/PBO employers around the world,
                Bangladeshi employers, International employers and Government organizations. Kalbela Jobs Limited is creating
                a great opportunity for fresh graduate (Bangladeshi and International) candidates to achieve their desired
                job. Hence, this is the only job portal where you will get the opportunity to apply for internship within
                Bangladesh and abroad.
              </p>
              <p className="text-gray-700">
                On the other hand, those who are not sure of how competitive the job market is in Bangladesh and abroad,
                Kalbelajobs.com have its own "Article Archive" where you can find the latest tips/advice to re-organize your
                career.
              </p>
              <p className="text-gray-700">
                For employers, Kalbela Jobs Limited provides the best packages and these customize packages are always
                available for employers according to their demand. Our large quantity of various resume databases is an
                example that Kalbela Jobs is dealing with all types of jobs around the world.
              </p>
              <p className="text-gray-700">
                Relating yourself with Kalbela Jobs Limited will let you access and understand the international job market.
              </p>
            </div>
            <div className="flex justify-center md:col-span-4">
              <Image
                src="/about-us-4.png"
                alt="Why Kalbela Jobs"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* How it works Section */}
      <MaxWidthWrapper className="mb-16 max-w-7xl" >
        <h2 className="text-2xl font-bold text-center mb-10">How it works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-20 h-20 border border-red-500 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-500 font-bold">Step 1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Create Account</h3>
              <p className="text-gray-600">Start by creating an account on our awesome platform</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-20 h-20 border border-red-500 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-500 font-bold">Step 2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Browse</h3>
              <p className="text-gray-600">Browse All Features of our awesome platform</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-20 h-20 border border-red-500 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-500 font-bold">Step 3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Apply</h3>
              <p className="text-gray-600">Start Applying on our awesome platform</p>
            </CardContent>
          </Card>
        </div>
      </MaxWidthWrapper>

      {/* What We Offer Section */}
      <MaxWidthWrapper className="bg-[url('/about-shadow.png')] bg-repeat"  >
        <div className='max-w-7xl mx-auto py-8 md:pb-16'>
          <h2 className="text-2xl font-bold mb-10">WHAT WE OFFER</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <Image
                src="/offer.png"
                alt="What We Offer"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-center mb-2">ONLINE JOB POSTING</h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-center mb-2">BANNER ADVERTISEMENT</h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-center mb-2">RESUME DATABASE ACCESS</h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-center mb-2">TRAINING /WORKSHOP & EVENT</h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-center mb-2">BIODATA DATABASE ACCESS</h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-center mb-2">HEAD HUNTING</h3>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
