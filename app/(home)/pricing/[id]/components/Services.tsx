import React from 'react';
import ServiceCard from './ServiceCard';

interface ServicesProps {
    service: any; // Replace 'any' with the appropriate type for 'service' if known
}

const Services: React.FC<ServicesProps> = ({ service }) => {
    return (
        <div>
            <div className="text-center mb-12">
                <p className="text-sm md:w-[500px] m-auto text-center md:text-base">
                    We offer comprehensive web development services tailored to your needs, from simple static pages to complex
                    dynamic websites.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {
                    service?.map((itm: any, index: number) => <ServiceCard key={index} data={itm} index={index + 1} />)
                }
            </div>
        </div>
    );
};

export default Services;