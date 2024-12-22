import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

// index.js
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="139822286763-4cu0se3if4rm0vjonjl7incs78lk0lg2.apps.googleusercontent.com">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GoogleOAuthProvider>

);
