import React from "react"
import ReactDOM from "react-dom/client"
import {Provider} from "react-redux"
import {store} from "./app/store"
import App from "./App"
import "./index.css"
import Products from "./features/products/Products";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout";
import ProductPage from "./features/products/productPage/ProductPage";
import CityToggle from "./components/cityToggle/CityToggle";
import Parent from "./components/parent/Parent";
import Product from "./features/products/product/Product";
import ErrorPage from "./components/errorPage/ErrorPage";


function Sandwich() {
    return null;
}

function Tasks() {
    return null;
}

function TaskCreation() {
    return null;
}

function Movies() {
    return null;
}

function MovieCreation() {
    return null;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <HashRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<h1></h1>}/>
                    <Route path='products' element={<ProductPage/>}/>
                    <Route path='city-toggle' element={<CityToggle/>}/>
                    <Route path='flower-cards' element={<Parent/>}/>
                    <Route path='products/:id' element={<Product/>}/>
                    <Route path='sandwich' element={<Sandwich />}/>
                    <Route path='tasks' element={<><Tasks /><TaskCreation /></>}/>
                    <Route path='movies' element={<><Movies /><MovieCreation /></>}/>
                    <Route path='*' element={<ErrorPage/>}/>
                </Route>
            </Routes>
        </HashRouter>
    </Provider>
)
