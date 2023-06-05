import React from 'react';
import App from './App';
import {createRoot} from 'react-dom/client'
import { BrowserRouter, Route, Link, Routes, redirect, useNavigate} from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = createRoot(document.getElementById('root') as HTMLInputElement);

const clientID: string = "";

root.render(
  <GoogleOAuthProvider clientId={clientID}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </GoogleOAuthProvider>
);