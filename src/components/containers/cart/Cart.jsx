import { useContext } from "react";
import { Shop } from "../../../context/ShopContext";
import styles from "./cart.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";

export const Cart = () => {
  const { cart, clearProduct, clearAllCart, totalProductPrice, totalCartPrice, mount} = useContext(Shop);
  const handleClearProduct = (product) => clearProduct(product);
  const handleClearAllProducts = () => clearAllCart();
  const totalProductMount = (price, quantity) => totalProductPrice(price, quantity).toFixed(2);
  
 useEffect(() =>{
  totalCartPrice();
  // eslint-disable-next-line
 },[])





  return (
    <div className={styles.body}>
       {cart.length > 0 && (
         <div className={styles.submitCoontainer}>
          <div>Monto: {mount}</div>
            {/* <CartModal mount={mount}/> */}
            <button onClick={totalCartPrice} className={styles.buyBtn} >Comprar</button>
          <button className={styles.clearBtn} onClick={handleClearAllProducts}>Limpiar Carrito</button>
        </div>
      )}
      {cart.map((product) => {
        return (
          <Container className={styles.container} key={product.id}>
            <Row className={styles.headerRow}>
              <Col className={styles.headerCol1}>Imagen</Col>
              <Col className={styles.headerCol2}>Titulo</Col>
              <Col className={styles.headerCol3}>Cantidad</Col>
              <Col className={styles.headerCol4}>Precio Unitario</Col>
              <Col className={styles.headerCol5}>Precio Total Producto</Col>
              <Col className={styles.headerCol6}>Eliminar</Col>
            </Row>
            <Row className={styles.bodyRow}>
              <Col className={styles.bodyCol1}>
                <img src={product.image} alt={product.title} />
              </Col>
              <Col className={styles.bodyCol2}>{product.title}</Col>
              <Col className={styles.bodyCol3}>{product.quantity}</Col>
              <Col className={styles.bodyCol4}>${product.price}</Col>
              <Col className={styles.bodyCol5}>${totalProductMount(product.price, product.quantity)}</Col>
              <Col className={styles.bodyCol6}>
                <img onClick={ () => handleClearProduct(product)} src="/assets/img/trash.png" alt="delete" />
              </Col>
            </Row>
          </Container>
        );
      })}
     
    </div>
  );
};
