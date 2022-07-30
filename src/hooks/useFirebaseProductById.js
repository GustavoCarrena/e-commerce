import { useState } from "react";
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getProductById } from "../helpers/getProductById";


/**
 * @description  CustomHook for fetched products by id from Firestore used in ItemDetailContainer.
 * @returns {Array}    [productDetail] (in case of path="/detail/:productId")
 */
export const useFirebaseProductById = () => {

    const [productDetail, setProductDetail] = useState(null);
    const [errors, setErrors] = useState(null);
    const { productId } = useParams();
    const navigate = useNavigate()

    const getProduct = async () => {
        try {
            let res = await getProductById(productId);
            if (!res) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ha ocurrido un error. Será redirigido a la página principal',
                    showConfirmButton: false,
                    timer: 2000
                }).then(() => navigate('/'))
            } else {
                setProductDetail(res)
            }

        } catch (error) {
            if (error) {
                setErrors(error)
                navigate(-1)
            }
        }
    }

    useEffect(() => {
        getProduct();
        // eslint-disable-next-line
    }, [productId, errors]);

    return [productDetail]
}
