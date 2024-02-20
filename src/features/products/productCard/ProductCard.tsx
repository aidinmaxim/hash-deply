import React, {FC} from 'react';
import styles from './ProductCard.module.css'
import {toggleFavorites} from "../productSlice";
import {Link} from "react-router-dom";
import MyButton from "../../../components/myButton/MyButton";
import {deleteProduct} from "../productAction";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import MySwiper from "../../../components/swiper/Swiper";

interface IProductCardProps {
    id?: number
    title?: string
    price?: number
    category?: string
    description?: string
    images: string[]
    rating?: {
        rate: number
        count: number
    }
}

const ProductCard: FC<IProductCardProps> = ({id, title, images, price}) => {
    const dispatch = useAppDispatch()
    const {favorites} = useAppSelector(state => state.products)

    return (
        <div>
            <li key={id} className={styles.productCard}>
                <span className={styles.title}>{title}</span>
                <div className={styles.imgWrapper}>
                    {<MySwiper images={images}/>}
                </div>
                <span>Цена: {price}</span>
                <svg style={{cursor: 'pointer'}}
                     onClick={() => dispatch(toggleFavorites(id))} width="30px"
                     height="30px"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg" version="1.1"
                >
                    <g transform="translate(0 -1028.4)">
                        <path
                            d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z"
                            fill={favorites.includes(id as number) ? "#e74c3c" : 'grey'}/>
                    </g>
                </svg>
                <Link to={String(id)}><MyButton text='To product'/></Link>
                <MyButton text='Delete' onClick={() => dispatch(deleteProduct(id))}/>
            </li>
        </div>
    );
};

export default ProductCard;