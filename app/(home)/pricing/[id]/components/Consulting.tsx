import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Consulting = () => {
    return (
        <div className="bg-primary text-white rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
                <div className="flex -space-x-2">
                    <Avatar className="w-10 h-10 border-2 border-white">
                        <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 1" />
                        <AvatarFallback>U1</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-10 h-10 border-2 border-white">
                        <AvatarImage src="https://randomuser.me/api/portraits/man/44.jpg" alt="User 2" />
                        <AvatarFallback>U2</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-10 h-10 border-2 border-white">
                        <AvatarImage src="https://randomuser.me/api/portraits/men/54.jpg" alt="User 3" />
                        <AvatarFallback>U3</AvatarFallback>
                    </Avatar>
                </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
            <p className="text-gray-400 text-sm mb-6">
                Can't find the answer you're looking for? Please chat with our friendly team.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                Book time for consulting
            </button>
        </div>
    );
};

export default Consulting;
