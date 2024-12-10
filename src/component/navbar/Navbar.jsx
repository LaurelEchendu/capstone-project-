import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.png';
import cart_icon from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    const { cartCount } = useContext(ShopContext);
    const [menu, setMenu] = useState('shop');
    const [menuOpen, setMenuOpen] = useState(false);
    // const [showSearch, setShowSearch] = useState(false);


    return (
        // const handleToggleSearch = () => {
        //     setShowSearch(!showSearch);
        //   };

        <nav className='flex justify-around items-center p-[16px] shadow-md sticky z-10 top-0 bg-white '>
            {/* Logo Section */}
            <div className='flex items-center gap-[10px] lg:ml-11'>
                <img src={logo} alt="Logo" className='w-[80px] h-auto' /> 
                <p className='text-[#171717] lg:text-[30px] font-[600] md:text-[12px]'>SHOPPER</p> 
            </div>

            {/* Centered Button and Cart Section for Mobile Screens */}
            <div className='flex-1 flex justify-center sm:hidden'>
                <div className='flex items-center gap-[10px]'>
                    <button 
                        className='w-[80px] h-[40px] outline-none border border-[#7a7a7a] rounded-[50px] text-[#515151] text-sm font-[500] bg-white cursor-pointer scale-75 hover:bg-[#fcf7f7]'> 
                        <Link to={'/Login'}>Login</Link>
                    </button>
                    <div className='relative'>
                        <Link to={'/Cart'}>
                            <img src={cart_icon} alt="Cart" className='w-[25px] h-auto' /> 
                        </Link>
                        <div className='absolute top-[-8px] right-[-8px] w-[18px] h-[18px] flex justify-center items-center rounded-md font-semibold bg-red-600 text-white text-xs'>
                            {cartCount}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hamburger Menu Icon for Small Screens */}
            <div className='sm:hidden absolute right-4' onClick={() => setMenuOpen(!menuOpen)}>
                <div className='w-[24px] h-[2px] bg-black mb-[4px]'></div> 
                <div className='w-[24px] h-[2px] bg-black mb-[4px]'></div>
                <div className='w-[24px] h-[2px] bg-black'></div>
            </div>

            {/* Navigation Links */}
            <ul className={`sm:flex ${menuOpen ? 'block' : 'hidden'} absolute sm:static top-full left-0 right-0 bg-white  sm:bg-transparent p-4 sm:p-0 sm:items-center sm:gap-[50px] sm:font-[500] text-[#626262] sm:text-[16px] md:text-[10px] font-poppins lg:text-[16px] lg:font-[600] md:font-[600]`}>
                <li 
                    className='flex flex-col items-center justify-center gap-[3px] cursor-pointer' 
                    onClick={() => { setMenu('shop'); setMenuOpen(false); }}>
                    <Link to={'/'}>Shop</Link>{menu === 'shop' ? <hr className='border-none w-[100%] h-[4px] rounded bg-[#FF4141]' /> : <></>} 
                </li>
                <li 
                    className='flex flex-col items-center justify-center gap-[3px] cursor-pointer'
                    onClick={() => { setMenu('mens'); setMenuOpen(false); }}>
                    <Link to={'/Men'}>Men</Link>{menu === 'mens' ? <hr className='border-none w-[100%] h-[4px] rounded bg-[#FF4141]' /> : <></>}
                </li>
                <li 
                    className='flex flex-col items-center justify-center gap-[3px] cursor-pointer' 
                    onClick={() => { setMenu('womens'); setMenuOpen(false); }}>
                    <Link to={'/Women'}>Women</Link>{menu === 'womens' ? <hr className='border-none w-[100%] h-[4px] rounded bg-[#FF4141]' /> : <></>}
                </li>
                <li 
                    className='flex flex-col items-center justify-center gap-[3px] cursor-pointer' 
                    onClick={() => { setMenu('jewelery'); setMenuOpen(false); }}>
                    <Link to={'/Jewelery'}>Jewelery</Link>{menu === 'jewelery' ? <hr className='border-none w-[100%] h-[4px] rounded bg-[#FF4141]' /> : <></>}
                </li>
            </ul>

            {/* Centered Button and Cart Section for Desktop Screens */}
            <div className='hidden sm:flex items-center gap-[20px] sm:gap-[45px]'>
                <div className='text-[25px] h-auto'>
                    <Link to={'/Search'}><FaSearch /></Link>
                </div>
                <button 
                    className='w-[80px] h-[40px] outline-none border border-[#7a7a7a] rounded-[50px] text-[#515151] text-sm font-[500] bg-white cursor-pointer scale-75 hover:bg-[#fcf7f7]'>
                    <Link to={'/Login'}>Login</Link>
                </button>
                <div className='relative'>
                    <Link to={'/Cart'}>
                        <img src={cart_icon} alt="Cart" className='w-[30px] h-auto' />
                    </Link>
                    <div className='absolute top-[-8px] right-[-8px] w-[18px] h-[18px] flex justify-center items-center rounded-md font-semibold bg-red-600 text-white text-xs'>
                        {cartCount}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
