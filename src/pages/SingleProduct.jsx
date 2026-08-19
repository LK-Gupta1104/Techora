import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loading from "../assets/Loading4.webm"
import BreadCrums from "../components/BreadCrums"
import { IoCartOutline, IoHeartOutline, IoHeart} from 'react-icons/io5'
import { HiMinus, HiPlus } from 'react-icons/hi'
import { useCart } from '../context/CartContext'

const SingleProduct = () => {

    const [singleProduct, setSingleProduct] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const [selectedImage, setSelectedImage] = useState(0)
    const [isWishListed, setIsWishListed] = useState(false)
    const {addToCart} = useCart()
    const params = useParams()

    const getSingleProduct = async () => {
        try {
            const res = await axios.get(`https://dummyjson.com/products/${params.id}`)
            setSingleProduct(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getSingleProduct()
        setSelectedImage(0)
        setIsWishListed(false)
        window.scrollTo(0, 0)
    }, [params.id])

    const originalPrice = singleProduct
        ? Math.round(singleProduct.price + (singleProduct.price * singleProduct.discountPercentage) / 100)
        : 0

    const decreaseQty = () => setQuantity(q => Math.max(1, q - 1))
    const increaseQty = () => setQuantity(q => q + 1)

    if (!singleProduct) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <video muted autoPlay loop>
                    <source src={Loading} type='video/webm' />
                </video>
            </div>
        )
    }

    return (
        <div className='px-4 pb-16 md:px-0 bg-[#FAFAF9] min-h-screen'>
            <BreadCrums title={singleProduct.title} />

            <div className='max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-5 gap-12 mt-6 items-start'>

                {/* Product image panel */}
                <div className='md:col-span-2 md:sticky md:top-24'>
                    <div className='relative w-full rounded-3xl overflow-hidden
                        bg-gradient-to-br from-[#FDEEDC] via-[#FBE7E7] to-[#F1EEF7] flex flex-col'>

                        {/* Hero image area */}
                        <div className='relative flex items-center justify-center min-h-[340px] md:min-h-[400px] p-10'>

                            {/* ambient blobs */}
                            <div className='absolute -top-12 -left-12 w-48 h-48 bg-white/40 rounded-full blur-3xl' />
                            <div className='absolute -bottom-16 -right-10 w-56 h-56 bg-[#B42318]/10 rounded-full blur-3xl' />

                            <img
                                key={selectedImage}
                                src={singleProduct.images[selectedImage]}
                                alt={singleProduct.title}
                                className='relative w-full max-w-[380px] object-contain drop-shadow-2xl
                                    animate-[fadeIn_0.2s_ease-out]'
                            />

                            {/* Signature element: hanging price tag */}
                            {singleProduct.discountPercentage > 0 && (
                                <div className='absolute top-6 right-6 -rotate-6'>
                                    <div className='relative bg-[#18181B] text-white px-4 py-3 rounded-lg shadow-lg'>
                                        <span className='absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3
                                            bg-[#FAFAF9] border-2 border-[#18181B] rounded-full' />
                                        <p className='text-[10px] uppercase tracking-widest text-white/60 leading-none mb-1'>
                                            Save
                                        </p>
                                        <p className='text-lg font-bold leading-none'>
                                            {Math.round(singleProduct.discountPercentage)}%
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Thumbnail strip — inside the container */}
                        {singleProduct.images?.length > 1 && (
                            <div className='flex gap-3 px-6 pb-6 pt-2 overflow-x-auto'>
                                {singleProduct.images.slice(0, 6).map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedImage(i)}
                                        className={`w-16 h-16 flex-shrink-0 rounded-xl bg-white/70 p-2
                                            flex items-center justify-center transition-all
                                            ${selectedImage === i
                                                ? 'ring-2 ring-[#18181B] opacity-100'
                                                : 'ring-1 ring-black/5 opacity-60 hover:opacity-100'}`}
                                    >
                                        <img src={img} className='w-full h-full object-contain' />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Product details */}
                <div className='md:col-span-3 flex flex-col gap-6'>

                    <div>
                        <p className='text-xs font-semibold uppercase tracking-[0.2em] text-[#B42318] mb-2'>
                            {singleProduct.brand || singleProduct.category}
                        </p>
                        <h1 className='font-serif text-3xl md:text-4xl font-medium text-[#18181B] leading-tight'>
                            {singleProduct.title}
                        </h1>
                        <p className='text-sm text-gray-400 mt-2 tracking-wide'>
                            {singleProduct.tags?.[0]?.toUpperCase()} · SKU {singleProduct.sku}
                        </p>
                    </div>

                    {/* Price block */}
                    <div className='flex items-end gap-3 pb-6 border-b border-black/10'>
                        <span className='text-3xl font-bold text-[#18181B]'>
                            ${Math.floor(singleProduct.price)}
                        </span>
                        {singleProduct.discountPercentage > 0 && (
                            <>
                                <span className='text-lg line-through text-gray-400 mb-0.5'>
                                    ${originalPrice}
                                </span>
                                <span className='text-sm font-semibold text-[#B42318] mb-1'>
                                    {Math.round(singleProduct.discountPercentage)}% off
                                </span>
                            </>
                        )}
                    </div>

                    {/* Description */}
                    <p className='text-gray-600 leading-relaxed'>
                        {singleProduct.description} {singleProduct.description}
                    </p>

                    {/* Stock status */}
                    <div className='flex items-center gap-2 text-sm'>
                        <span className={`w-2 h-2 rounded-full ${singleProduct.stock > 0 ? 'bg-emerald-500' : 'bg-gray-300'}`} />
                        <span className='text-gray-600'>
                            {singleProduct.stock > 0 ? `In stock — ${singleProduct.stock} available` : 'Out of stock'}
                        </span>
                    </div>

                    {/* Quantity stepper */}
                    <div className='flex items-center gap-4'>
                        <label className='text-lg font-medium text-gray-700'>Quantity</label>
                        <div className='flex items-center border border-gray-300 rounded-full overflow-hidden'>
                            <button
                                onClick={decreaseQty}
                                className='w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer'
                            >
                                <HiMinus className='w-3.5 h-3.5' />
                            </button>
                            <span className='w-10 text-center text-md mx-auto font-medium'>{quantity}</span>
                            <button
                                onClick={increaseQty}
                                className='w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer'
                            >
                                <HiPlus className='w-3.5 h-3.5' />
                            </button>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className='flex gap-3 mt-2'>
                        <button onClick={()=>addToCart(SingleProduct)}
                         className='flex-1 cursor-pointer flex items-center justify-center gap-2
                          px-6 py-3.5 text-base font-medium bg-[#18181B] text-white rounded-full
                          hover:bg-black transition-colors'>
                            <IoCartOutline className='w-5 h-5' />
                            Add to Cart
                        </button>
                        <button onClick={() => setIsWishListed(w => !w)}
                          aria-label={isWishListed ? 'Remove from wishlist' : 'Add to wishlist'}
                          className={`cursor-pointer w-14 flex items-center justify-center rounded-full
                           border transition-colors
                           ${isWishListed
                              ? 'border-[#B42318] bg-[#B42318]/5'
                              : 'border-gray-300 hover:border-black'}`
                          }>
                          {
                              isWishListed
                                  ? <IoHeart className='w-5 h-5 text-[#B42318]' />
                                  : <IoHeartOutline className='w-5 h-5 text-gray-700' />
                          }
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SingleProduct