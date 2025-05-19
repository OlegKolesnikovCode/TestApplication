import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '../pages/homePage/HomePage';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import StudiesPage from '../pages/studiesPage/StudiesPage';
import SubjectsPage from '../pages/subjectPage/SubjectsPage';
import SchedulePage from '../pages/schedulePage/SchedulePage';
import RegulatorPage from '../pages/regulatoryPage/RegulatorPage';

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

