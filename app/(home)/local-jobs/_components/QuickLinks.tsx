import Image from "next/image"
import Link from "next/link"

export function QuickLinks() {
    // List of job categories for quick links
    const jobCategories = [
        "Local Jobs",
        "Government Jobs",
        "Newspaper Jobs",
        "Internship",
        "Skilled Jobs",
        "Semi/Unskilled Jobs",
        "NRB/PBO Professional Jobs",
        "Worldwide Jobs from NRBs",
        "Specialized Govt. Jobs For NRB/PBO",
        "Tender/EOI/RFP",
    ];

    return (
        <div className="border-gray-200 rounded-sm">
            <div className="font-semibold pb-2 border-b text-xl">Quick Links</div>

            <div className="border-gray-200">
                <ul className="text-xs space-y-1">
                    {jobCategories.map((category, index) => (
                        <li key={index} className="border-b w-full py-2">
                            <Link href="#" className="hover:text-primary_blue w-full duration-200">
                                {category}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col gap-1 mt-3">
                <Link href={'#'} className="mt-3 w-full">
                    <Image
                        src="/add3.jpg"
                        alt="NBS Resources"
                        width={500}
                        height={500}
                        className="w-full"
                    />
                </Link>

                <Link href={'#'} className="w-full">
                    <Image
                        src="/banner/3.png"
                        alt="NBS Resources"
                        width={500}
                        height={500}
                        className="w-full"
                    />
                </Link>

                <Link href={'#'} className="w-full">
                    <Image
                        src="/banner/2.png"
                        alt="NBS Resources"
                        width={500}
                        height={500}
                        className="w-full"
                    />
                </Link>

                <Link href={'#'} className=" w-full">
                    <Image
                        src="/banner/1.png"
                        alt="NBS Resources"
                        width={500}
                        height={500}
                        className="w-full"
                    />
                </Link>

            </div>

        </div>
    )
}
