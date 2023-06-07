import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
const router = express.Router();
import sessionController from '../controllers/sessionController';

router.post('/login', sessionController.createUser, sessionController.setCookie, (req: Request, res: Response) => {
  res.status(200).json(res.locals.user);
})

router.post('/checkLogin', sessionController.checkLogin, (req: Request, res: Response) => {
  res.status(200).json(res.locals.user);
});


export default router;