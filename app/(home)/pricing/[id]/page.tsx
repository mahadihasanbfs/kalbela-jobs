'use client';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import Consulting from './components/Consulting';
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
        <div>
            <header
                className='package-bannerIn flex flex-col items-center justify-center bg-[#f7f5f5cc]'>
                <img
                    src='/3d2.png'
                    alt='icon'
                    className='w-24 mt-8'
                />
                <h2 className="md:text-3xl text-2xl font-bold mt-2">Service Package
                </h2>
            </header>
            <div className="min-h-screen text-black py-12 px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <Services service={data?.services} />
                    <Question question={data?.questions} />
                    <Consulting />
                </div>
            </div>
        </div>
    );
};

export default PricingPage;

