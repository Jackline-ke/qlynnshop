import React from 'react'
import { useGetAllProductsQuery } from '../features/ProductsApi'


const Products = () => {
    const {data, error, isLoading} = useGetAllProductsQuery()
  return (
    <div className='w-full h-full px-8 md:px-16 lg:px-32 flex flex-col gap-4'>
        { isLoading ? (<p>Loading...</p>) : error ?
        (<p>An error occured...</p>) : ( 
        <>
        <div>
            <h1 className='text-xl lg:text-3xl'>Latest Women Wear</h1>
        </div>
        <div className='h-full'>
            <div className=''>
                <div className='grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 font-serif'>
                    {data?.map(product => <div key={product.is}>
                        <div className='flex flex-col items-center justify-center py-4 text-gray-800'>
                           <div className='border border-gray-200/50 rounded-md w-full flex flex-col items-center py-4'>
                                <img src={product.image} alt={product.name} className="h-32 object-cover"/>
                           </div>
                            <div className='text-center flex flex-col'>
                                <p className='font-medium text-lg'>{product.name}</p>
                                <p className='text-gray-800/70 text-sm'>{product.description}</p>
                                <p className=''><span className='font-semibold'>Ksh. </span>{product.price}</p>
                            </div>
                           <div className='mt-1'>
                                <button className='hover:bg-gray-800 hover:text-white rounded-md shadow-md text-sm px-4 border border-gray-800/30'>Add To Cart</button>
                           </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
        </>)}
    </div>
  )
}

export default Products