import { NextFunction, Request, Response } from 'express';
import HTTPCODE from '../helpers/httpCode';
import ProductsService from '../services/productsService';

class ProductsController {
  public productsService : ProductsService;

  constructor() {
    this.productsService = new ProductsService();
  }

  public getAllProducts = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await this.productsService.getAllProuducts();
      return res.status(HTTPCODE.OK).json(products);
    } catch (error) {
      next(error);
    }
  };
}

export default ProductsController;