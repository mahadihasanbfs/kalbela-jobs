import React from 'react';
interface SemiJobHeaderProps {
    title: string;
    description: string
}
const SemiJobHeader: React.FC<SemiJobHeaderProps> = ({ title, description }) => {
    return (
        <div>
            <div className="border border-dashed border-gray-500 rounded-md px-4 pt-6 pb-8 mb-6 bg-white">
                <h1 className="lg:text-[24px] md:text-xl font-regular text-gray-800">{title}</h1>
                <p className="text-sm mt-3 text-gray-700">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default SemiJobHeader;
