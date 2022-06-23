import { useState, useEffect } from 'react';
import { ItemList } from '../../itemList/ItemList';
import styles from '../itemListContainer/itemListContainer.module.scss';

export const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);


    useEffect(() => {

        //Llamado en diferido sólo cuando se inicializa o se monta el componente (por el useEffect)
        const promiseForChallenge = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('/mocks/data.json');
                reject('No response');
            }, 2000);
        });

        const getProducts = async () => {
            try {
                const url = await promiseForChallenge;
                const response = await fetch(url);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                throw new Error(error);
            }
        };
        getProducts();
    }, []);

    return (
        <div className={styles.container}>
            <h6>{greeting}</h6>
            <ItemList products={products} />
        </div>
    )
}
