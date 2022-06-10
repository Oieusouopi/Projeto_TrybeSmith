import HTTPCODE from '../helpers/httpCode';
import MESSAGE from '../helpers/message';
import Products from '../interfaces/products';
import connection from '../models/connection';
import ProductsModel from '../models/productsModel';
import validMessageCode from './validMessageCode';

class ProductsService {
  public productsModel: ProductsModel;

  constructor() {
    this.productsModel = new ProductsModel(connection);
  }

  public async getAllProuducts(): Promise<Products[]> {
    const products = await this.productsModel.getAllProducts();
    return products;
  }

  validName = (name: string) => {
    if (!name) throw validMessageCode(HTTPCODE.BAD_REQUEST, MESSAGE.NAME_IS_REQUIRED);
    if (typeof name !== 'string') {
      throw validMessageCode(HTTPCODE.UNPROCESSABLE, MESSAGE.NAME_MUST_BE_STRING);
    }
    if (name.length <= 2) {
      throw validMessageCode(HTTPCODE.UNPROCESSABLE, MESSAGE.NAME_SIZE);
    }
  };

  validAmount = (amount: string) => {
    if (!amount) {
      throw validMessageCode(HTTPCODE.BAD_REQUEST, MESSAGE.AMOUNT_IS_REQUIRED);
    }
    if (typeof amount !== 'string') {
      throw validMessageCode(HTTPCODE.UNPROCESSABLE, MESSAGE.AMOUNT_MUST_BE_STRING);
    }
    if (amount.length <= 2) {
      throw validMessageCode(HTTPCODE.UNPROCESSABLE, MESSAGE.AMOUNT_SIZE);
    } 
  };

  public async createProducts({ name, amount }: Products): Promise<Products> {
    this.validName(name);
    this.validAmount(amount);
    const products = await this.productsModel.createProduct({ name, amount });
    return products;
  }
}

export default ProductsService;