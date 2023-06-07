import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import db from '../models/mocketModels';


const sessionController = {

  createUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { given_name, email } = req.body;
      const values: any[] = [ email ];
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
  },

  checkLogin: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // see if request contains cookie with session id
      const { session } = req.cookies;
      if (session) {
        
        // check SQL DB to ensure a record exists with and id that matches the value of session cookie
        const values = [ session ];
        const query = `SELECT * FROM users WHERE id = $1`;
        const user = await db(query, values);
        // console.log('checked login, user is, ', user);

        // compare session value to id in DB
        if (user.rows[0] !== undefined && user.rows[0].id === Number(session)) {
          // user session still valid, so set res.locals.isLoggedIn to true
          res.locals.isLoggedIn = true;
          res.locals.user = user.rows[0];
          return next();
        } else {
          // user session invalid, so set res.locals.isLoggedIn to false
          res.locals.isLoggedIn = false;
          return next();
        }
      } else {
        // no session cookie, so set res.locals.isLoggedIn to false
        res.locals.isLoggedIn = false;
        return next();
      }

    } catch (err: any | unknown) {
      return next({
        log: `Error in sessionController.checkLogin: ${err}`,
        message: { err: 'Error confirming an existing session at login' },
      });
    }
  }

}

export default sessionController;