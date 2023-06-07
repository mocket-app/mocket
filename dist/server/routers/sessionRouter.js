"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const sessionController_1 = __importDefault(require("../controllers/sessionController"));
router.post('/login', sessionController_1.default.createUser, (req, res) => {
    res.status(200).json(res.locals.user);
});
exports.default = router;
