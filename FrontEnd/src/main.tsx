import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import NotFoundPage from './NotFoundPage';
import StudiesPage from './StudiesPage';
import SubjectsPage from './SubjectsPage';
import SchedulePage from './SchedulePage';
import RegulatorPage from './RegulatorPage';

import './styles.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([

{
    path: '/',
    element: <App/>,
    errorElement: <NotFoundPage/>,
},
{
    path: '/StudiesPage',
    element: <StudiesPage/>,
},
{
    path: '/SubjectsPage',
    element: <SubjectsPage/>,
},
{
    path: '/SchedulePage',
    element: <SchedulePage/>,
},
{
    path: '/RegulatorPage',
    element: <RegulatorPage/>,
}

]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
<React.StrictMode>
<RouterProvider router={router}/>
</React.StrictMode>
);

