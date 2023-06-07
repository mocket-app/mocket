import express from 'express';
import sessionRouter from './sessionRouter';
import exportRouter from './exportRouter';
import mockRouter from './mockRouter';
const router = express.Router();

// session router
router.use('/session', sessionRouter);

// export router
router.use('/export', exportRouter);

// mock router
router.use('/mock', mockRouter);



export default router;