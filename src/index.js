import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/contactus',
    element: <ContactUs />
  },
  {
    path: '/login',
    element: <Login />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
