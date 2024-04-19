import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

import userRouter from './modules/users/user.routes';

const app = express();

app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
dotenv.config();

app.get('/', (req, res) => {
  res.json('Hello World!');
});

app.use(userRouter);

app.listen(process.env.PORT ?? 3000, () => {
  console.log('Server is running on port 3000');
});
