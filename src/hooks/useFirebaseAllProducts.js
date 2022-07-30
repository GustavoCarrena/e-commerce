import { useState } from "react";
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { getAllProducts } from "../helpers/getAllProducts";


/**
 * @description  CustomHook for fetched products from Firestore used in ItemListContainer.
 * @returns {Array}    [products] switching between all products and filtered by category (in case of path="/category/:categoryId")
 */
export const useFirebaseAllProducts = () => {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        if (categoryId) {
            try {
                (async () => {
                    let getProducts = await getAllProducts();
                    const categories = [...new Set(getProducts?.map((prod) => prod.category))];
                    (
                        categories.includes(categoryId)
                            ? setProducts(getProducts.filter(product => product.category === categoryId))
                            : navigate('/')
                    );
                })();
            } catch (error) {
                throw new Error(error)
            }
        } else {
            try {
                (async () => { setProducts(await getAllProducts()) })();
            } catch (error) {
                throw new Error(error)
            }
        }
        // eslint-disable-next-line
    }, [categoryId])
    return [products];
}
