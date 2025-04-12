import { ChevronUp } from 'lucide-react';
import React from 'react';

const BackToTopBtn = () => {
  return (
    <div className="fixed bottom-8 right-8">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bg-white p-3 rounded-full shadow-md border border-gray-200 text-red-500 hover:bg-gray-50 transition-colors"
        aria-label="Back to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </div>
  );
};

export default BackToTopBtn;
