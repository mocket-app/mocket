import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import db from '../models/mocketModels';


const sessionController = {

  createUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { given_name, email } = req.body;
      const values = [ email ];
      const query = `SELECT * FROM users WHERE email = $1`;
  
      const user = await db(query, values);
      // console.log('user is, ', user);

      // user doesn't exist in DB, so create it
      if ( user.rows[0] === undefined ){
        console.log('no user found, creating...');

        const insertValues = [ given_name, email ];

        const insertQuery = 
          `INSERT INTO users (name, email) 
          VALUES ($1, $2) 
          RETURNING *
          `;

        const newUser = await db(insertQuery, insertValues);
        
        console.log('new user created, ', newUser.rows[0]);
        res.locals.user = newUser.rows[0];
        return next();

      } else {
        // user exists in DB, refer to that user
        res.locals.user = user.rows[0];
        return next();
      }

    } catch (err: any | unknown) {
        return next({
          log: `Error in sessionController.createUser: ${err}`,
          message: { err: 'Error creating user in database' },
        });
    }
  },

  setCookie: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = res.locals.user;
    res.cookie('session', id, { 
      httpOnly: true,
      secure: true 
    });
    return next();
  }
  
}

export default sessionController;