import React from 'react';
import App from './App';
import {createRoot} from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = createRoot(document.getElementById('root') as HTMLInputElement);

const clientID: string = '972417216220-8ns9a12flqkku8iivmu79h27qi0mlif9.apps.googleusercontent.com';

root.render(
  <GoogleOAuthProvider clientId={clientID}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GoogleOAuthProvider>
);