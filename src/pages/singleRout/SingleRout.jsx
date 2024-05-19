
import React from 'react';
import { useParams } from 'react-router-dom';
import { useUseGetProductByIdQuery } from '../../context/ProductsApi'; 

const SingleRout = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useUseGetProductByIdQuery(id); 

  if (isLoading) return <p>Loading...</p>;

  const product = data; 

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.images[0]} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default SingleRout;
