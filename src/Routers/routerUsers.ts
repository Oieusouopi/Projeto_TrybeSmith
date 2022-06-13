import Express from 'express';
import UsersController from '../controllers/usersController';

const usersController = new UsersController();

const routerUsers = Express.Router();

routerUsers.post('/', usersController.login);

export default routerUsers;