import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/config';

export const getProductById = async (productId) => {

    // try {
    //     const docRef = doc(db, 'products', productId);
    //     const docSnap = await getDoc(docRef);
    //     if (docSnap.exists()) {
    //         const productDetail = { id: docSnap.id, ...docSnap.data() }
            
    //     } else {
    //         console.log("No such document!");
    //     }
    // } catch (error) {
    //     throw new Error(error);
    // };
    
    
    const docRef = doc(db, 'products', productId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() }
    } else {
        console.log("No such document!");
    }
};