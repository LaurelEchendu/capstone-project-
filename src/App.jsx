import React from 'react'
import Navbar from './component/navbar/Navbar'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Cart, LoginSignup, Product, Shop, ShopCategory, Signup, SearchBar } from './pages'
import Footer from './component/Footer/Footer'
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import Checkout from './component/checkout/Checkout'
// import kids_banner from './assets/banner_kids.png'

const App = () => {
  return (
    <div className='m-0 p-0 box-border font-poppins scroll-smooth'>
      <HashRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Men' element={<ShopCategory banner={men_banner} category="men's clothing"/>}/>
        <Route path='/Women' element={<ShopCategory banner={women_banner} category="women's clothing"/>}/>
        <Route path='/Jewelery' element={<ShopCategory category="jewelery"/>}/>
        <Route path='/Product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/Search' element={<SearchBar/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout />} /> 
        <Route path='/Login' element={<LoginSignup/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
      </HashRouter>
    </div>
  )
}

export default App
