import React from 'react';

interface CustomTitleProps {
    title: string;
    position: string;
}

const CustomTitle: React.FC<CustomTitleProps> = ({ title, position = 'left' }) => {
    return (
        <div className={`${position === 'center' ? 'text-center' : ''} font-bold md:text-[1.4rem]  text-2xl pb-6`}>
            {title}
            <div className={`flex ${position === 'center' ? 'justify-center' : ''} items-center gap-1 mt-3`}>
                <span className="bg-primary_blue w-[30px] h-1 rounded-full"></span>
                <span className="bg-gray-200 w-[50px] h-1 rounded-full"></span>
            </div>
        </div>
    );
};

export default CustomTitle;