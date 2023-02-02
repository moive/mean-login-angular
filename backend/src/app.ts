import { authRouter } from './auth/auth.routes';
import express from 'express';
import morgan from 'morgan';
const app = express();

// Middlewares

app.use(morgan('dev'));
app.use(express.json());

// Routes
app.get('/', (_req, res) => {
  return res.json({ message: 'Hello world' });
});
app.use('/api', authRouter);

export default app;
