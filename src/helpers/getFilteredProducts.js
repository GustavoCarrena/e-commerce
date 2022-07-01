const forcedDelay = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`https://fakestoreapi.com/products`);
        reject('No response');
    }, 2000);
});

export const getFilteredProducts = async (setFilteredProducts) => {
       try {
        const url = await forcedDelay;
        const response = await fetch(url);
        const data = await response.json();
        setFilteredProducts(data);
    } catch (error) {
        throw new Error(error);
    }
};