import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import hand_icon from '../../assets/hand_icon.png';

const Hero = () => {
  const images = [
    "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
  ];

  const dummyTexts = [
    "New Trends Arriving Weekly",
    "Elegant Fashion for Every Style",
    "Explore the Latest Jewelry Collection",
    "Exclusive Designs Just for You"
  ];

  const [index, setIndex] = useState(0);

  const handleNextImg = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const intervalid = setInterval(handleNextImg, 8000);
    return () => clearInterval(intervalid);
  }, []);

  return (
    <div className='lg:flex lg:h-[100vh] lg:bg-custom-gradient lg:min-h-screen lg:font-instrument md:flex md:bg-custom-gradient md:font-poppins sm: flex bg-custom-gradient min-h-[50vh] sm: font-poppins'>
      <div className='animate-leFlyInLeft lg:flex-1 lg:flex lg:flex-col lg:justify-center lg:gap-[5px] lg:pl-[120px] md:flex-1 md:flex md:flex-col md:justify-center md:gap-[5px] md:pl-[60px] sm: flex-col flex justify-center pl-[10px] overflow-hidden mt-[20px]'>
        <h2 className='text-[#090909] lg:text-[18px] lg:mt-[30px] lg:font-[600] md:text-[18px] md:font-[600] sm: mt-[10px] text-[18px] font-[700] mb-[15px]' style={{ margin: 0 }}>
          NEW ARRIVALS ONLY
          <img src={hand_icon} className='lg:w-[px] md:w-[px] sm: w-10 inline-block' style={{ margin: 0 }} />
        </h2> 
        <div>
          <div className='flex items-center lg:gap-[15px] md:gap-[15px] sm:flex sm:items-center gap-[10px] mb-[15px]'>
            <p className='text-[#171717] font-[600] lg:text-[70px] md:text-[60px] sm: text-[40px]' style={{ margin: 0 }}><i>{dummyTexts[index]}</i></p>
          </div>
        </div>
        <div>
          <button className='rounded-full border-none text-white mt-[20px] cursor-pointer bg-[#ff4141] font-[600] lg:w-[350px] lg:h-[60px] lg:text-[28px] md:w-[200px] md:h-[45px] md:text-[20px] sm: text-[10px] w-[120px] h-[25px]'>
            <Link to={'/women'}>Latest collection</Link>
          </button>
        </div>
      </div>
      <div className='bg-white rounded-full lg:w-96 lg:flex-1 lg:flex lg:items-center lg:justify-center lg:mt-[30px] mr-[40px] md:flex-1 md:flex md:items-center md:justify-center md:mr-[40px] md:mt-0 sm: flex-1 flex items-center justify-center'>
        <img src={images[index]} key={index} className='bg-none lg:w-96 md:w-60 sm: w-40 object-contain' />
      </div>
    </div>
  );
}

export default Hero;
