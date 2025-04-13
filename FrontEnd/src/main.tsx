import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([

{
    path: '/',
    element: <App/>,
}

]);

//Current and recommended way to initialize and render a React application, introduced in React 18 (released in March 2022).
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
<React.StrictMode>
<RouterProvider router={router}/>
</React.StrictMode>
);

