import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import star_icon from '../../assets/star_icon.png';
import star_dull_icon from '../../assets/star_dull_icon.png';

const Item = (props) => {

  const handlePurchaseClick = () => {
    navigate(`/product/${props.id}`); 
  };

  return (
    <div className="w-full max-w-[350px] bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 relative">
      {/* Image link to the product page */}
      <Link to={`/product/${props.id}`}>
        <img 
          src={props.image} 
          alt={props.title} 
          className="w-full h-[200px] object-contain lg:w-[500px] lg:h-[363px] md:w-[300px] md:h-[289px] sm:w-[200px] sm:h-[150px]"
        />
      </Link>
      
      {props.discount && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {props.discount}% OFF
        </span>
      )}
      
      <p className="mt-2 text-sm md:text-base font-medium">{props.title}</p>
      
      <div className="flex gap-2 sm:gap-4 mt-2">
        <span className="text-gray-800 font-semibold">${props.price}</span>
        {props.originalPrice && (
          <span className="text-gray-400 line-through">${props.originalPrice}</span>
        )}
      </div>
      
      <div className="flex items-center mt-2 gap-1">
        {Array(5).fill(0).map((_, index) => (
          <img 
            key={index} 
            src={index < props.rating ? star_icon : star_dull_icon} 
            alt="star" 
            className="w-4 h-4 md:w-5 md:h-5"
          />
        ))}
        <p className="text-xs md:text-sm text-gray-600">({props.price})</p>
      </div>
      
      {/* Button to navigate to the product page
      <button 
        className="text-xs md:text-sm bg-red-500 text-white font-semibold py-1 px-3 mt-4 rounded hover:bg-green-600"
        onClick={handlePurchaseClick} 
      >
        Purchase
      </button> */}
    </div>
  );
};

export default Item;
