import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import router from './routers/router';

const app = express();

const PORT: number = 3000;

//handle parsing request body
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//handle requests for static files
app.use(express.static(path.resolve(__dirname, '../client')));

//define route handlers
app.use('/', router);

// catch-all route handler for any requests to an unknown route
app.use((req: Request, res: Response) => res.status(404).send('This is not the page you\'re looking for...'));

//global error handler
app.use((err: Error, req: Request, res:Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
