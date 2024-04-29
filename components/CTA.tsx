import React from "react";

const CTACard = () => {
  return (
    <div>
      <div className="bg-white dark:bg-gray-900 md:hidden p-2">
        <div className="grid grid-cols-1 items-center mx-auto max-w-screen-xl xl:gap-16 md:py-16 lg:px-6">
          <div className="relative w-full">
            <img
              className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-lg shadow-lg mx-auto"
              src="https://images.pexels.com/photos/4465969/pexels-photo-4465969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="dashboard image"
            />
            <div className="absolute top-0 left-0 bg-green-500 text-white py-1 px-4 rounded-br-lg">
              Herbal
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center py-2 my-4 max-w-xl animate-fadeIn">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Experience Nature&apos;s Beauty
          </h2>

          <p className="hidden md:block text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Elevate your skincare routine with Virtue Botanica, where beauty
            meets nature. Our handcrafted products are meticulously formulated
            to harness the power of natural ingredients, delivering pure,
            organic excellence to your skincare regimen.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-full py-3 px-8 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTACard;
