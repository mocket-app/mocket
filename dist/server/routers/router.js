"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sessionRouter_1 = __importDefault(require("./sessionRouter"));
const exportRouter_1 = __importDefault(require("./exportRouter"));
const mockRouter_1 = __importDefault(require("./mockRouter"));
const router = express_1.default.Router();
// session router
router.use('/session', sessionRouter_1.default);
// export router
router.use('/export', exportRouter_1.default);
// mock router
router.use('/mock', mockRouter_1.default);
exports.default = router;
