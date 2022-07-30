import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore";
import { db } from "./config";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const saveOrder = (cart, order, clearCart) => {

    const outOfStock = [];
    const MySwal = withReactContent(Swal);
    cart.forEach((inCart) => {

        const batch = writeBatch(db);
        getDoc(doc(db, 'products', inCart.id))

            .then((documentSnapshot) => {
                const product = { ...documentSnapshot.data(), id: documentSnapshot.id };

                if (product.stock >= inCart.quantity) {
                    batch.update(doc(db, 'products', product.id), {
                        stock: product.stock - inCart.quantity
                    })
                } else { outOfStock.push(product) }

                if (outOfStock.length === 0) {
                    addDoc(collection(db, 'orders'), order)
                        .then(({ id }) => {
                            batch.commit()
                                .then(() => {
                                    MySwal.fire({
                                        icon: 'success',
                                        title: `Compra realizada exitosamente con id: ${id}!!`,
                                        text: 'Un vendedor se contactará a la brevedad',
                                        showConfirmButton: false,
                                        timer: 2000
                                    })
                                })
                                .then(() => {
                                    setTimeout(() => {
                                        clearCart()
                                    }, 1500);

                                })
                        })
                        .catch((err) => { throw new Error(err.message) })
                } else {
                    let mensaje = ''
                    for (const producto of outOfStock) {
                        mensaje += `${producto.title}`
                    }
                    throw new Error(`Productos fuera de stock: ${mensaje}`)
                }
            })
    })
};

