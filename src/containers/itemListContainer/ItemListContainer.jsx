import { useFirebaseAllProducts } from "../../hooks/useFirebaseAllProducts";
import { ItemList } from "../../components/itemList/ItemList";
import { Loader } from "../../components/loader/Loader";
import styles from "../itemListContainer/itemListContainer.module.scss";
import Carousel from "react-bootstrap/Carousel";

export const ItemListContainer = () => {
  const [products] = useFirebaseAllProducts();

  return (
    <>
      <Carousel fade className={`${styles.carouselContainter}`}>
        <Carousel.Item className={`${styles.item} carousel-item`}>
          <img
            className={`${styles.img} `}
            src="/assets/img/carrousel/cash_discount.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className={`${styles.item} carousel-item`}>
          <img
            className={`${styles.img}`}
            src="/assets/img/carrousel/mergedImages.png"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className={`${styles.container}`}>
        {products.length === 0 ? <Loader /> : <ItemList products={products} />}
      </div>
    </>
  );
};
