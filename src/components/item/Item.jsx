import React from 'react';
import styles from '../item/item.module.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { ItemCount } from '../itemcount/ItemCount'

// Producto.  Información breve del producto que el user clickeará luego para acceder a los detalles
export const Item = ({ product }) => {
    // const onAdd = () => true;
    const stockRandom = (min, max) => Math.floor((Math.random() * (max - min + 1)) + min);
    
    return (
        <div className={styles.item}>
            <Card className={styles.itemCard}>
                <Card.Title className={styles.header}>{product.title}</Card.Title>
                <div className={styles.imgContainer}>
                    <Card.Img variant="top" src={product.image} className={styles.img} />
                </div>
                <Card.Text className={styles.text}>Categoría: {product.category}</Card.Text>
                <Button variant="info" className={styles.button}>Ver detalle del producto</Button>
                <Card.Text className={styles.stock}>Stock: {stockRandom(5,20)}</Card.Text>
            </Card>

            {/* <ItemCount
                initialValue={1}
                stock={5}
                onAdd={onAdd}
            /> */}
        </div>
    )
}
