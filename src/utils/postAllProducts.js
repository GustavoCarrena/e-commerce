import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

export const postAllProducts = async () => {
    const resp = await fetch('/mocks/data.json');
    const postProducts = await resp.json();
    postProducts.forEach(async (product) => {
        await addDoc(collection(db, "products"), {
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image,
            stock: product.stock
        });
    });

}
