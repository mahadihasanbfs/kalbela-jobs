"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ChevronUp } from "lucide-react";

const ScrollToTopSm = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const progress = (scrollTop / scrollHeight) * 100;
            setScrollProgress(progress);
            setIsVisible(scrollTop > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            style={{
                boxShadow: "#0000001a 0px -20px 29px 0px"
            }}
            className={`fixed bg-white  bottom-14 rounded-t-lg left-0 right-0 m-auto w-16 h-8 md:hidden overflow-hidden flex items-center justify-center ${isVisible ? "opacity-100" : "opacity-0"
                }`}
        >
            <button
                onClick={scrollToTop}
                className="w-full flex items-center justify-center h-full  text-primary_blue"
            >
                <ChevronUp className="w-6 h-6" />
            </button>
        </div>
    );
};

export default ScrollToTopSm;