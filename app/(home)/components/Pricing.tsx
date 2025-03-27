import { Check, X } from "lucide-react";

const Pricing = () => {
    const plans = [
        {
            name: "Regular Plan",
            price: "$99",
            description: "Best for individuals and small businesses.",
            features: [
                { text: "Category Job (Single Job Post)", available: true },
                { text: "Feature Job Post (Single Job Post)", available: true },
                { text: "Category Membership (CM1-CM10)", available: false },
                { text: "Feature Membership (FM1-FM10)", available: true },
                { text: "Resume Bank (RB1-RB10)", available: true },
                { text: "Home Page Banner Ad (Top, Middle & Bottom)", available: true },
                { text: "Inner Page Banner Ad (Top & Right Side)", available: true },
            ]
        },
        {
            name: "Customize Plan",
            price: "Custom Pricing",
            description: "Tailor-made solutions for your business needs.",
            features: [
                { text: "Category Membership (1-500)", available: true },
                { text: "Feature Membership (1-200)", available: true },
                { text: "Resume Bank (100-2500)", available: true },
                { text: "Validity (3/6/9/12 Month)", available: true },
                { text: "Save Your Money", available: true },

                { text: "Home Page Banner Ad (Top, Middle & Bottom)", available: false },
                { text: "Inner Page Banner Ad (Top & Right Side)", available: false },
            ]
        },
        {
            name: "Combined Package",
            price: "$299",
            description: "Best for enterprises and large businesses.",
            features: [
                { text: "Category Membership (CP1-CP6)", available: true },
                { text: "Feature Membership (CP1-CP6)", available: true },
                { text: "Resume Bank (CP1-CP6)", available: true },
                { text: "Validity (3/6/12 Month)", available: true },
                { text: "Home Page Banner Ad (Top, Middle & Bottom)", available: false },
                { text: "Inner Page Banner Ad (Top & Right Side)", available: false },
            ]
        }
    ];

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl px-8 mx-auto text-center md:px-0">
                    <h2 className="font-bold md:text-[1.4rem] text-2xl uppercase font-pj">
                        Service Package

                        <div className="flex items-center justify-center gap-1 mt-3 ">
                            <span className="bg-primary_blue w-[30px] h-1 rounded-full"></span>
                            <span className="bg-gray-200 w-[50px] h-1 rounded-full"></span>
                        </div>
                    </h2>

                    <p className="mt-2 text-lg font-normal text-gray-600 font-pj">
                        Various packages are available for job posting, membership, resume banks, and customized plans.
                    </p>
                </div>
                <div className="grid max-w-sm grid-cols-1 gap-6 mx-auto mt-8 text-center md:text-left md:mt-16 md:max-w-6xl md:grid-cols-3">
                    {plans.map((plan, index) => (
                        <div key={index} className="relative group">
                            <div className="relative group overflow-hidden hover:bg-primary duration-200 border border-gray-200 rounded-2xl">
                                <div className="p-6 lg:px-10 lg:py-8">
                                    {/* <h3 className="text-lg font-bold group-hover:text-white font-pj">{plan.name}</h3> */}
                                    <h2 className="mt-3 group-hover:text-white duration-150 text-3xl font-bold font-pj">{plan?.name}</h2>
                                    <p className="mt-5 text-base font-normal leading-7 text-gray-600 group-hover:text-gray-400 font-pj">
                                        {plan.description}
                                    </p>
                                    <a
                                        href="#"
                                        className="inline-flex items-center justify-center px-8 py-3.5 w-full mt-8 text-base font-bold text-gray-900 group-hover:bg-white hover:bg-white transition-all border-gray-400 duration-200 border-2 group-hover:border-transparent focus:ring-offset-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:bg-opacity-90"
                                        role="button"
                                    >
                                        Get Started
                                    </a>
                                    <div className="">
                                        <p className="mt-8 text-base text-start font-bold group-hover:text-white font-pj">
                                            What's included:
                                        </p>
                                        <ul className="mt-4 space-y-3 text-base text-start font-pj">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className={`flex gap-1 duration-150 ${feature.available ? 'text-green-600 group-hover:text-green-400' : 'text-red-600 group-hover:text-red-400'}`}>
                                                    {feature.available ? <Check strokeWidth={1} /> : <X strokeWidth={1} />}
                                                    <span>{feature.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
