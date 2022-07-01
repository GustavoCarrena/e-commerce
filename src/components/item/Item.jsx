import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../item/item.module.scss";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import { useEffect } from "react";
// import { ItemCount } from '../itemcount/ItemCount'

// Producto.  Información breve del producto que el user clickeará luego para acceder a los detalles
export const Item = ({ product }) => {
  const stockRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${product.id}`);
  };

  return (
    <div className={`${styles.item}  animate__animated animate__backInLeft`}>
      <Card onClick={handleDetail} className={styles.itemCard}>
        <Card.Title className={styles.header}>{product.title}</Card.Title>
        <div className={styles.imgContainer}>
          <Card.Img variant="top" src={product.image} className={styles.img} />
        </div>
        <Card.Text className={styles.text}>
          Categoría: {product.category}
        </Card.Text>
        {/* <Button className={styles.button}>
          Ver detalle del producto
        </Button> */}
        <Card.Text className={styles.stock}>
          Stock: {stockRandom(5, 20)}
        </Card.Text>
      </Card>
    </div>
  );
};
