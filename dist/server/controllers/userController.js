"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require('../db/schemas');
const userController = {
    createUser: (req, res, next) => {
        const { given_name, email } = req.body;
        // query SQL DB to see if user exists with email
        const values = [email];
        const query = `SELECT * FROM users WHERE email = $1`;
        db.query(query, values);
    }
};
exports.default = userController;
