import { Router } from 'express';
import { createUser } from './auth.controller';

const router = Router();

router.post('/register', createUser);
// router.post('/login', loginUser);

export { router as authRouter };
