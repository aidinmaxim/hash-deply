import React, {FC, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import IProduct from "../productPage/types/Product";
import styles from "../../../components/productCard/ProductCard.module.css";
import MyButton from "../../../components/myButton/MyButton";

const Product: FC = () => {

    const { id } = useParams()
    const initialValue: IProduct = {
        id: 0,
        title: '',
        price: 0,
        category: '',
        description: '',
        image: '',
        rating: {
            rate: 0,
            count: 0
        }
    }
    const [product, setProduct] = useState<IProduct>(initialValue)


    useEffect(() => {
        async function loadProduct() {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await res.json()
            setProduct(data)
        }
        loadProduct()
    }, [id]);


    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <div className={styles.imgWrapper}>
                <img src={product.image} alt=""/>
            </div>
            <Link to="/products"><MyButton text="To products" /></Link>
        </div>
    );
};

export default Product;