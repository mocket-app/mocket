import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
const db = require('../db/schemas');

const userController = {
  createUser: (req: Request, res: Response, next: NextFunction): void => {
    const { given_name, email } = req.body;
    
    // query SQL DB to see if user exists with email
    const values = [email];
    const query = `SELECT * FROM users WHERE email = $1`;
    db.query(query, values)
    

    
  }

}

export default userController;