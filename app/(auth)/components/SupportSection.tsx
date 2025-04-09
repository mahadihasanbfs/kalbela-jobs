import React from 'react';

const SupportSection = () => {
  return (
    <div className="mt-16 w-full">
      <div
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/support_bg.jpg')",
        }}
      >
        <div className="w-full text-white py-12 px-4">
          <div className="flex flex-col items-center max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">Need Help?</h3>
            <p className="text-center mb-6">Contact us and we are here to help you</p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded">
              CALL US: +880 1601-016552
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
