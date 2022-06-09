import Products from '../interfaces/products';
import connection from '../models/connection';
import ProductsModel from '../models/productsModel';

class ProductsService {
  public productsModel: ProductsModel;

  constructor() {
    this.productsModel = new ProductsModel(connection);
  }

  public async getAllProuducts(): Promise<Products[]> {
    const products = await this.productsModel.getAllProducts();
    return products;
  }
}

export default ProductsService;