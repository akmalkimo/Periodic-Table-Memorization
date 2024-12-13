import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Element from './Element.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import App from './App.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <NotFoundPage />
    },
    {
      path: '/Element/:elementNumber',
      element: <Element />
    }
  ],
  {
      basename: '/Periodic-Table-Memorization'
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Periodic Table Memorization</h1>
    <RouterProvider router={router} />
  </StrictMode>
);