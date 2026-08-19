import React,{ useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import About from './pages/About'
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SingleProduct from "./pages/SingleProduct"
import axios from "axios"
import { DataProvider } from "./context/DataContext"

function App() {
  const [location, setLocation] = useState()
        
  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const {latitude, longitude} = pos.coords
      console.log(latitude, longitude)
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      try{
        const location = await axios.get(url)
        const exactLocation = location.data.address
        setLocation(exactLocation)
      }catch(err){
        console.log(err)
      }
    })
  }
  useEffect(() => {
    getLocation()
  }, [])

  return (
    <DataProvider>
    <BrowserRouter>
      <Navbar location={location} getLocation={getLocation}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path="/products/:id" element={<SingleProduct/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cart' element={<Cart location={location} getLocation={getLocation}/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </DataProvider>
  )
}

export default App