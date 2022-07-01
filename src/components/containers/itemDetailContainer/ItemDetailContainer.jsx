import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../helpers/getProductById";
import { ItemDetail } from "../../itemDetail/ItemDetail";
import styles from "../itemDetailContainer/itemDetailContainer.module.scss";

export const ItemDetailContainer = () => {
  
  const [productDetail, setProductDetail] = useState(null);

  const { productId } = useParams();

  // console.log(productId);

  useEffect(() => {
    getProductById(setProductDetail, productId);
  }, [productId]);

  return (
    <>
      {(productDetail) ? (
        <ItemDetail product={productDetail} />
      ) : (
        <div className={`${styles.spinner} spinner-grow`} role="status">
          <span className={`${styles.loading}`}>Loading...</span>
        </div>
      )}
    </>
  );
};
