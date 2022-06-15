import { NextFunction, Request, Response } from 'express';
import HTTPCODE from '../helpers/httpCode';
import Orders from '../interfaces/orders';
import OrderService from '../services/ordersService';

class OrdersController {
  public orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  public getAllOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allOrders: Orders[] = await this.orderService.getAllOrders();
      res.status(HTTPCODE.OK).json(allOrders);
    } catch (error) {
      next(error);   
    }
  };
}

export default OrdersController;