import { useEffect, useState } from "react";

const GoogleDoodles = () => {
    const [doodles, setDoodles] = useState([]);

    useEffect(() => {
        const fetchDoodles = async () => {
            try {
                const response = await fetch(
                    "https://www.google.com/doodles/json/2024/8?hl=en"
                );
                const data = await response.json();
                setDoodles(data);
            } catch (error) {
                console.error("Error fetching doodles:", error);
            }
        };

        fetchDoodles();
    }, []);

    console.log("dudools :  : :", doodles);

    return (
        <div className="grid grid-cols-3 gap-4 p-4">

            {/* {doodles.map((doodle) => (
                <div key={doodle?.title} className="border p-2 rounded-lg shadow-md">
                    <img
                        src={https:${doodle.url}}
                    alt={doodle.title}
                    className="w-full h-auto rounded-md"
          />
                    <p className="text-center mt-2 font-semibold">{doodle.title}</p>
                </div>
            ))} */}
        </div>
    );
};

export default GoogleDoodles;