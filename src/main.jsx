import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root.jsx';

import './styles/global.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Routes
import CreateAccount from '@routes/create-account/create-account.route.jsx';
import LoginAccount from '@routes/login/login.route.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    path: '/create-account',
    element: <CreateAccount />
  },
  {
    path: '/login',
    element: <LoginAccount />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
