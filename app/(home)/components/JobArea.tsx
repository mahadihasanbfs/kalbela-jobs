'use client';

import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import FeaturedJobs from "./FeaturedJobs";

const JobArea = () => {
    const [showAds, setShowAds] = useState(true);

    const addItem: any[] = [
        {
            id: 1,
            addBanner: 'https://img.freepik.com/free-psd/new-smartphone-social-media-story-design-template_47987-25437.jpg?t=st=1741585275~exp=1741588875~hmac=3f193daabc3f7a6d28fb3f566036b5cee0382a1531157b69ed6bdba0ae8b5d1f&w=740'
        },
        {
            id: 2,
            addBanner: "https://img.freepik.com/free-vector/hand-drawn-electronics-store-facebook-template_23-2151138109.jpg?t=st=1741585315~exp=1741588915~hmac=ba44f066a6eb427204b27c141b4e3cf6bdbea43669c69fd6a8c8fa005689bb70&w=1380"
        }
    ];

    return (
        <div>
            <div className={`grid gap-4 w-full ${showAds ? 'grid-cols-4' : 'grid-cols-3'}`}>
                <div className="col-span-3 w-full">
                    <FeaturedJobs />
                </div>

                {showAds && (
                    <div className="relative">
                        <button
                            onClick={() => setShowAds(false)}
                            className="absolute top-2 right-2 bg-gray-300 p-1 hover:bg-gray-400 z-50"
                        >
                            <X size={20} />
                        </button>
                        {addItem?.map((item) => (
                            <Image
                                key={item.id}
                                src={item.addBanner}
                                alt="ads"
                                width={400}
                                height={500}
                                className="mb-4"
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default JobArea;
