import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Login/Login';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService/TermsOfService';
import Pricing from './pages/Pricing/Pricing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/pricing',
    element: <Pricing />
  },
  {
    path: '/contactus',
    element: <ContactUs />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />
  },
  {
    path: '/terms',
    element: <TermsOfService />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
