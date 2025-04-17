import React from 'react';

const Development = ({ height }: any) => {
    return (
        <main className=" flex-1 h-full" id="course-content-area">
            <div
                className={`w-full md:h-[400px] ${height} aspect-video `}
                data-sentry-component="FeatureComingSoon"
                data-sentry-source-file="FeatureComingSoon.tsx"
            >
                <div
                    className="rounded-xl bg-card text-card-foreground shadow relative h-full w-full overflow-hidden border-2 border-dashed"
                    data-sentry-element="Card"
                    data-sentry-source-file="FeatureComingSoon.tsx"
                >

                    <div className="animate-gradient absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 opacity-100" >
                        <img
                            src="/logo.png"
                            alt='logo'
                            className="absolute top-0 left-0 right-0 bottom-0 m-auto opacity-[0.1] md:w-[660px] w-80 rounded-full"
                        />
                    </div>


                    <div
                        className="relative z-10 flex h-full flex-col items-center justify-center p-2 text-center sm:p-6"
                        data-sentry-element="CardContent"
                        data-sentry-source-file="FeatureComingSoon.tsx"
                    >
                        <div className="relative mb-4 sm:mb-6">
                            <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-accent/20 blur-xl" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={52}
                                height={52}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000"
                                strokeWidth={1}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-wrench-icon lucide-wrench"
                            >
                                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                            </svg>

                        </div>
                        <div className="animate-fade-in max-w-md space-y-1 sm:space-y-2">
                            <h3 className="md:text-2xl text-xl font-bold tracking-tight sm:text-2xl">
                                Coming Soon
                            </h3>
                            <p className="text-sm text-muted-foreground sm:text-base">
                                We're working hard to bring you something amazing. Stay tuned!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Development;