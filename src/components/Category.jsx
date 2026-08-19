import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const Category = () => {
    const {techCategories} = useContext(DataContext)
    return (
        <div className='bg-[#101829]' >
            <div className='max-w-7xl mx-auto flex gap-4 item-center justify-around py-6 px-3'>
                {
                    techCategories.map((item, index) => {
                        return <div key={index}>
                            <button className='uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white
                             px-3 py-1 rounded-md cursor-pointer'>
                                {item}
                            </button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Category
