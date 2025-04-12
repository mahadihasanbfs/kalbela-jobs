'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import ContactForm from './components/ContactForm';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import PageBanner from '@/components/PageBanner';

const MapView = dynamic(() => import('./components/MapView'), { ssr: false });

const Page = () => {
  return (
    <div>
      <PageBanner
        image='/contact_us_bg.jpg'
        title='Contact Us'
        description='We Are Open to Discuss Your Needs'
      />
      <MaxWidthWrapper className='my-10'>
        <ContactForm />
      </MaxWidthWrapper>
      <MapView />
    </div>
  );
};

export default Page;
