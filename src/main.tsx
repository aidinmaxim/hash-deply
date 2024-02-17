import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"

import "./index.css"

import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Error from './components/error/Error'
import CityToggle from './components/cityToggle/CityToggle'
import Sandwich from './components/sandwich/Sandwich'
import Product from './features/products/product/Product'
import ProductPage from './features/products/productPage/ProductPage'


ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Layout />}> */}
        <Route path='hash-deply/' element={<Layout />}>
          <Route index element={<h1>Home page</h1>} />
          <Route path='products/' element={<ProductPage />} />
          <Route path='city-toggle/' element={<CityToggle />} />
          <Route path='sandwich/' element={<Sandwich />} />
          <Route path='products/:id' element={<Product />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)