import Express from 'express';
import OrdersController from '../controllers/ordersController';

const ordersController = new OrdersController();

const routerOrders = Express.Router();

routerOrders.get('/', ordersController.getAllOrders);

export default routerOrders;