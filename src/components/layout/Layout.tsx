import React, {FC} from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {Outlet} from "react-router-dom";
import styles from "./Layout.module.css"
import {motion} from "framer-motion";

const initialVariant = {
    hidden: {opacity: 0, y: -20},
    visible: {opacity: 1, y: 0, transition: {duration: 0.5}}
}
const Layout: FC = () => {
    return (
        <motion.div
            className={styles.container}
            animate='visible'
            initial='hidden'
            variants={initialVariant}
        >
            <Header/>
            <main className={styles.main}>
                <Outlet/>
            </main>
            <Footer/>
        </motion.div>
    );
};

export default Layout