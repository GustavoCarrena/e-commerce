
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../firebase/config';

// const forcedDelay = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(`https://fakestoreapi.com/products`);
//         reject('No response');
//     }, 2000);
// });

// export const getAllProducts = async (setProducts, category) => {
//     try {
//          const url = await forcedDelay;
//         const response = await fetch(url);
//         const data = await response.json();
//         setProducts(category ? data.filter(product => product.category === category) : data);
//             } catch (error) {
//         throw new Error(error);
//     }
// };

export const getAllProducts = async (setProducts, category) => {
    try {
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const products = [];
        querySnapshot.forEach((doc) => {
          products.push({id: doc.id, ...doc.data()});
        });
        setProducts(category ? products.filter(product => product.category === category) : products);
    } catch (error) {
        throw new Error(error);
    }
};


