import React from 'react'
import './Products.css'
import { useGetProductsQuery } from '../../context/ProductsApi';

const ProductsSlice = () => {
  
    let {data} = useGetProductsQuery({limit:12})
  const products = data?.products?.map((el) => 
        <div key={el.id} className="card">
            <img width={200} src={el.images[0]} alt="" />
            <h2>{el.title}</h2>
        </div>

    )
  return (
    <>
            <div className="container">
              <h1>Products</h1>
              <div className="wrapper">
                {products}
              </div>
        </div>
    </>
  )
}

export default ProductsSlice