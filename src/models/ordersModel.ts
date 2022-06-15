import { Pool, RowDataPacket } from 'mysql2/promise';
import Orders from '../interfaces/orders';
import queries from './queries';

class OrdersModels {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async getAllOrders(): Promise<Orders[]> {
    const [allOrders] = await this.connection.execute<RowDataPacket[]>(queries.allOrders);
    const objectOrder = allOrders.map((order) => ({
      id: order.id,
      userId: order.userId,
    }));
    return objectOrder;
  }
}

export default OrdersModels;