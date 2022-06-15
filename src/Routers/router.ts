import Express from 'express';
import routerOrders from './routerOrders';
import routerProducts from './routerProducts';
import routerUsers from './routerUsers';

const router = Express.Router();

router.use('/products', routerProducts);

router.use('/users', routerUsers);

router.use('/orders', routerOrders);

export default router;