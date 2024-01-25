import React from 'react'
import notEmoji from './assets/notFound.png'

const NotFound = () => {
  return (
    <div id='notFound' className='w-full h-screen flex items-center justify-center bg-gray-100/20'>
        <div className='text-center text-gray-800 font-serif fle flex-col'>
            <img src={notEmoji} alt='Not Found' className='w-32 h-32'/>
            <p className='font-semibold text-5xl tracking-widest'>404</p>
            <p className='font-medium text-xl'>Page Not Found</p> 
        </div>
    </div>
  )
}

export default NotFound