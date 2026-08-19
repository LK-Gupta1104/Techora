import React, { useState } from 'react'
import { MapPin } from 'lucide-react'
import { FaCaretDown } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import { IoCartOutline } from 'react-icons/io5'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { CgClose } from 'react-icons/cg'
import { useCart } from '../context/CartContext'

const Navbar = ({location, getLocation}) => {

  const {cartItem} = useCart()
  const [openDropDown, setOpenDropDown] = useState(false)
  const toggleDropDown = () => {
    setOpenDropDown(!openDropDown)
  }
  
  return (
    <div className='bg-white py-3 shadow-2xl'>
      <div className='max-w-6xl flex justify-between items-center mx-auto'>
        {/* Logo section */}
        <div className='flex gap-7 items-center'> 
          <Link to={'/'} ><h1 className='font-bold text-3xl'>
            <span className='text-red-500 font-serif text-4xl'>T</span>echora</h1>
          </Link>
          <div className='flex gap-1 text-gray-700 items-center'>
            <MapPin className='text-red-500' />
            <span className='font-semibold'>{location ? <div className='-space-y-2'>
              <p>{location.state_district},</p>
              <p>{location.state}</p>
            </div> : "Add address"}</span>
            <FaCaretDown onClick={toggleDropDown} className='cursor-pointer'/>  
          </div>
          {
            openDropDown ? <div className='w-[250px] h-max shadow-2xl z-50 bg-white fixed top-16 left-60
             border-2 p-5 border-gray-100 rounded-md'>
              <h1 className='font-semibold mb-4 text-xl flex justify-between'>
                Change location <span onClick={toggleDropDown} className='cursor-pointer'><CgClose/></span>
              </h1>
              <button onClick={() => {getLocation(), toggleDropDown()}}
               className='bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-400'>
                Detect my location
              </button>
            </div> : null
          }
        </div>

        {/* Menu section */}
        <div className='flex gap-7 items-center'>
          <ul className='flex gap-7 items-center text-xl font-semibold'>
            <NavLink to={"/"} className={({isActive}) => `${isActive ? 'border-b-3 border-red-500 transition-all'
             : 'text-black'} `}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/products"} className={({isActive}) => `${isActive ? 'border-b-3 border-red-500 transition-all'
             : 'text-black' }`}>
              <li>Products</li>
            </NavLink>
            <NavLink to={"/about"} className={({isActive}) => `${isActive ? 'border-b-3 border-red-500 transition-all'
             : 'text-black'}`}>
              <li>About</li>
            </NavLink>
            <NavLink to={"/contact"} className={({isActive}) => `${isActive ? 'border-b-3 border-red-500 transition-all'
             : 'text-black'}`}>
              <li>Contact</li>
            </NavLink>
          </ul>

          <Link to={"/Cart"} className='relative'>
            <IoCartOutline className='h-7 w-7'/>
            <span className='bg-red-500 px-1.5 rounded-full absolute -top-3 -right-4 text-white'>{cartItem.length}</span>
          </Link>

          <Show when="signed-out">
            {/* <SignInButton className='bg-red-500 text-gray-800 font-bold px-3 py-1 rounded-md cursor-pointer'/> */}
            <SignInButton className='bg-red-500 text-gray-800 font-bold px-3 py-1 rounded-md cursor-pointer'/>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </div>
    </div>
  )
}

export default Navbar
