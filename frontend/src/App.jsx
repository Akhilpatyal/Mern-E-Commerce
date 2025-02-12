import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className='px-4 sm:px-[4vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Order" element={<Orders />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/PlaceOrder" element={<PlaceOrder />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
