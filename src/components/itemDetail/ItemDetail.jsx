import React from 'react';
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ItemCount } from "../itemcount/ItemCount";
import { Shop } from "../../context/ShopContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "../itemDetail/itemDetail.module.scss";
import "animate.css";

export const ItemDetail = ({ product }) => {
  
  const stock = product.stock;
  const [show, setShow] = useState(false);
  const { addProduct } = useContext(Shop);
  const navigate = useNavigate();

  const handle = {
    confirm: (counter) => {
      setShow(true);
      addProduct(product, counter);
    },
    toHome: () => navigate("/"),
    toCart: () => navigate("/cart"),
  };

  return (
    <div
      className={`${styles.container} animate__animated animate__backInLeft`}
    >
      <div className={styles.imgContainer}>
        <Card.Img variant="top" src={product.image} className={styles.img} />
      </div>
      <Card className={styles.bodyContainer}>
        <Card.Title className={styles.title}>{product.title}</Card.Title>
        <Card.Title className={styles.price}>
          Precio Unitario: ${product.price.toLocaleString('es-ES')}{" "}
        </Card.Title>
        <Card.Text className={styles.description}>
          {product.description}
        </Card.Text>
        {!show ? (
          <ItemCount
            className={styles.counter}
            initialValue={1}
            stock={stock}
            onConfirm={handle.confirm}
          />
        ) : (
          <div className={styles.continueBuy}>
            <Button
              className={styles.btn}
              variant="primary"
              onClick={handle.toHome}
            >
              Seguir Comprando
            </Button>
            <span> </span>
            <Button
              className={styles.btn}
              variant="success"
              onClick={handle.toCart}
            >
              Ir al Carrito
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};
