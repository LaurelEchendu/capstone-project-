import React from 'react'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
    const {product} =props
    const { addToCart }=useContext(ShopContext);


  return (
    <div className='lg:flex lg:mx-[170px] md:mx-[50px] md:block md:mb-[50px]'>
      <div className='flex gap-[17px]'>
        <div className='flex flex-col gap-[16px]'>
            <img src={product.image} className='h-[163px] lg:w-[400px] md:w-[80px] sm w-[70px]'/>
            <img src={product.image} className='h-[163px] lg:w-[400px] md:w-[80px] sm w-[70px]'/>
            <img src={product.image} className='h-[163px] lg:w-[400px] md:w-[80px] sm w-[70px]'/>
            <img src={product.image} className='h-[163px] lg:w-[400px] md:w-[80px] sm w-[70px]'/>
        </div>
        <div>
            <img src={product.image} className='lg:w-[1500px] h-[700px] md:w-[700px] sm: w-[250px]'/>
        </div>
      </div>
      <div className='mx-[70px] md:mt-[50px]'>  
        <h1 className='text-[#3d3d3d] font-[700] lg:text-[40px] md:text-[40px] sm: text-[30px] mt-11'>{product.title}</h1>
        <div className='flex items-center mt-[13px] mb-[10px] gap-[5px] text-[#1c1c1c] text-[16px]'>
          <img src={ star_icon} />
          <img src={ star_icon} />
          <img src={ star_icon} />
          <img src={ star_icon} />
          <img src={ star_dull_icon} />
          <p>(122)</p>
        </div>
        <div className=''>
          <div className='text-[#818181]'>${product.price}</div>
          <div className='text-[#ff4141] line-through'>${product.rating.count}</div>
          <div className=''>{product.description}</div>
          <div className=''>
            <h1 className='mt-[55px] text-[#656565] text-[20px] font-[600] '>Select size</h1>
            <div className='flex my-[30px] lg:gap-[20px] md:gap-[20px] sm: gap-[10px]'>
              <div className='px-[18px] py-[24px] bg-[#9e9c9c] border-2 border-[#fbfbfb] rounded-lg cursor-pointer'>S</div>
              <div className='px-[18px] py-[24px] bg-[#9e9c9c] border-2 border-[#fbfbfb] rounded-lg cursor-pointer'>M</div>
              <div className='px-[18px] py-[24px] bg-[#9e9c9c] border-2 border-[#fbfbfb] rounded-lg cursor-pointer'>L</div>
              <div className='px-[18px] py-[24px] bg-[#9e9c9c] border-2 border-[#fbfbfb] rounded-lg cursor-pointer'>Xl</div>
              <div className='px-[18px] py-[24px] bg-[#9e9c9c] border-2 border-[#fbfbfb] rounded-lg cursor-pointer'>XXL</div>
            </div>
          </div>
          <button className='px-[40px] py-[20px] w-[200px] text-[16px] font-[600] text-white bg-[#ff4141] hover:bg-[#eb5959] mb-[40px] outline-none cursor-pointer' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
          <p className='mt-[10px]'><span className='font-[600]'>Category:</span>{product.category}</p>
          <p className='mt-[10px]'><span className='font-[600]'>Tags:</span>Modern, Latest, Classy</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
