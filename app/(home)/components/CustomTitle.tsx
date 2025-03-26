import React from 'react';

interface CustomTitleProps {
    title: string;
}

const CustomTitle: React.FC<CustomTitleProps> = ({ title }) => {
    return (
        <div className=" font-bold md:text-[1.4rem]  text-2xl">
            {title}
            <div className="flex items-center gap-1 mt-3 ">
                <span className="bg-primary_blue w-[30px] h-1 rounded-full"></span>
                <span className="bg-gray-200 w-[50px] h-1 rounded-full"></span>
            </div>
        </div>
    );
};

export default CustomTitle;