import {FC} from "react";
import IProduct from "../../features/products/productPage/types/Product";
import styles from "./ProductCard.module.css"
import {Link} from "react-router-dom"
import MyButton from "../myButton/MyButton";

const ProductCard: FC<IProduct> = ({id, title, description, image}) => {
    return (
        <>
            <span className={styles.title}>{title}</span>
            <div className={styles.imgWrapper}>
                <img src={image} alt=""/>
            </div>
            <Link to={String(id)}>
                <MyButton text='To product'/>
            </Link>
        </>

    );
};

export default ProductCard;