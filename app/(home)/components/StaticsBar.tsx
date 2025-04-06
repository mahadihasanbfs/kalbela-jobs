import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';
import StatisticsList from './StatisticsList';

const StaticsBar = () => {
    // const bg = "https://images.unsplash.com/photo-1610374792793-f016b77ca51a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    //     style = {{
    //         backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.548), rgba(0, 0, 0, 0.745)), url(${bg})`,
    //             backgroundSize: "cover",
    //                 backgroundPosition: "end",
    //         }
    // }
    return (
        <div style={{
            backgroundImage: `linear-gradient(180deg, rgb(14, 39, 42), rgba(0, 9, 9, 0.963))`,
            backgroundSize: "cover",
            backgroundPosition: "end",
        }}

            className=' w-full md:h-[5rem] md:p-0 p-2 opacity-100 overflow-hidden mb-6 flex items-center justify-center gap-4'>
            <MaxWidthWrapper>
                <StatisticsList />
            </MaxWidthWrapper>
        </div>
    );
};

export default StaticsBar;