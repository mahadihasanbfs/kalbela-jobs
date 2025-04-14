import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const PricingCard2 = ({ plan }: any) => {
    return (
        <div className="bg-white border hover:scale-[1.04] duration-200 rounded-lg p-8 shadow-lg flex flex-col w-full relative">
            {plan?.isPopular && <div className="absolute right-4 top-0 transform -translate-y-1/2">
                <span className="bg-primary_blue text-white px-4 py-1 rounded-full text-sm font-medium">Popular</span>
            </div>
            }
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800">{plan?.name}</h2>
                <p className="text-gray-600 mt-1">{plan?.subTitle}</p>
            </div>

            <div className="space-y-4 flex-grow">
                {
                    plan.features?.map((itm: any, index: number) => <div key={itm.id} className="flex items-start gap-2 text-">
                        <Check size={16} className=" text-primary_blue mt-0.5 flex-shrink-0" />
                        <span>{itm?.text}</span>
                    </div>
                    )
                }
            </div>

            <div className="mt-8">
                <div className="mb-6">
                    <h3 className="text-3xl font-bold">BDT {plan?.price}</h3>
                    {/* <p className="text-gray-500">/Circular</p> */}
                </div>

                <Link href={`/pricing/${plan?.id}`}>
                    <div className="w-full bg-primary_blue hover:bg-primary px-2 py-2.5 flex items-center justify-center rounded-md text-white">Choose Premium</div>
                </Link>
            </div>
        </div>

    );
};

export default PricingCard2;