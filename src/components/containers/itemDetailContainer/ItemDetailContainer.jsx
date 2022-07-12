import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../helpers/getProductById";
import { ItemDetail } from "../../itemDetail/ItemDetail";
import { Loader } from "../../loader/Loader";

export const ItemDetailContainer = () => {
  
  const [productDetail, setProductDetail] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    getProductById(setProductDetail, productId);
  }, [productId]);

  return (
    <>
      {(productDetail) ? (
        <ItemDetail product={productDetail} />
      ) : (<Loader/>)}
    </>
  );
};
