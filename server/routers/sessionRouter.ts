import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
const router = express.Router();
import sessionController from '../controllers/sessionController';

router.post('/login', sessionController.createUser, sessionController.setCookie, (req: Request, res: Response) => {
  res.status(200).json(res.locals.user);
})

router.get('/checkLogin', sessionController.checkLogin, (req: Request, res: Response) => {
  const resObj = { isLoggedIn: res.locals.isLoggedIn }
  res.status(200).json(resObj);
});


export default router;