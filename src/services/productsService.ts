import Products from "../interfaces/products";
import connection from "../models/connection";
import productsModel from "../models/productsModel";

class productsService {
    public productsModel: productsModel;
    constructor() {
        this.productsModel = new productsModel(connection);
    };

    public async getAllProuducts(): Promise<Products[]> {
        const products = await this.productsModel.getAllProducts();
        return products;
    };
};

export default productsService;