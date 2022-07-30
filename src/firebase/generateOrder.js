export const generateOrder = (name, surname, phone, email, addres, cart, paymethod,cardNumber, total) => {
    return {
        buyer: {
            name: name,
            surname: surname,
            phone: phone,
            email: email,
            adress: addres,
        },
        items: cart,
        paymethod: paymethod,
        cardNumber: cardNumber,
        total: total,
        createdAt: new Date().toLocaleString()
    }
};