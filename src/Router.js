import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddProduct from './featurs/products/AddProduct'
import EditProduct from './featurs/products/EditProduct'
import Products from './featurs/products/Products'
import Footer from './layouts/Footer'
import Navebar from './layouts/Navebar'
import Error from './pages/Error'
import Home from './pages/Home'

const Router = () => {
  return (
    <BrowserRouter>
        <Navebar />
        <main>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/products' element={<Products />}/>
                <Route path='/add-product' element={<AddProduct />}/>
                <Route path='/edit-product' element={<EditProduct />}/>
                <Route path='/*' element={<Error />}/>
            </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  )
}

export default Router