import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const PricingCard = ({ plan }: any) => {
    return (
        <div className="relative group">
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
                            {plan.features.map((feature: any, idx: number) => (
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
    );
};

export default PricingCard;