import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from '../../../helpers/getAllProducts';
import { ItemList } from "../../itemList/ItemList";
import { Loader } from "../../loader/Loader";
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
          products.length === 0
           ? 
            <Loader/>

            : (<ItemList products={products} />)


          // (products.length === 0)
          //   ?      
          //     <Loader loading={true}/>
          //   : (<ItemList products={products} />)
        }
    </div>
  )
};

