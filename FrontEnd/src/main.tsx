import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ResponsiveAppBar from '../components/ResponsiveAppBar'; // Import the Layout component
import App from './App';
import NotFoundPage from './NotFoundPage';
import StudiesPage from './StudiesPage';
import SubjectsPage from './SubjectsPage';
import SchedulePage from './SchedulePage';
import RegulatorPage from './RegulatorPage';

import './styles.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ResponsiveAppBar />, // Use the Layout component here
    errorElement: <NotFoundPage />,
    children: [ // Nest your page routes as children
      {
        path: '',
        element: <App />,
      },
      {
        path: 'StudiesPage',
        element: <StudiesPage />,
      },
      {
        path: 'SubjectsPage',
        element: <SubjectsPage />,
      },
      {
        path: 'SchedulePage',
        element: <SchedulePage />,
      },
      {
        path: 'RegulatorPage',
        element: <RegulatorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);