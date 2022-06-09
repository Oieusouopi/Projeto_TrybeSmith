import { Pool } from 'mysql2/promise';
// import connection from "./connection";
import Products from '../interfaces/products';
import queries from './queries';

class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllProducts(): Promise<Products[]> {
    const [result] = await this.connection.execute(queries.selectAllProducts);
    return result as Products[];
  }
}

export default ProductsModel;