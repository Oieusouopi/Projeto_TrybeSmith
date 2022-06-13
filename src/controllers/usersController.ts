import { NextFunction, Request, Response } from 'express';
import HTTPCODE from '../helpers/httpCode';
import UsersService from '../services/usersService';

class UsersController {
  public usersService: UsersService;

  constructor() {
    this.usersService = new UsersService();
  }

  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, classe, level, password } = req.body;
      const token = await this.usersService.login({ username, classe, level, password });
      res.status(HTTPCODE.CREATED).json({ token });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;