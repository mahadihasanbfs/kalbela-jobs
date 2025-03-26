import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Card, CardHeader } from "@/components/ui/card";
import CustomTitle from "./CustomTitle";

const VideoGallery = () => {
    const videos = [
        "https://www.youtube.com/embed/cDbOypGGQFI",
        "https://www.youtube.com/embed/3JZ_D3ELwOQ",
        "https://www.youtube.com/embed/tgbNymZ7vqY",
        "https://www.youtube.com/embed/kJQP7kiw5Fk",

    ];


    const videoData = [
        {
            id: 0,
            title: "২০২৪ সালে যদি Job Preparation নিতাম, তাহলে আমি এভাবে প্রস্তুতি নিতাম !",
            url: "https://www.youtube.com/embed/cDbOypGGQFI"
        },
        {
            id: 1,
            title: "Zero2Hero: শুন্য থেকে কিভাবে বিসিএস প্রস্তুতি শুরু করবেন? How to start BCS/other job study from zero",
            url: "https://www.youtube.com/embed/gSCsPzzBLw4"
        },
        {
            id: 2,
            title: "৪৫ ও ৪৬তম বিসিএস প্রিলিতে ১৫৫+ মার্ক তুলতে যা যা করেছি || BCS Preliminary Strategies",
            url: "https://www.youtube.com/embed/wHFYElqAFsg"
        },
        {
            id: 3,
            title: "শূন্য থেকে বিসিএস প্রস্তুতি || 47th BCS Preparation Guideline || A to Z BCS || BCS Book List",
            url: "https://www.youtube.com/embed/rDFPm2b-ilQ"
        },
    ]


    return (
        <MaxWidthWrapper>
            <CustomTitle title="Our Video Gallery" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
                {videoData?.map((video, index) => (
                    <Card key={index} className="!p-0 !aspect-w-16 !aspect-h-9 !border-none !shadow-none">
                        <CardHeader className="!p-0">
                            <iframe
                                className="w-full lg:h-[200px] !mb-2 h-[200px] rounded-lg"
                                src={video?.url}
                                title={`Video ${index + 1}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <h4 className="text-sm text-gray-800 mt-2">{video?.title.slice(0, 46)}
                                {video?.title.length > 46 ? '...' : ''}
                            </h4>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </MaxWidthWrapper>
    );
};

export default VideoGallery;