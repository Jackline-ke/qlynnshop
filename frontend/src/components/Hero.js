import React from 'react'
import hero from '../assets/hero.png'

const Hero = () => {
  return (
    <div id='hero' className='home w-full h-screen flex items-center justify-center mb-24 lg:mb-6'>
      <div className='w-full lg:h-full text-gray-800 flex flex-col lg:flex-row justify-center items-center px-8 md:px-16 lg:px-32 bg-gradient-to-r from-gray-100/50 to-gray-300'>
        <div className='w-full h-96 lg:h-full flex justify-center mt-52 lg:mt-32'>
          <img src={hero} className='h-full object-cover' alt='hero'/>
        </div>
        <div className='text-center py-8 lg:py-0'>
          <h1 className='text-3xl lg:text-6xl'>Best Collection</h1>
          <h2 className='mt-1 lg:mt-4 lg:text-3xl'>Get the latest and quality pieces</h2>
          <p className='mt-1 lg:mt-4 font-serif'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className=''>
            <button className='bg-gray-800 px-8 py-1 rounded-full shadow-lg shadow-gray-500 text-white mt-4 font-serif'>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero