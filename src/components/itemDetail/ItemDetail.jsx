import 'animate.css';
import styles from "../itemDetail/itemDetail.module.scss";
import Card from "react-bootstrap/Card";
import { ItemCount } from "../itemcount/ItemCount";


export const ItemDetail = ({ product}) => {

    //Parcial hasta que se Calcule stock - compra
    const random = () => Math.floor((Math.random() * 10) + 1);
    const stock = random(1,50)

  return (
    
    <div className={`${styles.container} animate__animated animate__backInLeft`}>
      <div className={styles.imgContainer}>
        <Card.Img variant="top" src={product.image} className={styles.img} />
      </div>
    
    <Card className={styles.bodyContainer}>
      <Card.Title className={styles.title}>{product.title}</Card.Title>
      <Card.Title className={styles.price}>Precio Unitario: ${product.price} </Card.Title>
        <Card.Text className={styles.description}>{product.description}</Card.Text>
      <ItemCount className={styles.counter} initialValue={1} stock={stock} />
      
    </Card>
  

    </div>
  );
};
