import NesLetter from "./NesLetter";

const DownloadOurMobileApp = () => {
    return (
        <section className="bg-gray-900">
            <div className="relative pt-12 overflow-hidden  sm:pt-16 lg:py-20 xl:py-24">
                <div className="absolute inset-0">
                    <img
                        className="object-cover w-full h-full"
                        src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-marketplace/1/background.png"
                        alt=""
                    />
                </div>
                <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto lg:flex lg:items-center">
                        <div className="max-w-md mx-auto text-center lg:w-1/2 lg:text-left lg:max-w-none lg:mx-0">
                            <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-4xl">
                                Download Our Mobile App & Stay Connected!
                            </h1>
                            <p className="mt-6 text-sm font-thin text-gray-400 ">
                                Experience seamless access to our platform with our mobile app, designed for convenience and efficiency. Stay updated, manage your activities, and enjoy a smooth user experience anytime, anywhere. Download now and unlock exclusive features at your fingertips!
                            </p>
                            <div className="mt-10">
                                {/* <a href="#" title="" className="flex" target="_blank" rel="noopener">
                                <img
                                    className="object-contain w-auto h-14"
                                    src="https://landingfoliocom.imgix.net/store/collection/saasui/images/footer/4/app-store.png"
                                    alt=""
                                />
                            </a> */}
                                <a href="#" title="" className="flex" target="_blank" rel="noopener">
                                    <img
                                        className="object-contain w-auto h-14"
                                        src="https://landingfoliocom.imgix.net/store/collection/saasui/images/footer/4/play-store.png"
                                        alt=""
                                    />
                                </a>
                            </div>

                        </div>
                        <div className="relative mt-8 lg:w-1/2 w-full  lg:mt-0">
                            <img
                                className=" mx-auto lg:max-w-sm lg:absolute lg:inset-x-0 lg:-bottom-80"
                                src="https://i.ibb.co.com/V0tLHfvn/phone-mockup-1.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default DownloadOurMobileApp;