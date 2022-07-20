import { useParams } from "react-router-dom";
import { useFirebaseAllProducts } from "../../hooks/useFirebaseAllProducts";
import { ItemList } from "../../components/itemList/ItemList";
import { Loader } from "../../components/loader/Loader";
import styles from "../itemListContainer/itemListContainer.module.scss";

export const ItemListContainer = () => {
  const {categoryId} = useParams();
  const [products, productsByCategory] = useFirebaseAllProducts();
  return (
    <div className={`${styles.container}`}>
        { products.length === 0 ? <Loader/> : <ItemList products={!categoryId ? products : productsByCategory}/> }
    </div>
  )
};