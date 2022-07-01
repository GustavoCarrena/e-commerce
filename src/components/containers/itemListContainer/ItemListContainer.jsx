import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from '../../../helpers/getAllProducts';
import { ItemList } from "../../itemList/ItemList";
import styles from "../itemListContainer/itemListContainer.module.scss";

export const ItemListContainer = () => {
  
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams();

  useEffect(() => {
    if(categoryId !== undefined || categoryId !== null){
      getAllProducts(setProducts, categoryId);
    }else{
      setProducts(products);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[categoryId]);

  return (
    <div className={`${styles.container}`}>
        {
          (products.length === 0)
            ?      
            <div className={`${styles.spinner} spinner-grow`} role="status">
              <span className={`${styles.loading}`}>Loading...</span>
            </div>
            : (<ItemList products={products} />)
        }
    </div>
  )
};
