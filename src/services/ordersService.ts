import Orders from '../interfaces/orders';
import connection from '../models/connection';
import OrdersModels from '../models/ordersModel';
import ProductsModel from '../models/productsModel';

class OrderService {
  public ordersModel: OrdersModels;

  public productsModel: ProductsModel;

  constructor() {
    this.ordersModel = new OrdersModels(connection);
    this.productsModel = new ProductsModel(connection);
  }

  public async getAllOrders(): Promise<Orders[]> {
    const allOrders = await this.ordersModel.getAllOrders();
    const allProducts = await this.productsModel.getAllProducts();
    const filterOrders = allOrders.map((order) => {
      const a = {
        id: order.id,
        userId: order.userId,
        productsIds: allProducts.filter((product) => product.orderId === order.id)
          .map((producId) => producId.id),
      };
      return a;
    });
    return filterOrders;
  }
}

export default OrderService;