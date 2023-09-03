import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center text-blue-900 items-center h-24 max-[1240px] mx-auto px-7'>
            <h1 className=' w-full text-2xl font-bold m-4'>P.Rijal</h1>
            <ul className='  hidden md:flex'>
                <li className='p-4 hover:font-bold text-xl'>Home</li>
                <li className='p-4 hover:font-bold text-xl'>About</li>
                <li className='p-4 hover:font-bold text-xl'>Resume</li>
                <li className='p-4 hover:font-bold text-xl'>Contact</li>
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
                
                <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-blue-200 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                    <h1 className=' w-full text-2xl font-bold m-4'>P.Rijal</h1>
                    <li className='p-4 hover:font-bold border-b border-gray-200 text-xl'>Home</li>
                    <li className='p-4 hover:font-bold border-b border-gray-200 text-xl'>About</li>
                    <li className='p-4 hover:font-bold border-b border-gray-200 text-xl'>Resume</li>
                    <li className='p-4 hover:font-bold text-xl'>Contact</li>
                </ul>
            </div>
    );
};

export default Navbar;
