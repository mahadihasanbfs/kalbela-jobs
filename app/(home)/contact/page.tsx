import React from 'react';
import ContactForm from './components/ContactForm';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import MapView from './components/MapView';
import PageBanner from '@/components/PageBanner';

const page = () => {
  return (
    <div>
      <PageBanner image='/contact_us_bg.jpg' title='Contact Us' description='We Are Open to Discuss Your Needs' />
      <MaxWidthWrapper className='my-10'>
        <ContactForm />
      </MaxWidthWrapper>
      <MapView />
    </div>
  );
};

export default page;
