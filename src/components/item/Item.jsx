import { useNavigate } from "react-router-dom";
import styles from "../item/item.module.scss";
import Card from "react-bootstrap/Card";

export const Item = ({ product }) => {

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
        <Card.Text className={styles.stock}>
          
          Stock: {product.stock}
        </Card.Text>
      </Card>
    </div>
  );
};
