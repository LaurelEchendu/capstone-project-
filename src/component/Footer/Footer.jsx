import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Example with react-icons

const Footer = () => {
    return (
        <footer className='bg-gray-800 text-white p-6 bottom-0'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                {/* Logo Section */}
                <div className='flex mb-4 md:mb-0'>
                <img src={logo} alt="Logo" className='w-[80px] h-auto' /> 
                <p className='lg:text-[30px] font-[600] md:text-[12px] sm:text-[10px] mt-4 ml-2 text-white'>SHOPPER</p> 
                </div>
                
                
                {/* Navigation Links */}
                <div className='flex flex-col md:flex-row gap-4'>
                    <Link to='/' className='hover:underline'>Home</Link>
                    <Link to='/about' className='hover:underline'>About</Link>
                    <Link to='/services' className='hover:underline'>Services</Link>
                    <Link to='/contact' className='hover:underline'>Contact</Link>
                </div>

                {/* Social Media Icons */}
                <div className='flex gap-4 mt-4 md:mt-0'>
                    <a href='https://facebook.com' className='text-white hover:text-gray-400'>
                        <FaFacebookF className='w-6 h-6 md:w-8 md:h-8' /> {/* Adjust icon size */}
                    </a>
                    <a href='https://twitter.com' className='text-white hover:text-gray-400'>
                        <FaTwitter className='w-6 h-6 md:w-8 md:h-8' /> {/* Adjust icon size */}
                    </a>
                    <a href='https://instagram.com' className='text-white hover:text-gray-400'>
                        <FaInstagram className='w-6 h-6 md:w-8 md:h-8' /> {/* Adjust icon size */}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
