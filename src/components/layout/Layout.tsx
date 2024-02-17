import React, {FC} from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {Outlet} from "react-router-dom";
import styles from "./Layout.module.css"

const Layout: FC = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <main className={styles.main}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout