import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const FilterSection = ({search, setSearch, category, setCategory, brand, setBrand, priceRange, setPriceRange, handleCategoryChange, handleBrandChange}) => 
{
    const {techCategories, techBrands} = useContext(DataContext)

    return (
        <div className='bg-gray-100 mt-10 p-4 rounded-md h-max'>
            <input type='text' placeholder='Search..' value={search}
             onChange={(e)=> setSearch(e.target.value)}
             className='bg-white p-2 rounded-md border-gray-400 border-2'
            />

            {/* Category only data */}
            <h1 className='mt-5 font-semibold text-xl'>Category</h1>
            <div className='flex flex-col gap-2 mt-3'>
                {
                    techCategories.map((item, index) => {
                        return <div key={index} className='flex gap-2'>
                            <input type='radio' name='category' checked={category===item} value={item}
                             onChange={handleCategoryChange} className='cursor-pointer'
                            />
                            <span className=' uppercase'>{item}</span>
                        </div>
                    })
                }
            </div>

            {/* Brands Only Data */}
            <h1 className='mt-5 font-semibold text-xl'>Brand</h1>
            <select value={brand} onChange={handleBrandChange}
             className='bg-white w-full p-2 border-gray-200 border-2 rounded-md'>
                {
                    techBrands.map((item, index) => {
                        return <option key={index} value={item} >{item.toUpperCase()}
                        </option>
                    })
                }
            </select>

            {/* Price Range */}
            <h1 className='mt-6 font-semibold text-xl mb-1'>Price Range</h1>
            <div className='flex flex-col gap-2'>
                <label className='flex items-center'>
                    Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <input type='range' value={priceRange[1]} min='0' max='2500'
                 onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                />
            </div>
            <button className='bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer'
             min='0' max='2500'
             onClick={() => {setSearch(''); setCategory('all'); setBrand('all'); setPriceRange([0,2500])}}>
                Reset filters
            </button>

        </div>
    )
}

export default FilterSection
