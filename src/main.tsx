import React, {Suspense, lazy} from "react"
import ReactDOM from "react-dom/client"
import {Provider} from "react-redux"
import {store} from "./app/store"

import "./index.css"

import {HashRouter, Route, Routes} from 'react-router-dom'
import Layout from './layout/Layout'
import Error from './components/error/Error'
import CityToggle from './components/cityToggle/CityToggle'
import Sandwich from './components/sandwich/Sandwich'
import Product from './features/products/product/Product'
import Loader from './components/loader/Loader'
import Shop from './features/shopFeature/shop/Shop'
// import ProductPage from './features/products/productPage/ProductPage'

const ProductPage = React.lazy(() => import('./features/products/productPage/ProductPage'))

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <HashRouter>
            <Routes>
                {/* <Route path='/' element={<Layout />}> */}
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Shop/>}/>
                    <Route path='products/' element={
                        <Suspense fallback={<Loader/>}>
                            <ProductPage/>
                        </Suspense>
                    }/>
                    <Route path='city-toggle/' element={<CityToggle/>}/>
                    <Route path='sandwich/' element={<Sandwich/>}/>
                    <Route path='products/:id' element={<Product/>}/>
                    <Route path='*' element={<Error/>}/>
                </Route>
            </Routes>
        </HashRouter>
    </Provider>
)
