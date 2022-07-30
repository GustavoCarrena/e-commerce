import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/config';

export const getProductById = async (productId) => {
    const docRef = doc(db, 'products', productId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() }
    } else {
        throw new Error("No such document!");
    }
};