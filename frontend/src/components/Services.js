import React from 'react'
import { FaClock, FaTruck, FaLock } from 'react-icons/fa'

const Services = () => {
  return (
    <div  id="features" className='py-24 lg:py-12 w-full h-full font-serif flex flex-col justify-center items-center px-8 md:px-32'>
      <div data-aos="fade-up" className='flex flex-col lg:flex-row gap-8'>
        <div className='border border-gray-200 rounded-md px-4 md:px-8 py-2 md:py-2 flex flex-col gap-1 items-center'>
          <FaLock className='text-2xl text-gray-800/60'/>
          <h2 className='text-center font-medium text-gray-800'>Safe and Secure</h2>
          <p className='text-center text-gray-800 text-sm'>A Frontend Developer with expertise in crafting engaging user experiences.</p>
        </div>
        <div className='border border-gray-200 rounded-md px-4 md:px-8 py-2 md:py-2 flex flex-col gap-1 items-center'>
          <FaTruck className='text-2xl text-gray-800/60'/>
          <h2 className='text-center font-medium text-gray-800'>Fast Delivery</h2>
          <p className='text-center text-gray-800 text-sm'>A Frontend Developer with expertise in crafting engaging user experiences.</p>
        </div>
        <div className='border border-gray-200 rounded-md px-4 md:px-8 py-2 md:py-2 flex flex-col gap-1 items-center'>
          <FaClock className='text-2xl text-gray-800/60'/>
          <h2 className='text-center font-medium text-gray-800'>24/7 Support</h2>
          <p className='text-center text-gray-800 text-sm'>A Frontend Developer with expertise in crafting engaging user experiences.</p>
        </div>
      </div>
    </div>
  )
}

export default Services