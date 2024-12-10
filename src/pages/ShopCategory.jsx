import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
// import dropdown_icon from '../assets/dropdown_icon.png';
import Item from '../component/items/Item';
import NewCollection from '../component/New collections/NewCollection';
import remove_icon from '../assets/cart_cross_icon.png';


const ShopCategory = (props) => {
  const { data } = useContext(ShopContext);
  const [showNewCollection, setShowNewCollection] = useState(false);
  

  const handleClick = () => {
    setShowNewCollection(true);
  };
  const handleClose = () => {
    setShowNewCollection(false);
  };

  return (
    <div className='lg:flex lg:flex-col lg:items-center lg:gap-[30px] lg:mb-[10px] lg:mt-[10px] md:gap-[5px] md:mt-0 md:h-[fit-content] sm: flex flex-col items-center gap-[15px] mb-[5px] mt-[5px]'>
      <img src={props.banner} className='lg:block lg:my-[30px] lg:mx-auto lg:w-[82%] sm:my-[10px] sm:mx-auto sm:w-[90%]' />
      <div className='lg:block lg:mx-[70px] lg:justify-between lg:items-center md:block sm: block mx-[20px] justify-center'>
        <p className='lg:text-center lg:font-[600] sm: text-center font-[500] text-[14px]'>
          <span className='lg:font-[600] lg:text-center sm: font-[500] text-center'>Showing 1-12</span> out of 36 products
        </p>
        <div className='lg:flex lg:justify-center lg:items-center lg:py-[10px] lg:px-[20px] lg:rounded-none lg:border-2 lg:border-[#888] lg:text-center lg:mb-3 lg:text-[18px] lg:uppercase lg:font-[600] sm: flex justify-center items-center py-[5px] px-[10px] rounded-none border border-[#888] text-center mb-[100px] text-[12px]'>
          {props.category} 
          {/* <img src={dropdown_icon} className='w-[10px] h-[10px]'/> */}
        </div>
        <div>
          <div className='lg:grid lg:grid-cols-3 lg:mt-[50px] lg:gap-[200px] md:grid md:grid-cols-2 md:ml-20 md:gap-[20px] md:mt-[50px] sm: grid grid-cols-2 gap-[30px]'>
            {data.map((item, i) => {
              if (props.category === item.category) {
                return <Item key={i} id={item.id} name={item.title} image={item.image} price={item.price} rating={item.rating.description} />;
              } else {
                return null;
              }
            })}
          </div>
          <div className='lg:flex lg:justify-center lg:items-center lg:my-[90px] lg:mx-auto lg:px-[40px] py-[30px]lg:rounded-full lg:bg-[#ededed] lg:text-[#787878] lg:font-[500] lg:text-[18px] sm: flex justify-center items-center my-[30px] mx-auto px-[30px] py-[20px] rounded-full bg-[#ededed] text-[#787878] font-[500] text-[14px]'>
            <button className='lg:px-[200px] lg:py-5 sm:px-[50px] sm:py-2' onClick={handleClick}>Explore More</button>
          </div>
        </div>
      </div>
      {showNewCollection && (
        <div>
          <img 
            src={remove_icon} 
            className='lg:absolute lg:ml-[900px] lg:mb-[50px] lg:border-2 lg:border-[#525252] sm:absolute sm:ml-[50px] sm:mb-[20px] sm:border sm:border-[#525252]' 
            onClick={handleClose} 
          />
          <NewCollection heading='RELATED PRODUCTS' />
        </div>
      )}

    </div>
  );
};

export default ShopCategory;
