import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";
import Slide from 'react-reveal/Slide';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <div>
            <Slide top duration="2000">
                <div className='flex justify-between items-center w-full h-20 text-gray-700 px-4 bg-gradient-to-r from-blue-700 via-blue-400 to-blue-600 fixed '>
                    <div>
                        <h1 className='text-2xl ml-2 text-black font-signature'>E-Portfolio</h1>
                    </div>

                    <ul className='hidden md:flex'>
                        <Link to="home" smooth duration={500} className='px-4 cursor-pointer capitalize font-bold text-black hover:scale-105 duration-200 font-signature'>Home</Link>
                        <Link to="clg" smooth duration={500} className='px-4 cursor-pointer capitalize font-bold text-black hover:scale-105 duration-200 font-signature'>College Work</Link>
                        <Link to="contact" smooth duration={500} className='px-4 cursor-pointer capitalize font-bold text-black hover:scale-105 duration-200 font-signature'>Reach Out</Link>
                    </ul>

                    <div onClick={() => setNav(!nav)} className='cursor-pointer pr-6 z-10 text-black md:hidden'>
                        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

                    </div>

                    {nav && (<ul className='flex flex-col justify-center items-center top-0 left-0 w-full h-screen 
         bg-gradient-to-r from-blue-900 via-blue-600 to-blue-800 fixed'>
                        <Link onClick={() => setNav(!nav)} to="home" smooth duration={500} className='px-4 cursor-pointer capitalize py-3 text-2xl font-signature'>Home</Link>
                        <Link onClick={() => setNav(!nav)} to="clg" smooth duration={500} className='px-4 cursor-pointer capitalize py-3 text-2xl font-signature'>College Work</Link>
                        <Link onClick={() => setNav(!nav)} to="contact" smooth duration={500} className='px-4 cursor-pointer capitalize py-3 text-2xl font-signature'>Reach Out</Link>
                    </ul>)}

                </div>
            </Slide>
        </div>
    )
}

export default Navbar