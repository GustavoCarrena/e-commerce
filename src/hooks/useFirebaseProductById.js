import { useState } from "react";
import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { getProductById } from "../helpers/getProductById";

export const useFirebaseProductById = () => {


    const [productDetail, setProductDetail] = useState(null);
    const [errors, setErrors] = useState(null);

    const { productId } = useParams();


    useEffect(() => {
        try {
            (async () => { setProductDetail((await getProductById(productId))) })();
        } catch (error) {
            setErrors(errors);
            console.log(errors);
        }
    }, [productId, errors]);

    return [productDetail]
}
