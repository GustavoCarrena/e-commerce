
const forcedDelay = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`https://fakestoreapi.com/products/1`);
        reject('No response');
    }, 2000);
});

export const getProductById = async (setProductDetail) => {
    try {
        const url = await forcedDelay;
        const response = await fetch(url);
        const data = await response.json();
        setProductDetail(data);
    } catch (error) {
        throw new Error(error);
    }
};