import React from 'react';
import ContactForm from './components/ContactForm';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import MapView from './components/MapView';

const page = () => {
  return (
    <div>
      <div className='relative'>
        <img src="/contact_us_bg.jpg" alt="" />
        <div className='text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase'>
          <h1 className='text-3xl font-bold mb-2'>Contact Us</h1>
          <p className='font-medium uppercase'>We Are Open to Discuss Your Needs</p>
        </div>
      </div>
      <MaxWidthWrapper className='my-10'>
        <ContactForm />
      </MaxWidthWrapper>
      <MapView />
    </div>
  );
};

export default page;
