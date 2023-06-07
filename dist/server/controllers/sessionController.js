"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocketModels_1 = __importDefault(require("../models/mocketModels"));
const sessionController = {
    createUser: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { given_name, email } = req.body;
            // const values = [given_name , email];
            const values = [given_name, email];
            const query = `SELECT * FROM users WHERE email = $2`;
            const user = yield (0, mocketModels_1.default)(query, values);
            if (user === undefined) {
                console.log('no user found, creating...');
                const insertQuery = `INSERT INTO users (given_name, email) 
          VALUES ($1, $2) 
          RETURNING *
          `;
                const newUser = yield (0, mocketModels_1.default)(insertQuery, values);
                console.log('new user created, ', newUser.rows[0]);
            }
        }
        catch (err) {
            return next({
                log: `Error in sessionController.createUser: ${err}`,
                message: { err: 'Error creating user in database' },
            });
        }
    }),
    // testMethod: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //   try {
    //     const result = await db('SELECT * FROM users WHERE id = $1', [req.params.id]);
    //     res.locals.user = result.rows[0];
    //     next();
    //   } catch (error) {
    //     console.error('Error fetching user:', error);
    //     res.status(500).send('Internal server error');
    //   }
    // }
};
exports.default = sessionController;
