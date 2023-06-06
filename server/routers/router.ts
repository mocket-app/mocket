import express from 'express';
import authRouter from './sessionRouter';
import exportRouter from './exportRouter';
import mockRouter from './mockRouter';
const router = express.Router();

// auth router
router.use('/auth', authRouter);

// export router
router.use('/export', exportRouter);

// mock router
router.use('/mock', mockRouter);



export default router;