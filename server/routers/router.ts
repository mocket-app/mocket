import express from 'express';
import sessionRouter from './sessionRouter';
import mockRouter from './mockRouter';
const router = express.Router();

// session router
router.use('/session', sessionRouter);

// mock router
router.use('/mock', mockRouter);



export default router;