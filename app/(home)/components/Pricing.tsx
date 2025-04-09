import { Check, X } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
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
                <div className="grid max-w-sm grid-cols-1 gap-6 mx-auto mt-8 text-center md:text-left md:mt-16 md:max-w-6xl md:grid-cols-3">
                    {plans.map((plan, index) => (
                        <div key={index} className="relative group">
                            <div className="relative group overflow-hidden hover:bg-[#DFDFF8] duration-200 border border-gray-200 rounded-2xl">
                                <div className="p-6 lg:px-10 lg:py-8">
                                    {/* <h3 className="text-lg font-bold group-hover:text-black font-pj">{plan.name}</h3> */}
                                    <h2 className="mt-3 group-hover:text-black duration-150 text-3xl font-bold font-pj">{plan?.name}</h2>
                                    <p className="mt-5 text-base font-normal leading-7 text-gray-600 group-hover:text-gray-600 font-pj">
                                        {plan.description}
                                    </p>
                                    <Link
                                        href={`/pricing/${plan?.id}`}
                                        className="inline-flex items-center justify-center px-8 py-3.5 w-full mt-8 text-base font-bold text-gray-900 group-hover:bg-white hover:bg-white transition-all border-gray-400 duration-200 border-2 group-hover:border-transparent focus:ring-offset-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:bg-opacity-90"
                                        role="button"
                                    >
                                        Get Started
                                    </Link>
                                    <div className="">
                                        <p className="mt-8 text-base text-start font-bold group-hover:text-black font-pj">
                                            What's included:
                                        </p>
                                        <ul className="mt-4 space-y-3 text-base text-start font-pj">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className={`flex gap-1 duration-150 ${feature.available ? 'text-green-600 group-hover:text-green-600' : 'text-red-600 group-hover:text-red-600'}`}>
                                                    {feature.available ? <Check strokeWidth={1} /> : <X strokeWidth={1} />}
                                                    <span>{feature.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
