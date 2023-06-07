"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const google_1 = require("@react-oauth/google");
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const Login = ({ mocketAppRedirect }) => {
    const successfulGoogleResponse = (credentialResponse) => {
        const userInfo = (0, jwt_decode_1.default)(credentialResponse.credential);
        fetch('/api/session/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
            mocketAppRedirect();
        });
        mocketAppRedirect();
    };
    return (react_1.default.createElement("div", { className: "container Login" },
        react_1.default.createElement("h1", null, "Login with Google Oauth"),
        react_1.default.createElement("div", { className: "googleLogin" },
            react_1.default.createElement(google_1.GoogleLogin, { onSuccess: (credentialResponse) => successfulGoogleResponse(credentialResponse), onError: () => {
                    console.log('Login Failed');
                } }))));
};
exports.default = Login;
