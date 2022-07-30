import { Item } from "../item/Item";
import styles from "../itemList/itemList.module.scss";

export const ItemList = ({ products }) => {
  return (
    <article className={styles.itemsContainer}>
      {products.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </article>
  );
};
