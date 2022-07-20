import { ItemDetail } from "../../components/itemDetail/ItemDetail";
import { Loader } from "../../components/loader/Loader";
import { useFirebaseProductById } from "../../hooks/useFirebaseProductById";

export const ItemDetailContainer = () => {
  
  const [productDetail] = useFirebaseProductById();

  return (
    <>{productDetail ? <ItemDetail product={productDetail} /> : <Loader />}</>
  );
};
