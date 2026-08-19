import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'


const ProductCard = ({product}) => {

  const navigate = useNavigate()
  const {addToCart} = useCart()

  return (
    <div className='border relative border-gray-100 rounded-2xl hover:scale-105 
     hover:shadow-2xl transition-all p-2 flex flex-col h-full'>
      <img src={product.images[0]} onClick={()=> navigate(`/products/${product.id}`)}
       className='bg-gray-100 aspect-square cursor-pointer'/>
      <h1 className='line-clamp-2 p-1 font-semibold'>
        {product.title}
      </h1>
      <p className='mt-auto flex items-center my-1 text-lg text-gray-800 font-bold'>
        ${product.price}
      </p>
      <button onClick={() => addToCart(product)}
       className='mt-auto bg-red-500 hover:bg-red-600 px-2 py-3 text-lg hover:text-xl rounded-md text-white
       w-full cursor-pointer flex gap-1 items-center justify-center font-semibold '>
        <IoCartOutline className='w-6 h-6 hover:w-7 hover:h-7'/> Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
