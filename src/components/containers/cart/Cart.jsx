import { useContext } from "react";
import { Shop } from "../../../context/ShopContext";
import styles from "./cart.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Cart = () => {
  const { cart, clear, totalProductPrice } = useContext(Shop);

  const handle = {
    deleteProduct: (product) => clear.product(product),
    deleteAllProducts: () => clear.allCart(),
    totalProductMount: (price, quantity) => totalProductPrice(price, quantity).toFixed(2),
  };

  return (
    <div className={styles.body}>
      {cart.map((product) => {
        return (
          <Container className={styles.container} key={product.id}>
            <Row className={styles.headerRow}>
              <Col className={styles.headerCol1}>Imagen</Col>
              <Col className={styles.headerCol2}>Titulo</Col>
              <Col className={styles.headerCol3}>Cantidad</Col>
              <Col className={styles.headerCol4}>Precio Unitario</Col>
              <Col className={styles.headerCol5}>Total Producto</Col>
              <Col className={styles.headerCol6}>Eliminar</Col>
            </Row>
            <Row className={styles.bodyRow}>
              <Col className={styles.bodyCol1}>
                <img src={product.image} alt={product.title} />
              </Col>
              <Col className={styles.bodyCol2}>{product.title}</Col>
              <Col className={styles.bodyCol3}>{product.quantity}</Col>
              <Col className={styles.bodyCol4}>${product.price}</Col>
              <Col className={styles.bodyCol5}>${handle.totalProductMount(product.price, product.quantity)}</Col>
              <Col className={styles.bodyCol6}>
                <img onClick={() => handle.deleteProduct(product)} src="/assets/img/trash.png" alt="delete" />
              </Col>
            </Row>
          </Container>
        );
      })}
      {cart.length > 0 && (
        <div className={styles.submitCoontainer}>
          <button className={styles.clearBtn} onClick={handle.deleteAllProducts}>Limpiar Carrito</button>
          <button className={styles.buyBtn}>Comprar</button>
        </div>
      )}
    </div>
  );
};
