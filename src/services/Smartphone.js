import axios from 'axios';

export const getSmartphone = async () => {
    try {
        const response = await axios.get('https://dummyjson.com/products/category/smartphones');

        return response.data.products;
    } catch (error) {
        console.log("Lỗi gọi API", error);
        return [];
    }
}
