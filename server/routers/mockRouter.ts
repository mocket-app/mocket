import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
const router = express.Router();
import mockController from '../controllers/mockController';

router.post('/', mockController.fetchMockData, (req: Request, res: Response) => {
  res.status(200).json(res.locals.responseData);
});

export default router;