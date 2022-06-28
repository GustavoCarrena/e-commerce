import { useState, useEffect } from 'react';
import { getAllProducts } from '../../helpers/getAllProducts';
import { Item } from '../item/Item';
import styles from '../itemList/itemList.module.scss';


export const ItemList = () => {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts(setProducts);
    },[])

    return (
        <article className={styles.itemsContainer}>
            {
                products.map(product => {
                    return <Item product={product} key={product.id}/>
                })
            }
        </article>
    )
}
