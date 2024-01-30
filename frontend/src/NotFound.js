import React from 'react'

const NotFound = () => {
  return (
    <div id='notFound' className='w-full h-screen flex items-center justify-center bg-gray-100/20'>
        <div className='text-center text-gray-800 font-serif fle flex-col'>
            <img src="https://res.cloudinary.com/dmpr1moai/image/upload/v1706595060/qlynnshop/notFound_vofmor.png" alt='Not Found' className='w-32 h-32'/>
            <p className='font-semibold text-5xl tracking-widest'>404</p>
            <p className='font-medium text-xl'>Page Not Found</p> 
        </div>
    </div>
  )
}

export default NotFound