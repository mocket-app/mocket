"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const App_1 = __importDefault(require("./App"));
const client_1 = require("react-dom/client");
const react_router_dom_1 = require("react-router-dom");
const google_1 = require("@react-oauth/google");
const root = (0, client_1.createRoot)(document.getElementById('root'));
const clientID = '972417216220-8ns9a12flqkku8iivmu79h27qi0mlif9.apps.googleusercontent.com';
root.render(react_1.default.createElement(google_1.GoogleOAuthProvider, { clientId: clientID },
    react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(App_1.default, null))));
