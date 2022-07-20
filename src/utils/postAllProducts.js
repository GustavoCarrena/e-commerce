import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

export const postAllProducts = async () => {
    console.log('Entra una vez');
    const resp = await fetch('/mocks/data.json');
    const postProducts = await resp.json();

    postProducts.forEach(async (product) => {
        const docRef = await addDoc(collection(db,"products"), {
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image,
            stock: 20
        });
        console.log("Document written with ID: ", docRef.id);
    });

}
