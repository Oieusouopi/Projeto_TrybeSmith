import { NextFunction, Request, Response } from "express";
import productsService from "../services/productsService"

class productsController {
    public productsService : productsService;

    constructor() {
        this.productsService = new productsService();
    }

    public getAllProducts = async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const products = await this.productsService.getAllProuducts();
            return res.status(500).json(products);
        } catch (error) {
            next(error);
        }
    }
};

export default productsController;