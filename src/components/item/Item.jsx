import { useNavigate } from "react-router-dom";
import styles from "../item/item.module.scss";
import Card from "react-bootstrap/Card";
import Swal from "sweetalert2";

export const Item = ({ product }) => {

  const navigate = useNavigate();
  
  const handleDetail = () => {
    if (product.stock === 0) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Oops...',
        text: 'Producto sin stock',
        showConfirmButton: false,
        timer: 2000
      })
    } else {
      product.id 
      ? navigate(`/detail/${product.id}`)
      : navigate(`/`)
    }
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
          <small>Precio: ${product.price}</small> 
          <small>Stock: {product.stock}</small> 
        </Card.Text>
      </Card>
    </div>
  );
};
