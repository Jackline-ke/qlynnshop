import React from 'react'
import { useGetAllProductsQuery } from '../features/ProductsApi'


const Products = () => {
    const {data, error, isLoading} = useGetAllProductsQuery()
  return (
    <div>
        { isLoading ? (<p>Loading...</p>) : error ?
        (<p>An error occured...</p>) : ( 
        <>
        <h1>Latest Women Wear</h1>
        <div>
            <div>
                {data?.map(product => <div key={product.is}>
                    <img src={product.image} alt={product.name}/>
                    <div>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </div>
                    <button>Add To Cart</button>
                </div>)}
            </div>
        </div>
        </>)}
    </div>
  )
}

export default Products