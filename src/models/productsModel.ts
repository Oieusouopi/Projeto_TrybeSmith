import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
// import connection from "./connection";
import Products from '../interfaces/products';
import queries from './queries';

class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllProducts(): Promise<Products[]> {
    const [products] = await this.connection.execute<RowDataPacket[]>(queries.selectAllProducts);
    const allProducts: Products[] = products.map((product) => ({      
      id: product.id,
      name: product.name,
      amount: product.amount,
      orderId: product.orderId,
    }));
    return allProducts;
  }

  public async createProduct({ name, amount }: Products): Promise<Products> {
    const [createProduct] = await this.connection
      .execute<ResultSetHeader>(queries.createProducts, [name, amount]);
    const product: Products = {
      id: createProduct.insertId,
      name,
      amount,
    };

    return product;
  } 
}

export default ProductsModel;