import React from "react";

const NesLetter = () => {
  return (
    <section className="relative pt-24 pb-12 bg-white sm:pb-16 lg:pb-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-md mx-auto md:max-w-5xl bg-gray-50 rounded-xl">
          <div className="p-8 sm:p-12">
            <div className="lg:flex lg:items-center">
              <div className="shrink-0">
                <img
                  className="object-cover w-56 h-auto -mt-16 rounded-lg shadow-xl lg:-mt-24"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-newsletter/2/book-cover.png"
                  alt="News illustration"
                />
              </div>
              <div className="flex-1 mt-8 lg:ml-12 lg:mt-0">
                <div className="lg:max-w-2xl space-y-2">
                  <h3 className="md:text-3xl text-xl font-bold  text-gray-900">
                    Stay Informed with the Latest News Updates
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-6 text-gray-500 md:mt-0">
                    Subscribe to get breaking news, exclusive stories, and weekly highlights delivered straight to your inbox.
                    Be the first to know what’s happening around the world.
                    Join thousands of readers who trust us to keep them informed and ahead.
                  </p>

                </div>
                <form
                  action="#"
                  method="POST"
                  className="mt-8 space-y-4 md:mt-12 md:space-x-4 md:space-y-0 md:flex"
                >
                  <div className="md:flex-1">
                    <label htmlFor="" className="sr-only">
                      First name
                    </label>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="block w-full px-4 py-3 text-base sm:text-sm sm:py-3.5 font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="md:flex-1">
                    <label htmlFor="" className="sr-only">
                      Email address
                    </label>
                    <div>
                      <input
                        type="email"
                        name=""
                        id=""
                        className="block w-full px-4 py-3 text-base font-medium sm:text-sm sm:py-3.5 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200" />
                    <button
                      type="button"
                      className="relative inline-flex items-center justify-center w-full px-6 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </form>
                <p className="mt-6 text-sm font-normal text-gray-500 lg:mt-4">
                  We value your privacy. No spam, just quality news content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 h-full w-full -z-1"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="none"
        viewBox="0 0 1440 700"
      >
        <g mask='url("#SvgjsMask2125")' fill="none">
          <rect width={1440} height={700} x={0} y={0} fill="rgba(14, 42, 71, 0.02)" />
          <path
            d="M87 700L787 0L1457.5 0L757.5 700z"
            fill='url("#SvgjsLinearGradient2126")'
          />
          <path
            d="M538.2 700L1238.2 0L1781.2 0L1081.2 700z"
            fill='url("#SvgjsLinearGradient2126")'
          />
          <path
            d="M1404 700L704 0L605 0L1305 700z"
            fill='url("#SvgjsLinearGradient2127")'
          />
          <path
            d="M881.8 700L181.79999999999995 0L70.79999999999995 0L770.8 700z"
            fill='url("#SvgjsLinearGradient2127")'
          />
          <path
            d="M952.3356462660463 700L1440 212.33564626604624L1440 700z"
            fill='url("#SvgjsLinearGradient2126")'
          />
          <path
            d="M0 700L487.66435373395376 700L 0 212.33564626604624z"
            fill='url("#SvgjsLinearGradient2127")'
          />
        </g>
        <defs>
          <mask id="SvgjsMask2125">
            <rect width={1440} height={700} fill="#ffffff" />
          </mask>
          <linearGradient
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
            id="SvgjsLinearGradient2126"
          >
            <stop stopColor="rgba(158, 170, 172, 0.19)" offset={0} />
            <stop
              stopOpacity={0}
              stopColor="rgba(158, 170, 172, 0.19)"
              offset="0.66"
            />
          </linearGradient>
          <linearGradient
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
            id="SvgjsLinearGradient2127"
          >
            <stop stopColor="rgba(158, 170, 172, 0.19)" offset={0} />
            <stop
              stopOpacity={0}
              stopColor="rgba(158, 170, 172, 0.19)"
              offset="0.66"
            />
          </linearGradient>
        </defs>
      </svg>

    </section>
  );
};

export default NesLetter;
