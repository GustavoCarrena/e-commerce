import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../context/ShopContext";
import styles from "./cart.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Cart = () => {
  
  const { cart, clearProduct, clearAllCart, totalCartPrice  } = useContext(Shop);
  const handleClearAllProducts = () => clearAllCart();
  const navigate = useNavigate()
  const handleButtonCart = () => navigate('/')
  const handleBuy = () => navigate('/form')
  return (
    <div className={styles.body}>
       {cart.length > 0 ?
        (
          <>
          <div className={styles.submitCoontainer}>
              <button onClick={handleBuy} className={styles.buyBtn} >Comprar</button>
              {/* <div className={styles.buyMount}>Monto Total: ${totalCartPrice}</div>  */}
            <button className={styles.clearBtn} onClick={handleClearAllProducts}>Limpiar Carrito</button>
          </div>
          <div className={styles.buyMount}><span>Monto Total: ${totalCartPrice}</span></div> 
          </>
        )
        : (
            <div className={styles.container}>
              <img className={styles.img} src="/assets/img/cart.svg" alt="imag" />
              <div className={styles.info}>
                <p className={styles.title}>No hay productos en el carrito</p>
                <button onClick={handleButtonCart} className={styles.button}>Ir a comprar</button>
              </div>
            
            </div>
          )
      }
      {cart.map((item) => {
        return (
          <Container className={styles.container} key={item.product.id}>
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
                <img src={item.product.image} alt={item.product.title} />
              </Col>
              <Col className={styles.bodyCol2}>{item.product.title}</Col>
              <Col className={styles.bodyCol3}>{item.quantity}</Col>
              <Col className={styles.bodyCol4}>${parseFloat(item.product.price).toFixed(2)}</Col>
              <Col className={styles.bodyCol5}>${item.totalMount().toFixed(2)}</Col>
              <Col className={styles.bodyCol6}>
                <img onClick={ () => clearProduct(item.product)} src="/assets/img/trash.png" alt="delete" />
              </Col>
            </Row>
          </Container>
        );
      })}
      {/* <div className={styles.buyMount}><span>Monto Total: ${totalCartPrice}</span></div>  */}
    </div>
  );
};
