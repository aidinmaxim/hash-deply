import React, {FC, useEffect, useState} from 'react';
import MyButton from "../myButton/MyButton";
import styles from "./CatCard.module.css"

const CatCard: FC = () => {

    const [fact, setFact] = useState<string>('')
    const [catGif, setCatGif] = useState<string>('')

    async function fetchFact() {
        const res = await fetch('https://catfact.ninja/fact')
        const data = await res.json()

        setFact(data.fact)
    }

    function fetchCat() {
        return fetch('https://cataas.com/cat/gif')
            .then(data => setCatGif(data.url))
    }

    function getFact() {
        fetchFact()
    }


    useEffect(() => {
        fetchFact()
        fetchCat()
    }, []);


    return (
        <div className={styles.container}>
            <img src={catGif} alt="cat"/>
            <div style={{height: "300px"}}>
                <h1>{fact}</h1>
            </div>
            <div style={{textAlign: "center"}}>
                <MyButton text='Update fact' onClick={getFact}/>
            </div>
        </div>
    );
};

export default CatCard;