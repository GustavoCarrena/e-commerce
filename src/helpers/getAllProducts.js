

const forcedDelay = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`https://fakestoreapi.com/products`);
        reject('No response');
    }, 2000);
});

export const getAllProducts = async (setProducts, category) => {
    try {
        const url = await forcedDelay;
        const response = await fetch(url);
        const data = await response.json();
        setProducts(category ? data.filter(product => product.category === category): data);
    } catch (error) {
        throw new Error(error);
    }
    
};



