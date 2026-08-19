import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
const Slider = SlickSlider.default;

const Carousel = () => {
  const {data, fetchAllProducts} = useContext(DataContext)
  console.log(data);

  useEffect(() => {
    fetchAllProducts()
  }, [])

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,

  };

  // Agar data undefined hai ya API se aane mein time lag raha hai, toh ye return kar do
  if (!data) {
    return (
      <div className="flex justify-center items-center h-[600px] bg-[#0f0c29] text-white">
        <h2 className="text-2xl font-light tracking-widest uppercase animate-pulse text-gray-400">
          Loading Premium Tech...
        </h2>
      </div>
    );
  }
  
  return (
    <div className='overflow-hidden bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]'>
      <Slider {...settings}>
        {
          data.slice(4,20).map((item, index) => {
            return(
              <div key={index} className='outline-none'>
                <div className='flex flex-col-reverse md:flex-row gap-2 md:gap- justify-center h-auto md:h-[600px] items-center px-6 md:px-12 py-16 md:py-0 max-w-7xl mx-auto '>
                  <div className='space-y-6 flex-1 text-center md:text-left z-10'>
                    <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500 font-bold tracking-widest text-xs uppercase'>
                      Powering Your World with the Best in Electronics
                    </h3>
                    <h1 className='text-4xl md:text-6xl font-extrabold uppercase line-clamp-2 text-white leading-tight drop-shadow-lg'>
                      {item.title}
                    </h1>
                    <p className='text-gray-300 text-sm md:text-base line-clamp-3 md:pr-10 font-light leading-relaxed'>
                      {item.description}
                    </p>
                    <div className='pt-4'>
                      <button className=' bg-gradient-to-r from-red-500 hover:from-red-600 to-purple-600 hover:to-purple-700
                       text-white font-semibold px-5 py-3 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all
                        duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(236,72,153,0.7)] cursor-pointer
                        text-lg '>
                        Shop Now
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 flex justify-center items-center relative w-full mt-10 md:mt-0">
                    <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-purple-600 opacity-20 blur-[100px] rounded-full"></div>
                    <img src={item.images[0]} alt={item.title}
                     className='rounded-xl w-64 md:w-[450px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] 
                     transition-transform duration-700 hover:scale-110 relative z-20 bg-transparent mix-blend-screen' />
                  </div>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}

export default Carousel
