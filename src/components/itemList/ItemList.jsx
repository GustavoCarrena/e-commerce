import React from 'react';
import { Item } from '../item/Item';
import styles from '../itemList/itemList.module.scss';

//Mapeo de los productos
export const ItemList = ({ products }) => {
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
