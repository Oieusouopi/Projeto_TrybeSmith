import Express from 'express';
import ProductsController from '../controllers/productsController';

const router = Express.Router();

const productsController = new ProductsController();

router.use('/products', productsController.getAllProducts);

export default router;