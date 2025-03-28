import React from 'react';

interface ServiceCardProps {
    data: {
        title: string;
        description: string;
    };
    index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ data, index }) => {
    return (
        <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white">{index}</span>
            </div>
            <div>
                <h3 className="font-bold text-lg mb-2">{data?.title}</h3>
                <p className="text-gray-400 text-sm">
                    {data?.description}.
                </p>
            </div>
        </div>
    );
};

export default ServiceCard;