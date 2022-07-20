import { useState } from "react";
import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { getAllProducts } from "../helpers/getAllProducts";

export const useFirebaseAllProducts = () => {

    const [products, setProducts] = useState([]);
    const [productsByCategory, setProductsByCategory] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        try {
            (async () => { setProducts(await getAllProducts()) })();
        } catch (error) {
            throw new Error(error)
        }
    }, []);

    useEffect(() => {
        try {
            (async () => { setProductsByCategory((await getAllProducts()).filter(product => product.category === categoryId)) })();
        } catch (error) {
            throw new Error(error)
        }
    }, [categoryId]);

    return [products, productsByCategory]

}
