import Express from 'express';
import routerProducts from './routerProducts';
import routerUsers from './routerUsers';

const router = Express.Router();

router.use('/products', routerProducts);

router.use('/users', routerUsers);

export default router;