import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../firebase/config';

export const getAllProducts = async () => {
    const q = query(collection(db, "products"));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() })
    });
    return products
    // postAllProducts()
};