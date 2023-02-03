import { authRouter } from './auth/auth.routes';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (_req, res) => {
  return res.json({ message: 'Hello world' });
});
app.use('/api', authRouter);

export default app;
