import axios from "axios";

class ProductService {
    static getAllProducts = () => axios.get('https://dummyjson.com/products')
}

export default ProductService