"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex flex-col items-center p-4 bg-black">
            <div className="flex items-center justify-between w-full">
                <span className="text-[#FF9F0D] font-bold text-lg flex-grow text-center">
                    Anus<span className="text-white ">foods</span>
                </span>
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle menu">
                        {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
                    </button>
                </div>
            </div>
            {/* Main Navigation for Desktop */}
            <div className={`hidden md:flex flex-row items-center justify-around w-full p-2 transition-all duration-300 ease-in-out`}>
                <div className="flex items-center space-x-4">
                    <Link href="/" className='hover:text-[#FF9F0D] text-white'>
                        Home
                    </Link>
                    <Link href="/menu" className='hover:text-[#FF9F0D] text-white'>
                        Menu
                    </Link>
                    <Link href="/blog" className='hover:text-[#FF9F0D] text-white'>
                        Blog
                    </Link>
                    <Link href="/faq" className='hover:text-[#FF9F0D] text-white'>
                        Pages
                    </Link>
                    <Link href="/about" className='hover:text-[#FF9F0D] text-white'>
                        About
                    </Link>
                    <Link href="/shop" className='hover:text-[#FF9F0D] text-white'>
                        Shop
                    </Link>
                    <Link href="mailto:muhammadanusahmedon@gmail.com" className='hover:text-[#FF9F0D] text-white'>
                        Contact
                    </Link>
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="pl-4 pr-10 py-2 rounded-full bg-black border border-[#FF9F0D] text-white focus:outline-none" 
                        />
                        <img src='/icons/magniGlass.png' className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FF9F0D]" />
                    </div>
                    <Link href={"/shop"}>
                    <img src='/icons/Handbag.png' className="ml-4 text-white" />
                    </Link>
                    <Link href={"/signin"}>
                    <img src='/icons/User-1.png' className="ml-4 text-white" />
                    </Link>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="flex flex-col items-center space-y-2 mt-2">
                    <Link href="/" className='hover:text-[#FF9F0D] text-white'>
                        Home
                    </Link>
                    <Link href="/menu" className='hover:text-[#FF9F0D] text-white'>
                        Menu
                    </Link>
                    <Link href="/blog" className='hover:text-[#FF9F0D] text-white'>
                        Blog
                    </Link>
                    <Link href="/pages" className='hover:text-[#FF9F0D] text-white'>
                        Pages
                    </Link>
                    <Link href="/about" className='hover:text-[#FF9F0D] text-white'>
                        About
                    </Link>
                    <Link href="/shop" className='hover:text-[#FF9F0D] text-white'>
                        Shop
                    </Link>
                    <Link href="/contact" className='hover:text-[#FF9F0D] text-white'>
                        Contact
                    </Link>
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="pl-4 pr-10 py-2 rounded-full bg-black border border-[#FF9F0D] text-white focus:outline-none" 
                        />
                        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FF9F0D]" />
                    </div>
                    <Link href={"/shop"}>
                    <img src='/icons/Handbag.png' className="ml-4 text-white" />
                    </Link>
                    <Link href={"/signin"}>
                    <img src='/icons/User-1.png' className="ml-4 text-white" />
                    </Link>
                </div>
            </div>
            
        </nav>
    );
};

export default Navbar;