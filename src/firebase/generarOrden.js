export const generarOrden = (name, surname,adress, phone, email, paymethod, cart, total) => {
    return {
        buyer: {
            name: name,
            surname: surname,
            adress: adress,
            phone: phone,
            email: email,
        },
        items: cart,
        paymethod: paymethod,
        total: total,
        createdAt: new Date().toLocaleString()
    }
};