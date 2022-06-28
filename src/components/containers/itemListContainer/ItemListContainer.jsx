// import { useState, useEffect } from 'react';
import { ItemList } from '../../itemList/ItemList';
import styles from '../itemListContainer/itemListContainer.module.scss';

export const ItemListContainer = ({ greeting }) => {

    return (
        <div className={styles.container}>
            <h6>{greeting}</h6>
            <ItemList />
        </div>
    )
}
