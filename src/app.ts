import express, { Request, Response, NextFunction } from 'express';
import TREATEDERROR from './interfaces/treatedError';
import router from './Routers/router';

const app = express();

app.use(express.json());

app.use(router);

app.use((error: TREATEDERROR, __req: Request, res: Response, __next: NextFunction) => {
  if (error.status) return res.status(error.status).json({ message: error.message }); //  Error com instanceOf
  return res.status(500).json({ message: error.message });
});

export default app;