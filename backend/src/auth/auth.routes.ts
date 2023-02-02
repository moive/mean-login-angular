import { Router } from 'express';
import { createUserCtrl, loginUserCtrl } from './auth.controller';

const router = Router();

router.post('/register', createUserCtrl);
router.post('/login', loginUserCtrl);

export { router as authRouter };
