import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {loadItems} from "../shopAction";
//import styles from './Shop.module.css'

const Shop: FC = () => {
    const dispatch = useAppDispatch();

    const { items } = useAppSelector(state => state.shops)

    useEffect(() => {
        dispatch(loadItems())
    }, []);

    return (
        <div>
            <h1>Shop</h1>
            {items.map(el => (
                <div key={el.id}>
                    <span>{el.title}</span>
                </div>
            ))}
        </div>
    );
};

export default Shop;