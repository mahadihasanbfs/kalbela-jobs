import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ShortAdd: React.FC = () => {
    const banners = [
        {
            id: 0,
            img: "/1.png",
            title: "Find Your Dream Job",
            link: "#"
        },
        {
            id: 1,
            img: "/2.png",
            title: "Find Your Dream Job",
            link: "#"
        },
        {
            id: 2,
            img: "/3.png",
            title: "Find Your Dream Job",
            link: "#"
        },

    ]
    return (
        <div>
            <div className='flex gap-6 items-center justify-center  py-3'>
                {
                    banners?.map(banner =>
                        <Link
                            className='w-full '
                            key={banner.id} href={banner?.link}>
                            <Image
                                key={banner?.id}
                                priority
                                className='w-full object-cover !border !border-gray-300 h-[40px] lg:h-[80px]'
                                src={banner?.img}
                                alt={banner?.title}
                                width={500}
                                height={500}
                            />
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default ShortAdd;