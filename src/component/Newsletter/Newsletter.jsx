import React from 'react';

const Newsletter = () => {
  return (
    <div className='lg:w-[65%] lg:h-[50vh] lg:flex lg:flex-col lg:items-center lg:justify-center lg:m-[auto] lg:mb-[150px] lg:px-[140px] lg:gap-[30px] lg:bg-custom-gradient md:h-[fit-content] sm: w-[90%] h-[auto] flex flex-col items-center justify-center m-[auto] mb-[50px] px-[20px] gap-[20px] bg-custom-gradient'>
      <h1 className='lg:text-[#454545] lg:text-[55px] lg:font-[600] lg:mt-[40px] md:text-[30px] text-[#454545] text-[28px] font-[600] mt-[20px] text-center'>
        Get Exclusive Offers on Your Email
      </h1>
      <p className='lg:text-[#454545] lg:text-[20px] lg:font-[600] lg:m-0 md:text-[20px] text-[#454545] text-[16px] font-[500] m-0 text-center'>
        Subscribe to our newsletter and stay updated
      </p>
      <div className='lg:flex lg:items-center lg:justify-between lg:bg-[#e3e3e3] lg:w-[730px] lg:h-[50px] lg:rounded-full lg:border-1 lg:border-[#e3e3e3] md:w-[500px] sm: flex items-center justify-center bg-[#e3e3e3] w-[100%] h-[auto] rounded-full border border-[#e3e3e3]'>
        <input
          type="email"
          placeholder='Your Email Address'
          className='lg:w-[500px] lg:ml-[30px] lg:border-none lg:outline-none lg:text-[#616161] lg:font-poppins lg:text-[16px] lg:bg-[#e3e3e3] md:px-[50px] sm: w-[80%] ml-0 mb-[10px] border-none outline-none text-[#616161] font-poppins text-[14px] bg-[#e3e3e3] px-[20px]'
        />
        <button className='lg:w-[222px] lg:h-[50px] lg:rounded-full lg:border-none lg:text-white lg:text-[16px] lg:font-[600] lg:cursor-pointer lg:bg-black sm: w-[80%] h-[40px] rounded-full border-none text-white text-[14px] font-[600] cursor-pointer bg-black'>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
