import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import { useAppSelector } from '../../app/hooks'

const Header: FC = () => {
  const { products, favorites } = useAppSelector(state => state.products)
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <NavLink to='/'>Product page</NavLink>
        <NavLink to='products'>Products</NavLink>
        <NavLink to='city-toggle'>Change city</NavLink>
        <NavLink to='sandwich'>Make a sandwich</NavLink>
        <span>Сейчас в магазине <span style={{color: 'lightgrey'}}>{products.length}</span> товаров</span>
        <span>Любимых:  <span style={{color: 'white'}}>{favorites.length}</span> товаров</span>
      </div>
    </div>
  )
}

export default Header
