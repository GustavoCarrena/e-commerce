import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/config';

export const getProductById = async (setProductDetail, productId) => {

    // try {

    //     const forcedDelay = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(`https://fakestoreapi.com/products/${productId}`);
    //             reject('No response');
    //         }, 2000);
    //     });

    //     const url = await forcedDelay;
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     setProductDetail(data);

    // } catch (error) {
    //     throw new Error(error);
    // }

    try {
        const docRef = doc(db, 'products', productId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const productDetail = { id: docSnap.id, ...docSnap.data() }
            setProductDetail(productDetail);
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        throw new Error(error);
    };
};