import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {deleteProduct, loadProducts} from "./productAction";
import MyButton from "../../components/myButton/MyButton";

const Products: FC = () => {
    const dispatch = useAppDispatch();

    const {products, error, isLoading} = useAppSelector(state => state.products);

    useEffect(() => {
        dispatch(loadProducts())
    }, []);

    const updateState = () => {
        dispatch(loadProducts())
    }

    const removeProduct = (id: any) => {
        dispatch(deleteProduct(id))
    }

    return (
        <div>
            <h1>Products</h1>
            <MyButton text="Load Products" onClick={updateState} />
            {isLoading && <p>Loading...</p>}
            <div>
                {products.map(el=> (
                    <div>
                        <span key={el.id}>{el.title}</span>
                        <button onClick={() => removeProduct(el.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;