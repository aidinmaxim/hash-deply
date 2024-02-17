import React, {FC, useEffect, useState} from 'react';
import IProduct from "./types/Product";
import styles from "./ProductPage.module.css"
import ProductCard from "../../../components/productCard/ProductCard";

const ProductPage: FC = () => {

    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        async function getProducts() {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProducts(data)
        }

        getProducts()
    }, []);

    return (
        <div>
            <h1>Product page</h1>
            <ul className={styles.productList}>
                {products.map(el => (
                    <li key={el.id} className={styles.productCard}>
                        <ProductCard id={el.id} title={el.title} description={el.description} image={el.image}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductPage;