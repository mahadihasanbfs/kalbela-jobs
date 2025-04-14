import { Check, X } from "lucide-react";
import Link from "next/link";
import PricingCard from "./PricingCard";
import PricingCard2 from "./PricingCard2";

const Pricing = () => {
    const plans = [
        {
            id: 1,
            name: "Standard",
            subTitle: "A simple start for everyone",
            price: "$99",
            isPopular: false,
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
            name: "Premium",
            subTitle: "For small to medium size business",
            price: "$199",
            isPopular: true,
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
            name: "Customizable ",
            subTitle: "Solution for big organizations Customize circular posting is available.Based on Circular posting demand we offer amazing deals.The fees will vary and negotiable based on: ",
            price: "$499",
            isPopular: false,
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

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl px-8 mx-auto text-center md:px-0">
                    <h2 className="font-bold md:text-[1.4rem] text-2xl uppercase font-pj">
                        Service Package

                        <div className="flex items-center justify-center gap-1 mt-3 ">
                            <span className="bg-primary_blue w-[30px] h-1 rounded-full"></span>
                            <span className="bg-gray-200 w-[50px] h-1 rounded-full"></span>
                        </div>
                    </h2>

                    <p className="mt-2 text-lg font-normal text-gray-600 font-pj">
                        Various packages are available for job posting, membership, resume banks, and customized plans.
                    </p>
                </div>
                <div className="grid max-w-sm grid-cols-1 md:gap-6 gap-10 mx-auto mt-8 text-center md:text-left overflow-hidden py-8 px-4 md:mt-16 md:max-w-6xl md:grid-cols-3">
                    {plans.map((plan, index) => (
                        <PricingCard2 key={index} plan={plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
