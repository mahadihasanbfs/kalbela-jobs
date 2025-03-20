import React from 'react';
import StatisticsList from './StatisticsList';

const StaticsBar = () => {
    const bg = "https://images.unsplash.com/photo-1610374792793-f016b77ca51a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div style={{
            backgroundImage: `linear-gradient(180deg, rgba(4, 24, 43, 0.689), rgba(1, 8, 21, 0.96)), url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "end",
        }}

            className=' w-full md:h-[7rem] md:p-0 p-2 opacity-100 overflow-hidden mb-6 rounded-t-[38px] rounded-b-lg flex items-center justify-center gap-4'>
            <StatisticsList />
        </div>
    );
};

export default StaticsBar;