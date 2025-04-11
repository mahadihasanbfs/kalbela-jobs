import React from 'react';

type PageBannerProps = {
  image: string;
  title: string;
  description: string;
};

const PageBanner: React.FC<PageBannerProps> = ({
  image,
  title,
  description
}) => {
  return (
    <div className='relative'>
      <img className='min-h-[200px]' src={image} alt="" />
      <div className='text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase py-4'>
        <h1 className='text-3xl font-bold mb-2'>{title}</h1>
        <p className='font-medium uppercase'>{description}</p>
      </div>
    </div>
  );
};

export default PageBanner;
