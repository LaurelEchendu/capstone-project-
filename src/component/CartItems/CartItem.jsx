import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../../assets/cart_cross_icon.png';

const CartItem = () => {
  const { data, cartItem, removeFromCart } = useContext(ShopContext);

  return (
    <div className='lg:mx-[100px] lg:my-[170px] md:mx-[100px] md:my-[170px] sm:mx-[20px] my-[50px]'>
      {/* Table headers */}
      <div className='grid grid-cols-5 gap-x-10 px-[10px] text-[#454545] text-[8px] sm:text-[10px] md:text-[18px] font-[500] lg:font-[600] mb-[20px]'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
      <hr className='h-[2px] md:h-[3px] bg-[#e2e2e2]' />

      {/* Cart items */}
      {data.length > 0 && data.map((item) => {
        if (cartItem[item.id] > 0) {
          return (
            <div key={item.id}>
              <div className='grid grid-cols-5 gap-x-10 px-[10px] text-[#454545] text-[8px] sm:text-[16px] md:text-[18px] font-[500] lg:font-[600] mb-[10px]'>
                <img src={item.image} alt={item.title} className='h-[50px] sm:h-[62px] w-[50px]' />
                <p>{item.title.length > 15 ? `${item.title.slice(0, 15)}...` : item.title}</p>
                <p>${item.price}</p>
                <button className='w-[50px] sm:w-[64px] h-[40px] md:h-[50px] border bg-[#f9f9f9]'>
                  {cartItem[item.id]}
                </button>
                <img
                  src={remove_icon}
                  alt="Remove from cart"
                  onClick={() => removeFromCart(item.id)}
                  className='w-[12px] sm:w-[15px] my-[20px] cursor-pointer'
                />
              </div>
              <hr className='my-[10px]' />
            </div>
          );
        }
        return null;
      })}

      {/* Proceed to Checkout Button */}
      <div className="flex justify-end mt-4">
        <Link to="/checkout">
          <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded sm:px-2 font-poppins">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartItem;
