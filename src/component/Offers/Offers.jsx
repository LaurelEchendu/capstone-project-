import React from 'react';
import exclusive_image from '../../assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className="bg-custom-gradient min-h-screen flex flex-col items-center px-5 py-10 mb-12 mx-auto lg:w-2/3 lg:h-[fit-content] md:flex-row md:px-24 md:py-10 md:w-full ">
      
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-2 sm:space-y-3">
        <h1 className="text-[#171717] font-semibold m-0 lg:text-5xl md:text-4xl sm:text-3xl">Exclusive</h1>
        <h1 className="text-[#8b7373] font-semibold m-0 lg:text-4xl md:text-3xl sm:text-2xl">Offers for you</h1>
        <p className="text-[#171717] font-semibold mt-3 sm:mt-2 lg:text-lg md:text-base sm:text-sm">
          ONLY ON BEST SELLERS PRODUCT
        </p>
        <button className="bg-[#ff4141] text-white font-semibold py-2 px-3 mt-4 rounded-full sm:mt-3 sm:py-1 sm:px-4 sm:text-sm">
          Check now
        </button>
      </div>
      
      {/* Image Section - Hidden on Small Screens */}
      <div className="flex-1 flex items-center justify-center pt-6 sm:flex hidden">
        <img src={exclusive_image} alt="Exclusive Offers" className="lg:w-3/4 md:w-4/5 w-full max-w-[300px] object-contain" />
      </div>
    </div>
  );
};

export default Offers;
