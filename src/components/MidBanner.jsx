import React from 'react'
import {images} from "../assets/constant"

const MidBanner = () => {
    return (
        <div className='bg-gray-200 md:py-24'>
            <div className='max-w-7xl relative mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px]'
             style={{backgroundImage:`url(${images.banner})`, backgroundPosition:'center', backgroundAttachment:'fixed'}}>
                <div className='absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex flex-col items-center justify-center
                 text-center text-white px-4 '>
                    <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>
                        Next-Gen Electronics at your Fingertips
                    </h1>
                    <p className='text-lg md:text-xl mb-6'>
                        Discover the latest tech innovations with unbeatable prices and free shipping on all orders.
                    </p>
                    <button className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4
                     md:py-2.5 md:px-4 rounded-lg transition-all duration-300 cursor-pointer text-md'>
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MidBanner
