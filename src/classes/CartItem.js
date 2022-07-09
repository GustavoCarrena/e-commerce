
export class CartItem {
    
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    totalMount() {
        return (this.product.price.toFixed(2) * this.quantity);
    }

    setQuantity(quantity) {
        this.quantity = quantity;
    }
};