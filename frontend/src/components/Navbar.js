import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {BiCart} from 'react-icons/bi'
import {Link} from 'react-router-dom'

export const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleNav = ()=>{
      setNav(!nav)
    }
    const closeNav = () => {
        setNav(false);
    } 
  return (
    <div className='fixed w-full px-8 py-4 md:px-16 text-gray-800 font-serif bg-opacity-70' style={{ backdropFilter: 'blur(5px)', webkitBackdropFilter: 'blur(5px)'/* Set a higher z-index */ }}>
        <div className='flex justify-between items-center'>
            <Link to='/' smooth={true} duration={2000}>
                <h1 className='font-bold text-2xl cursor-pointer'>QlynnShop.</h1>
            </Link>
            <div className='hidden lg:flex gap-12 cursor-pointer'>
                <Link to='/' smooth={true} duration={2000}>
                    <h3>Home</h3>
                </Link>
                <Link to='blog' smooth={true} duration={2000}>
                    <h3>Blogs</h3>
                </Link>
                <Link to='contact' smooth={true} duration={2000}>
                    <h3>Contact us</h3>
                </Link>
                <Link to='cart' smooth={true} duration={2000} className="flex">
                    <BiCart className='text-2xl cursor-pointer'/>
                    <span className='rounded-full bg-gray-800 px-2 ml-1'>
                        <span className='text-white font-bold'>3</span>
                    </span>
                </Link>
            </div>
           
            {/* humburger */}
            <div onClick={handleNav} className='lg:hidden z-10 flex'>
                <Link to='cart' smooth={true} duration={2000} className="flex mr-8">
                    <BiCart className='text-2xl cursor-pointer'/>
                    <span className='rounded-full bg-gray-800 px-2 ml-1'>
                        <span className='text-white font-bold'>3</span>
                    </span>
                </Link>
                <FaBars size={20} className='cursor-pointer'/>
                
            </div>
            {/* mobile */}
            <div onClick={handleNav} className={nav ? 'overflow-hidden lg:hidden ease-in duration-300 absolute text-gray-800 top-0 right-0  w-[40%] bg-gradient-to-r from-gray-100/90 to-gray-300 px-4 py-16' : 'absolute left-[-100%] top-0 h-screen ease-in duration-500' }>
                <div  className='flex flex-col gap-4 cursor-pointer text-lg'>
                <Link to='/' smooth={true} duration={2000}>
                    <h3 className='text-md'>Home</h3>
                </Link>
                <Link to='blog' smooth={true} duration={2000}>
                    <h3 className='text-md'>Blogs</h3>
                </Link>
                <Link to='contact' smooth={true} duration={2000}>
                    <h3 className='text-md'>Contact us</h3>
                </Link>
                </div>
            </div>
        </div>
        
    </div>
  )
}



// 