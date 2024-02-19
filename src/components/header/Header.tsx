import {FC, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Header.module.css'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {loginToken} from "../../features/auth/authAction";
import {logoutUser} from "../../features/auth/authSlice";

const Header: FC = () => {
    const dispatch = useAppDispatch();
    const {products, favorites} = useAppSelector(state => state.products)
    const {user} = useAppSelector(state => state.user)

    const handleLogout = () => {
        localStorage.removeItem('token')
        dispatch(logoutUser())
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token && token.length > 0) {
            dispatch(loginToken(token))
        }
    }, []);

    return (
        <div className={styles.header}>
            <div className={styles.navbar}>
                <NavLink to='/'>Product page</NavLink>
                {user ? (
                    <>
                        <NavLink to='products'>Products</NavLink>
                        <NavLink to='city-toggle'>Change city</NavLink>
                        <NavLink to='sandwich'>Make a sandwich</NavLink>
                        <NavLink to='/' onClick={handleLogout}>Logout</NavLink>
                    </>
                ) : (
                    <NavLink to='/login'>Login</NavLink>
                )}
            </div>
            <div>
                {
                    user && (
                        <>
                            <span>Сейчас в магазине <span
                                style={{color: 'lightgrey'}}>{products.length}</span> товаров</span>
                            <span>Любимых:  <span style={{color: 'white'}}>{favorites.length}</span> товаров</span>
                        </>
                    )
                }

            </div>
        </div>
    )
}

export default Header
