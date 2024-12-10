import React from 'react'

const DescriptionBox = (props) => {
  const { product } = props;

  return (
    <div className='lg:mx-[120px] lg:mb-[170px] sm: mx-[20px] mb-[50px]'>
      <div className='flex'>
        <div className='lg:flex lg:items-center lg:justify-center lg:text-[16px] lg:font-[600] lg:w-[170px] lg:h-[70px] lg:border-2 lg:border-[#d0d0d0] sm: flex items-center justify-center text-[14px] font-[500] w-[120px] h-[50px] border border-[#d0d0d0]'>
          Description
        </div>
        <div className='lg:flex lg:items-center lg:justify-center lg:text-[16px] lg:font-[600] lg:w-[170px] lg:h-[70px] lg:border-2 lg:border-[#d0d0d0] lg:bg-[#FBFBFB] lg:text-[#555] sm: flex items-center justify-center text-[14px] font-[500] w-[120px] h-[50px] border border-[#d0d0d0] bg-[#FBFBFB] text-[#555]'>
          Reviews (122)
        </div>
      </div>
      <div className='lg:flex lg:flex-col lg:gap-[25px] lg:border-2 lg:p-[48px] lg:pb-[70px] sm: flex flex-col gap-[15px] border p-[20px] pb-[30px]'>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default DescriptionBox;
