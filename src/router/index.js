import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddProduct from '../featurs/AddProduct'
import ProductView from '../featurs/ProductView'
import Footer from '../layouts/Footer'
import Navebar from '../layouts/Navebar'
import Error from '../pages/Error'
import Home from '../pages/Home'

const Index = () => {
  return (
    <BrowserRouter>
        <Navebar />
        <main>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/products' element={<ProductView />}/>
                <Route path='/add-product' element={<AddProduct />}/>
                <Route path='/*' element={<Error />}/>
            </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  )
}

export default Index