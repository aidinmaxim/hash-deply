import {FC, useEffect, useState} from 'react'
// import cn from 'classnames'
import styles from './ProductPage.module.css'
import {useAppDispatch, useAppSelector} from '../../../app/hooks'
import {deleteProduct, loadProducts} from '../productAction'
import ProductForm from '../productForm/ProductForm'
import Loader from '../../../components/loader/Loader'
import ProductCard from '../productCard/ProductCard'
import {Navigate} from "react-router-dom";


const ProductPage: FC = () => {
    const dispatch = useAppDispatch()

    const {products, error, isLoading, favorites} = useAppSelector(state => state.products)
    const {user} = useAppSelector(state => state.user)

    useEffect(() => {
        dispatch(loadProducts())
    }, [])

    const initialVariant = {
        hidden: {opacity: 0, scale: 0.8},
        visible: {opacity: 1, scale: 1, transition: {duration: 0.8}}
    }

    if (!user) {
        return <Navigate to='../login'/>
    }

    return (
        <div>
            <ProductForm/>
            {isLoading && <Loader/>}
            {error && <h4 style={{color: 'red'}}>Error {error}</h4>}
            {!isLoading && (
                <ul className={styles.productList}>
                    {products.map(el => (
                        <ProductCard key={el.id} id={el.id} title={el.title} image={el.image} price={el.price}/>
                    ))}
                </ul>
            )}

        </div>
    )
}

export default ProductPage
