import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {loadItems} from "../shopAction";
import {Link} from "react-router-dom";
import MySwiper from "../../../components/swiper/Swiper";
import ProductCard from "../../products/productCard/ProductCard";
import styles from './Shop.module.css'

const Shop: FC = () => {
    const dispatch = useAppDispatch();
    const {items} = useAppSelector(state => state.shops)
    const {user} = useAppSelector(state => state.user)

    useEffect(() => {
        dispatch(loadItems())
    }, []);

    return (
        <div>
            {user ? (
                <div className={styles.shopContainer}>
                    {items.map(el => (
                        <ProductCard images={el.images} title={el.title} price={el.price} id={el.id} key={el.id}/>
                    ))}
                </div>
            ) : (
                <>
                <p>Вы не авторизованы. Войдите в свой профиль</p>
                    <Link to='/login'>Login</Link>
                </>

            )}

        </div>
    );
};

export default Shop;