
export const getProductById = async (setProductDetail, productId) => {
    try {

        const forcedDelay = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`https://fakestoreapi.com/products/${productId}`);
                reject('No response');
            }, 2000);
        });

        const url = await forcedDelay;
        const response = await fetch(url);
        const data = await response.json();
        setProductDetail(data);
    
    } catch (error) {
        throw new Error(error);
    }
};