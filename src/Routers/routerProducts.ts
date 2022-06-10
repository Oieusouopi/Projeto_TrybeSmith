import Express from 'express';
import ProductsController from '../controllers/productsController';

const productsController = new ProductsController();

const routerProducts = Express.Router();

routerProducts.get('/', productsController.getAllProducts);

routerProducts.post('/', productsController.createProducts);

export default routerProducts;