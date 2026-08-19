import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from "../context/DataContext"
import FilterSection from "../components/FilterSection"
import Loading from "../assets/Loading4.webm"
import ProductCard from '../components/ProductCard'
import Pagination from '../components/Pagination'
import notFound from "../assets/not_found.svg"

const Products = () => {
  const { data, fetchAllProducts } = useContext(DataContext)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [brand, setBrand] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 2500])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchAllProducts()
    window.scrollTo(0, 0)
  }, [])

  const handleCategoryChange = (e) => setCategory(e.target.value)
  const handleBrandChange = (e) => setBrand(e.target.value)
  const pageHandler = (selectedPage) => setPage(selectedPage)

  const isLoading = !Array.isArray(data)

  const filterData = data?.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === 'all' || item.category === category) &&
      (brand === 'all' || item.brand === brand) &&
      item.price >= priceRange[0] && item.price <= priceRange[1]
    )
  })

  const dynamicPages = Math.ceil(filterData?.length / 8)

  return (
    <div className='max-w-6xl mx-auto px-4 mb-10'>
      <div className='flex gap-8'>
        <FilterSection search={search} setSearch={setSearch} category={category} setCategory={setCategory}
          brand={brand} setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange}
          handleCategoryChange={handleCategoryChange} handleBrandChange={handleBrandChange}
        />

        {isLoading ? (
          <div className='flex-1 flex items-center justify-center h-[500px]'>
            <video muted autoPlay loop className='w-40'>
              <source src={Loading} type='video/webm' />
            </video>
          </div>
        ) : filterData?.length > 0 ? (
          <div>
            <div className='grid grid-cols-4 gap-7 mt-10'>
              {filterData?.slice(page * 8 - 8, page * 8).map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
            <div className='flex justify-center items-center mt-10'>
              <Pagination page={page} pageHandler={pageHandler} dynamicPages={dynamicPages} />
            </div>
          </div>
        ) : (
          <div className='flex-1 flex flex-col items-center justify-center h-[500px] rounded-lg p-6 overflow-hidden'>
            <img src={notFound} alt="No products found"
              className='max-w-full max-h-[350px] object-contain'
            />
            <p className='text-gray-500 font-medium text-lg mt-4'>
              No products found matching your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products