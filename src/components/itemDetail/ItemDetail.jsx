import { useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { ItemCount } from "../itemcount/ItemCount";
import { Shop } from "../../context/ShopContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "../itemDetail/itemDetail.module.scss";
import "animate.css";


export const ItemDetail = ({ product }) => {
  //Parcial hasta que se Calcule stock - compra
  const random = () => Math.floor(Math.random() * 10 + 1);
  const stock = random(1, 50);
  const [show, setShow] = useState(false);
  const {addProduct} = useContext(Shop);
  const navigate = useNavigate();

  const handle = {
    confirm : (counter) => { setShow(true); addProduct(product, counter)},
    toHome : () => navigate('/'),
    toCart : () => {navigate('/cart')}
  };
  
  return (
    <div className={`${styles.container} animate__animated animate__backInLeft`}>
      <div className={styles.imgContainer}>
        <Card.Img variant="top" src={product.image} className={styles.img} />
      </div>
      <Card className={styles.bodyContainer}>
        <Card.Title className={styles.title}>{product.title}</Card.Title>
        <Card.Title className={styles.price}>
          Precio Unitario: ${product.price}{" "}
        </Card.Title>
        <Card.Text className={styles.description}>
          {product.description}
        </Card.Text>
        {
          !show
          ?
            <ItemCount
            className={styles.counter}
            initialValue={1}
            stock={stock}
            onConfirm={handle.confirm}
            />
          : 

            <div className="continueBuy" style={{
              display: 'flex',
              'flex-flow': 'row nowrap',
              'align-items': 'center',
              'justify-content': 'space-between',
              width:'100%'
            }}>
              <Button variant="primary" onClick={handle.toHome}
              style={{
                'font-size': '0.8rem',
                  width:'135px',
                  padding: '8px 3px'
              }}
              >
                Seguir Comprando
              </Button>
              <span>  </span>
              <Button 
                variant="success"
                onClick={handle.toCart}
                style={{
                  'font-size': '0.8rem',
                  width:'135px',
                  padding: '8px 3px'
                }}
              >
                Ir al Comprar
              </Button>
            </div>

        }
      </Card>
    </div>
  );
};
