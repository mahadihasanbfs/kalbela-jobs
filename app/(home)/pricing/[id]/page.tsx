'use client';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import Consulting from './components/Consulting';
import PricingCard2 from './components/PricingCard';
import Question from './components/Question';
import Services from './components/Services';

const PricingPage = () => {
    const { id } = useParams();

    const plans = [
        {
            id: 1,
            name: "Regular Plan",
            price: "$99",
            description: "Best for individuals and small businesses.",
            features: [
                { text: "Category Job (Single Job Post)", available: true },
                { text: "Feature Job Post (Single Job Post)", available: true },
                { text: "Category Membership (CM1-CM10)", available: false },
                { text: "Feature Membership (FM1-FM10)", available: true },
                { text: "Resume Bank (RB1-RB10)", available: true },
                { text: "Home Page Banner Ad (Top, Middle & Bottom)", available: true },
                { text: "Inner Page Banner Ad (Top & Right Side)", available: true },
            ],
            services: [
                { title: "Job Alerts", description: "Get notified about new job postings." },
                { title: "Resume Review", description: "Professional resume review and feedback." },
                { title: "Career Counseling", description: "Expert advice for career growth." },
                { title: "Application Tracking", description: "Track the status of your applications." },
            ],
            questions: [
                { id: 1, question: "How do I post a job?", answer: "You can post a job from your dashboard." },
                { id: 2, question: "What payment methods are available?", answer: "We accept credit cards and PayPal." },
                { id: 3, question: "Can I edit a job posting?", answer: "Yes, you can edit job postings anytime." },
                { id: 4, question: "Is there a refund policy?", answer: "Refunds are available within 7 days of purchase." },
            ],
        },
        {
            id: 2,
            name: "Business Plan",
            price: "$199",
            description: "Ideal for growing businesses and recruitment agencies.",
            features: [
                { text: "Category Job (Unlimited Posts)", available: true },
                { text: "Feature Job Post (5 per month)", available: true },
                { text: "Category Membership (CM1-CM20)", available: true },
                { text: "Feature Membership (FM1-FM20)", available: true },
                { text: "Resume Bank (RB1-RB50)", available: true },
                { text: "Home Page Banner Ad (Top, Middle & Bottom)", available: true },
                { text: "Inner Page Banner Ad (Top & Right Side)", available: true },
            ],
            services: [
                { title: "Dedicated Support", description: "Priority customer support available 24/7." },
                { title: "Advanced Analytics", description: "Detailed insights into job applications." },
                { title: "Employer Branding", description: "Boost your company's visibility." },
                { title: "API Integration", description: "Integrate job postings into your platform." },
            ],
            questions: [
                { id: 1, question: "Can I cancel my subscription?", answer: "Yes, you can cancel anytime." },
                { id: 2, question: "Is there a trial available?", answer: "Yes, we offer a 14-day free trial." },
                { id: 3, question: "Do you provide invoicing?", answer: "Yes, invoices are available upon request." },
                { id: 4, question: "Can I upgrade my plan?", answer: "Yes, you can upgrade at any time." },
            ],
        },
        {
            id: 3,
            name: "Enterprise Plan",
            price: "$499",
            description: "Best for large enterprises with high hiring needs.",
            features: [
                { text: "Category Job (Unlimited Posts)", available: true },
                { text: "Feature Job Post (Unlimited)", available: true },
                { text: "Category Membership (CM1-CM50)", available: true },
                { text: "Feature Membership (FM1-FM50)", available: true },
                { text: "Resume Bank (Unlimited Access)", available: true },
                { text: "Home Page Banner Ad (Exclusive Placement)", available: true },
                { text: "Inner Page Banner Ad (Exclusive Placement)", available: true },
            ],
            services: [
                { title: "Custom Hiring Solutions", description: "Tailored solutions for your hiring needs." },
                { title: "Dedicated Account Manager", description: "A dedicated expert to assist you." },
                { title: "White Label Job Board", description: "Brand the platform as your own." },
                { title: "AI-Powered Job Matching", description: "Smart job matching for better hiring." },
            ],
            questions: [
                { id: 1, question: "Do you offer enterprise discounts?", answer: "Yes, contact sales for bulk pricing." },
                { id: 2, question: "Is API access included?", answer: "Yes, API access is included in this plan." },
                { id: 3, question: "How does onboarding work?", answer: "We provide full onboarding support." },
                { id: 4, question: "Can I request custom features?", answer: "Yes, we offer custom feature development." },
            ],
        },
    ];


    const data = plans?.find(itm => itm?.id.toString() === id.toString());

    return (
        <div className='bg-gray-100'>
            {/* header */}
            <header
                className='package-bannerIn flex flex-col items-center justify-center bg-[#fff]'>
                <img
                    src='/3d2.png'
                    alt='icon'
                    className='w-24 mt-8'
                />
                <h2 className="md:text-3xl text-2xl font-bold mt-2">Service Package
                </h2>
            </header>

            {/* line title */}
            <div className="relative flex items-center justify-center mt-4">
                <h3
                    className="bg-gray-100 flex items-center justify-center font-bold py-2 px-4 md:text-3xl text-sm relative after:absolute md:after:w-10 after:w-6 md:after:h-10 after:h-6 after:rounded-full after:m-auto after:bg-primary_blue after:bottom-0 after:top-0 md:after:-left-10 after:-left-6 before:absolute md:before:w-10 before:w-6 md:before:h-10 before:h-6 before:rounded-full before:bg-primary_blue before:m-auto before:bottom-0 before:top-0 md:before:-right-10 before:-right-6 z-10"
                >
                    RESUME BANK (RB)
                </h3>
                <span className="bg-gray-500 border border-dashed h-[1px] w-full absolute -z-1"></span>
            </div>
            {/* plan cards */}
            <div className="bg-white py-4 mt-6">
                <MaxWidthWrapper>
                    <div className="mt-12 pb-16">
                        <PricingCard2 />
                    </div>
                    <div className="min-h-screen hidden text-black py-12 px-4 md:px-6">
                        <div className="max-w-6xl mx-auto">
                            <Services service={data?.services} />
                            <Question question={data?.questions} />
                            <Consulting />
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>
        </div>
    );
};

export default PricingPage;

