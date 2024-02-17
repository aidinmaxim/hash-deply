import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.css'
const Header: FC = () => {
    return (
        <div className={styles.navbar}>
            <NavLink to='/'>Home page</NavLink>
            <NavLink to='products'>Product page</NavLink>
            <NavLink to='city-toggle'>ToggleCity</NavLink>
            <NavLink to='flower-cards'>Flower Cards</NavLink>
            <NavLink to='sandwich'>Sandwich</NavLink>
            <NavLink to='tasks'>Tasks</NavLink>
            <NavLink to='movies'>Movies</NavLink>
        </div>
    );
};

export default Header

