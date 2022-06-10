import Express from 'express';
import routerProducts from './routerProducts';

const router = Express.Router();

router.use('/products', routerProducts);

export default router;