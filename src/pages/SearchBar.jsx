import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext'; 
import { Link } from 'react-router-dom'; // Import Link
import loadingGif from '../assets/ZKZg.gif'; 

const SearchBar = () => {
  const { data = [], loading } = useContext(ShopContext); 
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(true); // State to toggle the search

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleToggleSearch = () => {
    setShowSearch(!showSearch); // Toggles the search
  };

  const filteredProducts = data.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {showSearch && (
        <div className="fixed inset-0 flex z-50">
          {/* Search Bar */}
          <div className="bg-white p-6 z-50 
            w-full sm:w-full md:w-1/2 lg:w-1/3 
            h-full md:h-auto lg:h-auto fixed right-0">
            <button 
              onClick={handleToggleSearch}
              className="absolute top-2 right-2 text-gray-500"
            >
              X {/* Close button */}
            </button>
            <input 
              type="text" 
              value={searchTerm} 
              onChange={handleSearchChange} 
              placeholder="Search for products..." 
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
            />
            {loading ? (
              <img src={loadingGif} alt="Loading..." className="mx-auto" />
            ) : (
              <ul>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map(product => (
                    <li key={product.id}>
                      <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">
                        {product.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <p>No products found</p>
                )}
              </ul>
            )}
          </div>

          {/* Blurred Background */}
          <div 
            className="w-full md:w-1/2 lg:w-2/3 bg-black bg-opacity-50 backdrop-blur-md cursor-pointer"
            onClick={handleToggleSearch} // Close search when background clicked
          />
        </div>
      )}
    </>
  );
};

export default SearchBar;
