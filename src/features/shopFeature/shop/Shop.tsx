import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {loadItems} from "../shopAction";
import {Link} from "react-router-dom";
//import styles from './Shop.module.css'

const Shop: FC = () => {
    const dispatch = useAppDispatch();
    const { items } = useAppSelector(state => state.shops)
    const { user } = useAppSelector(state => state.user)

    useEffect(() => {
        dispatch(loadItems())
    }, []);

    return (
        <div>
            {user ? (
                <>
                    <h1>Shop</h1>
                    {items.map(el => (
                        <div key={el.id}>
                            <span>{el.title}</span>
                        </div>
                    ))}
                </>
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