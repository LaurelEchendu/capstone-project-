import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import Item from '../items/Item';

const NewCollection = (props) => {
  const { data } = useContext(ShopContext);

  const filteredItems = data.filter(item => item.category !== 'electronics');

  return (
    <div className='flex flex-col items-center gap-[10px] mb-[100px] lg:mt-[80px] md:gap-[5px] mt-0 md:h-[fit-content]'>
      <h1 className='text-[#171717] lg:text-[50px] lg:font-[600] md:text-[50px] sm: text-[30px] font-[600]'>{props.heading}</h1>
      <hr className='w-[200px] h-[6px] rounded-md bg-[#252525]'/>
      {filteredItems.length === 0 ? (
        <p>No items available</p> 
      ) : (
        <div className='lg:grid lg:grid-cols-3 lg:mt-[50px] lg:gap-[200px] md:grid md:grid-cols-2 md:pl-[50px] md:gap-[30px] md:mt-[50px] sm: grid grid-cols-2 gap-[40px] mt-[40px]'>
          {filteredItems.map((item) => (
            <Item
              key={item.id} 
              id={item.id}
              name={item.title}
              image={item.image}
              price={item.price}
              description={item.rating.count} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default NewCollection;
