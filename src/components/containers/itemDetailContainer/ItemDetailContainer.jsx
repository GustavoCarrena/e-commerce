import { useState, useEffect } from "react";
import { getProductById } from "../../../helpers/getProductById";
import { ItemDetail } from "../../itemDetail/ItemDetail";
import styles from '../itemDetailContainer/itemDetailContainer.module.scss';


//obtener datos de un producto especifico
export const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState(null);
    useEffect(() => {
        getProductById(setProductDetail)
    },[])

  return (
      <>
      {
        productDetail  ? 
            <ItemDetail product={productDetail}/>  :
                ( 

                <div className={`${styles.spinner} spinner-grow text-primary`} role="status">
                    <span className={`${styles.loading}`}>Cargando...</span>

                </div> 


                )
                

            }
            
      </>
  );
};
