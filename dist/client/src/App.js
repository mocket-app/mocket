"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Login_1 = __importDefault(require("./components/Login"));
const MocketContainer_1 = __importDefault(require("./components/MocketContainer"));
const App = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const mocketAppRedirect = () => {
        navigate('/mocketApp');
    };
    return (react_1.default.createElement("div", { className: "appContainer" },
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Login_1.default, { mocketAppRedirect: mocketAppRedirect }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/mocketApp", element: react_1.default.createElement(MocketContainer_1.default, null) }))));
};
exports.default = App;
